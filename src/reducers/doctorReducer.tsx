import doctors from "../service/doctors";
function doctorReducer(state=doctors,action:any):any{
    switch(action.type){
        case "GET_DOCTOR":
            return state
        case "ADD_DOCTOR":
            return [...state,action.payload]
        case "SINGLE_DOCTOR":
            return state.filter((element:any)=> element.id === action.payload.id)
        default:
            return state;
    }
}

export default doctorReducer