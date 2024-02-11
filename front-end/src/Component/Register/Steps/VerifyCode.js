import React from "react"
import { FormGroup, Label, TextField } from "../../../Atom"
import { Field } from "formik"

const VerifyCode = ({ email }) => {
  return (
    <div className="mb-4 mt-2">
      <div className="mb-4">
        <h3>We sent you a code</h3>
        <small className="text-secondary">
          {`Enter it below to verify ${email}. `}{" "}
        </small>
      </div>

      <FormGroup floating>
        <Field
          name="verifyCode"
          id="verifyCode"
          placeholder="Verification Code"
          component={TextField}
        />
        <Label htmlFor="verifyCode">Verification Code</Label>
      </FormGroup>
      <div>
        <p className="text-primary">
          Didn't receive email?Click here to{" "}
          <span role="button" className="text-decoration-underline">
            resent email
          </span>
        </p>
      </div>
    </div>
  )
}

export default VerifyCode
