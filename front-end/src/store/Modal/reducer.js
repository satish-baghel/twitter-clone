import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  Modals: {},
}
const ModalReducer = createSlice({
  name: "@modal",
  initialState,
  reducers: {
    addMultipleModal: (state, action) => {
      const { payload } = action
      if (state.Modals.hasOwnProperty(payload.modalType)) {
        state.Modals[payload.modalType].showModal = true
        return
      }
      let newObj = {
        [payload.modalType]: {
          showModal: payload.showModal,
          modalType: payload.modalType,
        },
      }
      state.Modals = Object.assign({}, state.Modals, newObj)
    },
    addSingleModal: (state, action) => {
      const { payload } = action
      if (state.Modals.hasOwnProperty(payload.modalType)) {
        state.Modals[payload.modalType].showModal = true
        return
      }
      let newObj = {
        [payload.modalType]: {
          showModal: payload.showModal,
          modalType: payload.modalType,
        },
      }
      state.Modals = newObj
    },
    closeModal: (state, action) => {
      const { payload } = action
      state.Modals[payload.modalType].showModal = false
    },
  },
})

export const { addMultipleModal, closeModal, addSingleModal } =
  ModalReducer.actions
export default ModalReducer.reducer
