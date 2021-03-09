import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { SizedProductModel } from "../../../models/SizedProductModel";

const BasketElement = ({sizedProduct}: {sizedProduct:SizedProductModel}) => {

    const product: SizedProductModel = sizedProduct;
    const maxQuantity: number = 10;
    
    const [possibleQuantities, setPossibleQuantities] = useState<Array<number>> ([]);
    const [productQuantity, setProductQuantity] = useState<number>(1);

    useEffect(()=>{
        fillQuantitiesArray();
    },[]);

    const fillQuantitiesArray = () => {
        let quantitiesArray = [];
        for (let i = 1; i< maxQuantity + 1; i++){
            quantitiesArray.push(i);
        }
        setPossibleQuantities(quantitiesArray);
    }


    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setProductQuantity(e.target.value as number);
      };


    return (
        <div className="basketElement">
            <img className="basketElement-image"src={product.image} alt=""/>
            <div className="basketElement-data">
                <div className="basketElement-iconBox"><DeleteIcon/></div>
                <p>{product.name}</p>
                <p>{product.price + " PLN"}</p>
                <p>Rozmiar: {" " + product.size}</p>
                <p>Suma: {(product.price * productQuantity).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                    }) + " PLN"}</p>
                <FormControl>
                    <Select variant="outlined"
                            id="basketElement-selectQuantity"
                            value={productQuantity}
                            onChange={handleChange}>
                        {possibleQuantities.map(productsQuantity => <MenuItem key={"quantity"+productsQuantity} value={productsQuantity}>{productsQuantity}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default BasketElement;