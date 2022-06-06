import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import * as genderCategories from "../../../categories/clothingGenderCategories";

const StartPage = () => {
  return (
    <div className="startPage">
      <div className="startPage-imageWrapper startPage-imageWoman">
        <div className="startPage-WrapperContent">
          <h2>KOBIETA</h2>
          <Button
            className="startPage-materialComponent startPage-button"
            color="primary"
            variant="outlined"
            component={Link}
            to={"/products/" + genderCategories._WOMAN}
          >
            <span className="startPage-buttonLabel">Zobacz więcej</span>
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <div className="startPage-imageWrapper startPage-imageMan">
        <div className="startPage-WrapperContent">
          <h2>MĘŻCZYZNA</h2>
          <Button
            className="startPage-materialComponent startPage-button"
            color="primary"
            variant="outlined"
            component={Link}
            to={"/products/" + genderCategories._MAN}
          >
            <span className="startPage-buttonLabel">Zobacz więcej</span>
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <div className="startPage-imageWrapper startPage-imageKids">
        <div className="startPage-WrapperContent">
          <h2>DZIECKO</h2>
          <Button
            className="startPage-materialComponent startPage-button"
            color="primary"
            variant="outlined"
            component={Link}
            to={"/products/" + genderCategories._KID}
          >
            <span className="startPage-buttonLabel">Zobacz więcej</span>
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
