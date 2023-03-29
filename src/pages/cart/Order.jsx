import React from "react";

function Order({ totalPrice }) {
  return (
    <div className="cart-order">
      <div className="order-title">ORDER</div>
      <div className="order-item">
        <span>SubTotal</span>
        <span>${totalPrice}</span>
      </div>

      <div className="order-item">
        <span>Shopping Cost</span>
        <span>0</span>
      </div>

      <div className="order-item">
        <span>Discount</span>
        <span>0</span>
      </div>

      <div className="order-item">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
}

export default Order;
