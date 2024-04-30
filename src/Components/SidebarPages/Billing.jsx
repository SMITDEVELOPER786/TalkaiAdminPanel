import { Icon } from "@iconify/react";
import React, { useState } from "react";

function Billing() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center px-4 my-4">
        <div className="leading-5 text-start">
          <h1 className="text-[18px] md:text-2xl text-[#55E3CB]">
            Phone Number
          </h1>{" "}
          {/* Text size changes with screen size */}
          <span className="text-sm md:text-base text-white">
            By your number or add your existing number{" "}
          </span>{" "}
          {/* Adjusted text size */}
        </div>
      </header>

      <div className="h-[570px] border-gray-500 border bg-[#171717] rounded-xl w-full">
        {/* dropdown and search bar section */}

        <div className="w-full mt-2 rounded-lg flex flex-col  gap-5 py-3 px-5 bg-[#26292E] md:flex-row md:items-center">
          {/* dropdowns */}
          <div className="flex flex-col md:flex-row   md:items-center w-full md:w-auto mt-4 md:mt-0">
            <div className=" items-center justify-between md:justify-start w-full md:w-auto">
              <p className="text-sm text-white mr-2 pb-3">
                Select your payment method
              </p>

              <div className="flex items-center gap-3">
                <select
                  name=""
                  id=""
                  className="bg-[#171717] text-white text-sm rounded-lg border border-gray-500 p-2 w-full md:w-52"
                >
                  <option value="">4565 ** ** 6567</option>
                  <option value="">Demo</option>
                  <option value="">Demo</option>
                  <option value="">Demo</option>
                </select>

                <button className="px-4 py-2 rounded-lg text-sm bg-[#53DCC5]">
                  Pay Now
                </button>


               <div className="relative inline-block">
      <button className="cursor-pointer h-8  rounded-full p-2" onClick={toggleDropdown}>
      <Icon  color="gray" className="cursor-pointer h-8 bg-[#171717]" height={"18"} width={"18"} icon="vaadin:ellipsis-dots-v" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#171717] text-white rounded-md shadow-lg z-10" onClick={closeDropdown}>
          <a href="#" className="block px-4 py-2 text-sm   ">Payment History</a>
          <a href="#" className="block px-4 py-2 text-sm   ">Payment Method</a>
          <a href="#" className="block px-4 py-2 text-sm   ">Change Plan</a>
        </div>
      )}
    </div>



              </div>

              <p className="text-white text-xs pt-2">
                Next payment schedule day:05/06/2024
              </p>
            </div>

            <div className="h-10 border-l-2 sm:block hidden ml-3 lg:ml-10 border-gray-500" />

            <div className="text-center py-3 mx-10 lg:mx-40">
              <p className="text-white text-xs  ">Daily Usage</p>
              <p className="text-[#53DCC5] text-2xl   ">$10.00</p>

              <p className="text-white text-xs  ">Today</p>
            </div>

            <div className="h-10 border-l-2 sm:block hidden  ml-3 lg:ml-10 border-gray-500" />

            <div className="text-center py-3 mx-10 lg:mx-24 ">
              <p className="text-white text-xs  ">Monthly usage</p>
              <p className="text-[#53DCC5] text-2xl   ">$43.13</p>

              <p className="text-white text-xs  ">April</p>
            </div>
          </div>
        </div>

        <div>
          <br />



        <div className="bg-[#26292E] w-full p-4 rounded-lg flex justify-between px-10">

            <div className="flex items-center gap-x-2">
            <Icon icon="fontisto:date" width="16" height="16"   color="#FE7E29" />
            <p className="text-white text-sm">Date:</p>
            </div>


            <div className="flex items-center gap-x-2">
            <Icon icon="heroicons-solid:clock" width="16" height="16"   color="#FE7E29" />
             <p className="text-white text-sm">Minutes:</p>
            </div>


            <div className="flex items-center gap-x-2">
            <Icon icon="grommet-icons:currency" width="16" height="16"   color="#FE7E29" />

             <p className="text-white text-sm">Cost:</p>
            </div>


 

        </div>


        <div className="bg-[#26292E] mt-2 w-full p-4 rounded-lg flex justify-between px-10">

<div className="flex items-center gap-x-2">
 <p className="text-white text-sm">2024-03-06</p>
</div>


<div className="flex items-center gap-x-2">
  <p className="text-white text-sm">02:10</p>
</div>


<div className="flex items-center gap-x-2">
 
 <p className="text-white text-sm">$5.20</p>
</div>




</div>












          {/* <div class="overflow-x-auto">
            <table class="w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-[#26292E] w-full">
                <tr class="flex text-white w-full">
                  <th scope="col" class="px-6 py-3 flex-1">
                    <div class="flex items-center">
                      <Icon
                        class="text-orange-500 h-5 w-5"
                        icon="simple-line-icons:calendar"
                      />
                      <span class="ml-1">Date:</span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 flex-1">
                    <div class="flex items-center">
                      <Icon
                        class="text-orange-500 h-5 w-5"
                        icon="fa-solid:clock"
                      />
                      <span class="ml-1">Minutes:</span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 flex-1">
                    <div class="flex items-center">
                      <Icon
                        class="text-orange-500 h-5 w-5"
                        icon="fa-solid:money-bill"
                      />
                      <span class="ml-1">Cost:</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <br />
              <tbody>
                <tr class=" bg-[#26292E]  text-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    2024-03-06
                  </th>
                  <td class="px-6 py-4">02:10 </td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">$5.20</td>
                </tr>
                <br />

                <br />
              </tbody>
            </table>
          </div> */}








        </div>
      </div>
    </>
  );
}

export default Billing;
