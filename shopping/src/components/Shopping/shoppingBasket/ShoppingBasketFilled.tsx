import React, { useEffect, useState } from "react";
import { SizedProductModel } from "../../../models/SizedProductModel";
import BasketElement from "../basketElement/BasketElement";
import { Button } from "@material-ui/core";

interface IProps {
  clothes: Array<SizedProductModel>;
}

const ShoppingBasketFilled = ({ clothes }: IProps) => {
  const [basketValue, setBasketValue] = useState<number>(0);
  const deliveryCost: number = 9.99;

  useEffect(() => {
    CalculateBasketValue();
    CalculateFinalPrice();
  }, [clothes]);

  const CalculateBasketValue = (): void => {
    let summaryProductsValue: number = 0;
    for (let i = 0; i < clothes.length; i++) {
      summaryProductsValue += clothes[i].price * clothes[i].quantity;
    }
    setBasketValue(summaryProductsValue);
  };

  const CalculateFinalPrice = (): number =>
    basketValue !== 0 ? basketValue + deliveryCost : basketValue;
  const displayDeliveryCost = (): number =>
    basketValue !== 0 ? deliveryCost : 0;

  return (
    <div className="shoppingBasket-filled">
      <div className="shoppingBasket-contentFilled">
        <h2 className="shoppingBasket-mainHeader">Twój koszyk</h2>
        <div className="shoppingBasket-basketElementsWrapper">
          {clothes?.map((product, i) => (
            <BasketElement
              sizedProduct={product}
              key={product.name + i}
            ></BasketElement>
          ))}
        </div>
      </div>
      <div className="shoppingBasket-summary">
        <div className="shoppingBasket-summaryContentWrapper">
          <h2 className="shoppingBasket-summaryHeader">Podsumowanie</h2>
          <div className="shoppingBasket-summaryContent">
            <div className="shoppingBasket-summaryValuesWrapper">
              <div className="shoppingBasket-summaryValue">
                <p>Wartość koszyka: </p>
                <p>{basketValue.toFixed(2) + " PLN"}</p>
              </div>
              <div className="shoppingBasket-summaryValue">
                <p>Koszty wysyłki: </p>
                <p>{displayDeliveryCost().toFixed(2) + " PLN"}</p>
              </div>
            </div>
            <div className="shoppingBasket-summaryTotal shoppingBasket-summaryValue">
              <p>Łącznie do zapłaty: </p>
              <p>{CalculateFinalPrice().toFixed(2) + " PLN"}</p>
            </div>
            <Button
              className="shoppingBasket-button shoppingBasket-materialComponent"
              variant="contained"
              color="primary"
            >
              {" "}
              IDŹ DO KASY{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBasketFilled;
