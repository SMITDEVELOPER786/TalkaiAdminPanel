import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PricingPlans from "./Components/PricingPlan";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Faq from "./Components/Faq";
import HeroSection from "./Components/HeroSection";
import HeroSection2 from "./Components/HeroSection2";
import JustTalk from "./Components/JustTalk";
import SignUp from "./Components/SignUp";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="">
      {location.pathname != "/home/assistants" &&
      location.pathname != "/home/phone" &&
      location.pathname != "/home/call" &&
      location.pathname != "/home/voice" &&
      location.pathname != "/home/billig" &&
      location.pathname != "/home/account" &&
      location.pathname != "/home/resources" &&
      location.pathname != "/home/help" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/" element={<HeroSection />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/login" element={<Login />} />
        <Route path="/pricingplan" element={<PricingPlans />} />
        <Route path="/herosection2" element={<HeroSection2/>} />
        <Route path="/justtalk" element={<JustTalk/>} />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/home/*" element={<Home />} />
      </Routes>

      {location.pathname != "/home/assistants" &&
      location.pathname != "/home/phone" &&
      location.pathname != "/home/call" &&
      location.pathname != "/home/voice" &&
      location.pathname != "/home/billig" &&
      location.pathname != "/home/account" &&
      location.pathname != "/home/resources" &&
      location.pathname != "/home/help" ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
