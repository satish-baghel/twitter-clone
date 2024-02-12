import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"

const Avatar = () => {
  return (
    <StyleAvatar>
      <Row>
        <Col md="3"></Col>
        <Col md="9">
          <img
            src="https://i.pravatar.cc/150?u=satish"
            alt="profile"
            className="rounded-circle"
          />
        </Col>
      </Row>
    </StyleAvatar>
  )
}

export default Avatar

const StyleAvatar = styled("div")`
  img {
    width: 100%;
  }
`
