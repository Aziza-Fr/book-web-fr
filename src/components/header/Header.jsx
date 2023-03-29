import React from "react";
import { useState } from "react";
import "./Header.css";
import HeaderTop from "../header/HeaderTop";
import HeaderMiddle from "../header/HeaderMiddle";
import Navbar from "../navbar/Navbar";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <HeaderTop setToggle={setToggle} toggle={toggle} />
      <HeaderMiddle />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </header>
  );
}

export default Header;
