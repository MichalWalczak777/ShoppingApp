import { SizedProductModel } from "../../models/SizedProductModel";

export const addToBasket = (product:SizedProductModel) => {
    return{
    type: "ADD_TO_BASKET",
    payload: product
    };
  }

export const removeFromBasket = (index: number) => {
    return{
    type: "REMOVE_FROM_BASKET",
    payload: index
    };
  }


