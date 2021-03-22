import basketReducer from "./basket";
import authReducer from "./auth";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    basket: basketReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
