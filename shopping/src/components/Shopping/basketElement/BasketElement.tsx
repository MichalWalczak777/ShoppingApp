import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { FormControl, InputLabel, Select, MenuItem, IconButton } from "@material-ui/core";
import { SizedProductModel } from "../../../models/SizedProductModel";
import { useDispatch } from "react-redux";
import { changeBasketItem, removeFromBasket } from "../../../redux/actions";
import { changeBasketQuantity } from "../../../redux/actions/basketQuantity";
import { Link } from "react-router-dom";

const BasketElement = ({sizedProduct}: {sizedProduct:SizedProductModel}) => {

    const maxQuantity: number = 10;
    const dispatch = useDispatch();
    const productKey: string = sizedProduct.name + sizedProduct.size;

    const [possibleQuantities, setPossibleQuantities] = useState<Array<number>> ([]);

    useEffect(()=>{
        fillQuantitiesArray();
    },[]);


    const handleClick = (e: React.MouseEvent) => {
        dispatch(changeBasketQuantity(-sizedProduct.quantity));
        dispatch(removeFromBasket(productKey));
    }

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        const difference = e.target.value as number - sizedProduct.quantity;
        dispatch(changeBasketQuantity(difference));
        dispatch(changeBasketItem(sizedProduct, e.target.value as number, productKey));
      };

    const fillQuantitiesArray = () => {
        let quantitiesArray = [];
        for (let i = 1; i< maxQuantity + 1; i++){
            quantitiesArray.push(i);
        }
        setPossibleQuantities(quantitiesArray);
    }

    return (
        <div className="basketElement">
            <div className="basketElement-imageWrapper">
                <Link to= {"/product" + "/" + sizedProduct.id}>
                    <img className="basketElement-image" src={sizedProduct.image} alt=""/>
                </Link>
            </div>
            <div className="basketElement-dataWrapper">
                <div className='basketElement-upperData'>
                    <div className='basketElement-mainInfo'>
                        <h3>{sizedProduct.name}</h3>
                        <p>{sizedProduct.price + " PLN"}</p>
                    </div>
                    <div>
                        <IconButton className='basketElement-iconButton basketElement-materialComponent' onClick={handleClick}>
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className='basketElement-lowerData'>
                    <p>Rozmiar: {" " + sizedProduct.size}</p>
                    <p>Suma: {(sizedProduct.price * sizedProduct.quantity).toFixed(2) + " PLN"}</p>
                    <Select className='basketElement-select'
                                variant="outlined"
                                id="basketElement-selectQuantity"
                                value={sizedProduct.quantity}
                                onChange={handleChange}>
                            {possibleQuantities.map(productsQuantity => <MenuItem key={"quantity"+productsQuantity} value={productsQuantity}>{productsQuantity}</MenuItem>)}
                    </Select>
                </div>
            </div>
        </div>
    );
}

export default BasketElement;