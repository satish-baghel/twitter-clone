import React from "react"
import { Input } from "reactstrap"
import styled from "styled-components"

const TextField = (props) => {
  return <StyleInput {...props} className="bg-black" />
}

export default TextField

const StyleInput = styled(Input)`
  color: white !important;
  &:focus + label {
    color: #1d9bf0 !important;
  }
`
