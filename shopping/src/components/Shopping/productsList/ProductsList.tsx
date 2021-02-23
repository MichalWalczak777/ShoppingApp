import React,{useState} from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import { ProductModel } from "../../../models/ProductModel";
import Product from "../product/Product";

const ProductsList = () => {

    const defaultShirt: ProductModel = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, price: "74,99 PLN"};

    const [clothes, setClothes] = useState<Array<ProductModel>>(new Array(20).fill(defaultShirt));

    return (
        <div className="productsList">
            {clothes.map((c,index) => <Product key= {c.name + index} name={c.name} image={c.image} price = {c.price}/>)}
        </div>
            )
}

export default ProductsList;