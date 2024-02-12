import Auth from "../pages/Auth/Auth"
import Home from "../pages/Home/Home"

export const publicRoute = [
  {
    component: <Auth />,
    path: "/",
  },
]

export const AuthRoute = [
  {
    component: <Home />,
    path: "/home",
  },
]
