import React from "react";
import discount from "../../assets/img1.jpg";
import lowerInterest from "../../assets/img2.jpg";
import InterestFree from "../../assets/img3.jpg";
import Style from "./Features.module.css";

const FeaturesCarousel = () => {
  return (
    <div className={Style.slider}>
      <div className={Style.slide}>
        <img src={discount} alt="slide" />
        <p>Lower Interest Rates</p>
      </div>
      <div className={Style.slide}>
        <img src={lowerInterest} alt="slide" />
        <p>Interest Free Payments</p>
      </div>
      <div className={Style.slide}>
        <img src={InterestFree} alt="slide" />
        <p>Discount on Materials</p>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
