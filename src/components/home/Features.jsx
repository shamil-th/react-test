import React from 'react';
import FeaturesTitle from './FeaturesTitle';
import FeaturesCarousel from './FeaturesCarousel';
import FooterFeatures from './FooterFeatures';
import Style from './Features.module.css';


const Features = () => {
  return (
    <div className={Style.features}>
        <FeaturesTitle/>
        <FeaturesCarousel/>
        <FooterFeatures/>
    </div>
  )
}

export default Features