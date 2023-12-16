import React from "react"
import { Container } from "reactstrap"
import Footer from "./Footer.js/Footer"

const TheLayout = (props) => {
  return (
    <Container fluid className="bg-black text-white">
      {props.children}
      <Footer />
    </Container>
  )
}

export default TheLayout
