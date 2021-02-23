import React from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import {ProductModel} from "../../../models/ProductModel";

const Product = ({name, image, price}: ProductModel) => {
    
        return (
            <div className="">
                <img className="" src={image}/>
                <h2 className="">{name}</h2>
                <h2 className="">{price}</h2>
            </div>
        )

}

export default Product;