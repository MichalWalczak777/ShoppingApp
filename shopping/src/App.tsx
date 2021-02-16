import React from "react";
import './styles/main.scss';
import Header from "./components/generalUI/header/Header";
import Footer from "./components/generalUI/footer/Footer";
import StartPage from "./components/shopping/startPage/StartPage";

const App = () => {
  return (
    <>
      <Header/>  
      <StartPage/>
      <Footer/>  
    </>
    );
}

export default App;
