import React from "react";
import { AppBar,
    makeStyles,
    Toolbar,
    IconButton,
    Menu } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

const Header = () => {


    const useStyles = makeStyles(() => ({
        toolbar: {
          display: "flex",
          justifyContent: "space-between",
        }
    }));

      const {toolbar} = useStyles();

    const hamburgerMenu = () => {
        return (
            <IconButton>
              <MenuIcon />
            </IconButton>
        )
    }
    const navigationIcons = [{icon: <AccountCircleIcon/>, name: "account", link: "/authPanel"}, {icon: <SearchIcon/>, name: "search",  link: "/"}, {icon: <ShoppingCartIcon/>, name: "basket",  link: "/basket"}];

    const navigationMenu = () => {
        return (
            <Toolbar className={toolbar}>
                {hamburgerMenu()}
                <div className="navigationButtons">
                    {navigationIcons.map(menuElement => <Link to={menuElement.link} key={menuElement.name}><IconButton>{menuElement.icon}</IconButton></Link>)}
                </div>
            </Toolbar>)
    }
    return (
        <header className="header-appHeader">
            <AppBar>{navigationMenu()}</AppBar>
        </header>
    );
}

export default Header;