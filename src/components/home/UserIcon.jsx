import React from "react";
import Style from "./Navbar.module.css";

const UserIcon = () => {
  return (
    <div className={Style.user_icon}>
      <span className={`material-symbols-outlined ${Style.person}`}>person</span>
      <span className={`material-symbols-outlined ${Style.database}`}>database</span>
      <p>Joseph lazer</p>
    </div>
  );
};

export default UserIcon;
