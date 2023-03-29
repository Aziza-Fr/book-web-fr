import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";
import { SiMdbook } from "react-icons/si";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Header.css";

function HeaderMiddle() {
  const { cartItemsLenght } = useContext(CartContext);

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Library</b>
        <SiMdbook />
        <b>Books</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search..."
        />
        <FcSearch />
      </div>
      <Link to="/cart" className="header-middle-cart-wrap">
        {cartItemsLenght > 0 && (
          <b className="notifacation"> {cartItemsLenght} </b>
        )}
        <CgShoppingCart />
      </Link>
    </div>
  );
}

export default HeaderMiddle;
