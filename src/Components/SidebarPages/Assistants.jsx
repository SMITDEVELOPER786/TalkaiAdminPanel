import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import 'react-tabs/style/react-tabs.css';
import "../../App.css"
function Assistants() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)
  return (
    <div>
    <header className='flex justify-between items-center px-4 my-4'>
  <div className='leading-5 text-start'>
    <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>Assistants</h1> {/* Text size changes with screen size */}
    <span className='text-sm md:text-base text-white'>Manage your voice assistants</span> {/* Adjusted text size */}
  </div>
  <div className='flex-shrink-0'> {/* Allows flexibility in space allocation */}
    <div className='flex items-center justify-between gap-2 border border-gray-500 rounded-full px-3 py-3 text-white'>
      <Icon icon="fa6-solid:plus" width={15} color='#55E3CB' />
      <span className='hidden md:inline-block'>Create new assistant</span> {/* Hides text on smaller screens */}
    </div>
  </div>
</header>
<div className=" mx-auto w-[98%] bg-[#171717] h-0.5 "></div>

<div className='flex lg:flex-row flex-col px-5 gap-2 mt-1 h-[570px]'>
<div className='w-full lg:w-[20%] border border-gray-500 rounded-md  '>

<div className="flex items-center bg-[#171717] px-2 mx-2 my-2 rounded ">
  <span className="mr-4 text-white">Ava</span> {/* "Ava" on the left side */}

  <div className="relative flex-1"> {/* Input field with relative positioning for icons */}
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-4 pr-14 py-2 rounded bg-[#171717] text-gray-700  outline-none  "
    />

    {/* Mic and Bin icons on the right side of the input field */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-1 text-gray-500">
      <Icon icon="ic:baseline-mic" width="20"  color='#717884'/> {/* Mic icon */}
      <Icon icon="ic:baseline-delete" width="20" color='#FE7E29' /> {/* Bin icon */}
    </div>
  </div>
</div>

<div className="flex items-center bg-[#171717] px-2 mx-2 my-2 rounded ">
  <span className="mr-4 text-white">Leo</span> {/* "Leo" on the left side */}

  <div className="relative flex-1"> {/* Input field with relative positioning for icons */}
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-4 pr-14 py-2 rounded bg-[#171717] text-gray-700  outline-none  "
    />

    {/* Mic and Bin icons on the right side of the input field */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-1 text-gray-500">
      <Icon icon="ic:baseline-mic" width="20"  color='#717884'/> {/* Mic icon */}
      <Icon icon="ic:baseline-delete" width="20" color='#FE7E29' /> {/* Bin icon */}
    </div>
  </div>
</div>


</div>
<div className='w-full  lg:w-[80%] p-2 border bg-black-500 border-gray-500 rounded-md '>

{/* assistant nav content start */}

<div className=' space-y-2'>
<div className='w-full flex sm:space-y-0 space-y-2 items-center sm:flex-row flex-col  bg-[#26292E] p-2'>
<div className='flex sm:justify-start  justify-between items-center w-full'>
<div>
<span className='text-white'>Ava</span>
<span className='text-gray-500 ml-2'>49aecaf4-b1db</span>
</div>

<div className='bg-black-500 flex rounded-lg justify-center items-center p-1.5'>
<Icon icon="fa-solid:copy" color='gray' width="18" height="18" />
</div>
</div>
<div className='flex gap-1 w-full sm:justify-end  justify-between items-center'>

<div className='flex items-center gap-1'>
<div className='bg-black-500 text-center rounded-lg flex justify-center items-center'>
<Icon icon="fa-solid:share-alt" color='gray' width="26" height="26" className='p-1.5' />
</div>
<div className='bg-black-500 text-center rounded-lg flex justify-center items-center'>
<Icon icon="fluent-mdl2:location-dot" color='gray' width="28" height="28" className='p-1' />
</div>
</div>

<div className='bg-[#FE7E29] p-1 rounded-full flex items-center gap-1.5'>
<div className='bg-black-500 text-center rounded-full flex justify-center items-center'>
<Icon icon="subway:call" color='#55E3CB' width="28" height="28" className='p-1.5' />
</div>
<h1>Test Ava</h1>
</div>

</div>
</div>
<div className='w-full flex  items-center sm:flex-row flex-col bg-[#26292E] p-2'>
<div className='flex sm:justify-start w-full  justify-between items-center gap-2'>

<div className='flex items-center gap-2'>
<Icon icon="subway:menu" color='#171717' width="20" height="20" />
<span className='text-white '>Mode</span>
</div>
<div className='p-1'>
<select name="" id="" className='bg-black-500 text-white border border-gray-600  p-1 rounded-lg w-32'>
  <option value="">Web</option>
</select>
</div>
</div>
<div className='flex  sm:justify-end w-full justify-between items-center gap-1'>

<div className='bg-black-500 p-1.5 rounded-full flex items-center gap-1.5'>
<div className='bg-[#26292E] text-center rounded-full flex justify-center items-center'>
<Icon icon="wpf:delete" fill='gray' color='#6C6C6C' width="28" height="28" className='p-1.5' />
</div>
<h1 className='text-[#BCBDBF]'>Discard</h1>
</div>

<div className='bg-[#FE7E29] p-1 rounded-full flex items-center gap-1.5'>
<div className='bg-black-500 text-center rounded-full flex justify-center items-center'>
<Icon icon="oi:data-transfer-upload" color='#55E3CB' width="28" height="28" className='p-1.5' />
</div>
<h1>Publish</h1>
</div>

</div>
</div>
<div>

</div>

</div>
{/* assistant nav content end */}

{/*Tabs Start*/}
<div className='p-2 border rounded-lg border-gray-600  '>
<Tabs >
    <TabList className="border-b-0  ">
      <Tab >
        <div className='flex items-center gap-2'>
        <Icon icon="ri:user-voice-fill" width="18" height="18" /> Voice
        </div>
      </Tab>
      <Tab>        <div className='flex items-center gap-2'>
      <Icon icon="material-symbols:functions" width="22" height="22" /> Functions
        </div></Tab>
        <Tab>        <div className='flex items-center gap-2'>
        <Icon icon="material-symbols:code" width="22" height="22" /> Advanced
        </div></Tab>
    </TabList>

    <TabPanel>
<div className='py-[92px] '>

<div className='flex items-center sm:flex-row flex-col gap-3 w-full'>
  <div className='flex flex-col w-full'>
    <label htmlFor="" className='text-white'>Provider</label>
    <select name="" id=""  className='bg-black-500 text-white border outline-none border-gray-600  p-1 rounded-lg '>
      <option value="">OpenAi</option>
    </select>
  </div>
  <div className='flex flex-col w-full'>
    <label htmlFor="" className='text-white'>Voice</label>
      <div className='flex items-center'>
    <select name="" id=""  className='bg-black-500  w-full text-white border border-r-0 outline-none border-gray-600  p-1 rounded-lg '>
      <option value="">Echo</option>
      
    </select>
<div className=''>
<Icon icon="carbon:play-filled" width="24" height="24"  color='#55E3CB' />
</div>
      </div>
    
  </div>
</div>

<div className='py-5'>
  <div className='py-2 flex items-center gap-1'>
  <Icon icon="uil:setting"  color="#717884" width="22" height="22" />
    <h1 className='text-white'>Additional Configuration</h1>
  </div>
<div className='flex items-center sm:flex-row flex-col gap-3 w-full'>
  <div className='flex flex-col w-full'>
    <label htmlFor="" className='text-white'>Background Sound</label>
    <select name="" id=""  className='bg-black-500 text-white border outline-none border-gray-600  p-1 rounded-lg '>
      <option value="">Default</option>
    </select>
  </div>
  <div className='flex flex-col w-full'>
    <label htmlFor="" className='text-white'>Speed</label>
      <div className='flex items-center'>
  <div className='border border-gray-600 gap-3 w-full rounded-lg flex items-center py-1.5 px-3'>
    <h1 className='text-[#55E3CB] text-xs'>Slow</h1>
<input type="range" class="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none

  [&::-webkit-slider-thumb]:w-3.5
  [&::-webkit-slider-thumb]:h-3.5
  [&::-webkit-slider-thumb]:-mt-1.5
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:bg-[#55E3CB]
  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:transition-all
  [&::-webkit-slider-thumb]:duration-150
  [&::-webkit-slider-thumb]:ease-in-out
  [&::-webkit-slider-thumb]:

  [&::-moz-range-thumb]:w-2.5
  [&::-moz-range-thumb]:h-2.5
  [&::-moz-range-thumb]:appearance-none
  [&::-moz-range-thumb]:bg-white
  [&::-moz-range-thumb]:border-4
  [&::-moz-range-thumb]:border-[#55E3CB]
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:transition-all
  [&::-moz-range-thumb]:duration-150
  [&::-moz-range-thumb]:ease-in-out

  [&::-webkit-slider-runnable-track]:w-full
  [&::-webkit-slider-runnable-track]:h-0.5
  [&::-webkit-slider-runnable-track]:bg-[#707070]
  [&::-webkit-slider-runnable-track]:rounded-full
  [&::-webkit-slider-runnable-track]:

  [&::-moz-range-track]:w-full
  [&::-moz-range-track]:h-2
  [&::-moz-range-track]:bg-gray-100
  [&::-moz-range-track]:rounded-full" id="basic-range-slider-usage"/>
 
 <h1 className='text-[#FE7E29] text-xs'>Fast</h1>
 
  </div>

      </div>
    
  </div>
</div>
</div>

</div>


    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

</div>

{/* Tabs End*/}



{/*Modal Start*/}
<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
{/*Modal End*/}


</div>
</div>

    </div>
  )
}

export default Assistants