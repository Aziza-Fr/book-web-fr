import React from 'react';
import "./Footer.css";
import { BsInstagram, BsTwitter, BsTelegram, BsFacebook, BsLinkedin, BsGeoAltFill, BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

function Footer() {
  return(
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <BsInstagram style={{fill: "#fd1d1d"}}/>
          </div>

          <div className="footer-social-media-icon">
            <BsTwitter style={{fill: "#00d2ff"}}/>
          </div>

          <div className="footer-social-media-icon">
            <BsTelegram style={{fill: "#00d2ff"}}/>
          </div>

          <div className="footer-social-media-icon">
            <BsFacebook style={{fill: "#0072ff"}}/>
          </div>

          <div className="footer-social-media-icon">
            <BsLinkedin style={{fill: "#3498db"}}/>
          </div>

          <div className="footer-social-media-icon">
            <FcGoogle/>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
          </ul>
        </div>

        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <BsGeoAltFill/>
              Karakalpakstan-Nukus-Gold St
            </div>

            <div className="footer-address-item">
              <BsFillTelephoneFill/>
              +91 111-11-11
            </div>

            <div className="footer-address-item">
              <BsFillEnvelopeFill/>
              krfakenukus@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium at reprehenderit ratione tenetur similique in illo ducimus doloribus quam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam veritatis quasi corrupti tempore ratione fuga?
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;