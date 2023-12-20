import React from "react"
import { Label } from "reactstrap"
import styled from "styled-components"

const TLabel = (props) => {
  return <StyleLabel {...props}>{props.children}</StyleLabel>
}

export default TLabel

const StyleLabel = styled(Label)`
  color: #71767b !important;
  &:after {
    background-color: black !important;
  }
`
