import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoimg from "../../images/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <Link to="/" className="link">
          HOME
        </Link>
        <Link to="/aboutme" className="link">
          ABOUT
        </Link>
        <Link to="" className="logo-img">
          <img src={logoimg} className="logo-img"></img>
        </Link>
        <Link to="/pricing" className="link">
          SERVICES
        </Link>
        <Link to="/contactme" className="link">
          CONTACT
        </Link>
      </nav>
    </>
  );
}
