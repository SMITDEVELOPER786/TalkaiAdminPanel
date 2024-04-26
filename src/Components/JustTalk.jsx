import React from "react";
import hero from "../assets/3d44514d9165df96c04149072765a6e6.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import event from "../assets/event.png"
import houzz from "../assets/houzz.png"
import uber from "../assets/uber.png"
import stripe from "../assets/stripe.png"
import Service from "./Service";
import Business from "./Business";
import Transform from "./Transform";
import Availability from "./Availability";
import About from "./About";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";




function JustTalk() {
  return (
    <>
      <section className="">
        





       





   
      <div className="py-72 bg-[#26292E]">
      <div className="border border-[#55E3CB] rounded-lg text-center w-64 p-5 mx-auto relative">
     <Link to={"/"}>
     <Icon
          icon="icomoon-free:cancel-circle"
          width="16"
          color="#FE7E29"
          className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
          height="16"
        />
     </Link>
        <h1 className="text-white text-[9px] ">
          Hi, I'm Ann. You can talk with me now
        </h1>
        <div className="bg-[#FE7E29]  w-5 h-0.5   flex justify-center mx-auto" />

        <Icon
          className="mx-auto my-5"
          color="#55E3CB"
          icon="wpf:audio-wave"
          width="36"
          height="36"
        />
        <h1 className="text-white">Just Talk</h1>
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

export default JustTalk;
