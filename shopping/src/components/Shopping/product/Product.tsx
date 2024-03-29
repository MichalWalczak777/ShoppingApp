import React from "react";
import {ProductModel} from "../../../models/ProductModel";
import {Link} from 'react-router-dom';

const Product = ({name, image, price}: ProductModel) => {
    
        return (
            <div className="product">
                <Link to={"/product" + "/" + name+price}>
                <img className="product-image" src={process.env.PUBLIC_URL + image}/>
                <h2 className="product-name">{name}</h2>
                <h2 className="product-price">{price + " PLN"}</h2>
                </Link>
            </div>
        )

}

export default Product;