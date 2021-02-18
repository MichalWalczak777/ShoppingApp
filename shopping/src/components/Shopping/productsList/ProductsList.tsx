import React,{useState} from "react";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import Product from "../product/Product";

const ProductsList = () => {

    const defaultShirt:{name:string, image:string, price:number} = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, price: 75};

    const [clothes, setClothes] = useState(new Array(20).fill(defaultShirt));

    return (
        <>
            {clothes.map(c => <Product name={c.name} image={c.image} price = {c.price}/>)}
        </>
            )
}

export default ProductsList;