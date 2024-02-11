import React from "react"
import { Link } from "react-router-dom"
import { Button, FormGroup, Label, TextField } from "../../../Atom"
import { Col, Row } from "reactstrap"
import { Apple, Google } from "../../../libs/icons"
import { Field } from "formik"

const WithEmail = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={10} md="10">
        <div className="my-3">
          <h2>Sign in to X</h2>
        </div>
        <Button
          className="d-flex bg-white justify-content-center align-items-center mb-3"
          block
        >
          <Google className={"w-10 me-2 "} />
          <span className="small text-black">Sign up with Google</span>
        </Button>

        <Button
          className="d-flex bg-white justify-content-center mb-3 align-items-center"
          block
        >
          <Apple className={"w-10 me-2 "} />
          <span className="small text-black">Sign up with Apple</span>
        </Button>
        <div className="d-flex my-3">
          <div className="divider w-100">or</div>
        </div>
        <FormGroup floating>
          <Field
            id="username"
            name="username"
            placeholder="Email or username"
            type="text"
            bsSize="sm"
            component={TextField}
          />
          <Label htmlFor="username">Email or username</Label>
        </FormGroup>

        <div className="my-5">
          Don't have an account?{" "}
          <Link to="/" className="text-decoration-none">
            Sign up
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default WithEmail
