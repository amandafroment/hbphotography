import React from "react";
import { Link } from "react-router-dom";
import "./NavBarGeneral.css";
import logoimg from "../../images/logo.png";

export default function NavBarGeneral() {
  return (
    <>
      <nav className="NavBarGeneral">
        <Link to="/" className="link-general">
          HOME
        </Link>
        <Link to="/aboutme" className="link-general">
          ABOUT
        </Link>
        <Link to="/" className="logo-img-general">
          <img src={logoimg} className="logo-img-general"></img>
        </Link>
        <Link to="/pricing" className="link-general">
          SERVICES
        </Link>
        <Link to="/contactme" className="link-general">
          CONTACT
        </Link>
      </nav>
    </>
  );
}
