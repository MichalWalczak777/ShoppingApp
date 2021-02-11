import React from "react";
import './styles/main.scss';
import Header from "./components/generalUI/header/Header";
import Footer from "./components/generalUI/footer/Footer";

import { Button } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Header/>
      <Button className="button" variant="contained" color="default">Hello world</Button>    
      <Footer/>  
    </>
    );
}

export default App;
