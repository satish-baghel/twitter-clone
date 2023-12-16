import React from "react"

import { footerData } from "../../libs/data/data"
import { Link } from "react-router-dom"

const Footer = (props) => {
  return (
    <footer className="d-flex flex-wrap justify-content-center pb-4">
      {Array.isArray(footerData) &&
        footerData.map((foot, i) => {
          return (
            <small className="" key={i}>
              {" "}
              <Link
                to={foot.link}
                className="text-decoration-none text-secondary me-2"
              >
                {foot.name}
              </Link>
            </small>
          )
        })}
    </footer>
  )
}

export default Footer
