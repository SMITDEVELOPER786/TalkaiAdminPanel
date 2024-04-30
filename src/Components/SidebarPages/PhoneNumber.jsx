import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState,Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function PhoneNumber() {
  const [open, setOpen] = useState(false)

  return (
    <div className='text-white'>

<header className='flex justify-between items-center px-4 my-4'>
  <div className='leading-5 text-start'>
    <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>Phone Number</h1> {/* Text size changes with screen size */}
    <span className='text-sm md:text-base text-white'>By your number or add your existing number</span> {/* Adjusted text size */}
  </div>
  <div className='flex-shrink-0'> {/* Allows flexibility in space allocation */}
    <div className='flex items-center justify-between gap-2 border border-gray-500 rounded-full px-3 py-3 text-white'>
      <Icon icon="fa6-solid:plus" width={15} color='#55E3CB' />
      <span className='hidden md:inline-block cursor-pointer'  onClick={()=>setOpen(true)} >Create new assistant</span> {/* Hides text on smaller screens */}
    </div>
  </div>
</header>




<div className='  px-5 flex  h-[570px]'>
<div className='w-full    border border-gray-500 rounded-md  '>

 

 <div className='flex '>
<button className='bg-[#55E3CB] m-4 rounded-md px-4 py-1 items-center sm:text-base text-xs text-black-500'><span className='font-bold text-sm sm:text-xl'>+ </span>Buy Number</button>

<button className='border-gray-500 border-2 sm:text-base text-xs m-4 rounded-md px-4 flex gap-2 py-1 items-center text-[#55E3CB]'>
<Icon icon="eva:settings-2-fill"   className='text-[#55E3CB] sm:h-4 h-3 w-3 sm:w-4 '  />
   import</button>
 </div>
 


 

 

</div>
 
</div>


{/*Modal Start*/}
{/* <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10  w-screen overflow-y-auto">
          <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              
              {
                tab==false ? 
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black-500 px-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="bg-black-500  pb-4 pt-5  sm:pb-4">
                  <div className="sm:flex sm:items-start">
                
                    <div className="mt-3 text-center  sm:text-left">
                      <Dialog.Title as="h3" className="sm:text-xl text-base font-semibold leading-6 text-[#55E3CB]">
<h1>                      Create your new Assistants                  
</h1>
                      <p className='text-[#FFFFFF] text-[10px] leading-3'>Please select a template or utilize a blank template to create your assistants.</p>
                          </Dialog.Title>
                
                    </div>
                  </div>
                </div>
                <div className='bg-black-500  grid  md:grid-cols-5 sm:grid-cols-3 grid-cols-2   gap-5 mb-20'>
                  
                <div className='space-y-2  flex flex-col items-center'>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>Lorem Ipsum</h1>
    </div>
    <div className='space-y-2  flex flex-col items-center'>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>Lorem Ipsum</h1>
    </div>
    <div className='space-y-2  flex flex-col items-center'>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>Lorem Ipsum</h1>
    </div>
    <div className='space-y-2  flex flex-col items-center'>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>Lorem Ipsum</h1>
    </div>
    <div className='space-y-2 flex flex-col items-center'>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>Lorem Ipsum</h1>
    </div>
    <div className='space-y-2  flex flex-col justify-center items-center'>
      <div className='p-[27px] border-2 bg-[#26292e]  rounded-full flex-shrink-0'>
        <img src={Plus} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>Lorem Ipsum</h1>
    </div>

                  </div>    
                <div className="bg-black-500 border-t gap-10 border-gray-600   py-3 sm:flex sm:flex-row ">
          

<div className='md:w-[70%] w-full'>
  <p className='text-[9px] text-white sm:text-start text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
</div>

<div className='flex justify-end md:w-32 w-full'>
<button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center  items-center rounded-md bg-[#55E3CB] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm   sm:mt-0 sm:w-auto"
                    onClick={() => settab(true)}
                    ref={cancelButtonRef}
                  >
                    Next
                  </button>
</div>
    
                </div>
              </Dialog.Panel>

:
<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black-500 px-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
<div className="bg-black-500  pb-4 pt-5  sm:pb-4">
  <div className="sm:flex sm:items-start">

    <div className="mt-3 text-center  sm:text-left">
      <Dialog.Title as="h3" className="sm:text-xl text-base font-semibold leading-6 text-[#55E3CB]">
<h1>                    Customization your assistant                 
</h1>
      <p className='text-[#FFFFFF] text-[10px] leading-3'>Please assign a unique name to your assistant.</p>
          </Dialog.Title>

    </div>
  </div>
</div>
<div className='bg-black-500 flex sm:flex-row flex-col items-center  sm:gap-20 gap-5 mb-40'>
  
<div className='space-y-1'>
<div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full'>
<img src={Ai} alt="" className='rounded-full' />
</div>
<h1 className='text-white text-xs text-center'>Lorem Ipsum</h1>
</div>
<div className='w-full space-y-5'>
  <input type="text" className='w-full bg-[#26292E] rounded-lg py-2 pl-3' style={{ fontSize: '12px' }} placeholder='Name' />
  <p className='text-[9px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
</div>

  </div>    
<div className="bg-black-500 border-t gap-3 border-gray-600  justify-end py-3 sm:flex sm:flex-row ">
   <button
    type="button"
    className="inline-flex w-full justify-center rounded-md text-[#717884] bg-[#26292E] px-3 py-2 text-sm font-semibold  shadow-sm  sm:w-auto"
    onClick={() => settab(false)}
  >
    Back
  </button>

<button
    type="button"
    className="mt-3 inline-flex w-full justify-center  items-center rounded-md bg-[#55E3CB] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm   sm:mt-0 sm:w-auto"
    onClick={() => setOpen(false)}
    ref={cancelButtonRef}
  >
    Next
  </button>

</div>
</Dialog.Panel>

              }
              
        





            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root> */}
{/*Modal End*/}








    </div>
  )
}

export default PhoneNumber