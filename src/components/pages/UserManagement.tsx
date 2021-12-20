import { memo, VFC } from "react"
import { Wrap, WrapItem } from '@chakra-ui/react'

import { UserCard } from "../organisms/user/UserCard"

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base:4, md:10 }}>
        <WrapItem>
          <UserCard
            imageUrl="http://source.unsplash.com/random"
            userName="もと"
            fullName="takagi motohiro"
          />
        </WrapItem>
    </Wrap>
  )
})