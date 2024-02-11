import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  form: {
    full_name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    experience: true,
    dateOfBirth: null,
    verifyCode: "",
    password: "",
  },
  loginForm: {
    username: "",
    password: "",
  },
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
    resetStep: (state) => {
      state.step = 1
    },
  },
})

export const { nextStep, resetStep } = AuthReducer.actions
export default AuthReducer.reducer
