import { memo, useEffect, VFC } from "react"
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'

import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
      <Wrap p={{ base:4, md:10 }}>
          <WrapItem>
            <UserCard
              imageUrl="http://source.unsplash.com/random"
              userName="もと"
              fullName="takagi motohiro"
            />
          </WrapItem>
      </Wrap>
      )}
    </>
  )
})