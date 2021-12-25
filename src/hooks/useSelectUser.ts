import { useCallback, useState } from "react"

import { User } from "../types/api/user"

type Props = {
  id: number
  users: Array<User>
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props
    console.log(`id${id}`)
    console.log(`users${users}`)
    console.log(`userfind${users.find((user) => user.id === id)}`)
    const targetUser = users.find((user) => user.id === id)
    // !によりundefindの可能性を排除する
    console.log(`targetUser${targetUser}`)
    setSelectedUser(targetUser ?? null)
    // console.log(targetUser)
    onOpen()
  }, [])

  return { onSelectUser, selectedUser }
}