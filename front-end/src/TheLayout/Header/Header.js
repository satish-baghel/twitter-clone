import React from "react"

import { Col, Row } from "reactstrap"
import { Twitter } from "../../libs/icons"
import { navBar } from "../../libs/data/nav"
import { Link } from "react-router-dom"
import { Button, Header } from "../../Atom"

const Headers = () => {
  return (
    <Header className="mt-3 ">
      <Row>
        <Col md="1"></Col>
        <Col md="11">
          <Row>
            <Col md="10 mb-3">
              <Twitter className="icon-size" />
            </Col>
            {Array.isArray(navBar) &&
              navBar.map((nav, i) => {
                return (
                  <Link to={nav?.url || ""} key={i}>
                    <Row className="my-2">
                      <Col md="2">{nav.lineIcon}</Col>
                      <Col md="10">
                        <h5 className="text-white">{nav.title}</h5>
                      </Col>
                    </Row>
                  </Link>
                )
              })}
            <Col md="10" className="mt-2">
              <Button color="primary" className="w-100 py-2 fw-bold text-white">
                Post
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default Headers
