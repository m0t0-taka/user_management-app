import { memo, ReactNode, VFC } from "react"

import { Button } from "@chakra-ui/react"

type Props = {
  children: ReactNode;
  // 非活性
  disabled?: boolean;
  loading?: boolean
  onClick: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  // propsが渡されない場合はfalse
  const { onClick, disabled = false, loading = false, children } = props
  return(
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8}} disabled={disabled || loading} isLoading={loading} onClick={onClick}>{children}</Button>
  )
})