import basketReducer from "./basket";
import authReducer from "./auth";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    basket: basketReducer,
    auth: authReducer
})

export default allReducers;
