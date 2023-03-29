import React from "react";
import { BsPlusLg, BsDashLg, BsTrashFill } from "react-icons/bs";

function CartItem({ item, addToCart, remove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title: </b> {item.title}
          </div>
          <div className="cart-item-author">
            <b>Author: </b> {item.author}
          </div>
        </div>
        <div>
          <div className="cart-item-quantity">
            <button
              onClick={() =>
                addToCart({ ...item, quantity: item.quantity + 1 })
              }
            >
              <BsPlusLg />
            </button>
            <b>{item.quantity}</b>
            <button
              onClick={() =>
                addToCart({ ...item, quantity: item.quantity - 1 })
              }
            >
              <BsDashLg />
            </button>
          </div>
          <div className="cart-item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <BsTrashFill
            onClick={() => remove(item.id)}
            className="cart-item-trash"
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
