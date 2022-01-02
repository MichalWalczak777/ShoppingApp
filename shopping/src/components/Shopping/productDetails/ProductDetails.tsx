import React, { useEffect } from "react";
import pulpFictionShirt from "../../../assets/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import { ProductModel } from "../../../models/ProductModel";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../redux/actions"
import { Select,
    MenuItem,
    Button,
    makeStyles, 
    FormControl,
    InputLabel} from '@material-ui/core';
import { SizedProductModel } from "../../../models/SizedProductModel";

import { womensProducts } from '../../../woman';
import { mensProducts } from '../../../man';
import { kidsProducts } from '../../../kid';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    productDetailsButton: {
        height: "56px",
        width: "48%"
    },
    productDetailsSelectSize: {
        height: "100%",
        width: "48%"
    },
    productName: {
        textTransform: 'capitalize'
    }
}));

const ProductDetails= () => {

    const {productDetailsButton, productDetailsSelectSize, productName} = useStyles();
    const paramId:{id:string} = useParams();
    const id:string = paramId.id;

    let product: ProductModel = {name: "podkoszulek pulp fiction", image: pulpFictionShirt, category:'podkoszulki', price: 74.99, id: 'w1'};

    if (id.charAt(0)==='w'){
        product = womensProducts.filter(item => item.id === id)[0]
    }
    else if (id.charAt(0)==='m'){
        product = mensProducts.filter(item => item.id === id)[0]
    }
    else if (id.charAt(0)==='k'){
        product = kidsProducts.filter(item => item.id === id)[0]
    }

    const sizes: Array<string> = ["XS", "S", "M", "L", "XL"];
    const dispatch = useDispatch();

    const [size, setSize] = React.useState<string>("M");
    const [sizedProduct, setSizedProduct] = React.useState<SizedProductModel>({...product, size: " ", quantity: 1});

    useEffect(()=> {
        const productToAdd = {
            name: "podkoszulek pulp fiction",
            image: pulpFictionShirt,
            price: 74.99,
            size: size,
            quantity: 1
        }
        setSizedProduct(productToAdd);
    },[size])

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSize(event.target.value as string);
      };

    const handleClick = () => {
        dispatch(addToBasket(sizedProduct, sizedProduct.name + sizedProduct.size));
    }

    return (
        <div className="productDetails">
            <div className="productDetails-mainContent">
                <img className="productDetails-image" src={product.image}/>         
                <p className="productDetails-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae nihil neque tempora laboriosam, at praesentium porro eius aspernatur enim delectus earum provident blanditiis facilis numquam sunt nulla. Tempora, debitis?</p>
            </div>
            <div className="productDetails-bottomMenu">
                <div className="productDetails-bottomMenuRow">
                    <p className = {productName}>{product.name}</p>
                    <p>{product.price}</p>
                </div>
                <div className="productDetails-bottomMenuRow">
                <FormControl className={productDetailsSelectSize}>
                    <InputLabel id="productDetails-selectSizeLabel">Wybierz rozmiar</InputLabel>
                    <Select variant="outlined"
                            labelId="productDetails-selectSizeLabel"
                            id="productDetails-selectSize"
                            value={size}
                            onChange={handleChange}>
                        {sizes.map(itemSize => <MenuItem key={itemSize} value={itemSize}>{itemSize}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button className={productDetailsButton} variant="contained" color="primary" onClick={handleClick}>
                    <ShoppingCartIcon/>
                    DODAJ
                </Button>
                </div>
            </div>        
        </div>
    );
}

export default ProductDetails;