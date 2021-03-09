import { Action, Reducer } from "redux";
import { SizedProductModel } from "../../models/SizedProductModel";

interface stateObject{
    [key: string]: SizedProductModel;
}

const basketReducer: Reducer<stateObject, Action<{key: string, quantity: number, product: SizedProductModel}>> = (state = {}, action: any) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            const addingKey: string  = action.payload.key;
            let productToAdd: SizedProductModel = action.payload.product;
            if (state.hasOwnProperty(addingKey)){
                const newQuantity = state[addingKey].quantity + 1;
                productToAdd = {...productToAdd, quantity: newQuantity};
            }
            return {...state, [addingKey]: productToAdd};
        case "REMOVE_FROM_BASKET":
            const removeKey = action.payload;
            const { [removeKey]: value, ...newState } = state;
            return newState;
        case "CHANGE_BASKET_ITEM":
            const changingKey: string  = action.payload.key;
            const productToChange: SizedProductModel = action.payload.product;
            const quantity: number = action.payload.quantity;
            if (state.hasOwnProperty(changingKey)){
                productToChange.quantity = quantity;;
            }
            return {...state, [changingKey]: productToChange};
        default:
            return {...state};
    }
}

export default basketReducer;