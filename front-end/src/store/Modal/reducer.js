import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  Modals: [],
}
const ModalReducer = createSlice({
  name: "@modal",
  initialState,
  reducers: {
    addMultipleModal: (state, action) => {
      const { payload } = action

      const findIndex = state.Modals.findIndex(
        (_modal) => _modal.modalType === payload.modalType
      )
      if (findIndex >= 0) {
        state.Modals[findIndex][`showModal`] = payload.showModal
        state.Modals[findIndex][`modalContent`] = payload.modalContent
        return
      }

      state.Modals.push(payload)
    },
    addSingleModal: (state, action) => {
      const { payload } = action
      const lastIndex = state.Modals.length - 1
      if (lastIndex >= 0) {
        state.Modals[lastIndex][`showModal`] = payload.showModal
        state.Modals[lastIndex][`modalContent`] = payload.modalContent
        state.Modals[lastIndex][`modalType`] = payload.modalType
        return
      }
      state.Modals.push(payload)
    },
    closeModal: (state, action) => {
      const { payload } = action
      state.Modals = state.Modals.map((q) => {
        if (q.modalType === payload.modalType) {
          return {
            ...q,
            showModal: false,
          }
        }
        return q
      })
    },
  },
})

export const { addMultipleModal, closeModal, addSingleModal } =
  ModalReducer.actions
export default ModalReducer.reducer
