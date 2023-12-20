import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Modal } from "../../Atom"
import { closeModal } from "../../store/slice"

const TModal = (props) => {
  const dispatch = useDispatch()

  const { Modals } = useSelector((state) => state.Modal)
  return (
    Array.isArray(Modals) &&
    Modals.map((modal) => {
      return (
        <Modal isOpen={modal.showModal} {...props}>
          <Button
            color="dark"
            title="Close"
            className="position-absolute text-white fs-3 border-0"
            onClick={() => {
              dispatch(
                closeModal({
                  modalType: modal.modalType,
                })
              )
            }}
          >
            &times;
          </Button>
          {modal?.modalContent()}
        </Modal>
      )
    })
  )
}

export default TModal
