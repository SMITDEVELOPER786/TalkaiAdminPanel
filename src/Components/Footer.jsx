import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer class="text-[#FFFFFF] body-font bg-main">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 -mb-10 md:mt-0 mt-10 text-left ">
            <div class="w-full px-4 flex-shrink-0 space-y-3 md:mx-0  text-center md:text-left">
              <a class="flex title-font font-medium items-center sm:justify-start justify-center text-[#FFFFFF]">
                <img src={logo} alt="" />
              </a>
              <p class="mt-2 text-sm sm:text-left text-center text-[#FFFFFF]">
                Conrect Smarter. Respond Faster-That`s Talkai247
              </p>
              <div className="flex sm:justify-start justify-center  items-center gap-2">
                <div>
                  <span>
                    <Icon
                      icon="ic:baseline-phone"
                      color="#FE7E29"
                      width="32"
                      height="32"
                    />
                  </span>
                </div>
                <div className="">
                  <h1 className="text-sm font-bold leading-3">
                    Office Phone Number
                  </h1>
                  <h1 className="text-sm">1-240-399-6306</h1>
                </div>
              </div>
              <div className="flex sm:justify-start justify-center  items-center gap-2">
                <div>
                  <Icon
                    icon="zondicons:at-symbol"
                    width="32"
                    color="#FE7E29"
                    height="32"
                  />{" "}
                </div>

                <div className="">
                  <h1 className="text-sm font-bold leading-3">Office Email</h1>
                  <h1 className="text-sm">info@talkai247.com</h1>
                </div>
              </div>
              <div className="flex sm:justify-start justify-center items-center gap-2">
                <Icon
                  icon="ic:baseline-facebook"
                  width="26"
                  color="#55E3CB"
                  height="26"
                />
                <Icon
                  icon="ri:instagram-fill"
                  width="26"
                  height="26"
                  color="#55E3CB"
                />
                <Icon
                  icon="mdi:youtube"
                  width="26"
                  height="26"
                  color="#55E3CB"
                />
              </div>
            </div>

            <div class=" w-full px-4  ">
              <h2 class="title-font font-medium text-[#FE7E29] tracking-widest text-lg mb-3">
                Menu
              </h2>
              <nav class="list-none mb-10 space-y-4">
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Products
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Service & Features
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div class=" w-full px-4">
              <h2 class="title-font font-medium text-[#FE7E29] tracking-widest text-lg mb-3">
                Features
              </h2>
              <nav class="list-none mb-10 space-y-4">
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Analytics
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Engagemant
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Builder
                  </a>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Voices
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4">
              <h2 class="title-font font-medium text-[#FE7E29] tracking-widest text-lg mb-3">
                Help
              </h2>
              <nav class="list-none mb-10 space-y-4">
                <li>

<Link to="/privacy&policy">
<a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Privacy Policy
                  </a>
</Link>



                </li>
                <li>
                <Link to="/terms&conditions">
<span class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Terms & Conditions
                  </span>
</Link>
                </li>
                <li>
                  <a class="text-[#FFFFFF] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    How it Works
                  </a>
                </li>
              </nav>
            </div>
            <div class=" w-full px-4">
              <h2 class="title-font font-medium text-[#FE7E29] tracking-widest text-lg mb-3">
                NewsLetter
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-[#FFFFFF] leading-[-5px] text-sm hover:text-[#55E3CB] duration-300 cursor-pointer">
                    Join our Newsletter and receive numerous Tips and Trick to
                    improve your Business communication.
                  </a>
                </li>

                <li className="flex flex-col py-3">
                  <input
                    type="text"
                    className="rounded-md sm:w-full w-60 px-3 py-1 outline-none"
                    placeholder="sample@gmail.com"
                  />

                  <Link to='/signup'>
                  <button className="text-black-500 text-sm font-bold bg-[#55E3CB] sm:w-full w-60 rounded-lg px-3 py-1.5 mt-2">
                    SIGN UP FOR FREE
                  </button>

                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-main">
          <div class=" mx-auto py-4 px-5 flex flex-wrap  justify-center items-center">
            <p class="text-white text-sm text-center ">
              © 2024 Created by Talkai247
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
