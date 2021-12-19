import { memo, VFC } from "react"
import { Routes, Route } from "react-router-dom"

import { Login } from "../components/pages/Login"
import { Home } from "../components/pages/Home"
import { Setting } from "../components/pages/Setting"
import { UserManagement } from "../components/pages/UserManagement"
import { Page404 } from "../components/pages/Page404"
import { HeaderLayout } from "../components/templates/HeaderLayout"

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home"
          element={<HeaderLayout><Home /></HeaderLayout>} />
        <Route path="/home/setting"
          element={<HeaderLayout><Setting /></HeaderLayout>} />
        <Route path="/home/user_management"
          element={<HeaderLayout><UserManagement /></HeaderLayout>} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})