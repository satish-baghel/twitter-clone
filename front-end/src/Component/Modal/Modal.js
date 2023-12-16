import React from "react"
import { useSelector } from "react-redux"
import { Modal } from "../../Atom"

const TModal = (props) => {
  const { children } = props
  const { showModal } = useSelector((state) => state.Modal)
  return (
    <Modal isOpen={showModal} {...props}>
      {children}
    </Modal>
  )
}

export default TModal
