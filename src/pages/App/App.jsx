import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutMe from "../AboutMe/AboutMe";
import PricingPage from "../Pricing/Pricing";
import ContactMePage from "../ContactMePage/ContactMePage";
import Footer from "../../components/Footer/Footer";

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/contactme" element={<ContactMePage />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}
