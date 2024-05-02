import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logo from "../assets/logo.png";
import React, { createContext, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { logout_user_post_async } from "../Store/Service/AuthService";
import { toast,Toaster } from "sonner";


const SidebarContext = createContext();

export default function SidebarWork({ children }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

const dispatch = useDispatch()

const nav = useNavigate()

  // Get the count of children
  const childrenCount = React.Children.count(children);



const handleLogout = () =>{

  dispatch(logout_user_post_async())
.then((res)=>{
  console.log(res)

  if(res.payload.message){

    toast.success(res.payload.message)

    setTimeout(() => {
      nav("/" ,{ replace: true })
    }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)
  }


}) 

 }




  return (
    <>
    <Toaster position="top-right"/>
      <aside
        className={`h-full mx-5 my-3 shadow-black shadow-r-[5px] shadow-lg shadow-[#55E3CB] rounded-[33px]   bg-[#26292E] ${
          expanded ? "w-64 " : "w-20"
        }`}
      >
        <nav className=" h-full flex flex-col bg-[#26292E]  rounded-[33px]  ">
          <SidebarContext.Provider value={{ expanded }}>
            <div className=" relative p-1 my-4 flex justify-center items-center">
              <img
                src={logo}
                className={`overflow-hidden transition-all ${
                  expanded ? "w-44  h-full object-cover" : "w-0"
                }`}
              />
              {/* <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>     */}
            </div>

            <div className=" mx-auto w-[80%] bg-[#171717] h-0.5 mb-1"></div>

            <ul className="flex-1 px-3">
              {React.Children.map(children, (child, index) => (
                <li
                  className={` ${index > 4 && index == 6 ? "mt-[105px]" : ""}`} // 4th ke baad mt-10
                >
                  {child}
                </li>
              ))}
            </ul>
          </SidebarContext.Provider>

          <div className="  px-3   ">
            <Link to="/home/help">
              <div className="flex bg-[#171717] rounded-lg py-1.5 px-3 my-1 gap-4 text-[#55E3CB]">
                <Icon icon="ic:sharp-help" width="26" />

                <span className="text-[18px]">Help</span>
              </div>
            </Link>
          </div>

          <div className="  px-3   ">
        
              <div onClick={handleLogout} className="flex bg-[#171717] rounded-lg cursor-pointer py-2 px-3 my-1 gap-4 text-[#55E3CB]">
                <Icon icon="material-symbols:logout" width="26" />

                <span className=" text-[18px]">Logout</span>
              </div>
           
          </div>

          <span className="text-white mb-5 text-[12px] text-center">
            © 2024 Created by Talkai247
          </span>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, path }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <>
      {
        <Link to={path}>
          <div
            className={`relative flex mt-1 items-center py-2 px-3 my-1 font-normal  text-white rounded-lg text-[16px] cursor-pointer transition-colors group active:bg-[#171717] from-indigo-200 to-indigo-100 active:text-[#55E3CB] hover:bg-[#171717] hover:text-[#55E3CB] 
        ${location.pathname === path ? "bg-[#171717] text-[#55E3CB]" : ""}`}
          >
            {icon}
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              {text}
            </span>
            {alert && (
              <div
                className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                  expanded ? "" : "top-2"
                }`}
              ></div>
            )}

            {!expanded && (
              <div
                className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
              >
                {text}
              </div>
            )}
          </div>
        </Link>
      }
    </>

    // <Link to={path}>
    // <li className={`relative flex mt-5 items-center py-2 px-3 my-1 font-medium rounded-full text-[16px]  cursor-pointer transition-colors group active:bg-[#FE9515] from-indigo-200 to-indigo-100 active:text-white hover:bg-[#fdba74] Hover:text-white `}>
    //     {icon}
    //     <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
    //     {alert && (
    //         <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

    //         </div>
    //     )}

    //     {!expanded && (
    //         <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
    //             {text}
    //         </div>
    //     )}
    // </li>
    // </Link>
  );
}
