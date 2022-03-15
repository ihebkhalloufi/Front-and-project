import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const  middlewares =[thunk];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;