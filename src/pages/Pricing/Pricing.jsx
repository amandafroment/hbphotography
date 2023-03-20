import React from "react";
import NavBar from "../../components/NavBarGeneral/NavBarGeneral";
import "./Pricing.css";
import { Link } from "react-router-dom";

import murphy3 from "../../images/pricing/murphy3.jpg";
import bloobs9 from "../../images/pricing/bloobs9.jpg";
import lucy7 from "../../images/pricing/lucy7.jpg";
import bloobs7 from "../../images/pricing/bloobs7.jpg";
import murphy18 from "../../images/pricing/murphy18.jpg";

import honey1 from "../../images/pricing/honey1.jpeg";
import lucy5 from "../../images/pricing/lucy5.jpg";
import murphy4 from "../../images/pricing/murphy4.jpg";
import murphy5 from "../../images/pricing/murphy5.jpg";
import lucy4 from "../../images/pricing/lucy4.jpg";

import tattoo1 from "../../images/other-photoshoot/tattoo1.jpg";
import megan3 from "../../images/other-photoshoot/megan3.jpg";
import andres1 from "../../images/other-photoshoot/andres1.jpg";
import michelle1 from "../../images/other-photoshoot/michelle1.jpg";
import murphy23 from "../../images/other-photoshoot/murphy23.jpg";
import michelle2 from "../../images/other-photoshoot/michelle2.jpg";
import megan2 from "../../images/other-photoshoot/megan2.jpg";

