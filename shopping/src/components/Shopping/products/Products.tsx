import React, {useEffect, useState} from "react";
import { Autocomplete } from '@material-ui/lab';
import ProductsList from "../productsList/ProductsList";
import pulpFictionShirt from "../../../assets/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import { ProductModel } from "../../../models/ProductModel";
import ScrollToTop from "../../reusableComponents/ScrollToTop";
import {Button,
        Chip,
        TextField,
        makeStyles } from '@material-ui/core';
import "../../../woman";
import { ProductsArrayModel } from "../../../models/ProductsArrayModel";

const useStyles = makeStyles(() => ({
    hidden: {
      display: "none"
    }
}));

const Products = ({productsArray, mainHeader}:{productsArray:Array<ProductModel>, mainHeader:string}) => {

    const defaultShirt: ProductModel = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, price: 74.99};
    const productsPerPage: number = 20;
    const tags: Array<string> = (["wzorzysty podkoszulek", "jeansy czarne", "hawajska koszula", "elegancka koszula", "krótkie spodenki"]);

    const {hidden} = useStyles();

    const [clothes, setClothes] = useState<Array<ProductModel>>(productsArray);
    const [productsToDisplay, setProductsToDisplay] = useState<Array<ProductModel>>([]);
    const [counter, setCounter] = useState<number>(0);
    const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState<boolean>(true);

    useEffect(() => {
        setIsShowMoreButtonVisible(true)
        handleShowMoreProducts();
      }, [clothes]);


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
        ([...productsToDisplay, ...newProducts].length === clothes.length) && setIsShowMoreButtonVisible(false);
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
                <h2 className="products-mainHeader">{mainHeader}</h2>
                <div className="products-chips">
                    <Chip size="medium" label="Podkoszulki" color="primary"/>
                    <Chip size="medium" label="Koszule" color="primary"/>
                    <Chip size="medium" label="Spodnie" color="primary"/>
                </div>
                <ProductsList productsArray={productsToDisplay}/>
                <Button className={!isShowMoreButtonVisible ? hidden : ""} onClick={handleShowMoreProducts}>WCZYTAJ WIĘCEJ PRODUKTÓW</Button>
            </div>
        </div>
    )
}

export default Products;