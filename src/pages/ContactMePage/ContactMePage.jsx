import React from "react";
import NavBar from "../../components/NavBarGeneral/NavBarGeneral";
import "./ContactMePage.css";

export default function ContactMePage() {
  return (
    <>
      <NavBar />
      <div className="ContactMePage">
        <div className="contactme-header-images">Images</div>
        <div className="contactme-container">
          <h2>
            Like what you've seen? Let's connect, send me a message below.
          </h2>
          <p>Put a form here</p>
        </div>
      </div>
    </>
  );
}
