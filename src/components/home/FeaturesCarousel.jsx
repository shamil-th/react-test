import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import discount from "../../assets/img1.jpg";
import lowerInterest from "../../assets/img2.jpg";
import InterestFree from "../../assets/img3.jpg";
import Style from "./Features.module.css";

const FeaturesCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default FeaturesCarousel;
