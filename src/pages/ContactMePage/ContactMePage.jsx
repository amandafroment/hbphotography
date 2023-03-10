import React from "react";
import NavBar from "../../components/NavBarGeneral/NavBarGeneral";
import "./ContactMePage.css";
import murphy15 from "../../images/murphy15.jpg";
import murphy6 from "../../images/murphy6.jpg";
import honey10 from "../../images/honey10.jpg";
import honey15 from "../../images/honey15.jpg";
import murphy1 from "../../images/murphy1.jpg";

export default function ContactMePage() {
  return (
    <>
      <NavBar />
      <div className="ContactMePage">
        <div className="contactme-header-images">
          <img src={murphy15}></img>
          <img src={honey10} className="contactme-inner-image"></img>
          <img src={honey15}></img>
          <img src={murphy6} className="contactme-inner-image"></img>
          <img src={murphy1}></img>
        </div>
        <div className="contactme-container">
          <h2 className="contactme-title">
            LIKE WHAT YOU'VE SEEN? SEND ME A MESSAGE BELOW TO CONNECT!
          </h2>
          <form
            action="https://formsubmit.co/amanda.froment@hotmail.com"
            method="POST"
          >
            <label>Your Name: </label>
            <input type="text" className="input" name="email" required></input>
            <label>Email Address:</label>
            <input type="email" className="input" name="email" required></input>
            <label>Phone Number:</label>
            <input type="text" className="input" name="email" required></input>
            <label>
              What type of session are you looking for/any other details?
            </label>
            <textarea
              type="text"
              className="contactme-details"
              max="500"
              rows="10"
              name="email"
              required
            ></textarea>
            <button value="submit" className="contactme-submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
