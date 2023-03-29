import React, { useContext } from "react";
import "./Cart.css";
import Order from "./Order";
import CartItem from "./CartItem";
import CartContext from "../../context/CartContext";

function Cart() {
  const { cartItems, addToCart, remove } = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              remove={remove}
              addToCart={addToCart}
            />
          ))}
        </div>
        <Order totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Cart;
