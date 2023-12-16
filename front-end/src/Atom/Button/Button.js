import React from "react"
import { Button } from "reactstrap"
import styled from "styled-components"

const TButton = (props) => {
  return <StyleButton {...props}>{props.children}</StyleButton>
}

export default TButton

const StyleButton = styled(Button)`
  border-radius: 50rem !important;
  &:hover {
    background-color: ${(props) => {
      return props.color === "secondary" ? "#252526" : null
    }};
  }
`
