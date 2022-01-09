export const changeBasketQuantity = (quantity: number) => {
    return{
    type: "CHANGE_BASKET_QUANTITY",
    payload: quantity
    };
  }