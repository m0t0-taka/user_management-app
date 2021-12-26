import { memo, VFC } from "react"
import { Drawer, DrawerContent, DrawerOverlay, DrawerBody, Button } from "@chakra-ui/react"

type Props = {
  onClose: () => void
  isOpen: boolean
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props
  return(
    // onCloseでclose押したときにどうするか、isOpenでいつopenするかを設定
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Button w="100%" onClick={ onClickHome }>TOP</Button>
            <Button w="100%" onClick={ onClickUserManagement }>ユーザ一覧</Button>
            <Button w="100%" onClick={ onClickSetting }>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})