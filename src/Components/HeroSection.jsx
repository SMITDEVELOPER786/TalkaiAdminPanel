import React from "react";
import hero from "../assets/3d44514d9165df96c04149072765a6e6.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import event from "../assets/event.png"
import houzz from "../assets/houzz.png"
import uber from "../assets/uber.png"
import stripe from "../assets/stripe.png"
import Service from "./Service";
import Business from "./Business";
import Footer from "./Footer";
import Transform from "./Transform";
import Availability from "./Availability";
import About from "./About";
import Blogs from "./Blogs";




function HeroSection() {
  return (
    <>
      <section className="">
        <div className="flex py-5 md:p-5 p-2 md:flex-row flex-col justify-center items-center">
          <div className="w-full md:mt-0 mt-20  md:py-0 md:p-5 p-2">
            <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-xl md:text-start text-center font-bold ">
              EVERY CALL IS AN OPPORTUNITY
            </h1>
            <p className="md:text-sm text-xs md:pl-5 pl-0 pt-3 md:text-start text-center">
              Maximize every interaction with Talkai247’s AI-driven
              communication solutions. Transform each call into a chance for
              growth, customer satisfaction, and enhanced business success.
            </p>

            <div className="p-5 flex flex-col md:justify-start md:items-start  justify-center items-center">
              <div>
                <button className="font-bold text-[#55E3CB] hover:bg-[#55E3CB] hover:text-black-500 duration-200 bg-black-500 p-3 rounded-full">
                  Start a Free Trial
                </button>
              </div>
              <div className="pt-5">
                <h1 className="font-bold">FOLLOW US ON</h1>
                <div className="flex gap-2">
                  <Icon className="cursor-pointer hover:text-blue-500 duration-200" icon="ic:baseline-facebook" width="26" height="26" />
                  <Icon className="cursor-pointer hover:text-[#bc2a8d] duration-200" icon="ri:instagram-fill" width="26" height="26" />
                  <Icon className="cursor-pointer hover:text-red-500 duration-200" icon="mdi:youtube" width="26" height="26" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              src={hero}
              className="w-full md:h-screen h-72 md:mt-20 object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 py-6 gap-4 justify-items-center items-center bg-black-500 p-3">
  <div>
    <img src={event} className=" w-24" alt="" />
  </div>
  <div>
    <img src={stripe} className=" w-16" alt="" />
  </div>
  <div>
    <img src={houzz} className=" w-24" alt="" />
  </div>
  <div>
    <img src={uber} className=" w-16" alt="" />
  </div>
</div>

      </section>


<Service/>
<Business/>

<Transform/>
<Availability/>

<About/>

<Blogs/>

    </>
  );
}

export default HeroSection;
