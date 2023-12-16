import React from "react"
import { Modal } from "reactstrap"
import styled from "styled-components"

const TModal = (props) => {
  return <StyleModal {...props}>{props.children}</StyleModal>
}

export default TModal

const StyleModal = styled(Modal)`
  .modal-content {
    background-color: black;
    color: white;
  }
`
