import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

import play from "../assets/play.png"
import download from "../assets/download.png"
import eye from "../assets/eye.png"

import ringtone from "../assets/ringtone.png"
import ringtone2 from "../assets/ringtone2.png"




const CallRecord = ({ assistant, to, duration, startedAt, endedAt, source }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);



  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };




  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };



  return (


<>





    <div className="flex  flex-col md:flex-row items-center m-3 text-xs justify-between bg-[#26292E] p-4 rounded-md mb-2">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <Icon icon="heroicons-solid:phone-outgoing" width="25" color='#55E3CB' height="25" />
        <p className="text-white ">Assistant: {assistant}</p>
        <p className="text-white">To: {to}</p>
        <p className="text-white">Call Duration: {duration}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-3">
        <p className="text-white md:mr-4 mb-2 md:mb-0">Started At: {startedAt}</p>
        <p className="text-white md:mr-4 mb-2 md:mb-0">Ended At: {endedAt}</p>
        <p className="text-white mb-2 md:mb-0">{source}</p>
        <Icon icon="entypo:laptop" width="22" className='md:block hidden' color='#6C6C6C' height="22" />
      </div>
      <div className="flex items-center space-x-2 mt-2 md:mt-0 ">
        {/* Replace the following with actual icons or images */}
        <img src={play} className='w-7 h-7 cursor-pointer' alt="play" onClick={toggleDropdown} />
        <img src={download} className='w-7 h-7 cursor-pointer' alt="download"   />
        <img src={eye} className='w-7 h-7 cursor-pointer' alt="eye" onClick={toggleDropdown2} />

      </div>

















    </div>



{/* Audio Recording */}
    {dropdownOpen && (
          <div className="  bg-[#26292E] rounded-md shadow-lg border p-5  mx-10   mt-1">
          
            <div className='grid lg:grid-cols-6 text-center sm:grid-cols-4 sm:gap-y-0 gap-y-4  grid-cols-1 text-sm text-white  justify-between'>
              <h1>Ava</h1>

              <img src={ringtone} className='h-5 w-32 sm:mx-0 mx-auto' alt="......" />


              <img src={ringtone} className='h-5 w-32 sm:mx-0 mx-auto' alt="......" />

              <img src={ringtone} className='h-5 w-32 sm:mx-0 mx-auto' alt="......" />


            <p>01:20</p>

            <div className='flex  items-center gap-3 sm:mx-0 mx-auto'>
            <Icon icon="el:stop-alt" width="25" height="25" className=' '  style={{color: '#55E3CB'}} />

            <img src={download} className='w-7 h-7 cursor-pointer ' alt="download" onClick={toggleDropdown} />

            </div>

            </div>


<hr className='w-[90%] my-3 mx-auto' />

<div className='grid lg:grid-cols-6 text-center sm:grid-cols-4 sm:gap-y-0 gap-y-4  grid-cols-1 text-sm text-white  justify-between'>
              <h1>User</h1>

              <img src={ringtone2} className='h-5 w-32 sm:mx-0 mx-auto' alt="......" />


              <img src={ringtone2} className='h-5 w-32 sm:mx-0 mx-auto' alt="......" />

              <img src={ringtone2} className='h-5 w-32 sm:mx-0 mx-auto' alt="......" />


            <p>01:20</p>

            <div className='flex  items-center gap-3 sm:mx-0 mx-auto'>
            <Icon icon="el:stop-alt" width="25" height="25" className=' '  style={{color: '#55E3CB'}} />

            <img src={download} className='w-7 h-7 cursor-pointer ' alt="download" onClick={toggleDropdown} />

            </div>

            </div>

          </div>
        )}


{/* Audio History */}


{dropdownOpen2 && (
          <div className="  bg-[#26292E] rounded-md shadow-lg border p-5  mx-10   mt-1">
            
            <div className='flex text-white gap-x-5 text-sm'>
              <p>ID: ae7dac39-07b1</p>
              <p>Ended Reason: customer-ended-call</p>

            </div>

<div className='text-white'>
  <p className='text-sm pt-2'>Summary:</p>
  <div className='bg-[#171717] text-xs sm:text-sm mt-2 border rounded-lg p-3'>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>



<div className='grid md:grid-cols-2 gap-x-5 mt-2 grid-cols-1'>


<div className='text-white'>
  <p>Transcript:</p>

  <div className='bg-[#171717] text-xs sm:text-sm mt-2 border rounded-lg p-3'>

<p className='text-[#55E3CB]'>AI:Lorem Ipsum is simply </p>
<p className=' '>Client:Lorem Ipsum is simply </p>

<p className='text-[#55E3CB]'>AI:Lorem Ipsum is simply </p>
<p className=' '>Client:Lorem Ipsum is simply </p>
<p className='text-[#55E3CB]'>AI:Lorem Ipsum is simply </p>
<p className=' '>Client:Lorem Ipsum is simply </p>




  </div>


</div>





<div className='text-white'>
  <p>Cost:</p>

  <div className='bg-[#171717] text-xs sm:text-sm mt-2 border rounded-lg p-3'>




 <div className='space-y-1' >
 
<div className='flex justify-between'>

<p>STT:</p>

<p>$0.05 ($0.01 / min)</p>
</div>

<div className='flex justify-between'>

<p>STT:</p>

<p>$0.05 ($0.01 / min)</p>
</div>
<div className='flex justify-between'>

<p>STT:</p>

<p>$0.05 ($0.01 / min)</p>
</div>

<div className='flex justify-between'>

<p>STT:</p>

<p>$0.05 ($0.01 / min)</p>
</div>
<div className='flex justify-between'>

<p>STT:</p>

<p>$0.05 ($0.01 / min)</p>
</div>
 


 </div>


  </div>


</div>


</div>

















           
          </div>
        )}






</>






  );
};

export default CallRecord;
