import { Field } from "formik"
import React from "react"
import { TextField } from "../../../Atom"
import { Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
const Message = () => {
  return (
    <>
      <h3 className="my-2">Customize your experience</h3>
      <h5 className="my-3">Track where you see X content across the web</h5>
      <Row>
        <Col md="11" sm="11" xs="11">
          <label htmlFor="experience">
            X uses this data to personalize your experience. This web browsing
            history will never be stored with your name, email, or phone number.
          </label>
        </Col>
        <Col md="1" sm="1" xs="1">
          <Field
            id="experience"
            name="experience"
            placeholder="Name"
            type="checkbox"
            component={TextField}
          />{" "}
        </Col>
      </Row>
      <div className="mt-4 mb-5">
        <small className="text-secondary">
          By signing up, you agree to our <Link to="/">Terms</Link> ,{" "}
          <Link to="/">Privacy Policy</Link>, and <Link to="/">Cookie Use</Link>{" "}
          . X may use your contact information, including your email address and
          phone number for purposes outlined in our Privacy Policy.{" "}
          <Link to="/">Learn more</Link>{" "}
        </small>
      </div>
    </>
  )
}

export default Message
