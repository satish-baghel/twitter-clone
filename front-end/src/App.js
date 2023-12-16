import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoute } from "./routes/routes"
import TheLayout from "./TheLayout/TheLayout"

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
      </Routes>
    </Router>
  )
}
