import React from "react"

import { Label, SelectField, TextField } from "../../../Atom"
import { Col, FormGroup, Row } from "reactstrap"
import { Field } from "formik"
import { Months } from "../../../libs/data/data"
import { getAllYear, getDaysInMonth } from "../../../libs/Helper/helper"

const RegisterForm = ({ month, day, year }) => {
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
          component={TextField}
        />

        <Label htmlFor="email">Email</Label>
      </FormGroup>

      <div className="mt-3">
        <h6> Date of birth</h6>
        <small className="text-secondary">
          {" "}
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.{" "}
        </small>
      </div>
      <Row className="g-3 align-items-center mt-3">
        <Col>
          <FormGroup floating>
            <Field
              id="month"
              name="month"
              type="select"
              bsSize="sm"
              option={Months}
              resetField={{ day: "", year: "" }}
              component={SelectField}
            />

            <Label htmlFor="month">Month</Label>
          </FormGroup>
        </Col>{" "}
        <Col>
          <FormGroup floating>
            <Field
              id="day"
              name="day"
              type="select"
              bsSize="sm"
              option={getDaysInMonth(month)}
              resetField={{ year: "" }}
              component={SelectField}
            />
            <Label htmlFor="day">Day</Label>
          </FormGroup>
        </Col>{" "}
        <Col>
          <FormGroup floating>
            <Field
              id="year"
              name="year"
              type="select"
              bsSize="sm"
              option={getAllYear(day, month)}
              component={SelectField}
            />
            <Label htmlFor="username">Year</Label>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default RegisterForm
