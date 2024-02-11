import classNames from "classnames"
import { ErrorMessage, getIn } from "formik"
import React, { useCallback } from "react"
import { Input } from "reactstrap"
import styled from "styled-components"
import EInvalidFeedback from "../EInvalidFeedback/EInvalidFeedback"

const SelectField = ({ field, form, option, resetField, ...props }) => {
  const errorMessage = getIn(form?.errors, field?.name)
  const isTouch = getIn(form?.touched, field?.name)

  const onChange = useCallback(
    (e) => {
      if (resetField) {
        form.setValues({ ...form.values, ...resetField }, false)
      }
      form.setFieldValue(field.name, e.target.value)
    },
    [field.name, form, resetField]
  )
  return (
    <>
      <StyleInput
        {...field}
        {...props}
        onChange={onChange}
        className={classNames(`bg-black ${props?.className || ""}`, {
          "is-invalid": errorMessage && isTouch,
        })}
      >
        {Array.isArray(option)
          ? option.map((opt) => (
              <option
                value={opt?.value}
                key={opt?.value}
                disabled={opt?.disabled}
              >
                {opt?.label}
              </option>
            ))
          : null}
      </StyleInput>
      <ErrorMessage name={field?.name} render={EInvalidFeedback} />
    </>
  )
}

export default SelectField

const StyleInput = styled(Input)`
  color: white !important;
  &:focus + label {
    color: #1d9bf0 !important;
  }
`
