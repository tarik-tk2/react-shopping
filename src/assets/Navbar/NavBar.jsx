import React from "react";
import "./NavBar.css";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-height">
      <img src={logo} alt="" />
      <div className="link">
        <Link
          to="/shop"
          style={{ paddingRight: "10px", textDecoration: "none" }}
        >
          Shop
        </Link>
        <Link
          to="/order"
          style={{ paddingRight: "10px", textDecoration: "none", }}
        >
          Order
        </Link>
        <Link
          to="/inventory"
          style={{ paddingRight: "10px", textDecoration: "none" }}
        >
          Inventory
        </Link>
        <Link
          to="/login"
          style={{ paddingRight: "10px", textDecoration: "none" }}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
