import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Transition } from "react-transition-group";
import useOutsideClick from "../Hooks/UseOutSideClick";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 330) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

   

  }, []);



  
  useOutsideClick(menuRef, () => {
    setIsMenuOpen(false);
  });

  const toggleMenu = () => {
    console.log("sdnskn");
    setIsMenuOpen(!isMenuOpen);
  };

  const duration = 300; // Duration of animation in milliseconds

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    transform: "translateY(-20px)",
  };

  const transitionStyles = {
    entering: { opacity: 0, transform: "translateY(-20px)" },
    entered: { opacity: 1, transform: "translateY(0)" },
    exiting: { opacity: 0, transform: "translateY(-20px)" },
    exited: { opacity: 0, transform: "translateY(-20px)" },
  };
  return (
    <div style={{zIndex:999}} className={`navbar z-50 fixed w-full ${scrolling ? 'navbar-scroll-bg' : ''}`}>
      <div className="flex my-5 p-2 sm:mx-14 mx-7 items-center justify-between rounded-3xl shadow-xl bg-main">
       <Link to={"/"}> <img src={logo} className="w-36" alt="logo image" /></Link>

        <nav>
          <ul className="md:flex cursor-pointer  text-sm hidden text-white gap-3  text-[16px] items-center">
            <li className="hover:text-[#55E3CB] duration-200 "><Link to={"/"}>HOME</Link></li>
            <li className="hover:text-[#55E3CB] duration-200 "><Link to={"/contactus"}>CONTACT US</Link></li>
            <li className="hover:text-[#55E3CB] duration-200 "><Link to={"/pricingplan"}>PRICING</Link></li>
            <li className="hover:text-[#55E3CB] duration-200 "><Link to={"/faq"}>FAQs</Link></li>
            <li className="hover:text-[#55E3CB] duration-200 "><Link to={"/login"}>LOGIN</Link></li>
           <Link to='/signup'>
           <li className="text-black-500 font-bold bg-[#55E3CB] hover:bg-white duration-200 rounded-full px-5 py-2">
              SIGN UP FOR FREE
            </li>
           </Link>
          </ul>
        </nav>

        <div className="px-3 md:hidden block">
          <button onClick={toggleMenu}>
            {" "}
            <Icon
              icon="mingcute:menu-fill"
              width="26"
              height="26"
              color="white"
            />
          </button>
        </div>
      </div>

      <Transition in={isMenuOpen} timeout={duration}>
        {(state) => (
          <nav
            ref={menuRef}
            className="md:hidden absolute top-20 left-0 right-0 bg-main text-white py-3 px-5"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <ul className="text-center leading-loose">
              <li><Link to={"/"}>HOME</Link></li>
              <li><Link to={"/contactus"}>CONTACT US</Link></li>
              <li> <Link to={"/pricingplan"}>PRICING</Link></li>
              <li><Link to={"/faq"}>FAQs</Link></li>
              <li><Link to={"/login"}>LOGIN</Link></li>
              <li className="text-black-500 font-bold bg-[#55E3CB] rounded-full px-5 py-2 mt-4">
                SIGN UP FOR FREE
              </li>
            </ul>
          </nav>
        )}
      </Transition>
    </div>
  );
}

export default Navbar;
