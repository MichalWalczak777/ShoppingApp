import React, {useEffect, useState} from "react";
import { Autocomplete } from '@material-ui/lab';
import ProductsList from "../productsList/ProductsList";
import { ProductModel } from "../../../models/ProductModel";
import ScrollToTop from "../../reusableComponents/ScrollToTop";
import {Button,
        TextField,
        makeStyles, 
        Select} from '@material-ui/core';
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

    const [productsToDisplay, setProductsToDisplay] = useState<Array<ProductModel>>([]);
    const [counter, setCounter] = useState<number>(0);
    const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState<boolean>(true); 
    const [itemCategoryFilter, setItemCategoryFilter] = useState<string>('');
    const [genderCategoryFilter, setGenderCategoryFilter] = useState<string>(defaultCategory);

    useEffect(() => {
      setCounter(0);
    },[genderCategoryFilter, itemCategoryFilter])

    useEffect(() => {
      if (counter === 0){
        setProductsToDisplay([]);
      }
    }, [counter]);

    useEffect(() => {
      if (productsToDisplay.length === 0){
        setIsShowMoreButtonVisible(true);
        handleShowMoreProducts();
      }
    }, [productsToDisplay])


    const applyProductFilters = (filteredClothes: Array<ProductModel>) => {

      if (genderCategoryFilter){
        filteredClothes = filteredClothes.filter(product => product.genderCategory === genderCategoryFilter);
      }
      if (itemCategoryFilter){
        filteredClothes = filteredClothes.filter(product => product.category === itemCategoryFilter);
      }
      return filteredClothes;
    }



    const calculateProductsToDisplay = () => {

      const firstProductIndex = counter*productsPerPage;
      const lastProductIndex = firstProductIndex+productsPerPage;
      const allFilteredProducts = applyProductFilters(clothingItems);
  
      if (lastProductIndex >= allFilteredProducts.length) {
        setIsShowMoreButtonVisible(false);
        if (firstProductIndex >= allFilteredProducts.length) return null;
      }

      setProductsToDisplay([...productsToDisplay, ...allFilteredProducts.slice(firstProductIndex, lastProductIndex)]);
  }

    const filterAutocompleteOptions = (options: Array<string>, state: string) => {
      return options.filter(option => option.includes(state));
    }

    const generateOptionCategories = () => clothingItems.map(product => product.category).filter((product, pos, self) => self.indexOf(product) === pos);



    const handleShowMoreProducts = () => {
        calculateProductsToDisplay();
        setCounter(prev => prev + 1);
    }

    const handleItemCategoryChange = (event: any, value: string) => {
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