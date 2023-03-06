import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBarHomePage/NavBar";
import introductionmeimage from "../../images/introduction-me.jpeg";
import honey1 from "../../images/honey1.jpeg";
import honey2 from "../../images/honey2.jpeg";
import honey3 from "../../images/honey3.jpeg";
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
              I'm Amanda (She/Her), a photographer based in Hamilton, Ontario
              and serving the surrounding areas. The sweet girl that you will
              see quite a few pictures of throughout my website is my dog Honey,
              a Husky Mix that I adopted in 2018! We're both adventurous,
              welcoming and full of spirit, and love meeting new people. With
              any photograph I take, I strive to bring out the love and joy that
              a family and their furry friends have for each other - I would be
              honoured to capture that for you.
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
            <img src={honey2} className="homepage-images"></img>
            <img src={honey3} className="homepage-images"></img>
          </div>
          <div className="homepage-services-description">
            <p>
              DO YOU LIKE WHAT YOU SEE?{" "}
              <Link to="/pricing" className="link-to-pages">
                LEARN MORE ABOUT MY SERVICES!
              </Link>
            </p>
            <p className="or">OR</p>
            <p>
              DO YOU HAVE ANY QUESTIONS?{" "}
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
