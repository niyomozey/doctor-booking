import { combineReducers } from "redux";
import doctorReducer from "./doctorReducer";
import AppointmentReducer from './AppointmentReducer'

const rootReducer = combineReducers({
	doctorReducer,
	AppointmentReducer
})

export default rootReducer;