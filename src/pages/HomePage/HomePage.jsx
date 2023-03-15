import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBarHomePage/NavBar";
import introductionmeimage from "../../images/introduction-me.jpeg";
import honey2 from "../../images/homepage/honey2.jpeg";
import honey3 from "../../images/homepage/honey3.jpeg";
import honey12 from "../../images/homepage/honey12.jpg";
import murphy1 from "../../images/homepage/murphy9.jpg";
import murphy2 from "../../images/homepage/murphy2.jpg";
import bloobs3 from "../../images/homepage/bloobs3.jpg";
import bloobs2 from "../../images/homepage/bloobs2.jpg";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="HomePageContainer">
        <div className="HeaderContainer">
          <span className="line-decoration line"></span>

          <h1>CAPTURING YOUR SWEETEST MOMENTS</h1>
          <h2>
            Our furry companions are one of the most important aspects of our
            lives, and the time with them can go by so quickly. Let's capture
            the sweet moments we have with them so we can cherish them forever.
          </h2>
          <span className="line-decoration"></span>
        </div>
        <div className="IntroductionContainer">
          <div className="Introduction-Inner paragraph">
            <h3>Hi There!</h3>
            <p className="introduction-paragraph">
              I'm Amanda, the photographer behind Honey Bee Photography! I'm
              based in Hamilton, Ontario and serving the surrounding areas. The
              sweet girl that you will see quite a few pictures of throughout my
              website is my dog Honey (the inspiration behind the naming of HB
              Photography), a Husky Mix that I adopted in 2018! We're both
              adventurous, welcoming and full of spirit, and love meeting new
              people. With any photograph I take, I strive to bring out the love
              and joy that a family and their furry friends have for each other
              - I would be honoured to capture that for you.
            </p>
          </div>
          <div className="Introduction-Inner">
            <div className="Introduction-Inner-Image">
              <img
                src={introductionmeimage}
                className="introduction-image"
                alt="Picture of Amanda and her dog Honey."
              ></img>
            </div>
          </div>
        </div>

        <div className="decoration"></div>
        <div className="ServicesIntroductionContainer">
          <div className="homepage-images-container">
            <img src={honey2} className="homepage-images"></img>
            <div className="inner-image-container">
              <img src={bloobs3} className="inner-image"></img>
              <img src={murphy2} className="inner-image"></img>
            </div>
            <img src={murphy1} className="homepage-images"></img>

            <div className="inner-image-container">
              <img src={honey12} className="inner-image"></img>
              <img src={bloobs2} className="inner-image"></img>
            </div>
            <img src={honey3} className="homepage-images"></img>
          </div>

          <div className="homepage-services-description">
            <span className="decoration2"></span>

            <p>
              DO YOU LIKE WHAT YOU SEE?<br></br>
              <Link to="/pricing">
                <button className="link-to-pages">
                  LEARN MORE ABOUT MY SERVICES!
                </button>
              </Link>
            </p>
            <p className="or">OR</p>
            <p>
              DO YOU HAVE ANY QUESTIONS?<br></br>
              <Link to="/contactme">
                <button className="link-to-pages">
                  SEND ME AN EMAIL TO CONNECT!
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
