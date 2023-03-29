import { BsFillTelephoneFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";

function HeaderTop({ setToggle, toggle }) {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <BsX /> : <CgMenuRight />}
      </div>
      <div className="header-top-phone">
        <BsFillTelephoneFill />
        +91 111-11-11
      </div>
      <div className="header-top-text">Hello Readers Welcome!</div>
      <Link to="/login" className="header-top-list">
        <GoPerson />
        Login
      </Link>
    </div>
  );
}

export default HeaderTop;
