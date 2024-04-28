// import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'
import { Icon } from '@iconify/react';


function Account() {


  const [apiKey, setApiKey] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [showPublicKey, setShowPublicKey] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  
  // Function to toggle visibility of API Key
  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  // Function to toggle visibility of Public Key
  const togglePublicKeyVisibility = () => {
    setShowPublicKey(!showPublicKey);
  };

  // Function to copy API Key to clipboard
  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
  };

  // Function to copy Public Key to clipboard
  const copyPublicKey = () => {
    navigator.clipboard.writeText(publicKey);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteClick = () => {
    setInputValue('');
  };

  return (
    <div>

<header className="flex justify-between items-center px-4 my-4">
        <div className="leading-5 text-start">
          <h1 className="text-[18px] md:text-2xl text-[#55E3CB]">
          Account
                    </h1>{" "}
          {/* Text size changes with screen size */}
          <span className="text-sm md:text-base text-white">
          Customize your account details.{" "}
          </span>{" "}
          {/* Adjusted text size */}
        </div>
      </header>
      <div className=" mx-auto w-[98%] bg-[#171717] h-0.5 "></div>


<div className='flex lg:flex-row lg:space-y-0 space-y-2 flex-col h-full justify-between mx-3 bg-black-500 rounded-md border border-[#707070] px-2 py-2'>


  <div className='rounded-xl border border-[#707070] bg-[#26292E] p-5 w-full lg:w-[30%]'>

<h1 className='text-white text-[16px] mb-4'>Account Settings</h1>

  {/* Email input field */}
  <div className="mb-4">
    <label htmlFor="email" className="block text-white text-[16px]">Email</label>
    <input type="email"  className="block w-full px-4 py-2 rounded-md bg-[#171717] text-white border border-gray-600 focus:outline-none focus:border-[#707070]" />
  </div>

  {/* Server URL input field */}
  <div className="mb-4">
    <label htmlFor="serverUrl" className="block text-white text-[16px]">Server URL</label>
    <input type="text" id="serverUrl" className="block w-full px-4 py-2 rounded-md bg-[#171717] text-white border border-gray-600 focus:outline-none focus:border-[#707070]" />
  </div>

  {/* Server URL Secret Call input field */}
  <div className="mb-4">
    <label htmlFor="serverUrlSecretCall" className="block text-white text-[16px]">Server URL Secret Call</label>
    <input type="text" id="serverUrlSecretCall" className="block w-full px-4 py-2 rounded-md bg-[#171717] text-white border border-gray-600 focus:outline-none focus:border-[#707070]" />
  </div>

  {/* Concurrency Limit dropdown */}
  <div className="mb-4">
    <label htmlFor="concurrencyLimit" className="block text-white text-[16px]">Concurrency Limit:</label>
    <select id="concurrencyLimit" className="block w-full px-4 py-2 rounded-md bg-[#171717] text-white border border-gray-600 focus:outline-none focus:border-[#707070]">
      <option value="1">20</option>
      <option value="5">40</option>
      <option value="10">60</option>
      <option value="20">80</option>
    </select>
  </div>

  <div className="flex justify-end items-center ">
    <button className="flex items-center bg-[#55E3CB] tex-[14px] gap-2 text-black px-3 py-1 rounded-3xl mr-2">
      <Icon icon="fa-solid:save" className="h-4 w-4" />
      <span className="mr-2">Save</span>
    </button>
  </div>
  </div>

  <div className='space-y-2 w-full lg:w-[30%]'>
  <div className='bg-[#26292E] rounded-xl border border-[#707070] p-4'>
    <h1 className='text-white text-[16px] mb-4'>Vapi Keys</h1>

    {/* API Key input field */}
    <div className="mb-4">
      <label htmlFor="apiKey" className="block text-white text-[16px]">API Key - <span className='text-[8px]'>(Use this Key when dealing with Vapi via Backend Endpoints.)</span> </label>
      <div className="flex gap-1 px-1 items-center bg-[#171717] rounded-md border border-gray-600">
        <input 
          type={showApiKey ? 'text' : 'password'}
          id="apiKey" 
          value={apiKey} 
          onChange={(e) => setApiKey(e.target.value)} 
          className="flex-1 w-[100px] px-1 md:px-4 py-2 rounded-md bg-transparent text-white focus:outline-none"
        />
        <div className='bg-[#26292E] p-1 rounded-md'>
          <Icon 
            icon={showApiKey ? 'el:eye-close' :'subway:eye'} 
            className="h-4 w-4 text-gray-400 cursor-pointer" 
            onClick={toggleApiKeyVisibility} 
          />
        </div>
        <div className='bg-[#26292E] p-1 rounded-md'>
          <Icon 
            icon='fa-solid:copy' 
            className="h-4 w-4 text-gray-400 cursor-pointer" 
            onClick={copyApiKey} 
          />
        </div>
      </div>
    </div>

    {/* Public Key input field */}
    <div className="mb-4">
      <label htmlFor="publicKey" className="block text-white text-[16px]">Public Key - <span className='text-[8px]'>(Use this Key when using Vapi Client SDKs in Frontend.)</span> </label>
      <div className="flex gap-1 px-1 items-center bg-[#171717] rounded-md border border-gray-600">
        <input 
          type={showPublicKey ? 'text' : 'password'}
          id="publicKey" 
          value={publicKey} 
          onChange={(e) => setPublicKey(e.target.value)} 
          className="flex-1 w-[100px] px-1 md:px-4 py-2 rounded-md bg-transparent text-white focus:outline-none"
        />
        <div className='bg-[#26292E] p-1 rounded-md'>
          <Icon 
            icon={showPublicKey ? 'el:eye-close' :'subway:eye'} 
            className="h-4 w-4 text-gray-400 cursor-pointer" 
            onClick={togglePublicKeyVisibility} 
          />
        </div>
        <div className='bg-[#26292E] p-1 rounded-md'>
          <Icon 
            icon='fa-solid:copy' 
            className="h-4 w-4 text-gray-400 cursor-pointer" 
            onClick={copyPublicKey} 
          />
        </div>
      </div>
    </div>
  </div>

  <div className='bg-[#26292E] rounded-xl border border-[#707070] p-4'>
    <h1 className='text-white text-[16px] mb-5'>Change Password</h1>

    <div className="mb-4">
      <label htmlFor="email" className="block text-white text-[14px]">New Password</label>
      <input type="password" className="block w-full px-4 py-2 rounded-md bg-[#171717] text-white border border-gray-600 focus:outline-none focus:border-[#707070]" />
    </div>

    <div className="flex justify-end items-center ">
      <button className="flex items-center bg-[#55E3CB] text-[14px] gap-2 text-black px-3 py-1 rounded-3xl mr-2">
        <Icon icon="fa-solid:save" className="h-4 w-4" />
        <span className="mr-2">Set</span>
      </button>
    </div>
  </div>
</div>





  <div className='  rounded-xl border border-[#707070] bg-[#26292E] p-5 w-full lg:w-[39%]'>

  <h1 className='text-white text-[16px] mb-4'>Payment Method</h1>

  <label htmlFor="cardDetails" className="text-white mr-2">Card Details</label>
<div className='flex items-center gap-1'>
  <div className="bg-[#171717] rounded-md border border-[#707070] px-2 py-1 flex items-center">
      <Icon icon='fa:cc-mastercard' className="text-[#6C6C6C] h-6 w-6 mr-2" />
      <input 
        type="text" 
        id="cardDetails" 
        className="flex-1 w-[50px] md:w-[200px] lg:w-[200px] bg-transparent text-white  border-gray-600 focus:outline-none mr-1" 
        placeholder="Card Number" 
        value={cardNumber} 
        onChange={(e) => setCardNumber(e.target.value)} 
      />
      <input 
        type="text" 
        id="expiryMonth" 
        className="w-8  bg-transparent text-white  focus:outline-none mr-0.5" 
        placeholder="MM" 
        value={expiryMonth} 
        onChange={(e) => setExpiryMonth(e.target.value)} 
      />
      <span className="text-white mr-1">/</span>
      <input 
        type="text" 
        id="expiryYear" 
        className="w-8   bg-transparent text-white  focus:outline-none mr-0.5" 
        placeholder="YY" 
        value={expiryYear} 
        onChange={(e) => setExpiryYear(e.target.value)} 
      />
      <input 
        type="text" 
        id="cvc" 
        className="w-8  bg-transparent text-white focus:outline-none mr-0.5" 
        placeholder="CVC" 
        value={cvc} 
        onChange={(e) => setCvc(e.target.value)} 
      />
     
    </div>
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



<div className='mt-10'>

<div className="relative mt-2">
      <div className="flex items-center">
        <input 
          type="radio"
          className="mr-2"
          name="radioButton"
          // Add radio button functionality here
        />
        <input
          type="text"
          className="border w-[170px] sm:w-[330px] border-gray-300 bg-[#171717]  rounded-md px-4 py-1 focus:outline-none "
          value={inputValue}
          onChange={handleInputChange}
          placeholder="3454 **** **** **67"
        />
      
      <div className='bg-[#171717] px-3 py-3 ml-2 rounded-md'>
        <Icon
          icon='icomoon-free:bin2'
          className=" right-2 text-orange-400  cursor-pointer"
          onClick={handleDeleteClick}
          />
          </div>
          </div>
    
    </div>

    <div className="relative mt-3">
      <div className="flex items-center">
        <input 
          type="radio"
          className="mr-2"
          name="radioButton"
          // Add radio button functionality here
        />
        <input
          type="text"
          className="border w-[170px] sm:w-[330px] border-gray-300 bg-[#171717]  rounded-md px-4 py-1 focus:outline-none "
          value={inputValue}
          onChange={handleInputChange}
          placeholder="3454 **** **** **67"
        />
      
      <div className='bg-[#171717] px-3 py-3 ml-2 rounded-md'>
        <Icon
          icon='icomoon-free:bin2'
          className=" right-2 text-orange-400  cursor-pointer"
          onClick={handleDeleteClick}
          />
          </div>
          </div>
    
    </div>

    <div className="relative mt-3">
      <div className="flex items-center">
        <input 
          type="radio"
          className="mr-2"
          name="radioButton"
          // Add radio button functionality here
        />
        <input
          type="text"
          className="border w-[170px] sm:w-[330px] border-gray-300 bg-[#171717]  rounded-md px-4 py-1 focus:outline-none "
          value={inputValue}
          onChange={handleInputChange}
          placeholder="3454 **** **** **67"
        />
      
      <div className='bg-[#171717] px-3 py-3 ml-2 rounded-md'>
        <Icon
          icon='icomoon-free:bin2'
          className=" right-2 text-orange-400  cursor-pointer"
          onClick={handleDeleteClick}
          />
          </div>
          </div>
    
    </div>

</div>


</div>

</div>




    </div>
  )
}

export default Account