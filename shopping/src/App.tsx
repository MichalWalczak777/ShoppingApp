import React from "react";
import './styles/main.scss';
import Header from "./components/generalUI/header/Header";
import Footer from "./components/generalUI/footer/Footer";
import StartPage from "./components/shopping/startPage/StartPage";
import Products from "./components/shopping/products/Products";
import ProductDetails from "./components/shopping/productDetails/ProductDetails";
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import { ReactNode } from "react";

export interface IProps {
  name: string;
}

const App = () => {
  return (
    <>
    <HashRouter>
      <Header/>  
      <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/product/:id" component={ProductDetails}/>
      </Switch>
      <Footer/>                                                                                                                                                                                                              
    </HashRouter>
    </> 
    );
}

export default App;
