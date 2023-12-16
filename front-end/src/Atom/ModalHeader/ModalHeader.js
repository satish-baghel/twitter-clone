import React from "react"
import { ModalHeader } from "reactstrap"
import styled from "styled-components"
const TModalHeader = (props) => {
  return <StyledModalHeader {...props}>{props.children}</StyledModalHeader>
}

export default TModalHeader

const StyledModalHeader = styled(ModalHeader)`
  border-bottom: none;
  .modal-title {
    width: 100%;
    display: flex;
  }
`
