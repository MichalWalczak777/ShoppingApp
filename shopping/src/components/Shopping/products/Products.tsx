import React, { useEffect, useState, useRef } from "react";
import { Autocomplete } from "@material-ui/lab";
import ProductsList from "../productsList/ProductsList";
import { ProductModel } from "../../../models/ProductModel";
import ScrollToTop from "../../reusableComponents/ScrollToTop";
import {
  Button,
  TextField,
  makeStyles,
  Select,
  MenuItem,
} from "@material-ui/core";
import * as genderCategories from "./../../../categories/clothingGenderCategories";
import { mockClothingItems as clothingItems } from "../../../productsData";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  hidden: {
    display: "none",
  },
  showMoreButton: {
    border: "1.5px solid black",
    borderRadius: "5px",
    color: "black",
    zIndex: 2,
    alignSelf: "center",
  },
}));

const Products = () => {
  const productsPerPage: number = 24;

  const { hidden, showMoreButton } = useStyles();
  const focusable = useRef<HTMLInputElement>(null);
  const pathParameters: { category: string } = useParams();

  const [productsToDisplay, setProductsToDisplay] = useState<
    Array<ProductModel>
  >([]);
  const [counter, setCounter] = useState<number>(0);
  const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] =
    useState<boolean>(true);
  const [searchbarValue, setSearchbarValue] = useState<string>("");
  const [itemCategoryFilter, setItemCategoryFilter] = useState<string>("");
  const [genderCategoryFilter, setGenderCategoryFilter] = useState<string>(
    pathParameters.category || genderCategories._EVERYTHING
  );

  useEffect(() => {
    setCounter(0);
  }, [genderCategoryFilter, itemCategoryFilter]);

  useEffect(() => {
    if (counter === 0) {
      setProductsToDisplay([]);
    }
  }, [counter]);

  useEffect(() => {
    if (productsToDisplay.length === 0) {
      setIsShowMoreButtonVisible(true);
      handleShowMoreProducts();
    }
  }, [productsToDisplay]);

  useEffect(() => {
    setGenderCategoryFilter(
      pathParameters.category || genderCategories._EVERYTHING
    );
    if (!pathParameters.category) {
      focusable.current?.focus();
    }
  }, [pathParameters]);

  const applyProductFilters = (filteredClothes: Array<ProductModel>) => {
    if (genderCategoryFilter) {
      filteredClothes = filteredClothes.filter(
        (product) => product.genderCategory === genderCategoryFilter
      );
    }
    if (itemCategoryFilter) {
      filteredClothes = filteredClothes.filter((product) =>
        product.category.includes(itemCategoryFilter)
      );
    }
    return filteredClothes;
  };

  const calculateProductsToDisplay = () => {
    const firstProductIndex = counter * productsPerPage;
    const lastProductIndex = firstProductIndex + productsPerPage;
    const allFilteredProducts = applyProductFilters(clothingItems);

    if (lastProductIndex >= allFilteredProducts.length) {
      setIsShowMoreButtonVisible(false);
      if (firstProductIndex >= allFilteredProducts.length) return null;
    }

    setProductsToDisplay([
      ...productsToDisplay,
      ...allFilteredProducts.slice(firstProductIndex, lastProductIndex),
    ]);
  };

  const filterAutocompleteOptions = (options: Array<string>, state: string) => {
    return options.filter((option) => option.includes(state));
  };

  const generateOptionCategories = () =>
    clothingItems
      .map((product) => product.category)
      .filter((product, pos, self) => self.indexOf(product) === pos);

  const handleShowMoreProducts = () => {
    calculateProductsToDisplay();
    setCounter((prev) => prev + 1);
  };

  const handleItemCategoryChange = (event: any, value: string) => {
    setTimeout(() => {
      setSearchbarValue(value);
      setItemCategoryFilter(value);
    });
  };

  const handleSearchbarChange = (event: any, value: string, reason: string) => {
    if (reason === "input") {
      setSearchbarValue(event.target.value);
    }
  };

  const handleGenderCategoryChange = (event: any, value: unknown) => {
    setGenderCategoryFilter(event.target.value);
  };

  const handleClose = async () => {
    setItemCategoryFilter(searchbarValue);
  };

  return (
    <div className="products">
      <ScrollToTop showBelow={1000} />
      <Autocomplete
        clearOnEscape
        filterOptions={() =>
          filterAutocompleteOptions(generateOptionCategories(), searchbarValue)
        }
        disableClearable
        inputValue={searchbarValue}
        onInputChange={handleSearchbarChange}
        onChange={handleItemCategoryChange}
        onClose={handleClose}
        options={generateOptionCategories()}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={focusable}
            label="Szukaj"
            variant="outlined"
          />
        )}
      />
      <Select
        displayEmpty
        className="products-categorySelect products-materialComponent"
        value={genderCategoryFilter}
        onChange={handleGenderCategoryChange}
        label="Kategoria"
        variant="standard"
      >
        <MenuItem value={genderCategories._WOMAN}>Kobieta</MenuItem>
        <MenuItem value={genderCategories._MAN}>Mężczyzna</MenuItem>
        <MenuItem value={genderCategories._KID}>Dziecko</MenuItem>
        <MenuItem value={genderCategories._EVERYTHING}>Wszystko</MenuItem>
      </Select>

      <div className="products-container">
        <ProductsList productsArray={productsToDisplay} />
        <Button
          className={!isShowMoreButtonVisible ? hidden : showMoreButton}
          onClick={handleShowMoreProducts}
          variant="outlined"
        >
          WCZYTAJ WIĘCEJ PRODUKTÓW
        </Button>
      </div>
    </div>
  );
};

export default Products;
