import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SmallSidebar from './SmallSideBar';
import { Icon } from '@iconify/react/dist/iconify.js';
import logo from "../assets/logo.png";

function SmallNavbar() {
  // Toggle state for menu
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleSidebar = () => {
    setIsOpen1(!isOpen1);
  };


  return ( 
    <nav className="bg-[#26292E] rounded-xl p-4 md:hidden m-3 shadow-black shadow-2xl "> {/* Show only on small screens */}
      <div className="flex items-center justify-between">
        {/* Logo/Image */}
        <div>
          <img
            src={logo} // Replace with your image URL
            alt="Logo"
            className="w-full h-7"
          />
        </div>

        {/* Toggle Button */}
        <div>
          <button onClick={toggleSidebar} className="text-white">
          <Icon
             icon="gg:menu"
            className="h-5 w-5 sm:h-7 sm:w-7"
            color="#55E3CB"
          />
          </button>
        </div>
      </div>

      {/* Toggleable Menu */}
      <SmallSidebar toggleSidebar={toggleSidebar} isOpen1={isOpen1}/>
    </nav>
  );
}

export default SmallNavbar;