import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";

export const homeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/userManagement",
    children: <UserManagement />
  },
  {
    path: "/setting",
    children: <Setting />
  }
]