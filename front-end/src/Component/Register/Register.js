import React from "react"
import { Button, Modal, ModalFooter, ModalHeader } from "../../Atom"
import { useDispatch, useSelector } from "react-redux"
import { Col, ModalBody, Row } from "reactstrap"
import { closeModal, nextStep, resetStep } from "../../store/slice"
import { ModalTypes } from "../../libs/data/data"
import RegisterForm from "./Steps/RegisterForm"
import Message from "./Steps/Message"
import Preview from "./Steps/Preview"
import VerifyCode from "./Steps/VerifyCode"
import Password from "./Steps/Password"
import { Form, Formik } from "formik"
import * as validation from "../../libs/Validation/validation"
import * as Yup from "yup"
import { LeftArrow } from "../../libs/icons"
import * as REGEX from "../../libs/Regex/Regex"
const Register = () => {
  const dispatch = useDispatch()
  const { Modals } = useSelector((state) => state.Modal)
  const { step, form } = useSelector((state) => state.Auth)

  const RegisterFormValidation = Yup.object({
    full_name: Yup.string().required(`Name ${validation.REQUIRED}`),
    email: Yup.string()
      .trim()
      .required(`Email ${validation.REQUIRED}`)
      .email(`Email ${validation.INVALID}`),
    day: Yup.number().required(`Required`),
    month: Yup.number().required(`Required`),
    year: Yup.number().required(`Required `),
  })

  const ExperienceValidation = Yup.object({
    experience: Yup.boolean(),
  })

  const CodeValidation = Yup.object({
    verifyCode: Yup.number()
      .typeError(`Verification Code ${validation.INVALID}`)
      .required(`Verification Code ${validation.REQUIRED}`),
  })

  const PasswordValidation = Yup.object({
    password: Yup.string()
      .required(`Password ${validation.REQUIRED}`)
      .matches(REGEX.PASSWORD_REGEX, validation.STRONG_PASSWORD),
  })

  const PreviewValidation = Yup.object({
    full_name: Yup.string().required(`Name ${validation.REQUIRED}`),
    email: Yup.string()
      .trim()
      .required(`Email ${validation.REQUIRED}`)
      .email(`Email ${validation.INVALID}`),
  })
  const component = {
    page: RegisterForm,
    validation: RegisterFormValidation,
  }
  switch (step) {
    case 2:
      component.page = Message
      component.validation = ExperienceValidation
      break
    case 3:
      component.page = Preview
      component.validation = PreviewValidation
      break
    case 4:
      component.page = VerifyCode
      component.validation = CodeValidation
      break
    case 5:
      component.page = Password
      component.validation = PasswordValidation
      break
    default:
      component.page = RegisterForm
      component.validation = RegisterFormValidation
      break
  }

  const onSubmit = (values) => {
    dispatch(nextStep({ step: Number(step) + 1 }))
  }
  return (
    <Modal isOpen={Modals[ModalTypes.REGISTER_MODAL]?.showModal} size="md">
      {step === 1 ? (
        <Button
          color="dark"
          title="Close"
          className="position-absolute text-white fs-3 border-0"
          onClick={() => {
            dispatch(
              closeModal({
                modalType: ModalTypes.REGISTER_MODAL,
              })
            )
            dispatch(resetStep())
          }}
        >
          &times;
        </Button>
      ) : (
        <Button
          color="dark"
          title="Close"
          className="position-absolute text-white fs-3 border-0"
          onClick={() => {
            dispatch(nextStep({ step: step - 1 }))
          }}
        >
          {<LeftArrow className="w-10" />}
        </Button>
      )}

      <ModalHeader className="text-white ">
        <Col md="10">Step {step} of 5</Col>
      </ModalHeader>
      <Formik
        initialValues={form}
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
                    Next
                  </Button>
                </Col>
              </ModalFooter>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

export default Register
