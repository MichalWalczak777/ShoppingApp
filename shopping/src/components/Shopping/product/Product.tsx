import React from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import {ProductModel} from "../../../models/ProductModel";
import {Link} from 'react-router-dom';

const Product = ({name, image, price}: ProductModel) => {
    
        return (
            <div className="product">
                <Link to={"/product" + "/" + name+price}>
                <img className="product-image" src={image}/>
                <h2 className="product-name">{name}</h2>
                <h2 className="product-price">{price}</h2>
                </Link>
            </div>
        )

}

export default Product;