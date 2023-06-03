import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import "./navbar.scss"
import logo from "../../assets/countries.png"

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="titleWrapper">
            <img src={logo} alt="logo" style={{width:"45px", height:"45px"}} />
            <h1>All Countries in the world?</h1>
        </Link>
        <Toggle />
      </nav>
    </header>
  );
};

export default Navbar;