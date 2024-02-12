import React from 'react';
import Style from "./Login.module.css";
import { useNavigate } from 'react-router-dom';

const Button = () => {
  let navigate = useNavigate();
  const home = () => {
    navigate('/home')
  }
  return (
    <div>
        <button className={Style.button} onClick={home}>CONTINUE</button>
    </div>
  )
}

export default Button