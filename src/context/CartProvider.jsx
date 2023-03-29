import React, { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
  function addToCart(item) {
    const Example = cartItems.find((cart) => cart.id === item.id);

    if (Example) {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  }

  // Remove
  function remove(id) {
    const cart = cartItems.filter((cart) => cart.id !== id);
    setCartItems(cart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        remove,
        cartItemsLenght: cartItems.length
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
