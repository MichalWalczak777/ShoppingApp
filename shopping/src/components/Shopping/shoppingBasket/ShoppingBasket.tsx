import React, { useEffect, useState } from "react";
import { SizedProductModel } from "../../../models/SizedProductModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import ShoppingBasketEmpty from "./ShoppingBasketEmpty";
import ShoppingBasketFilled from "./ShoppingBasketFilled";

const ShoppingBasket = () => {
  const basketGlobalState = useSelector((state: RootState) => state.basket);

  const defaultShirt: SizedProductModel = {
    name: "",
    image: "",
    category: "",
    genderCategory: "",
    price: 0,
    id: "",
    size: "",
    quantity: 0,
  };
  const [clothes, setClothes] = useState<Array<SizedProductModel>>(
    new Array(3).fill(defaultShirt)
  );

  useEffect(() => {
    setClothes(Object.values(basketGlobalState));
  }, [basketGlobalState]);

  return (
    <>
      {clothes.length === 0 ? (
        <ShoppingBasketEmpty />
      ) : (
        <ShoppingBasketFilled clothes={clothes} />
      )}
    </>
  );
};

export default ShoppingBasket;
