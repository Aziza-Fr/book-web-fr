import React from "react";
import "./Services.css";
import { BsTruck, BsGift, BsArrowClockwise, BsSend } from "react-icons/bs";

function Services() {
  return (
    <div className="services">
      <div className="service-item">
        <BsTruck />
        <b>Free Shipping</b>
      </div>

      <div className="service-item">
        <BsGift />
        <b>Gift Card</b>
      </div>

      <div className="service-item">
        <BsArrowClockwise />
        <b>6 Days Return</b>
      </div>

      <div className="service-item">
        <BsSend />
        <b>Contact Us</b>
      </div>
    </div>
  );
}

export default Services;
