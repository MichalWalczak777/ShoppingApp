import React, { useEffect, useState } from "react";
import { SizedProductModel } from "../../../models/SizedProductModel";
import pulpFictionShirt from "../../../assets/arun-clarke-ZqnlW6EAel0-unsplash.jpg";
import BasketElement from "../basketElement/BasketElement";
import { Button, makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles(() => ({

    shoppingBasketContainer: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            maxWidth: '100vw',
    },
    emptyBasketBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        padding: '20px 0',
    },
    shoppingBasketButton: {
 
    },
    emptyBasketHeader: {
        marginTop: '120px',
        marginBottom: '70px',
        fontSize: '1.4rem',
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        marginTop: '20px',
        marginBottom: '30px',
        borderRadius: '5px',
        zIndex: 2,
        width: '300px'
    },
    buttonLabel: {
        paddingRight: '8px'
    },
    emptyBasketText: {
        fontSize: '0.9rem'
    },
    emptyBasketIcon: {
        paddingRight: '12px'
    }

}));

const ShoppingBasket = () => {

    const deliveryCost: number = 9.99;
    const basketGlobalState = useSelector((state: RootState) => state.basket);
    const currentUser = useSelector((state: RootState) => state.auth);
    const {emptyBasketBox, shoppingBasketContainer, emptyBasketHeader, emptyBasketText, buttonLabel, button, emptyBasketIcon} = useStyles();

    const defaultShirt: SizedProductModel = {name: '', image: '', category:'', genderCategory:'', price: 0, id: '', size: '', quantity: 0};
    const [clothes, setClothes] = useState<Array<SizedProductModel>>(new Array(3).fill(defaultShirt));
    const [basketValue, setBasketValue] = useState<number>(0);

    useEffect(() => {
        setClothes(Object.values(basketGlobalState));
    },[basketGlobalState]);

    useEffect(() => {
        CalculateBasketValue();
        CalculateFinalPrice();
    },[clothes]);


    const CalculateBasketValue = (): void => {
        let summaryProductsValue: number = 0;
        for (let i = 0; i < clothes.length; i++){
            summaryProductsValue+=clothes[i].price*clothes[i].quantity; 
        }
        setBasketValue(summaryProductsValue);
    }

    const CalculateFinalPrice = (): number => basketValue !== 0 ? basketValue + deliveryCost: basketValue;
    const displayDeliveryCost = (): number => basketValue !== 0 ? deliveryCost: 0;

    return (
        <div className={shoppingBasketContainer}>
            {clothes.length !== 0 && <h2 className = 'shoppingBasket-mainHeader'>Twój koszyk</h2>}
                {clothes.length === 0 && <div className={emptyBasketBox}> 
                                            <h2 className ={emptyBasketHeader}><ShoppingCartIcon className ={emptyBasketIcon}></ShoppingCartIcon> Koszyk jest pusty. </h2>
                                            <p className = {emptyBasketText}> Wybierz coś dla siebie z naszej oferty </p>
                                            <Button className = {button} variant="outlined" color="primary" component={Link} to="/"><span className={buttonLabel}> STRONA GŁÓWNA </span> </Button>
                                            <p className = {emptyBasketText}> Zaloguj się lub zarejestruj, aby otrzymywać rabaty i mieć dostęp do koszyka z dowolnego urządzenia </p>
                                            {!currentUser && <Button className = {button} variant="contained" color="primary" component={Link} to="/accountDetails"><span className={buttonLabel}> ZALOGUJ SIĘ </span> </Button>}
                                        </div>}
                {clothes?.map((product, i) => <BasketElement sizedProduct={product} key={product.name+i}></BasketElement>)}
            {clothes.length !== 0 && <div className="shoppingBasket-summary">
                                        <h2 className='shoppingBasket-summaryHeader'>Podsumowanie</h2>
                                        <p>Wartość koszyka: {basketValue.toFixed(2) + " PLN"}</p>
                                        <p>Koszty wysyłki: {displayDeliveryCost().toFixed(2) + " PLN"}</p>
                                        <p>Łącznie do zapłaty: {CalculateFinalPrice().toFixed(2) + " PLN"}</p> 
                                        <Button className = {button} variant="contained" color="primary"><span className={buttonLabel}> IDŹ DO KASY </span> </Button>
                                    </div>}
        </div>
    );
}

export default ShoppingBasket;