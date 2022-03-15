import {ADD_ADMIN, GET_ADMIN} from "../action/types"

const initalState ={ admin: [] };
const AdminReducers = (state = initalState, action) => {
    const{type, payload} = action
    switch(type){
        case GET_ADMIN:
            return{
                ...state,
                AdminReducers:payload,
            }
            default:
        return state;
        case ADD_ADMIN:
             return{
            ...state,
            AdminReducers:payload,
        }
    };
 
      
}; 
export default  AdminReducers;