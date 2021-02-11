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
    const navigationIcons = [{icon: <AccountCircleIcon/>, name: "account"}, {icon: <SearchIcon/>, name: "search"}, {icon: <ShoppingCartIcon/>, name: "basket"}];

    const navigationMenu = () => {
        return (
            <Toolbar className={toolbar}>
                {hamburgerMenu()}
                <div className="navigationButtons">
                    {navigationIcons.map(e => <IconButton key={e.name}>{e.icon}</IconButton>)}
                </div>
            </Toolbar>)
    }
    return (
        <header>
            <AppBar>{navigationMenu()}</AppBar>
        </header>
    );
}

export default Header;