export default function Pricing() {
  return (
    <>
      <NavBar />
      <div className="ServicesContainer">
        <div className="individual-service">
          <div className="service-description-container">
            <div className="service-description-text">
              <h2>1 HOUR AT-HOME SESSION ($225)</h2>
              <p>
                Capture you and your furry companion(s) at home, in the place
                where they are most comfortable and surrounded by all of the
                things they know and love!
              </p>
              <h3>DETAILS</h3>
              <p>
                This is a fun, laid back day for you and your pet(s)! When I
                first get there, I'll spend some time going over some of the
                info you told me about you and your furry family (from the
                questionnaire). I'll give your pet(s) some time to get to know
                me and get comfotable, and then we'll do a quick walk around of
                your property so I can get a feel for the space and see where
                your pets are most comfortable. Then we'll get into the
                photoshoot and capture those sweet moments of you and your
                family.
              </p>
              <h3>WHAT'S INCLUDED?</h3>
              <ul className="service-list">
                <li>
                  1 hour of time together, which includes a meet and greet for
                  your furry friends to get them comfortable
                </li>
                <li>
                  Pre-shoot questionnaire to help me learn more about you and
                  your pet family
                </li>
                <li>15-20 professionally editted high resolution images</li>
                <li>
                  Online gallery to look at and download your images (full
                  gallery will be delivered about 2 weeks from your session
                  date)
                </li>
                <li>
                  Sneak peeks: you'll recieve a few editted images within 48
                  hours after the session
                </li>
                <li>Print release</li>
                <li>
                  Travel to your home (within 30 minutes of Hamilton, see below
                  for locations outside of this time limit)
                </li>
              </ul>
              <h3>BOOKING INFO</h3>
              <p>
                To book a session{" "}
                <Link to="/contactme" className="contact-link">
                  send me a message
                </Link>
                , or head over to my{" "}
                <Link to="/contactme" className="contact-link">
                  CONTACT
                </Link>{" "}
                page! Once we've settled on a date and time, I'll send you a
                contract and you'll send over a non-refundable 25% deposit to
                fully secure your spot. Leading up to the photo session, I'll
                also send you a questionnaire to learn more about your pet and
                you to make the session fun and enjoyable for everyone!
              </p>
              <p>
                <b>ADOPTED PET DISCOUNT:</b> If you've adopted your furry
                companion within the last year (congratulations!), you'll
                recieve $50 off any At-Home session
              </p>
              <p>
                <b>SENIOR PET DISCOUNT: </b>$30 off At-Home session
              </p>
            </div>
          </div>
          <div className="service-image-container">
            <div className="service-images">
              <div className="service-outer-container">
                <img src={murphy3} className="service-outer"></img>
                <img src={bloobs7} className="service-outer"></img>
              </div>
              <img src={lucy7} className="service-inner"></img>
              <div className="service-outer-container">
                <img src={bloobs9} className="service-outer"></img>
                <img src={murphy18} className="service-outer"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="individual-service second-individual-service">
          <div className="service-image-container sic2">
            <div className="service-images">
              <div className="service-outer-container">
                <img src={lucy4} className="service-outer"></img>
                <img src={murphy5} className="service-outer"></img>
              </div>
              <img src={lucy5} className="service-inner"></img>
              <div className="service-outer-container">
                <img src={honey1} className="service-outer"></img>
                <img src={murphy4} className="service-outer"></img>
              </div>
            </div>
          </div>
          <div className="service-description-container">
            <div className="service-description-text">
              <h2>45 MINUTE OUTDOOR SESSION ($175)</h2>
              <p>
                Let's spend some time outdoors at a location that you and your
                pet are comfortable at! *Booking a time will be based on best
                light (usually during low light times, such as earlier in the
                day or closer to sunset).
              </p>
              <h3>DETAILS</h3>
              <p>
                We'll meet at a location of your choosing (or if needed I can
                provide some suggestions) and spend 45 minutes together
                capturing those sweet moments of you and your four-legged
                friend(s)! When I first get there I'll spend some time going
                over some of the info you told me about you and your furry
                family (from the questionnaire), and give your pet(s) some time
                to get to know me and get comfotable. Then we'll get into the
                photoshoot and have some fun!.
              </p>
              <h3>WHAT'S INCLUDED?</h3>
              <ul className="service-list">
                <li>
                  45 minutes of time together, which includes a meet and greet
                  for your furry friends to get them comfortable
                </li>
                <li>
                  Pre-shoot questionnaire to help me learn more about you and
                  your pet family
                </li>
                <li>10-15 professionally editted high resolution images</li>
                <li>
                  Online gallery to look at and download your images (full
                  gallery will be delivered about 2 weeks from your session
                  date)
                </li>
                <li>
                  Sneak peeks: you'll recieve a few editted images within 48
                  hours after the session
                </li>
                <li>Print release</li>
                <li>
                  Travel to location of your choice (within 30 minutes of
                  Hamilton, see below for locations outside of this time limit)
                </li>
              </ul>
              <h3>BOOKING INFO</h3>
              <p>
                To book a session{" "}
                <Link to="/contactme" className="contact-link">
                  send me a message
                </Link>
                , or head over to my{" "}
                <Link to="/contactme" className="contact-link">
                  CONTACT
                </Link>{" "}
                page! Once we've settled on a date and time, I'll send you a
                contract and you'll send over a non-refundable 25% deposit to
                fully secure your spot. Leading up to the photo session, I'll
                also send you a questionnaire to learn more about your pet and
                you to make the session fun and enjoyable for everyone!
              </p>
              <p>
                <b>ADOPTED PET DISCOUNT:</b> If you've adopted your furry
                companion within the last year (congratulations!), you'll
                recieve $30 off any Outdoor session
              </p>
              <p>
                <b>SENIOR PET DISCOUNT: </b>$30 off Outdoor session
              </p>
            </div>
          </div>
        </div>
        <div className="travel-info">
          <h3>Travel Information for Outside of Hamilton</h3>
          <p>
            For any location outside of the time limit listed above, a standard
            travel free ($0.75/km + any parking fees) applies and will be added
            to your final invoice.
          </p>
        </div>
        <div className="service-info-other">
          <div className="service-decoration"></div>

          <h2>OTHER PHOTOSHOOT INQUIRIES</h2>
          <p>
            Having a birthday party for your pet or any other type of special
            event? Send me a message to chat about setting up a session that
            works for what you need.
          </p>
          {/* <p className="or">OR</p> */}
          <p>
            Don't have a pet but like my style of photography? I would be more
            than happy to capture the life moments you want to cherish.
          </p>
          <Link to="/contactme">
            <button className="connect-me-button">CONNECT WITH ME</button>
          </Link>
        </div>
        <div className="service-info-other-images">
          <img src={tattoo1} className="other-photoshoot-images"></img>
          <div className="other-inner-image-container">
            <img src={megan3} className="other-inner-image"></img>
            <img src={andres1} className="other-inner-image"></img>
          </div>
          <img src={michelle1} className="other-photoshoot-images"></img>
          <div className="other-inner-image-container">
            <img src={murphy23} className="other-inner-image"></img>
            <img src={michelle2} className="other-inner-image"></img>
          </div>
          <img src={megan2} className="other-photoshoot-images"></img>
        </div>
      </div>
    </>
  );
}
