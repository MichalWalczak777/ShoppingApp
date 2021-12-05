import React, { useState } from "react";
import { AppBar,
    makeStyles,
    Toolbar,
    IconButton,
    Menu, 
    Drawer,
    Button} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    }
}));

const Header = () => {

    const {toolbar} = useStyles();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const hamburgerMenu = () => {
        return (
            <IconButton onClick={handleMenu}>
              <MenuIcon/>
            </IconButton>
        )
    }
    const navigationIcons = [{icon: <AccountCircleIcon/>, name: "account", link: "/accountDetails"}, {icon: <SearchIcon/>, name: "search",  link: "/"}, {icon: <ShoppingCartIcon/>, name: "basket",  link: "/basket"}];
    const drawerMenuOptions = [{name: "ONA", link: "/woman"}, {name: "ON", link: "/man"}, {name: "DZIECKO", link: "/kid"}]

    const navigationMenu = () => {
        return (
            <Toolbar className={toolbar}>
                <div>{hamburgerMenu()}YOURSHOP</div>
                <div className="navigationButtons">
                    {navigationIcons.map(menuElement => <Link to={menuElement.link} key={menuElement.name}><IconButton>{menuElement.icon}</IconButton></Link>)}
                </div>
            </Toolbar>)
    }

    return (
        <header className="header-appHeader">
            <AppBar>{navigationMenu()}</AppBar>
            <Drawer anchor="left" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <p className="header-drawerMenuClose"><IconButton onClick={handleMenu}><CloseIcon/></IconButton></p>
                <ul className="header-drawerMenu">
                    {drawerMenuOptions?.map(option => <li key={option.name}><button className="header-drawerMenuOption" onClick={handleMenu}><Link to={option.link}>{option.name}</Link></button></li> )}
                </ul>
            </Drawer>
        </header>
    );
}

export default Header;