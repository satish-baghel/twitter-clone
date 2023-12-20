import React from "react"
import { Input } from "reactstrap"
import styled from "styled-components"

const SelectField = (props) => {
  return (
    <StyleInput {...props} className="bg-black">
      {props.option.map((opt) => {
        return <option value={opt?.value || ""}>{opt?.label}</option>
      })}
    </StyleInput>
  )
}

export default SelectField

const StyleInput = styled(Input)`
  color: white !important;
  &:focus + label {
    color: #1d9bf0 !important;
  }
`
