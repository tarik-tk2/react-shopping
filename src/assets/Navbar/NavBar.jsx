import React from "react";
import "./NavBar.css";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-height">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
