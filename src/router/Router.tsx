import { memo, VFC } from "react"
import { Routes, Route } from "react-router-dom"

import { Login } from "../components/pages/Login"
import { Home } from "../components/pages/Home"
import { Setting } from "../components/pages/Setting"
import { UserManagement } from "../components/pages/UserManagement"
import { Page404 } from "../components/pages/Page404"

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/setting" element={<Setting />} />
      <Route path="/home/user_management" element={<UserManagement />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})