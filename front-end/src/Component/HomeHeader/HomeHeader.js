import React from "react"
import { Col, Row } from "reactstrap"
import { Cog } from "../../libs/icons"
import { MenuItem } from "../../Atom"

const HomeHeader = () => {
  return (
    <Row className="border-bottom border-secondary">
      <Col md="11">
        <div className="d-flex">
          {[
            {
              title: "For you",
              isActive: true,
              abbr: "for-you",
            },
            {
              title: "Following",
              isActive: false,
              abbr: "following",
            },
            {
              title: "Creator Friends",
              isActive: false,
              abbr: "creator-friends",
            },
          ].map((menu) => {
            return (
              <MenuItem key={menu.abbr} active={menu.isActive}>
                {menu?.title || ""}
              </MenuItem>
            )
          })}
        </div>
      </Col>
      <Col md="1" className="pt-2 ">
        <Cog className="icon-size" />
      </Col>
    </Row>
  )
}

export default HomeHeader
