import React, { useState } from "react";
import { ProductsArrayModel } from "../../../models/ProductsArrayModel";
import Product from "../product/Product";

const ProductsList = ({ productsArray }: ProductsArrayModel) => {
  return (
    <div className="productsList">
      {productsArray.map((product, index) => (
        <Product
          key={product.name + index}
          name={product.name}
          image={product.image}
          category={product.category}
          genderCategory={product.genderCategory}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsList;
