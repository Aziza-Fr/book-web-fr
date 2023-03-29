import React from "react";
import "./Contact.css";
import { BsHouseFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

function ContactUs() {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <BsHouseFill />
            Address
          </div>
          <p className="contact-item-text">Karakalpakstan-Nukus Golden St</p>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon">
            <BsTelephoneFill />
            Phone
          </div>
          <p className="contact-item-text">+91 111-11-11</p>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon">
            <BsEnvelopeFill />
            Email
          </div>
          <p className="contact-item-text">krfakenukus@gmail.com</p>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea
          className="contact-textarea"
          placeholder="Message"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
}

export default ContactUs;
