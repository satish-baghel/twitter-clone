import React from "react"

import { Apple, Google, Twitter } from "../../libs/icons"
import { Col, ModalBody, Row } from "reactstrap"
import { Link } from "react-router-dom"
import { addSingleModal } from "../../store/slice"
import { useDispatch } from "react-redux"
import { Modal } from "../../Component"
import {
  Button,
  ModalHeader,
  TextField,
  FormGroup,
  Label,
  SelectField,
  ModalFooter,
} from "../../Atom"
import { ModalTypes } from "../../libs/data/data"

const Home = () => {
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <Row>
        <Col
          lg={6}
          md={3}
          sm={3}
          xs={4}
          className="d-flex align-items-center justify-content-center vh-lg-height px-5 pt-4"
        >
          <div>
            <Twitter className={"text-white w-100"} />
          </div>
        </Col>
        <Col lg={6} md={12} className="p-5">
          <Row>
            <Col md="12">
              <h1 className="display-3 fw-bold my-5">Happening now</h1>
              <h2 className="fw-bold my-4">Join today.</h2>
            </Col>
            <Col md="12">
              <Row className="flex-column">
                <Col lg={6} md="12">
                  <Button
                    className="d-flex bg-white justify-content-center align-items-center mb-2"
                    block
                  >
                    <Google className={"w-10 me-2 "} />
                    <span className="small text-black">
                      Sign up with Google
                    </span>
                  </Button>

                  <Button
                    className="d-flex bg-white justify-content-center align-items-center"
                    block
                  >
                    <Apple className={"w-10 me-2 "} />
                    <span className="small text-black">Sign up with Apple</span>
                  </Button>
                  <div sm={12} className="d-flex mt-2">
                    <div className="divider w-100">or</div>
                  </div>
                  <div className="my-2 ">
                    <Button
                      className="w-100 text-white"
                      color="primary"
                      onClick={() =>
                        dispatch(
                          addSingleModal({
                            showModal: true,
                            modalType: ModalTypes.LOGIN_MODAL,
                            modalContent: RegisterModal,
                          })
                        )
                      }
                    >
                      Create account
                    </Button>
                  </div>
                  <div>
                    <small className="font-smallest text-secondary">
                      <p>
                        By signing up, you agree to the{" "}
                        <Link to="/">Terms of Service</Link> and{" "}
                        <Link to="/">Privacy Policy</Link>, including{" "}
                        <Link to="/">Cookie Use.</Link>
                      </p>
                    </small>
                    <div className="mt-5">
                      <p className="fw-bold">Already have an account?</p>
                      <Button
                        className="text-primary"
                        outline
                        color="secondary"
                        block
                        onClick={() =>
                          dispatch(
                            addSingleModal({
                              showModal: true,
                              modalType: ModalTypes.LOGIN_MODAL,
                              modalContent: SignInModal,
                            })
                          )
                        }
                      >
                        Sing in
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Modal
            size="md"
            centered
            className=" position-relative"
            modalType={ModalTypes.LOGIN_MODAL}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home

const SignInModal = () => {
  const dispatch = useDispatch()
  return (
    <>
      <ModalHeader className="text-white  text-center">
        <Twitter />
      </ModalHeader>
      <ModalBody>
        <Row className="justify-content-center">
          <Col lg={8} md="10">
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
              <TextField
                id="username"
                name="username"
                placeholder="Email or username"
                type="text"
                bsSize="sm"
              />

              <Label htmlFor="username">Email or username</Label>
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                className="d-flex bg-white justify-content-center text-black align-items-center mb-2"
                block
              >
                Next
              </Button>
            </FormGroup>

            <FormGroup>
              <Button
                type="button"
                className="text-white"
                outline
                color="secondary"
                block
                onClick={() =>
                  dispatch(
                    addSingleModal({
                      showModal: true,
                      modalType: ModalTypes.FORGOT_PASSWORD_MODAL,
                      modalContent: ForgotPasswordModal,
                    })
                  )
                }
              >
                Forgot password?
              </Button>
            </FormGroup>
            <div className="my-5">
              Don't have an account?{" "}
              <Link to="/" className="text-decoration-none">
                Sign up
              </Link>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </>
  )
}

const ForgotPasswordModal = () => {
  return <div>Forgot Password</div>
}

const RegisterModal = () => {
  const dispatch = useDispatch()
  return (
    <>
      <ModalHeader className="text-white ">
        <Col md="10">Step 1 of 5</Col>
      </ModalHeader>
      <ModalBody>
        <Row className="justify-content-center">
          <Col lg={10} md="10">
            <div className="my-4">
              <h2>Create your account</h2>
            </div>
            <FormGroup floating>
              <TextField
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                bsSize="sm"
              />

              <Label htmlFor="name">Name</Label>
            </FormGroup>
            <FormGroup floating>
              <TextField
                id="name"
                name="email"
                placeholder="Email"
                type="email"
                bsSize="sm"
              />

              <Label htmlFor="email">Email</Label>
            </FormGroup>
            {/* <Button
              className="d-flex bg-white justify-content-center align-items-center mb-3"
              block
            >
              <Google className={"w-10 me-2 "} />
              <span className="small text-black">Sign up with Google</span>
            </Button> */}

            <div className="mt-3">
              <h6> Date of birth</h6>
              <small>
                {" "}
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.{" "}
              </small>
            </div>
            <Row className=" g-3 align-items-center mt-3">
              <Col>
                <FormGroup floating>
                  <SelectField
                    id="username"
                    name="username"
                    placeholder="Email or username"
                    type="select"
                    bsSize="sm"
                    option={[{ label: "", value: "" }]}
                  />

                  <Label htmlFor="username">Month</Label>
                </FormGroup>
              </Col>{" "}
              <Col>
                <FormGroup floating>
                  <SelectField
                    id="username"
                    name="username"
                    placeholder="Email or username"
                    type="select"
                    bsSize="sm"
                    option={[{ label: "", value: "" }]}
                  />

                  <Label htmlFor="username">Day</Label>
                </FormGroup>
              </Col>{" "}
              <Col>
                <FormGroup floating>
                  <SelectField
                    id="username"
                    name="username"
                    placeholder="Email or username"
                    type="select"
                    bsSize="sm"
                    option={[{ label: "", value: "" }]}
                  />

                  <Label htmlFor="username">Year</Label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className="justify-content-center">
        {/* <Row> */}
        <Col md="10">
          <Button
            className="d-flex bg-white justify-content-center  mb-2 align-items-center text-black"
            block
          >
            Next
          </Button>
        </Col>
        {/* </Row> */}
      </ModalFooter>
    </>
  )
}
