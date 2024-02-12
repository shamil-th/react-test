import React from 'react'
import Style from "./Navbar.module.css";

const NavbarList = ({hamMenu}) => {
  return (
    <ul className={hamMenu? Style.list : Style.hide}>
    <li>Home</li>
    <li>Dash board</li>
    <li>Products</li>
    <li>Transactions</li>
    <li>Journal</li>
  </ul>
  )
}

export default NavbarList