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
import authPanel from "./components/auth/authPanel";
import { useDispatch } from "react-redux";
import firebase from "./firebase";
import { login } from "./redux/actions/auth";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(firebase.auth());
    firebase.auth().onAuthStateChanged(user => dispatch(login(user)));
  }, []);


  return (
    <>
    <HashRouter>
      <Header/>  
      <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/basket" component={ShoppingBasket}/>
          <Route exact path="/product/:id" component={ProductDetails}/>
          <Route exact path="/authPanel" component={authPanel}/>
      </Switch>
      <Footer/>                                                                                                                                                                                                              
    </HashRouter>
    </> 
    );
}

export default App;
