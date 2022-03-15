import {GET_GAME,DELETE_GAME} from "../action/types"

const initalState ={ games: [] };let games
const gamesReducer = (state = initalState, action) => {
    const{type, payload} = action
    switch(type){
        case GET_GAME:
            return{
                ...state,
                gamesReducer:payload,
            }
            case DELETE_GAME:
                return{
               ...state,
               gamesReducer:payload.filter(games=> games.id != action.payload)
            }
             default:
                return state;
    };
};

export default gamesReducer;