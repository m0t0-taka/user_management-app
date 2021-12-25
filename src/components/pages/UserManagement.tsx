import { memo, useEffect, VFC, useCallback } from "react"
import { Center, Spinner, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react'


import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"
import { UserDetailModal } from "../organisms/user/UserDetailModal"

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(() => onOpen(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
      <Wrap p={{ base:4, md:10 }}>
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
            <UserCard
              id={user.id}
              imageUrl="http://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
})