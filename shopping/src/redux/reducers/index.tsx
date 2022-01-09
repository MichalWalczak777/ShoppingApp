import basketReducer from "./basket";
import authReducer from "./auth";
import basketQuantityReducer from "./basketQuantity"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    basket: basketReducer,
    auth: authReducer,
    basketQuantity: basketQuantityReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
