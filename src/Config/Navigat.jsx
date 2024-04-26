import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "../Common/Loading";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Faq from "../Components/Faq";
import ContactUs from "../Components/ContactUs";
import Login from "../Components/Login";
import PricingPlans from "../Components/PricingPlan";
import HeroSection2 from "../Components/HeroSection2";
import JustTalk from "../Components/JustTalk";
import SignUp from "../Components/SignUp";

 

function Navigate() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Navbar />


         <Routes>
          <Route path="/" element={<HeroSection  />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/login" element={<Login />} />
          <Route path="/pricingplan" element={<PricingPlans />} />
          <Route path="/herosection2" element={<HeroSection2/>} />
          <Route path="/justtalk" element={<JustTalk/>} />
          <Route path="/signup" element={<SignUp/>} />


        </Routes>
 
      <Footer />
    </>
  );
}

export default Navigate;
