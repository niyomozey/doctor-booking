const initialAppointment: []=[]
interface appointmentInterface{

}
function Appointment(state=initialAppointment,action:any):any{
    switch(action.type){
        case "GET_APPOINTMENT":
            return state
        case "ADD_APPOINTMENT":
            return [...state,action.payload]
        case "FIND_APPOINTMENT":
            return state.filter((element:any) => element.date == action.payload.date)
        default:
            return state;
    }
}

export default Appointment