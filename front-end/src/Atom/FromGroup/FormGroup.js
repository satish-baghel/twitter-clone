import React from "react"
import { FormGroup } from "reactstrap"
import styled from "styled-components"

const TFormGroup = (props) => {
  const { children } = props
  return <StyleFormGroup {...props}>{children}</StyleFormGroup>
}

export default TFormGroup

const StyleFormGroup = styled(FormGroup)``
