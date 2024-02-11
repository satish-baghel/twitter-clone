import { Field } from "formik"
import React from "react"
import { FormGroup } from "reactstrap"
import { Label, TextField } from "../../../Atom"

const Password = (props) => {
  return (
    <div className="mb-4 mt-2">
      <div className="mb-4">
        <h3>You'll need a password</h3>
        <small className="text-secondary">
          Make sure it's 8 characters or more
        </small>
      </div>

      <FormGroup floating>
        <Field
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          component={TextField}
        />
        <Label htmlFor="password">Password</Label>
      </FormGroup>
    </div>
  )
}

export default Password
