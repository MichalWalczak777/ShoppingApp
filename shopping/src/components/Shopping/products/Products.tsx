import React, {useEffect, useState} from "react";
import { Autocomplete } from '@material-ui/lab';
import ProductsList from "../productsList/ProductsList";
import pulpFictionShirt from "../../../assets/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import { ProductModel } from "../../../models/ProductModel";
import ScrollToTop from "../../reusableComponents/ScrollToTop";
import {Button,
        Chip,
        TextField,
        makeStyles, 
        Select} from '@material-ui/core';
import { ProductsArrayModel } from "../../../models/ProductsArrayModel";
import * as genderCategories from './../../../categories/clothingGenderCategories';
import { mockClothingItems as clothingItems } from "../../../productsData";

const useStyles = makeStyles(() => ({
    hidden: {
      display: "none"
    },
    showMoreButton: {
            border: '1.5px solid black',
            borderRadius: '5px',
            color: 'black',
            zIndex: 2,
            alignSelf: 'center' 
    }
}));


const Products = ({defaultCategory}:{defaultCategory:string}) => {


    const productsPerPage: number = 20;

    const {hidden, showMoreButton} = useStyles();

    const [clothes, setClothes] = useState<Array<ProductModel>> (clothingItems);
    const [productsToDisplay, setProductsToDisplay] = useState<Array<ProductModel>>([]);
    const [counter, setCounter] = useState<number>(0);
    const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState<boolean>(true); 
    const [itemCategoryFilter, setItemCategoryFilter] = useState<string>('');
    const [genderCategoryFilter, setGenderCategoryFilter] = useState<string>(defaultCategory);

    useEffect(() => {
      console.log('item category set to: ' + itemCategoryFilter);
      setCounter(0);
    },[genderCategoryFilter, itemCategoryFilter])

    useEffect(() => {
      if (counter === 0){
        console.log('counter set to zero');
        setProductsToDisplay([]);
      }
    }, [counter]);

    useEffect(() => {
      if (productsToDisplay.length === 0){
        console.log('products to display empty')
        setIsShowMoreButtonVisible(true);
        handleShowMoreProducts();
      }
    }, [JSON.stringify(productsToDisplay)])


    const applyProductFilters = (clothes: Array<ProductModel>) => {
      let filteredClothes = clothes;
      console.log('itemFilter: ' + itemCategoryFilter);
      console.log('genderFilter: ' + genderCategoryFilter);

      if (genderCategoryFilter){
        filteredClothes = filteredClothes.filter(product => product.genderCategory === genderCategoryFilter);
      }
      if (itemCategoryFilter){
        filteredClothes = filteredClothes.filter(product => product.category === itemCategoryFilter);
      }
      return filteredClothes;
    }



    const calculateProductsToDisplay = () => {
      let newProducts: Array<ProductModel> = [];
      let filteredClothes: Array<ProductModel> = applyProductFilters(clothes);
  
      const firstProductIndex = counter*productsPerPage;
      const lastProductIndex = firstProductIndex+productsPerPage;
      for(let i = firstProductIndex; i < lastProductIndex; i++){
          filteredClothes[i] && newProducts.push(filteredClothes[i]);
      }
      ([...productsToDisplay, ...newProducts].length === filteredClothes.length) && setIsShowMoreButtonVisible(false);
      setProductsToDisplay([...productsToDisplay, ...newProducts]);
  }

    const filterAutocompleteOptions = (options: Array<string>, state: string) => {
      return options.filter(option => option.includes(state));
    }

    const generateOptionCategories = () => clothes.map(product => product.category).filter((product, pos, self) => self.indexOf(product) === pos);



    const handleShowMoreProducts = () => {
        calculateProductsToDisplay();
        setCounter(prev => prev + 1);
    }

    const handleItemCategoryChange = (event: any, value: string) => {
      console.log('autocomplete value: ' + value);
      setItemCategoryFilter(value);
    }
  
    const handleGenderCategoryChange = (event: any, value: unknown) => {
      setGenderCategoryFilter(event.target.value);
    }


    return(
        <div className="products">
            <ScrollToTop showBelow={1000}/>
            <Autocomplete
              filterOptions = {() => filterAutocompleteOptions(generateOptionCategories(), itemCategoryFilter)}
              disableClearable
              onInputChange = {handleItemCategoryChange}
              options={generateOptionCategories()}
              getOptionLabel={(option) => option}
              renderInput={(params) => <TextField {...params} label="Szukaj" variant="outlined" />}
            />
            <Select
            native
              variant = 'standard'
              value={genderCategoryFilter}
              onChange={handleGenderCategoryChange}
              label="Kategoria"
            >
              <option value={genderCategories._WOMAN}>KOBIETA</option>
              <option value={genderCategories._MAN}>MĘŻCZYZNA</option>
              <option value={genderCategories._KID}>DZIECKO</option>
              <option value={genderCategories._EVERYTHING}>WSZYSTKO</option>
            </Select>
            <div className="products-container">
                <ProductsList productsArray={productsToDisplay}/>
                <Button className={!isShowMoreButtonVisible ? hidden : showMoreButton} onClick={handleShowMoreProducts} variant='outlined'>WCZYTAJ WIĘCEJ PRODUKTÓW</Button>
            </div>
        </div>
    )
}

export default Products;