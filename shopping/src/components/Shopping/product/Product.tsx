import React from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";

const Product = ({name, image, price}: {name:string, image:string, price: number}) => {
    
        return (
            <div className="">
                <img className="" src={image}/>
                <h2 className="">{name}</h2>
                <h2 className="">{price}</h2>
            </div>
        )

}

export default Product;