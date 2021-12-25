import { useState, useCallback } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { User } from "../types/api/user"
import { useMessage } from "./useMessage"
import { useLoginUser } from "../hooks/useLoginUser"

export const useAuth = () => {
  const navigate = useNavigate()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const [loading, setLoading] = useState(false)

  const login = useCallback((id: string) => {


    setLoading(true)
    // axiosのデータを取得
    // .then以降に正常に取得できた場合の処理
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        const isAdmin = res.data.id === 10 ? true : false
        setLoginUser({...res.data, isAdmin})
        showMessage({ title: "ログインしました", status: "success" })
        navigate("./home")
      } else {
        showMessage({ title: "ユーザーが見つかりません", status: "error" })
        setLoading(false)
      }
    }).catch(() =>
      showMessage({ title: "ログインできません", status: "error" }))
      // .finally(() => setLoading(false))
      setLoading(false)
  }, [navigate, showMessage, setLoginUser])
  return { login, loading }
}