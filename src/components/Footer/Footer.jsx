import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import instagramlogo from "../../images/instagram-logo.png";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <span className="footer-decoration"></span>
        <div className="footer-inner-container">
          <div className="footer-links-container">
            <Link to="/" className="footer-link">
              HOME
            </Link>
            <Link to="/aboutme" className="footer-link">
              ABOUT
            </Link>

            <Link to="/pricing" className="footer-link">
              SERVICES
            </Link>
            <Link to="/contactme" className="footer-link">
              CONTACT
            </Link>
          </div>
          <div className="socials-container">
            <a
              href="https://www.instagram.com/honeybee_photography__/"
              target="_blank"
            >
              <img src={instagramlogo} className="instagram-logo"></img>
            </a>
          </div>
        </div>
        <span className="footer-decoration"></span>
        <p className="copyright">
          All content Copyright © 2023 Honey Bee Photography
        </p>
      </div>
    </>
  );
}
