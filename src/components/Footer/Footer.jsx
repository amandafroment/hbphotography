import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="footer-links-container">
          <Link to="/" className="">
            HOME
          </Link>
          <Link to="/aboutme" className="">
            ABOUT
          </Link>

          <Link to="/pricing" className="">
            SERVICES
          </Link>
          <Link to="/contactme" className="">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}
