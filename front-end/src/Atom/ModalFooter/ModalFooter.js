import React from "react"
import { ModalFooter } from "reactstrap"
import styled from "styled-components"
const TModalFooter = (props) => {
  return <StyledModalHeader {...props}>{props.children}</StyledModalHeader>
}

export default TModalFooter

const StyledModalHeader = styled(ModalFooter)`
  border-top: none;
`
