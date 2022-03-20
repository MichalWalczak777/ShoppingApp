import React, { useEffect } from "react";
import { ProductModel } from "../../../models/ProductModel";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/actions"
import { Select,
    MenuItem,
    Button,
    FormControl,
    InputLabel} from '@material-ui/core';
import { SizedProductModel } from "../../../models/SizedProductModel";

import { mockClothingItems as clothingItems } from '../../../productsData';
import { useParams } from 'react-router-dom';
import { changeBasketQuantity } from "../../../redux/actions/basketQuantity";
import { RootState } from "../../../redux/reducers";


const ProductDetails = () => {

    const paramId:{id:string} = useParams();
    const id:string = paramId.id;

    const basketGlobalState = useSelector((state: RootState) => state.basket);
    
    const setChosenProduct = () =>{
        const product = clothingItems.filter(item => item.id === id)[0]
        setSizedProduct({...product, size, quantity: 1});
        return product;
    }

    const sizes: Array<string> = ["XS", "S", "M", "L", "XL"];
    const dispatch = useDispatch();

    const [product, setProduct] = React.useState<ProductModel>({name: '', image: '', category: '', genderCategory: '', price: 0, id: ''});
    const [size, setSize] = React.useState<string>("M"); 
    const [sizedProduct, setSizedProduct] = React.useState<SizedProductModel>({name: '', image: '', category: '', genderCategory: '', price: 0, id: '', size: '', quantity: 0});

    useEffect(()=> {
        setProduct(setChosenProduct());
    },[size])

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSize(event.target.value as string);
      };

    const handleClick = () => {
        if (!(basketGlobalState.hasOwnProperty(sizedProduct.name+sizedProduct.size) && basketGlobalState[sizedProduct.name+sizedProduct.size].quantity >= 10)){
            dispatch(changeBasketQuantity(sizedProduct.quantity));
            dispatch(addToBasket(sizedProduct, sizedProduct.name + sizedProduct.size));
        }
    }

    const ProductDetailsMenu = () => {
        return (
            <div className="productDetails-menu">
            <div className="productDetails-menuInfo">
                <p className = 'productDetails-name'>{product.name}</p>
                <p className = 'productDetails-price'>{product.price}</p>
            </div>
            <div className="productDetails-selectWrapper">
                <div className="productDetails-menuUI">
                    <div className = 'productDetails-selectLabelOutside'>Wybierz rozmiar</div>
                    <FormControl className='productDetails-selectForm productDetails-materialComponent'>
                        <InputLabel className ='productDetails-selectLabelInside productDetails-materialComponent' id="productDetails-selectSizeLabel">Wybierz rozmiar</InputLabel>
                        <Select variant="outlined"
                                labelId="productDetails-selectSizeLabel"
                                id="productDetails-selectSize"
                                value={size}
                                onChange={handleChange}>
                            {sizes.map(itemSize => <MenuItem key={itemSize} value={itemSize}>{itemSize}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <Button className='productDetails-button productDetails-materialComponent' variant="contained" color="primary" onClick={handleClick}>
                    <ShoppingCartIcon/>
                    DODAJ
                </Button>
                <div className='productDetails-additionalInfo'><InfoIcon className='productDetails-additionalIcon productDetails-materialComponent'/><span className = 'productDetails-additionalInfoText'>Bezpłatna dostawa powyżej 200 złotych</span></div>
            </div>
        </div>
        )
    }

    const ProductDetailsDescription = () => {
        return(
        <div className='productDetails-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae nihil neque tempora laboriosam, at praesentium porro eius aspernatur enim delectus earum provident blanditiis facilis numquam sunt nulla. Tempora, debitis?</p>
            <h3 className='productDetails-descriptionBold'>Materiał</h3>
            <p>Bawełna 95%, poliester 5%</p>
            <h3 className='productDetails-descriptionBold'>Rozmiar</h3>
            <p>Osoba na zdjęciu ma 178 cm wzrostu i nosi rozmiar S </p>
        </div>  
    )
    }

    return (
        <div className="productDetails">
            <div className="productDetails-mobile">
                <div className="productDetails-mainContent">
                    <img className="productDetails-image" src={product.image}/>         
                    <ProductDetailsDescription/>
                </div>
                <ProductDetailsMenu/>
            </div>           
            <div className="productDetails-desktop">
                <div className="productDetails-mainContentDesktop">
                    <img className="productDetails-image" src={product.image}/>
                    <ProductDetailsDescription/>
                </div>
                <div className='productDetails-menuWrapper'>
                    <ProductDetailsMenu/>
                </div>
            </div>            
        </div>
    );
}

export default ProductDetails;