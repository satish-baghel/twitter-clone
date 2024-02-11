import { ErrorMessage, getIn } from "formik"
import { Input } from "reactstrap"
import EInvalidFeedback from "../EInvalidFeedback/EInvalidFeedback"
import classNames from "classnames"
import Styled from "styled-components"
import { Eye, EyeSlash } from "../../libs/icons"
import { useState } from "react"

//
const TextField = ({ field, form, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  //
  const errorMessage = getIn(form?.errors, field?.name)
  const isTouch = getIn(form?.touched, field?.name)
  let Type = props.type

  const onChange = (e) => {
    if (props.type === "checkbox") {
      form.setFieldValue(field.name, e.target.checked)
      return
    }
    form.setFieldValue(field.name, e.target.value)
  }

  return (
    <>
      <StyleInput
        {...field}
        {...props}
        type={Type}
        onChange={onChange}
        className={classNames(`bg-black ${props?.className || ""}`, {
          "is-invalid": errorMessage && isTouch,
          "cursor-allowed": props.disabled,
        })}
      />
      {props.type === "password" ? (
        showPassword ? (
          <Icon
            className="w-10"
            style={{}}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <Icon
            className="w-10"
            onClick={() => setShowPassword(!showPassword)}
          />
        )
      ) : null}

      <ErrorMessage {...field} render={EInvalidFeedback} />
    </>
  )
}

export default TextField

const StyleInput = Styled(Input)`
  color: white !important;
  position: relative; 
  &:checked{
    background-color:#0d6efd !important
  }
  &:focus + label {
    color: #1d9bf0 !important;
  }
  &:disabled,label{
    background-color:#202327 !important;
  }
  `

const Icon = Styled.svg`
position: absolute;
    top: 24%;
    right: 3%;
    width: 20px;
       
`
