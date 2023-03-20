import React from "react";
import NavBar from "../../components/NavBarGeneral/NavBarGeneral";
import "./ContactMePage.css";
import bloobs4 from "../../images/contact-me/bloobs4.jpg";
import murphy6 from "../../images/contact-me/murphy6.jpg";
import honey15 from "../../images/contact-me/honey15.jpg";
import lucy8 from "../../images/contact-me/lucy8.jpg";
import murphy1 from "../../images/homepage/murphy1.jpg";
import bloobs5 from "../../images/contact-me/bloobs5.jpg";

export default function ContactMePage() {
  return (
    <>
      <NavBar />
      <div className="ContactMePage">
        <div className="contactme-header-images">
          <img src={bloobs4}></img>
          <img src={murphy6} className="contactme-inner-image"></img>
          <img src={lucy8}></img>
          <img src={bloobs5} className="contactme-inner-image"></img>

          <img src={murphy1}></img>
        </div>
        <div className="contactme-container">
          <h2 className="contactme-title">
            LIKE WHAT YOU'VE SEEN? SEND ME A MESSAGE BELOW TO CONNECT!
          </h2>
          <form
            action="https://formsubmit.co/5b957151a8e94200788f28b6f6b2979e"
            method="POST"
          >
            <label>Your Name: </label>
            <input type="text" className="input" name="name" required></input>
            <label>Email Address:</label>
            <input type="email" className="input" name="email" required></input>
            <label>Phone Number:</label>
            <input type="text" className="input" name="phone" required></input>
            <label>
              What type of session are you looking for/any other details?
            </label>
            <textarea
              className="contactme-details"
              max="500"
              rows="10"
              type="text"
              name="description"
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
