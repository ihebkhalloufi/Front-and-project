import {ADD_USER, GET_USER} from "../action/types"

const initalState ={ users: [] };
const UserReducers = (state = initalState, action) => {
    const{type, payload} = action
    switch(type){
        case GET_USER:
            return{
                ...state,
                UserReducers:payload,
            }
            default:
        return state;
        case ADD_USER:
             return{
            ...state,
            UserReducers:payload,
        }
    };
}; 
export default UserReducers;