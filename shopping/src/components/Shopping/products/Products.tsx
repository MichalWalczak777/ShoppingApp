import React, {useEffect, useState, useRef} from "react";
import { Button, Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ProductsList from "../productsList/ProductsList";
import pulpFictionShirt from "../../../assets/products/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import { ProductModel } from "../../../models/ProductModel";
import ScrollToTop from "../../reusableComponents/ScrollToTop";
const Products = () => {

    const defaultShirt: ProductModel = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, price: "74,99 PLN"};
    const productsPerPage: number = 20;
    const tags: Array<string> = (["wzorzysty podkoszulek", "jeansy czarne", "hawajska koszula", "elegancka koszula", "krótkie spodenki"]);

    const [clothes, setClothes] = useState<Array<ProductModel>>(new Array(220).fill(defaultShirt));
    const [productsToDisplay, setProductsToDisplay] = useState<Array<ProductModel>>([]);
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        handleShowMoreProducts();
      }, []);

    const handleShowMoreProducts = () => {
        CalculateProductsToDisplay(counter);
        setCounter((prev) => prev + 1);
    }

    const CalculateProductsToDisplay = (counter: number) => {
        let newProducts: Array<ProductModel> = [];
        const firstProductIndex = counter*productsPerPage;
        const lastProductIndex = firstProductIndex+productsPerPage;
        for(let i = firstProductIndex; i < lastProductIndex; i++){
            clothes[i] && newProducts.push(clothes[i]);
        }
        setProductsToDisplay([...productsToDisplay, ...newProducts]);
    }

    return(
        <div className="products">
            <ScrollToTop showBelow={1000}/>
            <Autocomplete
            options={tags}
            getOptionLabel={(option) => option}
            renderInput={(params) => <TextField {...params} label="Szukaj" variant="outlined" />}
            />
            <div className="products-container">
                <h2 className="products-mainHeader">Odzież męska</h2>
                <div className="products-chips">
                    <Chip size="medium" label="Podkoszulki" color="primary"/>
                    <Chip size="medium" label="Koszule" color="primary"/>
                    <Chip size="medium" label="Spodnie" color="primary"/>
                </div>
                <ProductsList productsArray={productsToDisplay}/>
                <Button onClick={handleShowMoreProducts}>WCZYTAJ WIĘCEJ PRODUKTÓW</Button>
            </div>
        </div>
    )
}

export default Products;