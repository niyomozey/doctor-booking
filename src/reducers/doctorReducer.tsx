import doctors from "../service/doctors";
function doctorReducer(state=doctors,action:any):any{
    switch(action.type){
        case "GET_DOCTOR":
            return state
        case "ADD_DOCTOR":
            return [...state,action.payload]
        default:
            return state;
    }
}

export default doctorReducer