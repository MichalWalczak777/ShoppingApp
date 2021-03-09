import React, { useEffect, useState } from "react";
import { SizedProductModel } from "../../../models/SizedProductModel";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import BasketElement from "../basketElement/BasketElement";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const ShoppingBasket = () => {

    const deliveryCost: number = 9.99;
    const basketGlobalState = useSelector((state: any) => state.basket);

    const defaultShirt: SizedProductModel = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, price: 74.99, size: "L", quantity: 1};
    const [clothes, setClothes] = useState<Array<SizedProductModel>>(new Array(3).fill(defaultShirt));
    const [basketValue, setBasketValue] = useState<number>(0);

    useEffect(() => {
        // const productsArray: Array<SizedProductModel>  = Object.values(basketGlobalState);
        setClothes(Object.values(basketGlobalState));
    },[basketGlobalState]);

    useEffect(() => {
        CalculateBasketValue();
        CalculateFinalPrice();
    },[clothes]);



    const CalculateBasketValue = (): void => {
        let summaryProductsValue: number = 0;
        for (let i = 0; i < clothes.length; i++){
            summaryProductsValue+=clothes[i].price;
        }
        setBasketValue(summaryProductsValue);
    }

    const CalculateFinalPrice = (): number => (basketValue + deliveryCost);

    return (
        <div className="shoppingBasket-container">
            <h2 className="shoppingBasket-mainHeader">Twój koszyk</h2>
                {clothes?.map((product, i) => <BasketElement sizedProduct={product} key={product.name+i}></BasketElement>)}
            <div className="shoppingBasket-summary">
                <h2 className="shoppingBasket-summaryHeader">Podsumowanie</h2>
                <p>Wartość koszyka: {basketValue}</p>
                <p>Koszty wysyłki: {deliveryCost}</p>
                <p>Łącznie do zapłaty: {CalculateFinalPrice()}</p>
                <Button>IDŹ DO KASY</Button>
            </div>
        </div>
    );
}

export default ShoppingBasket;