import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  form: { name: "", email: "" },
  step: 1,
}

const AuthReducer = createSlice({
  name: "@Auth",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      const { payload } = action
      state.step = payload?.step
    },
  },
})

export const { nextStep } = AuthReducer.actions
export default AuthReducer.reducer
