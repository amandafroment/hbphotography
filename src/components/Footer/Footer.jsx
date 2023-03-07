import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="Footer">
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
          <p className="socials">socials container</p>
        </div>
      </div>
    </>
  );
}
