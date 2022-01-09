import { Reducer } from "react";
import { Action } from "redux";

const basketQuantityReducer: Reducer<number, Action<{quantity: number}>> = (state = 0, action: any) => {
    switch(action.type){
        case "CHANGE_BASKET_QUANTITY":
            return state + action.payload;
        default:
            return state;
    }
}

export default basketQuantityReducer;