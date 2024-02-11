import React from "react"
import { Col, Row } from "reactstrap"
import { FormGroup, Label, TextField } from "../../../Atom"
import { Field } from "formik"

const LoginForm = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={12} md="10">
        <FormGroup floating>
          <Field
            id="username"
            name="username"
            placeholder="Email or username"
            type="text"
            bsSize="sm"
            disabled
            component={TextField}
          />
          <Label htmlFor="username">Email or username</Label>
        </FormGroup>
        <FormGroup floating>
          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            bsSize="sm"
            component={TextField}
          />
          <Label htmlFor="password">Password</Label>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default LoginForm
