import React from "react";
import NavBar from "../../components/NavBarGeneral/NavBarGeneral";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import aboutmeimg from "../../images/branding-pic.jpeg";

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="AboutMe">
        <div className="AboutMeContainer">
          <div className="aboutme-page-image">
            <div className="aboutme-page-image-container">
              <img src={aboutmeimg}></img>
            </div>
          </div>
          <div className="aboutme-page-description">
            <h2>Hi, I'm Amanda!</h2>
            <p>
              When I'm not behind a camera, you can find me hiking, camping,
              travelling or curled up with Honey and a book on the couch. I love
              trying new restaurants or making different recipes, and I can't go
              a day without drinking an iced latte!
            </p>
            <p>
              From a very young age, I always wanted to be around any kind of
              animal, and that feeling has followed me into adulthood. I know
              that having a four-legged friend (or any other type of pet!) can
              be the the best part of your day and life, and capturing those
              sweet moments with them can be just as important as any other
              member of the family. Whether you've had your pet for 10 days or
              10 years, I would love the chance to capture the love and bond you
              have together.
            </p>
            <p>
              If my approach sounds like what you're looking for, click the
              Contact button below so I can learn more about you and your fur
              family!
            </p>
          </div>
        </div>
        <div className="aboutme-contact">
          <Link to="/contactme">
            <button className="contactme-button">CONTACT ME</button>
          </Link>
        </div>
      </div>
    </>
  );
}
