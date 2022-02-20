import React, { useEffect } from "react";
import './styles/main.scss';
import Header from "./components/generalUI/header/Header";
import Footer from "./components/generalUI/footer/Footer";
import StartPage from "./components/Shopping/startPage/StartPage";
import Products from "./components/Shopping/products/Products";
import ProductDetails from "./components/Shopping/productDetails/ProductDetails";
import ShoppingBasket from "./components/Shopping/shoppingBasket/ShoppingBasket";
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AuthPanel from "./components/auth/authPanel";
import { useDispatch } from "react-redux";
import firebase from "./firebase";
import { login } from "./redux/actions/auth";
import PrivateRoute from "./components/auth/PrivateRoute";
import AccountDetails from "./components/auth/accountDetails/AccountDetails";
import * as genderCategories from './categories/clothingGenderCategories';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => dispatch(login(user)));
  }, []);


  return (
    <div className="app">
      <HashRouter>
          <Header/>  
          <Switch>
            <div className='main-content'>
              <Route exact path="/" component={StartPage}/>
              <Route exact path="/products/:category" component={Products} />
              <Route exact path="/basket" component={ShoppingBasket}/>
              <Route exact path="/product/:id" component={ProductDetails}/>
              <Route exact path="/authPanel" component={AuthPanel}/>
              <PrivateRoute exact path="/accountDetails" component={AccountDetails}/>
            </div>
          </Switch>
          <Footer/>                                                                                                                                                                                                              
      </HashRouter>
    </div> 
    );
}

export default App;
