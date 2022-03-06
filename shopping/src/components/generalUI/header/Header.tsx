import React, { useState } from "react";
import { AppBar,
    makeStyles,
    Toolbar,
    IconButton,
    Menu, 
    Drawer,
    Button,
    Badge} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Container from "../../reusableComponents/container/Container";


const useStyles = makeStyles(() => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    appbar: {
        backgroundColor: "#fff"
    },
    icon: {
        color: '#000'
    },
    logo: {
        color: '#000',
        fontFamily: 'Orbitron'
    }
}));

const Header = () => {

    const basketQuantityState = useSelector((state: any) => state.basketQuantity);

    const {appbar, toolbar, icon, logo} = useStyles();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const hamburgerMenu = () => {
        return (
            <IconButton onClick={handleMenu}>
              <MenuIcon className={icon}/>
            </IconButton>
        )
    }
    const navigationIcons = [{icon: <AccountCircleIcon/>, name: "account", link: "/accountDetails"}, {icon: <SearchIcon/>, name: "search",  link: "/products/"}, {icon: <Badge badgeContent={basketQuantityState} color="primary"><ShoppingCartIcon/></Badge>, name: "basket",  link: "/basket"}];
    const drawerMenuOptions = [{name: "ONA", link: "/woman"}, {name: "ON", link: "/man"}, {name: "DZIECKO", link: "/kid"}]

    const navigationMenu = () => {
        return (
            <Container>
                <Toolbar className={toolbar}>
                    <div className={logo}>{hamburgerMenu()}<Link to = '/'> YOURSHOP </Link></div>
                    <div className="navigationButtons">
                        {navigationIcons.map(menuElement => <Link to={menuElement.link} key={menuElement.name}><IconButton className={icon}>{menuElement.icon}</IconButton></Link>)}
                    </div>
                </Toolbar>
            </Container>)
    }

    return (
        <header>
            <AppBar className={appbar}>{navigationMenu()}</AppBar>
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