import React from "react";
import Style from "./Login.module.css";
import Button from "./Button";
import LoginBanner from "./LoginBanner";

const Login = () => {
  return (
    <div className={`container ${Style.login_page}`}>
      <div className={Style.input_box}>
        <h2 className={Style.title}>Unlock Exclusive Benefits</h2>
        <div className={Style.input_fields}>
          <div className={Style.field}>
            <label htmlFor="phone">PHONE NUMBER</label>
            <div className={Style.phone_input}>
              <select name="countryCode" id="countryCode">
                <option value="+91">
                  +91 India
                </option>
                <option value="+81">USA</option>
              </select>
              <input type="number" placeholder="Mobile" />
            </div>
          </div>
          <div className={Style.field}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className={Style.field}>
            <label htmlFor="email">Email[Optional]</label>
            <input type="text" placeholder="Enter Email" />
          </div>
        </div>
        <Button />
        <p>Get ready to recieve a secret code (OTP) on your phone.</p>
      </div>
      <LoginBanner/>
    </div>
  );
};

export default Login;
