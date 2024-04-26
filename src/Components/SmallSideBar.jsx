import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import logo from "../assets/logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SidebarWork, { SidebarItem } from './SidebarWork';

function SmallSidebar({toggleSidebar,isOpen1}) {
const location =useLocation()



  return (
    <div className={`md:hidden block h-screen sidebar z-10 -m-1 fixed top-0 left-0  bg-transparent text-gray-800 transition-all duration-300 ${isOpen1 ? 'w-72 duration-300' : 'w-0 overflow-hidden'}`}>
   
   <div className="company-logo fixed left-4 top-3 mt-0" style={{ zIndex: 1000 }}>
      <div className='flex justify-end'>
        <button onClick={toggleSidebar} className="toggle-btn mx-3 my-4 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
            {isOpen1 ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : null}
          </svg>
        </button>
      </div>
    </div>

    <SidebarWork>
        <SidebarItem
          icon={<Icon icon="fa6-solid:headset" width="28" />}
          text="Assistants"
          path="/home/assistants"
        />
        <SidebarItem
          icon={<Icon icon="ic:round-phone" width="28" />}
          text="Phone Number"
          path="/home/phone"
        />
        <SidebarItem
          icon={<Icon  icon="mdi:feature-search"  width="28" />}
          text="Call Logs"
          path="/home/call"
        />

        <SidebarItem
          icon={<Icon icon="mdi:account-voice" width="28" />}
          text="Voice Library"
          path="/home/voice"
        />
         <SidebarItem
          icon={<Icon  icon="mdi:feature-search"  width="28" />}
          text="Billing"
          path="/home/billig"
        />

        <SidebarItem
          icon={<Icon icon="mdi:account-voice" width="28" />}
          text="Account"
          path="/home/account"
        />
            <SidebarItem
          icon={<Icon  icon="mdi:feature-search"  width="28" />}
          text="Resources"
          path="/home/resources"
        />

       

        
      </SidebarWork>
    {/* <ul className="sidebar-menu mt-2">
<Link to='/sitter/bar/home'>
<li className={`flex mt-3 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group active:bg-sitter from-indigo-200 to-indigo-100 active:text-white hover:bg-sitter hover:text-white ${location.pathname == "/sitter/bar/home"  ? "bg-sitter text-white" :''} `}>
      <Icon  icon="solar:home-2-linear" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>Home</span>
    </li>
    </Link>
    <Link to='/sitter/bar/profile'>
    <li className={`flex mt-3 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group active:bg-sitter from-indigo-200 to-indigo-100 active:text-white hover:bg-sitter hover:text-white ${location.pathname == "/sitter/bar/profile"  ? "bg-sitter text-white" :''} `}>
      <Icon  icon="lets-icons:user-box" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>Profile</span>
    </li>
    </Link>
    <Link to='/sitter/bar/mybooking'>
    <li className={`flex mt-3 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group active:bg-sitter from-indigo-200 to-indigo-100 active:text-white hover:bg-sitter hover:text-white ${location.pathname == "/sitter/bar/mybooking"  ? "bg-sitter text-white" :''} `}>
      <Icon  icon="solar:notes-outline" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>My Booking</span>
    </li>
    </Link>
    <Link to='/sitter/bar/chat'>
    <li className={`flex mt-3 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group active:bg-sitter from-indigo-200 to-indigo-100 active:text-white hover:bg-sitter hover:text-white ${location.pathname == "/sitter/bar/chat"  ? "bg-sitter text-white" :''} `}>
      <Icon  icon="uil:envelope-star" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>Chat</span>
    </li>
    </Link>
    <Link to='/sitter/bar/connection'>
    <li className={`flex mt-3 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group active:bg-sitter from-indigo-200 to-indigo-100 active:text-white hover:bg-sitter hover:text-white ${location.pathname == "/sitter/bar/connection"  ? "bg-sitter text-white" :''} `}>
      <Icon  icon="solar:volume-loud-outline" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>Connections</span>
    </li>
    </Link>
    <Link to='/sitter/bar/setting'>
    <li className={`flex mt-3 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group active:bg-sitter from-indigo-200 to-indigo-100 active:text-white hover:bg-sitter hover:text-white ${location.pathname == "/sitter/bar/setting"  ? "bg-sitter text-white" :''} `}>
      <Icon  icon="solar:settings-outline" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>Seeting</span>
    </li>
    </Link>
    <Link to='/'>








    <li className="flex mt-20 items-center py-2 px-3 my-1 mx-2 font-medium rounded-full text-[16px] cursor-pointer transition-colors group bg-sitter from-indigo-200 to-indigo-100 text-white hover:bg-sitter hover:text-white ">
      <Icon  icon="heroicons-outline:logout" className="w-6 h-6 mr-2" />
      <span className={`${isOpen1 ? 'block' : 'hidden'}`}>Logout</span>
    </li>
    </Link>
   
  </ul> */}



  </div>
  )
}

export default SmallSidebar