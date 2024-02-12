import React from "react";
import Style from "./Home.module.css";
import Membership from "./Membership";
import Features from "./Features";

const HomeContent = () => {
  return (
    <div className="container">
      <div className={Style.home}>
        <Membership/>
        <Features/>
      </div>
    </div>
  );
};

export default HomeContent;
