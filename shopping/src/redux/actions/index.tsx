import { SizedProductModel } from "../../models/SizedProductModel";

export const addToBasket = (product:SizedProductModel, key: string) => {
  return{
  type: "ADD_TO_BASKET",
  payload: {product, key}
  };
}

export const removeFromBasket = (key: string) => {
  return{
  type: "REMOVE_FROM_BASKET",
  payload: key
  };
}

export const changeBasketItem = (product:SizedProductModel, quantity: number, key: string) => {
  return {
      type: "CHANGE_BASKET_ITEM",
      payload: {product, quantity, key}
  }
}


