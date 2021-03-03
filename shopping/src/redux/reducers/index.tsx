import basketReducer from "./basket";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    basket: basketReducer
})

export default allReducers;
