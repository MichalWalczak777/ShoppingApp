import React from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import {ProductModel} from "../../../models/ProductModel";

const Product = ({name, image, price}: ProductModel) => {
    
        return (
            <div className="product">
                <img className="product-image" src={image}/>
                <h2 className="product-name">{name}</h2>
                <h2 className="product-price">{price}</h2>
            </div>
        )

}

export default Product;