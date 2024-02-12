import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoute, AuthRoute } from "./routes/routes"
import TheLayout from "./TheLayout/TheLayout"
import AuthLayout from "./TheLayout/AuthLayout"

export default function App() {
  return (
    <Router>
      <Routes>
        {publicRoute.map((route, index) => (
          <Route
            path={route.path}
            element={<TheLayout>{route.component}</TheLayout>}
            key={index}
          />
        ))}
      </Routes>{" "}
      <Routes>
        {AuthRoute.map((route, index) => (
          <Route
            path={route.path}
            element={<AuthLayout>{route.component}</AuthLayout>}
            key={index}
          />
        ))}
      </Routes>
    </Router>
  )
}
