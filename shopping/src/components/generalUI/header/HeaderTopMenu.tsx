import React, { Dispatch, SetStateAction } from "react";
import { AppBar, Toolbar, IconButton, Badge } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Container from "../../reusableComponents/container/Container";

interface IProps {
  clothingCategories: { name: string; link: string }[];
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderTopMenu = (props: IProps) => {
  const basketQuantityState = useSelector((state: any) => state.basketQuantity);
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

  return (
    <AppBar className="header-appbar materialComponent">
      <Container>
        <Toolbar className="header-toolbar materialComponent">
          <div className="header-logoMobile materialComponent">
            <span className="header-hamburgerMenu">
              {" "}
              <IconButton onClick={() => props.setIsMenuOpen((prev) => !prev)}>
                <MenuIcon className="icon" />
              </IconButton>
            </span>
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
                {props.clothingCategories.map((category) => (
                  <Link to={category.link} key={category.name}>
                    <div className="header-categoryButton">{category.name}</div>
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
    </AppBar>
  );
};

export default HeaderTopMenu;
