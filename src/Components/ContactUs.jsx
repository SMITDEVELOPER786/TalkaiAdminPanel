import React from "react";
import circle from "../assets/character.png"
import circle1 from "../assets/orange.png"
import circle2 from "../assets/lightblue.png"
import { Icon } from '@iconify/react/dist/iconify.js'


function ContactUs() {
  return (
    <>
      <div className="container py-10">
       <div className=" flex flex-col  justify-center items-center">
       <h1 className="text-center text-[#FE7E29] pt-10 font-bold text-base md:text-2xl ">
          GET IN TOUCH WITH US!
        </h1>

       </div>
        <div className="bg-[#55E3CB] mt-2 w-14 md:w-20 h-2   flex justify-center mx-auto" />
        <p className="text-sm md:px-40 sm:px-20 pt-5 text-center text-black-500">
        Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.
        </p>
        <div className="flex md:flex-row flex-col py-5" >
<div className="md:flex hidden flex-col w-full justify-center items-center">


   <div className="relative z-50">
   <img src={circle} className="w-full " alt="" />
  
   <div className="absolute md:left-52 -z-40 md:top-10 ">
<img src={circle2} className="w-72 " alt="" />
</div>
<div className="absolute -z-40 md:bottom-20 md:left-20  ">
<img src={circle1} className="w-60" alt="" />
</div>
   </div>

   <div className=" flex justify-center items-center w-full">
   <button className=" text-black w-96 bg-[#55E3CB] rounded-full px-5 py-2 mt-4">
                SIGN UP FOR FREE
              </button>
   </div>
</div>
<div className="w-full">
<div class="flex items-center w-full justify-center p-12">

  <div class=" w-full ">
    <div>
      <div class="mb-5">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          class="w-full rounded-full border border-gray-600  bg-white py-2  px-6 text-base font-medium text-[#6B7280] outline-none "
        />
      </div>
      <div class="mb-5">

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          class="w-full rounded-full border border-gray-600  bg-white py-2  px-6 text-base font-medium text-[#6B7280] outline-none "
        />
      </div>
   
      <div class="mb-5">
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Your Message"
          class="w-full rounded-2xl border border-gray-600  bg-white py-2  px-6 text-base font-medium text-[#6B7280] outline-none "
        ></textarea>
      </div>
      <div>
      <button className=" text-white w-full bg-black-500 rounded-full px-5 py-2 ">
                SUBMIT
              </button>
      </div>

      <div className="flex lg:flex-row flex-col py-5 items-center gap-3">
      <div className='flex sm:justify-start justify-center  items-center gap-2'>
    <div>
        <span><Icon icon="ic:baseline-phone" color="#FE7E29" width="32" height="32" /></span>
    </div>
    <div className=''>
        <h1 className='text-sm font-bold leading-3'>Office Phone Number</h1>
        <h1 className='text-sm'>1 (833) 570 0997</h1>
    </div>
   </div>
   <div className='flex sm:justify-start justify-center  items-center gap-2'>
    <div>
    <Icon icon="zondicons:at-symbol" color="#FE7E29" width="32" height="32" />    </div>

    <div className=''>
        <h1 className='text-sm font-bold leading-3'>Office Email</h1>
        <h1 className='text-sm'>info@talkai247.com</h1>
    </div>
   </div>
      </div>
    </div>
  </div>
</div>
</div>
           
        </div>
      </div>
    </>
  );
}

export default ContactUs;