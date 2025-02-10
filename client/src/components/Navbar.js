import React from "react";
// import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/upload">Upload Image</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/auth">Login</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/upload">Upload Image</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/auth">Login</NavLink>
    </nav>
  );
};

export default Navbar;
