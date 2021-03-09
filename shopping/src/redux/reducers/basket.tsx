import { Action, Reducer } from "redux";
import { SizedProductModel } from "../../models/SizedProductModel";

interface stateObject{
    [key: string]: SizedProductModel;
}

const basketReducer: Reducer<stateObject, Action<{index: number, product: SizedProductModel}>> = (state = {}, action: any) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            const addingKey: string  = action.payload.key;
            let productToAdd: SizedProductModel = action.payload.product;
            return {...state, [addingKey]: productToAdd};
        default:
            return {...state};
    }
}

export default basketReducer;