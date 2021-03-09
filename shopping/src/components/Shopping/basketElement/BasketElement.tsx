import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { FormControl, InputLabel, Select, MenuItem, IconButton } from "@material-ui/core";
import { SizedProductModel } from "../../../models/SizedProductModel";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../../redux/actions";

const BasketElement = ({sizedProduct}: {sizedProduct:SizedProductModel}) => {

    const maxQuantity: number = 10;
    const dispatch = useDispatch();
    const productKey: string = sizedProduct.name + sizedProduct.size;

    const [possibleQuantities, setPossibleQuantities] = useState<Array<number>> ([]);

    useEffect(()=>{
        fillQuantitiesArray();
    },[]);


    const handleClick = (e: React.MouseEvent) => {
        dispatch(removeFromBasket(productKey));
    }

    const handleChange = () => {

    }

    const fillQuantitiesArray = () => {
        let quantitiesArray = [];
        for (let i = 1; i< maxQuantity + 1; i++){
            quantitiesArray.push(i);
        }
        setPossibleQuantities(quantitiesArray);
    }

    return (
        <div className="basketElement">
            <img className="basketElement-image"src={sizedProduct.image} alt=""/>
            <div className="basketElement-data">
                <div className="basketElement-iconBox">
                    <IconButton onClick={handleClick}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <p>{sizedProduct.name}</p>
                <p>{sizedProduct.price + " PLN"}</p>
                <p>Rozmiar: {" " + sizedProduct.size}</p>
                <p>Suma: {(sizedProduct.price * sizedProduct.quantity).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                    }) + " PLN"}</p>
                <FormControl>
                    <Select variant="outlined"
                            id="basketElement-selectQuantity"
                            value={sizedProduct.quantity}
                            onChange={handleChange}>
                        {possibleQuantities.map(productsQuantity => <MenuItem key={"quantity"+productsQuantity} value={productsQuantity}>{productsQuantity}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default BasketElement;