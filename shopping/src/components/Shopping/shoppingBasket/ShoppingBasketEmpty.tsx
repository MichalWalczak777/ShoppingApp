import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";

const ShoppingBasketEmpty = () => {
  const currentUser = useSelector((state: RootState) => state.auth);

  return (
    <div className="shoppingBasket-empty">
      <div className="shoppingBasket-contentEmpty">
        <h2 className="shoppingBasket-headerEmpty">
          <ShoppingCartIcon className="shoppingBasket-basketIcon"></ShoppingCartIcon>{" "}
          Koszyk jest pusty.{" "}
        </h2>
        <p> Wybierz coś dla siebie z naszej oferty </p>
        <Button
          className="shoppingBasket-button shoppingBasket-materialComponent"
          variant="outlined"
          color="primary"
          component={Link}
          to="/"
        >
          {" "}
          STRONA GŁÓWNA{" "}
        </Button>
        <p>
          {" "}
          Zaloguj się lub zarejestruj, aby otrzymywać rabaty i mieć dostęp do
          koszyka z dowolnego urządzenia{" "}
        </p>
        {!currentUser && (
          <Button
            className="shoppingBasket-button shoppingBasket-materialComponent"
            variant="contained"
            color="primary"
            component={Link}
            to="/accountDetails"
          >
            {" "}
            ZALOGUJ SIĘ{" "}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ShoppingBasketEmpty;
