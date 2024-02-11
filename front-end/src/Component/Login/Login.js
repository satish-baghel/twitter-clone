import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Modal, ModalFooter, ModalHeader } from "../../Atom"
import { ModalTypes } from "../../libs/data/data"
import { closeModal, nextStep, resetStep } from "../../store/slice"
import { Twitter } from "../../libs/icons"
import { Col, ModalBody, Row } from "reactstrap"
import { Form, Formik } from "formik"
import WithEmail from "./Step/WithEmail"
import PasswordForm from "./Step/LoginForm"
import * as Yup from "yup"

import * as validation from "../../libs/Validation/validation"
import * as REGEX from "../../libs/Regex/Regex"

const Login = () => {
  const dispatch = useDispatch()
  const { Modals } = useSelector((state) => state.Modal)
  const { step, loginForm } = useSelector((state) => state.Auth)

  const WithEmailValidation = Yup.object({
    username: Yup.string().required(`This ${validation.REQUIRED}`),
  })
  const PasswordValidation = Yup.object({
    username: Yup.string().required(`This ${validation.REQUIRED}`),
    password: Yup.string()
      .required(`Password ${validation.REQUIRED}`)
      .matches(REGEX.PASSWORD_REGEX, validation.STRONG_PASSWORD),
  })
  const component = {
    page: WithEmail,
    validation: WithEmailValidation,
  }

  switch (step) {
    case 2:
      component.page = PasswordForm
      component.validation = PasswordValidation
      break

    default:
      component.page = WithEmail
      component.validation = WithEmailValidation
      break
  }
  const onSubmit = (values) => {
    dispatch(nextStep({ step: Number(step) + 1 }))
  }

  return (
    <Modal isOpen={Modals[ModalTypes.LOGIN_MODAL]?.showModal}>
      <Button
        color="dark"
        title="Close"
        className="position-absolute text-white fs-3 border-0"
        onClick={() => {
          dispatch(
            closeModal({
              modalType: ModalTypes.LOGIN_MODAL,
            })
          )
          dispatch(resetStep())
        }}
      >
        &times;
      </Button>
      <ModalHeader className="text-white  text-center">
        <Twitter />
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={loginForm}
          onSubmit={onSubmit}
          validationSchema={component.validation}
        >
          {({ values }) => {
            return (
              <Form>
                <ModalBody>
                  <Row className="justify-content-center">
                    <Col lg={10} md="10">
                      {<component.page {...values} />}
                    </Col>
                  </Row>
                </ModalBody>

                <ModalFooter className="justify-content-center">
                  <Col md="10">
                    <Button
                      className="d-flex bg-white justify-content-center  mb-2 align-items-center text-black"
                      block
                      type="submit"
                    >
                      {step === 2 ? "Submit" : "Next"}
                    </Button>
                  </Col>
                </ModalFooter>
              </Form>
            )
          }}
        </Formik>
      </ModalBody>
    </Modal>
  )
}

export default Login
