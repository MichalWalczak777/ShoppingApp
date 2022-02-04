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
import { mensProducts, womensProducts, kidsProducts } from "../../../productsData";

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


  const filterByGenderCategory = (category:string): Array<ProductModel> => {
    switch (category){
      case genderCategories._WOMAN:
        return womensProducts;
      case genderCategories._MAN:
        return mensProducts;
      case genderCategories._KID:
        return kidsProducts;
      case genderCategories._EVERYTHING:
        return [...womensProducts, ...mensProducts, ...kidsProducts];
      default:
        return [...womensProducts, ...mensProducts, ...kidsProducts];
    }
  }

    const productsPerPage: number = 20;

    const {hidden, showMoreButton} = useStyles();

    const [genderCategory, setGenderCategory] = useState<string>(defaultCategory);
    const [clothes, setClothes] = useState<Array<ProductModel>> (() => filterByGenderCategory(defaultCategory));
    const [productsToDisplay, setProductsToDisplay] = useState<Array<ProductModel>>([]);
    const [counter, setCounter] = useState<number>(0);
    const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState<boolean>(true); 
    const [itemCategoryFilter, setItemCategoryFilter] = useState<string>('');

    useEffect(() => {
      setIsShowMoreButtonVisible(true);
      handleShowMoreProducts();
    }, [clothes, itemCategoryFilter]);

    useEffect(() => {
      setClothes(filterByGenderCategory(genderCategory));
    },[genderCategory])



    const CalculateProductsToDisplay = (counter: number) => {
      let newProducts: Array<ProductModel> = [];
      let filteredClothes: Array<ProductModel> = clothes;
      if (itemCategoryFilter){
          filteredClothes = clothes.filter(product => product.category === itemCategoryFilter);
      }
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
        CalculateProductsToDisplay(counter);
        setCounter((prev) => prev + 1);
    }

    const handleAutocompleteChange = (event: any, value: string) => {
      setItemCategoryFilter(value);
      setCounter(0);
      setProductsToDisplay([]);
    }
  
    const handleGenderCategoryChange = (event: any, value: unknown) => {
      const newGenderCategory = value as string;
      console.log('nowa kategoria ' + JSON.stringify(newGenderCategory))
      setGenderCategory(newGenderCategory);
    }


    return(
        <div className="products">
            <ScrollToTop showBelow={1000}/>
            <Autocomplete
              filterOptions = {() => filterAutocompleteOptions(generateOptionCategories(), itemCategoryFilter)}
              disableClearable
              onInputChange = {handleAutocompleteChange}
              options={generateOptionCategories()}
              getOptionLabel={(option) => option}
              renderInput={(params) => <TextField {...params} label="Szukaj" variant="outlined" />}
            />
            <Select
            native
              variant = 'standard'
              value={genderCategory}
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