import doctors from "../service/doctors";
function doctorReducer(state=doctors,action:any):any{
    switch(action.type){
        case "JOINNED":
            return action.payload
        case "KNOWN":
            return action.payload
        case "ADD_USER":
            console.log('current user: ',state)
            return [...state,action.payload]
        default:
            return state;
    }
}

export default doctorReducer