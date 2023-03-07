import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBarHomePage/NavBar";
import introductionmeimage from "../../images/introduction-me.jpeg";
import honey1 from "../../images/honey1.jpeg";
import honey2 from "../../images/honey2.jpeg";
import honey3 from "../../images/honey3.jpeg";
import honey4 from "../../images/honey4.jpeg";
import honey5 from "../../images/honey5.jpeg";
import honey6 from "../../images/honey6.jpeg";
import honey7 from "../../images/honey7.jpeg";
import honey8 from "../../images/header-image.jpeg";
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
            the sweet moments we have with them to cherish forever.
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
              website is my dog Honey, a Husky Mix that I adopted in 2018! We're
              both adventurous, welcoming and full of spirit, and love meeting
              new people. With any photograph I take, I strive to bring out the
              love and joy that a family and their furry friends have for each
              other - I would be honoured to capture that for you.
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
            <img src={honey1} className="homepage-images"></img>
            <div className="inner-image-container">
              <img src={honey4} className="inner-image"></img>
              <img src={honey5} className="inner-image"></img>
            </div>
            <img src={honey2} className="homepage-images"></img>
            <div className="inner-image-container">
              <img src={honey6} className="inner-image"></img>
              <img src={honey8} className="inner-image"></img>
            </div>
            <img src={honey3} className="homepage-images"></img>
          </div>
          <div className="homepage-services-description">
            <p>
              DO YOU LIKE WHAT YOU SEE?<br></br>
              <Link to="/pricing" className="link-to-pages">
                LEARN MORE ABOUT MY SERVICES!
              </Link>
            </p>
            <p className="or">OR</p>
            <p>
              DO YOU HAVE ANY QUESTIONS?<br></br>
              <Link to="/contactme" className="link-to-pages">
                SEND ME AN EMAIL TO CONNECT!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
