import React from 'react';
import banner from '../../assets/celeb.png';
import Style from './Login.module.css'

const LoginBanner = () => {
  return (
    <div className={Style.banner}>
        <img src={banner} alt="" />
    </div>
  )
}

export default LoginBanner