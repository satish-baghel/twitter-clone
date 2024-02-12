import React from "react"
import { AddPost, HomeHeader } from "../../Component"
import { Col, Row } from "reactstrap"

const Home = (props) => {
  return (
    <Row>
      <Col md="12">
        <HomeHeader />
        <AddPost />
      </Col>
    </Row>
  )
}

export default Home
