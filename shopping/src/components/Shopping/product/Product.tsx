import React from "react";
import { ProductModel } from "../../../models/ProductModel";
import { Link } from "react-router-dom";

const Product = ({ name, image, price, id }: ProductModel) => {
  return (
    <div className="product">
      <Link to={"/product" + "/" + id}>
        <img className="product-image" src={image} />
        <h2 className="product-name">{name}</h2>
        <h2 className="product-price">{price + " PLN"}</h2>
      </Link>
    </div>
  );
};

export default Product;
