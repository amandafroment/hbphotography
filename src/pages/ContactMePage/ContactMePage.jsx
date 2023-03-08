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
          <h2 className="contactme-title">
            LIKE WHAT YOU'VE SEEN? SEND ME A MESSAGE BELOW TO CONNECT!
          </h2>
          <form>
            <label>Your Name: </label>
            <input type="text"></input>
            <label>Email Address:</label>
            <input type="email"></input>
            <label>Phone Number:</label>
            <input type="text"></input>
            <label>
              What type of session are you looking for/any other details?
            </label>
            <input type="text" className="contactme-details" max="500"></input>
          </form>
        </div>
      </div>
    </>
  );
}
