import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ toggle, setToggle }) {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>
        <Link
          to="/authors"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Authors
        </Link>
        <Link
          to="/contact"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Contact Us
        </Link>
        <Link
          to="/register"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Register
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
