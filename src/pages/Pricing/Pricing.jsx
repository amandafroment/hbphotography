import React from "react";
import NavBar from "../../components/NavBarGeneral/NavBarGeneral";
import "./Pricing.css";

export default function Pricing() {
  return (
    <>
      <NavBar />
      <div className="ServicesContainer">
        <div className="individual-service">
          <div className="service-description">
            <h2>Title w/ pricing</h2>
            <p>Info paragraph</p>
            <p>Details/What's Included</p>
            <p>Promotions: one for adoption within 6 months, one for seniors</p>
            <p>Booking Information (deposit, contract, etc.)</p>
          </div>
          <div className="service-image-container">
            <img></img>
            <p>Image container</p>
          </div>
        </div>

        <div className="individual-service">
          <div className="service-image-container">
            <img></img>
            <p>Image Container</p>
          </div>
          <div className="service-description">
            <h2>Title w/ pricing</h2>
            <p>Info paragraph</p>
            <p>Details/What's Included</p>
            <p>Promotions: one for adoption within 6 months, one for seniors</p>
            <p>Booking Information (deposit, contract, etc.)</p>
          </div>
        </div>

        <div>
          <h2>Other types of shoots</h2>
          <p>
            Don't have a pet but like my style of photography? Send me a message
            and let's chat - I would be more than happy to capture the life
            moments you need!
          </p>
        </div>
      </div>
    </>
  );
}
