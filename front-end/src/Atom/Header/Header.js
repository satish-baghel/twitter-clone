import React from "react"
import styled from "styled-components"

const Header = ({ children, ...props }) => {
  return <StyleHeader {...props}>{children}</StyleHeader>
}

export default Header

const StyleHeader = styled("header")`
  a {
    &:hover {
      background-color: rgba(231, 233, 233, 0.1);
      border-radius: 2rem;
    }
  }
`
