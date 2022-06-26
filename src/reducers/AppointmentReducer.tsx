const initialAppointment: []=[]
interface appointmentInterface{

}
function Appointment(state=initialAppointment,action:any):any{
    switch(action.type){
        case "GET_APPOINTMENT":
            return state
        case "ADD_APPOINTMENT":
            return [...state,action.payload]
        default:
            return state;
    }
}

export default Appointment