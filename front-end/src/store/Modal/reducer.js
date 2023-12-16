import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  showModal: false,
  modalType: "",
}
const ModalReducer = createSlice({
  name: "@modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      const { payload } = action
      state.showModal = payload.showModal
      state.modalType = payload.modalType
    },
  },
})

export const { showModal } = ModalReducer.actions
export default ModalReducer.reducer
