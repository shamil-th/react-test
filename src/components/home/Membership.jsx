import React from "react";
import Style from "./Home.module.css";
import membershipBanner from "../../assets/membership.jpg";
const Membership = () => {
  return (
    <div className={Style.membership}>
      <h1>New Arrival</h1>
      <small className={Style.sub_title}>JOIN TODAY</small>
      <div className={Style.banner}>
        <img src={membershipBanner} alt="membership banner" />
      </div>
      <div className={Style.button}>
      <button>JOIN NOW</button>
      </div>
    </div>
  );
};

export default Membership;
