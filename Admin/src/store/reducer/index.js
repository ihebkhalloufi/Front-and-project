import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import GetAdminReducer  from "./GetAdminReducers";

const rootReducer = combineReducers ({gamesReducer,GetAdminReducer});
export default rootReducer;