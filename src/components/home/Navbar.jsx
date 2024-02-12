import React, { useState } from "react";
import Style from "./Navbar.module.css";
import UserIcon from "./UserIcon";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const menuController = () => {
    setHamMenu(!hamMenu);
  };
  return (
    <div className={Style.navbar}>
      <div className="container">
        <div className={Style.NavList}>
          <div className={Style.hamburger} onClick={menuController}>
            <span className="material-symbols-outlined">menu</span>
          </div>
          <div className={Style.hamMenuHide}>
            <NavbarList hamMenu={hamMenu} />
          </div>
          <div className={Style.hamMenuShow}>
            <NavbarList hamMenu={hamMenu} />
          </div>

          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
