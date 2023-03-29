import React, { useContext, useState } from "react";
import "./Modal.css";
import { BsXCircleFill, BsCartPlus } from "react-icons/bs";
import Rating from "../book-slider/Rating";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

function Modal({ bookData, setOpenModal }) {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const { image, title, inStock, rating, author, price, id } = bookData;

  return (
    <div onClick={() => setOpenModal(false)} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <BsXCircleFill
          onClick={() => setOpenModal(false)}
          className="modal-icon"
        />
        <div className="modal-content-img">
          <img src={image} alt={title} />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status:</b> {inStock ? "in stock" : "not in stock"}
          </div>
          <Rating rating={rating} />
          <div className="modal-content-info-authors">
            <b>Author:</b> {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price:</b> {price}
          </div>
          <div className="modal-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              className="modal-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart({ ...bookData, quantity: qty })}
              className="modal-add-to-cart-btn"
            >
              <BsCartPlus />
              Add to Cart
            </button>
          </div>
          <Link to={`/bookcom/${id}`} className="modal-content-info-link">
            See More Deatils
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
