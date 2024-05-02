import { Icon } from "@iconify/react";
import React, { useState ,Fragment} from "react";
import { Dialog, Transition } from '@headlessui/react'

function Billing() {

  const [isOpen, setIsOpen] = useState(false);

  let [modalOpen, setModalOpen] = useState(true)
  const [isChecked, setIsChecked] = useState(true);

    function closeModal() {
      setModalOpen(false)
    }
  
    function openModal() {
      setModalOpen(true)
    }






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












         {/* Modal Start */}
<Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-3xl border-[#55E3CB] border transform overflow-hidden rounded-2xl bg-[#26292E] p-6 text-left align-middle shadow-[#55E3CB] shadow-2xl  transition-all">
                <button className="absolute top-2 right-2 text-gray-300 hover:text-gray-400" onClick={closeModal}>
                <Icon icon="entypo:cross" color='orange' />
            </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-[#55E3CB]"
                  >
                    Delicately drafted plans which suits your need!
                  </Dialog.Title>
                  <div className="mt-2">
 

                <div>
                  <p className="text-white text-sm pt-4">subscription plane</p>
                  <div className="flex gap-x-3 w-full">

                    <div className="w-[68%] mt-2">
<select className='bg-[#171717] rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Elevate</option>
</select>
  </div>
                 
                 
                 
                    <div className="w-[28%] mt-2">
                    <select className='bg-[#171717] rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Monthly</option>
</select>


                    </div>




                  </div>

<hr  className="my-3" />

<div>
  <p className="text-white font-bold text-sm">Payment Method</p>
  <p className="text-gray-300 text-xs py-1">Card Details</p>






  <div className="bg-[#171717] flex p-2 justify-between items-center rounded-md">

<div className="flex items-center flex-1">
  <Icon icon="grommet-icons:credit-card" color="white" />
  <input type="text" className="bg-transparent outline-none placeholder:text-sm px-3" placeholder="Card Number" />
</div>

<div className="flex items-center flex-1 text-right">
  <input type="text" className="bg-transparent outline-none placeholder:text-sm px-3" placeholder="MM/YY" />
  <input type="text" className="bg-transparent outline-none placeholder:text-sm px-3" placeholder="CVC" />

  <div className="bg-[#171717]  flex items-center">
    <input 
      type="checkbox" 
      id="agree" 
      checked={isChecked} 
      onChange={(e) => setIsChecked(e.target.checked)}  
      className="h-7 w-7 mt-1 opacity-0 absolute top-0 left-0"
    />
    <label className="h-7 w-7 mt-1 bg-black relative" htmlFor="agree">
      {isChecked && (
        <Icon 
          icon="fa-solid:check" 
          className="text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        />
      )}
    </label>
  </div>

</div>
</div>



<div className="flex gap-x-2 float-right mt-5">

<button className="bg-[#55E3CB] px-3 rounded-md">Pay Now</button>

<p className="text-white font-bold text-xl">$20.00</p>

</div>



</div>







                </div>







  
  {/* <button onClick={closeModal} className='bg-[#55E3CB] px-3 py-1 rounded-md float-right'>Create</button> */}



                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>




        </div>
      </div>
    </>
  );
}

export default Billing;
