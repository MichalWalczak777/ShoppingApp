import React from "react";
import "./App.css";
import Header from "./components/GeneralUI/Header";
import Footer from "./components/GeneralUI/Footer";
import { Button } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Header/>
      <Button variant="contained" color="default">Hello world</Button>    
      <Footer/>  
    </>
    );
}

export default App;
