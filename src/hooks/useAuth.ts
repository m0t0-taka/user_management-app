import { useState, useCallback } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { User } from "../types/api/user"

export const useAuth = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const login = useCallback((id: string) => {

    setLoading(true)
    // axiosのデータを取得
    // .then以降に正常に取得できた場合の処理
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        navigate("./home")
      } else {
        alert("ユーザーが見つかりません")
      }
    }).catch(() => alert("ログインできません"))
    .finally(() => setLoading(false))
  }, [navigate])
  return { login, loading }
}