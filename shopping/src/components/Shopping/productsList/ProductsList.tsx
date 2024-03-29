import React,{useState} from "react";
import { ProductsArrayModel } from "../../../models/ProductsArrayModel";
import Product from "../product/Product";

const ProductsList = ({productsArray}: ProductsArrayModel) => {


    return (
        <div className="productsList">
            {productsArray.map((product,index) => <Product key= {product.name + index} name={product.name} image={product.image} price = {product.price}/>)}
        </div>
            )
}

export default ProductsList;