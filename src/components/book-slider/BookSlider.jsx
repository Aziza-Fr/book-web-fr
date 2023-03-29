import React, { useContext, useState } from "react";
import "./BookSlider.css";
import {
  BsChevronLeft,
  BsChevronRight,
  BsEyeFill,
  BsCartPlus
} from "react-icons/bs";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import CartContext from "../../context/CartContext";

function BookSlider({ data }) {
  const { addToCart } = useContext(CartContext);

  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // HAndle Modal
  const handleModal = (book) => {
    setOpenModal(true);
    setBookData(book);
    console.log(book);
  };

  // HAndleClick
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && (
        <BsChevronLeft
          onClick={() => handleClick("left")}
          className="book-slider-arrow-left"
        />
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -300}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.title} className="book-slide-item">
            <img
              src={item.image}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title"> {item.title} </h3>
            <Rating rating={item.rating} />
            <div className="book-slide-item-price"> ${item.price} </div>
            <div className="book-slider-icons-wrapper">
              <BsEyeFill onClick={() => handleModal(item)} />
              <BsCartPlus onClick={() => addToCart({ ...item, quantity: 1 })} />
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && (
        <BsChevronRight
          onClick={() => handleClick("right")}
          className="book-slider-arrow-right"
        />
      )}
      ;{openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default BookSlider;
