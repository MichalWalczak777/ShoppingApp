import React, { useEffect, useState } from "react";
import { SizedProductModel } from "../../../models/SizedProductModel";
import BasketElement from "../basketElement/BasketElement";
import { Button, makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const ShoppingBasket = () => {

    const deliveryCost: number = 9.99;
    const basketGlobalState = useSelector((state: RootState) => state.basket);
    const currentUser = useSelector((state: RootState) => state.auth);

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



    const EmptyBasket = () => {
        return (
            <div className='shoppingBasket-empty'>
                <div className = 'shoppingBasket-contentEmpty'>
                    <h2 className ='shoppingBasket-headerEmpty'><ShoppingCartIcon className ='shoppingBasket-basketIcon'></ShoppingCartIcon> Koszyk jest pusty. </h2>
                    <p> Wybierz coś dla siebie z naszej oferty </p>
                    <Button className = 'shoppingBasket-button shoppingBasket-materialComponent' variant="outlined" color="primary" component={Link} to="/"> STRONA GŁÓWNA </Button>
                    <p> Zaloguj się lub zarejestruj, aby otrzymywać rabaty i mieć dostęp do koszyka z dowolnego urządzenia </p>
                    {!currentUser && <Button className = 'shoppingBasket-button shoppingBasket-materialComponent' variant="contained" color="primary" component={Link} to="/accountDetails"> ZALOGUJ SIĘ </Button>}
                </div> 
            </div>
        )
    }

    const FilledBasket = () => {
        return (
        <div className='shoppingBasket-filled'>
            <div className='shoppingBasket-contentFilled'>
                <h2 className = 'shoppingBasket-mainHeader'>Twój koszyk</h2>
                <div className='shoppingBasket-basketElementsWrapper'>                        
                    {clothes?.map((product, i) => <BasketElement sizedProduct={product} key={product.name+i}></BasketElement>)}
                </div>
            </div>
            <div className='shoppingBasket-summary'>
                <div className='shoppingBasket-summaryContentWrapper'>
                    <h2 className='shoppingBasket-summaryHeader'>Podsumowanie</h2>
                    <div className="shoppingBasket-summaryContent">
                        <div className='shoppingBasket-summaryValuesWrapper'>
                            <div className='shoppingBasket-summaryValue'><p>Wartość koszyka: </p><p>{basketValue.toFixed(2) + " PLN"}</p></div>
                            <div className='shoppingBasket-summaryValue'><p>Koszty wysyłki: </p><p>{displayDeliveryCost().toFixed(2) + " PLN"}</p></div>
                        </div>
                        <div className='shoppingBasket-summaryTotal shoppingBasket-summaryValue'><p>Łącznie do zapłaty: </p><p>{CalculateFinalPrice().toFixed(2) + " PLN"}</p></div>
                        <Button className = 'shoppingBasket-button shoppingBasket-materialComponent' variant="contained" color="primary"> IDŹ DO KASY </Button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

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
        <>
            {clothes.length === 0 ? <EmptyBasket/> : <FilledBasket/>}
        </>
    );
}

export default ShoppingBasket;