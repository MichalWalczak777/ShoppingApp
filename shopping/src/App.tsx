import React from "react";
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


const App = () => {
  return (
    <>
    <HashRouter>
      <Header/>  
      <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/basket" component={ShoppingBasket}/>
          <Route exact path="/product/:id" component={ProductDetails}/>
      </Switch>
      <Footer/>                                                                                                                                                                                                              
    </HashRouter>
    </> 
    );
}

export default App;
