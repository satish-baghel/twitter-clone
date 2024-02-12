import React from "react"
import { Col, Container, Row } from "reactstrap"
import Header from "./Header/Header"

const AuthLayout = (props) => {
  return (
    <Container className="bg-black text-white">
      <Row>
        <Col md="3">
          <Header />
        </Col>
        <Col md="6" className="border-start border-end border-secondary">
          {props.children}
        </Col>
        <Col md="3">Side bar</Col>
      </Row>
      {props.children}
    </Container>
  )
}

export default AuthLayout
