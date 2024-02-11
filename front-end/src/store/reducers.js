import { combineReducers } from "redux"
import Modal from "./Modal/reducer"
import Auth from "./Auth/reducer"
const rootReducer = combineReducers({
  Auth,
  Modal,
})

export default rootReducer
