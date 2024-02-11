import React from "react"

import { Apple, Google, Twitter } from "../../libs/icons"
import { Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import { addSingleModal } from "../../store/slice"
import { useDispatch } from "react-redux"
import { Button } from "../../Atom"
import { ModalTypes } from "../../libs/data/data"
import Register from "../../Component/Register/Register"
import { Login } from "../../Component"

const Auth = () => {
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
                  <div className="d-flex mt-2">
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
                            modalType: ModalTypes.REGISTER_MODAL,
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
          {/*  */}
          <Register />
          {/*  */}
          <Login />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Auth
