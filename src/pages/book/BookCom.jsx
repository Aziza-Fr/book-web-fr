import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import {
  BsCartPlus,
  BsFillFileEarmarkBreakFill,
  BsCalendar3,
  BsGlobe
} from "react-icons/bs";
import "./BookCom.css";
import CartContext from "../../context/CartContext";

function BookCom() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-authors">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} />
          <div className="book-add-to-cart">
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min="1"
              max="100"
              className="book-add-to-cart-input"
            />
            <button
              onClick={() => addToCart({ ...book, qty: quantity })}
              className="book-add-to-cart-btn"
            >
              <BsCartPlus />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nisi, ex
        ab sequi perspiciatis saepe tempore adipisci quam aut itaque unde
        necessitatibus ut atque aspernatur doloremque. Illo odio architecto in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laudantium
        eveniet pariatur labore debitis vel veritatis accusamus ratione quo
        deleniti, necessitatibus vero? Placeat natus dolorem corporis veniam
        quaerat accusantium laboriosam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Facilis eveniet itaque possimus tempore ipsa cumque
        eligendi, neque officiis illo vitae assumenda mollitia, omnis quae eos
        iste sit? Aperiam, aliquid ullam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rem, non? Possimus ratione libero, harum ex laboriosam
        accusamus vero at quas earum tempore dolorum odit temporibus quam!
        Inventore architecto voluptatibus asperiores.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <BsFillFileEarmarkBreakFill />
          <b>{book.printLength} Pages</b>
        </div>

        <div className="book-icon">
          <small>Language</small>
          <BsGlobe />
          <b>{book.language}</b>
        </div>

        <div className="book-icon">
          <small>Publication Date</small>
          <BsCalendar3 />
          <b>{book.publicationDate}</b>
        </div>
      </div>
    </div>
  );
}

export default BookCom;
