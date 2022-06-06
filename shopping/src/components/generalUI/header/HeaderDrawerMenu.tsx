import React, { Dispatch, SetStateAction } from "react";
import {
  IconButton,
  Drawer
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

interface IProps {
  clothingCategories: { name: string; link: string }[];
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderDrawerMenu = (props: IProps) => {
  return (
    <Drawer
      anchor="left"
      open={props.isMenuOpen}
      onClose={() => props.setIsMenuOpen(false)}
    >
      <p className="header-drawerMenuClose">
        <IconButton onClick={() => props.setIsMenuOpen(prev => !prev)}>
          <CloseIcon />
        </IconButton>
      </p>
      <ul className="header-drawerMenu">
        {props.clothingCategories?.map((category) => (
          <li key={category.name}>
            <button
              className="header-drawerMenuOption"
              onClick={() => props.setIsMenuOpen(prev => !prev)}
            >
              <Link to={category.link}>{category.name}</Link>
            </button>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default HeaderDrawerMenu;
