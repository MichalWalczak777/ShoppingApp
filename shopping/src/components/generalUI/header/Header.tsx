import React, { useState } from "react";
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderDrawerMenu from "./HeaderDrawerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const drawerMenuOptions = [
    { name: "ona", link: "/products/woman" },
    { name: "on", link: "/products/man" },
    { name: "dziecko", link: "/products/kid" },
  ];

  return (
    <header>
      <HeaderTopMenu
        clothingCategories={drawerMenuOptions}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeaderDrawerMenu
        clothingCategories={drawerMenuOptions}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Header;
