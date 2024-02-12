import React from "react";
import Style from "./Header.module.css";
import logo from "../../assets/real-estate-house.png";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={`container ${Style.company}`}>
        <div className={Style.brand_logo}>
          <img className={Style.logo} src={logo} alt="logo" />
        </div>
        <div className={Style.brand}>
          <p>XYZ SYSSTEMS LLP.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
