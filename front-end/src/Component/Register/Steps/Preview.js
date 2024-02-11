import React from "react"
import { Label, TextField } from "../../../Atom"
import { FormGroup } from "reactstrap"
import { Field } from "formik"

import { DateWithLLFormat } from "../../../libs/Date/Date"

const Preview = ({ month, day, year }) => {
  return (
    <>
      <div className="my-4">
        <h2>Create your account</h2>
      </div>
      <FormGroup floating>
        <Field
          id="full_name"
          name="full_name"
          placeholder="Name"
          type="text"
          bsSize="sm"
          disabled
          className="is-valid"
          component={TextField}
        />

        <Label htmlFor="full_name">Name</Label>
      </FormGroup>
      <FormGroup floating>
        <Field
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          bsSize="sm"
          disabled
          className="is-valid"
          component={TextField}
        />

        <Label htmlFor="email">Email</Label>
      </FormGroup>
      <FormGroup floating>
        <Field
          id="date_of_birth"
          name="date_of_birth"
          placeholder="Date of birth"
          type="text"
          value={DateWithLLFormat(`${year}-${month}-${day}`)}
          disabled
          className="is-valid"
          component={TextField}
        />

        <Label htmlFor="date of birth">Date of birth</Label>
      </FormGroup>
    </>
  )
}

export default Preview
