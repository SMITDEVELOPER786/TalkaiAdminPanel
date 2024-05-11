import React, { useState, Fragment, useRef } from "react";
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
import Button from "../Common/Button"
import { Dialog, Transition } from '@headlessui/react'

import Button2 from "../Common/Button2"
import VapiChatWidget from "./VapiWidget";


function HeroSection() {

  const [click, setClick] = useState(false)

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  // initialzation for VAPI
  var vapiInstance = null;
  const assistant = "02d62251-97d4-430d-8ac2-765c117c330f"; // Substitute with your assistant ID
  const apiKey = "ae1becae-0dd1-4a3b-ada7-e06d916cabcd"; // Substitute with your Public key from Vapi Dashboard.
  const buttonConfig = {
    position: "bottom-right", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
    offset: "40px", // decide how far the button should be from the edge
    width: "30px", // min-width of the button
    height: "50px", // height of the button
    idle: { // button state when the call is not active.
      color: `rgb(93, 254, 202)`,
      type: "pill", // or "round"
      title: "Have a quick question?", // only required in case of Pill
      subtitle: "Talk with our AI assistant", // only required in case of pill
      icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
    },
    loading: { // button state when the call is connecting
      color: `rgb(93, 124, 202)`,
      type: "pill", // or "round"
      title: "Connecting...", // only required in case of Pill
      subtitle: "Please wait", // only required in case of pill
      icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
    },
    active: { // button state when the call is in progress or active.
      color: `rgb(255, 0, 0)`,
      type: "pill", // or "round"
      title: "Call is in progress...", // only required in case of Pill
      subtitle: "End the call.", // only required in case of pill
      icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
    },
  };


  function openModal() {
    setIsOpen(true)


  }
  const [showBtn, setshowBtn] = useState(false)
  const customButtonRef = useRef(null);

  const handleCustomButtonClick = () => {
    // Do something when custom button is clicked
  };

  return (
    <>
      <section className="">
        <div className="flex py-5 md:p-5 p-2 md:flex-row flex-col justify-center items-center">
          <div className="w-full md:mt-0 mt-20 md:px-10  md:py-0 md:p-5 p-2">
            <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-xl md:text-start text-center font-bold ">
              EVERY CALL IS AN OPPORTUNITY
            </h1>
            <p className="md:text-sm text-xs md:pl-5 pl-0 pt-3 md:text-start text-center">
              Maximize every interaction with Talkai247’s AI-driven
              communication solutions. Transform each call into a chance for
              growth, customer satisfaction, and enhanced business success.
            </p>



            <div className="p-5 flex flex-col md:justify-start md:items-start  justify-center items-center">
              <div className="flex items-center gap-2 sm:flex-row flex-col">
                {/* <Link to='/herosection2'> */}
                <button onClick={() => setClick(!click)}>
                  <Button2 />
                </button>

                <div style={{ border: "1px solid red" }}>

                  {showBtn && <div>
                  
                    <VapiChatWidget
                      assistant={assistant}
                      apiKey={apiKey}
                      buttonConfig={buttonConfig}
                      customButton={customButtonRef.current}
                    />
                  </div> 
                  }
                </div>
                <button onClick={() => setshowBtn(!showBtn)} className={`${click == false ? "hidden" : "block"}`}>
                  <Button />
                </button>
                {/* </Link> */}
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









      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-500 bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="  max-w-md transform overflow-hidden   p-6 text-left  transition-all">

                  <div className=" rounded-xl  bg-[#26292E]">
                    <div className="border border-[#55E3CB] text-center w-64 p-5 mx-auto relative">
                      <Icon
                        onClick={closeModal}
                        icon="icomoon-free:cancel-circle"
                        width="16"
                        color="#FE7E29"
                        className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                        height="16"
                      />

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


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



      <Service />
      <Business />

      <Transform />
      <Availability />

      <About />

      <Blogs />

    </>
  );
}

export default HeroSection;
