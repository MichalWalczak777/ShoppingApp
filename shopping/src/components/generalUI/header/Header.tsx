import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Menu,
  Drawer,
  Button,
  Badge,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Container from "../../reusableComponents/container/Container";

const Header = () => {
  const basketQuantityState = useSelector((state: any) => state.basketQuantity);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hamburgerMenu = () => {
    return (
      <IconButton onClick={handleMenu}>
        <MenuIcon className="icon" />
      </IconButton>
    );
  };
  const navigationIcons = [
    { icon: <SearchIcon />, name: "Wyszukaj", link: "/products/" },
    { icon: <AccountCircleIcon />, name: "Logowanie", link: "/accountDetails" },
    {
      icon: (
        <Badge badgeContent={basketQuantityState} color="primary">
          <ShoppingCartIcon />
        </Badge>
      ),
      name: "Koszyk",
      link: "/basket",
    },
  ];
  const drawerMenuOptions = [
    { name: "ona", link: "/products/woman" },
    { name: "on", link: "/products/man" },
    { name: "dziecko", link: "/products/kid" },
  ];

  const navigationMenu = () => {
    return (
      <Container>
        <Toolbar className="header-toolbar materialComponent">
          <div className="header-logoMobile materialComponent">
            <span className="header-hamburgerMenu">{hamburgerMenu()}</span>
            <Link to="/"> YOURSHOP </Link>
          </div>
          <div className="header-mobileNavigation">
            {navigationIcons.map((menuElement) => (
              <Link to={menuElement.link} key={menuElement.name}>
                <IconButton className="header-icon materialComponent">
                  {menuElement.icon}
                </IconButton>
              </Link>
            ))}
          </div>
          <div className="header-navMenu">
            <div className="header-navMenuLogo">
              <Link to="/"> YOURSHOP </Link>
            </div>
            <div className="header-navMenuContent">
              <div className="header-categoryButtons">
                {drawerMenuOptions.map((drawerCategory) => (
                  <Link to={drawerCategory.link} key={drawerCategory.name}>
                    <div className="header-categoryButton">
                      {drawerCategory.name}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="header-navButtons">
                {navigationIcons.map((menuElement) => (
                  <Link to={menuElement.link} key={menuElement.name}>
                    <IconButton className="header-icon materialComponent">
                      {menuElement.icon}
                      <span className="header-iconLabel">
                        {menuElement.name}
                      </span>
                    </IconButton>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Toolbar>
      </Container>
    );
  };

  return (
    <header>
      <AppBar className="header-appbar materialComponent">
        {navigationMenu()}
      </AppBar>
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <p className="header-drawerMenuClose">
          <IconButton onClick={handleMenu}>
            <CloseIcon />
          </IconButton>
        </p>
        <ul className="header-drawerMenu">
          {drawerMenuOptions?.map((option) => (
            <li key={option.name}>
              <button className="header-drawerMenuOption" onClick={handleMenu}>
                <Link to={option.link}>{option.name}</Link>
              </button>
            </li>
          ))}
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
