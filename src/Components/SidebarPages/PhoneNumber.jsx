import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
 import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
 import Ai from "../../assets/Ai.png"


function PhoneNumber() {



  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  } 

  const [isChecked, setIsChecked] = useState(true);
 


  return (
    <div className=''>


    <header className='flex justify-between items-center px-4 my-4'>
  <div className='leading-5 text-start'>
    <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>Phone Number</h1> {/* Text size changes with screen size */}
    <span className='text-sm md:text-base text-white'>By your number or add your existing number</span> {/* Adjusted text size */}
  </div>
  <div className='flex-shrink-0'> {/* Allows flexibility in space allocation */}
    <div className='flex items-center justify-between gap-2 border border-gray-500 rounded-full px-3 py-3 text-white'>
      <Icon icon="fa6-solid:plus" width={15} color='#55E3CB' />
      <span className='hidden md:inline-block text-sm px-2 cursor-pointer' onClick={openModal}>Get new number</span> {/* Hides text on smaller screens */}
    </div>
  </div>
</header>



<div className=" mx-auto w-[98%] bg-[#171717] h-0.5 "></div>

<div className='flex lg:flex-row flex-col px-5 gap-2 mt-1   '>



<div className='w-full lg:w-[20%] border border-gray-500 rounded-md   '>

<div  className="flex items-center bg-[#171717] px-2 mx-2 justify-around p-2 group cursor-pointer hover:bg-[#55E3CB] my-2 rounded-md ">

<div>
<img src={Ai} className='rounded-full h-6 w-6' alt="..." />
<p className='text-[8px] text-center  group-hover:text-black-500 text-white'>Ava</p>
</div>

<p className='text-white font-bold group-hover:text-black-500'>+(234) 345 4374</p>

  
</div>



<div  className="flex items-center bg-[#171717] px-2 mx-2 justify-around p-2 group cursor-pointer hover:bg-[#55E3CB] my-2 rounded-md ">

<div>
<img src={Ai} className='rounded-full h-6 w-6' alt="..." />
<p className='text-[8px] text-center  group-hover:text-black-500 text-white'>Ava</p>
</div>

<p className='text-white group-hover:text-black-500'>+(234) 345 4374</p>

  
</div>


 


</div>



<div className='w-full  lg:w-[80%] p-2 border bg-[#171717] border-gray-500 rounded-md '>

{/* assistant nav content start */}

<div className=' space-y-2'>

<div className='flex justify-between mx-2'>

<div>
  <p className='text-white text-sm font-bold'>+(234) 354 3423</p>
  <p className='text-gray-500 text-xs'>ID 2323fbdfdk93fbd</p>
</div>



<div className='bg-[#FE7E29] p-2 rounded-full'>
<Icon icon="fluent-mdl2:delete" className='font-bold' />
</div>


</div>

<hr />



 




<div className='w-full flex  gap-x-3 items-center sm:flex-row flex-col rounded-md bg-[#26292E] p-2'>

<div className='w-full sm:w-[48%]'>
 <p className='text-white text-sm'>Inbound</p>

<p className='text-gray-300 text-xs pt-3'>Inbound Phone Number:</p>
  
<select className='bg-[#171717] mt-1 rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Select Rule</option>
</select>


 </div>

 
 <div className='w-full mt-4 sm:w-[48%]'>
 
<p className='text-gray-300 text-xs pt-3'>Assistant:</p>
  
<select className='bg-[#171717] mt-1 rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Select Rule</option>
</select>


 </div>






</div>



<div className='rounded-md bg-[#26292E] p-2'>

<div className='w-full flex  gap-x-3 items-center sm:flex-row flex-col '>


<div className='w-full sm:w-[48%]'>
 <p className='text-white text-sm'>Outbound</p>

<p className='text-gray-300 text-xs pt-3'>Inbound Phone Number:</p>
  
<select className='bg-[#171717] mt-1 rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Select Rule</option>
</select>


 </div>

 
 <div className='w-full mt-4 sm:w-[48%]'>
 
<p className='text-gray-300 text-xs pt-3'>Assistant:</p>
  
<select className='bg-[#171717] mt-1 rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Select Rule</option>
</select>


 </div>


 </div>


 <div className='flex justify-between sm:flex-row flex-col  items-center mt-5'>
  <div className='flex flex-wrap sm:gap-y-0  gap-y-3 items-center gap-x-1 sm:gap-x-2'>
    <p className='text-white text-xs '>Select from Contact List</p>
    <Icon icon="icomoon-free:address-book" className='bg-[#FE7E29] p-0.5 rounded' height={"20"} width={"20"} />
    <p className='text-white text-xs '>Upload CSV file  </p>
    <Icon icon="fa-solid:file-upload" className='bg-[#FE7E29] p-0.5 rounded' height={"20"} width={"20"} />
    <p  className='text-white text-xs '>Download CSV Sample Template</p>
    <Icon icon="fa-solid:file-upload" className='bg-[#FE7E29] p-0.5 rounded' height={"20"} width={"20"} />
  </div>
  <p className='text-white text-xs mt-2 sm:mt-0'>Upload Number Count: 00</p>
</div>

<textarea name="" id="" cols="80" rows="5" className='bg-[#171717] w-full mt-2 rounded-md placeholder:text-sm placeholder:p-2' placeholder='Number you want to call'></textarea>



<div className='flex flex-col'>
  <p className='font-bold text-white  text-sm'>Set Campaign</p>

<div className='flex sm:flex-row flex-col gap-1 w-full'>

<div className='sm:w-[55%] w-full'>
  <p className='text-white text-sm py-2'>Name</p>
  <input type="text" placeholder='scenario 01' className='bg-[#171717] rounded-lg w-full  placeholder:px-2 placeholder:text-gray-500 p-1 placeholder:text-sm' />

</div>

<div class='sm:w-[55%] w-full '>
  <p class='text-white text-sm py-2'>Set Date</p>
  <div className='flex items-center bg-[#171717] rounded-lg p-1 gap-x-1'>
  <Icon icon="simple-line-icons:calender" className='bg-[#FE7E29] p-0.5 rounded' height={"18"} width={"18"} />
  <input type="date" class=' bg-transparent text-white  w-full placeholder:px-2 placeholder:text-gray-500   text-sm' />

  </div>
</div>


<div class='sm:w-[55%] w-full'>
  <p class='text-white text-sm py-2'>Set Time</p>
  <div className='flex items-center bg-[#171717] rounded-lg p-1 gap-x-1'>
  <Icon icon="simple-line-icons:calender" className='bg-[#FE7E29] p-0.5 rounded' height={"18"} width={"18"} />
  <input type="time" class=' bg-transparent text-white  w-full placeholder:px-2 placeholder:text-gray-500   text-sm' />

  </div>
</div>

<div class='sm:w-[55%] w-full '>


<button className='bg-[#FE7E29] w-[80%] mt-9 p-0.5 rounded'>Add</button>



</div>

  
</div>





</div>

<div className='bg-[#171717] mt-2 flex p-2 sm:flex-row flex-col items-center rounded-md justify-between'>

    <div>
      <p className='text-white text-sm'>abc compaign</p>
    </div>

    <div class='  '>
   <div className='flex items-center bg-[#171717] rounded-lg p-1 gap-x-1'>
  <Icon icon="simple-line-icons:calender" className='bg-[#FE7E29] p-0.5 rounded' height={"15"} width={"15"} />
  <input type="date" class=' bg-transparent text-white  w-full placeholder:px-2 placeholder:text-gray-500   text-xs' />

  </div>
</div>


<div class='  '>
   <div className='flex items-center bg-[#171717] rounded-lg p-1 gap-x-1'>
  <Icon icon="simple-line-icons:calender" className='bg-[#FE7E29] p-0.5 rounded' height={"15"} width={"15"} />
  <input type="time" class=' bg-transparent text-white  w-full placeholder:px-2 placeholder:text-gray-500   text-xs' />

  </div>
</div>




<div className='bg-[#FE7E29]  p-2 rounded-md'>
<Icon icon="fluent-mdl2:delete"   />
</div>
<div>

</div>



</div>



<button className='mt-5 float-right bg-[#FE7E29] px-4 text-sm py-2 rounded-md'>Outbound call</button>












</div>









<div>

</div>

</div>
{/* assistant nav content end */}

 

{/* Tabs End*/}


 

</div>
</div>












<Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-6xl border-[#55E3CB] border transform overflow-hidden rounded-2xl bg-[#26292E] p-6 text-left align-middle shadow-xl transition-all">
                <button className="absolute top-2 right-2 text-gray-300 hover:text-gray-400" onClick={closeModal}>
                <Icon icon="entypo:cross" color='orange' />
            </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-[#55E3CB]"
                  >
                    Get a new number
                  </Dialog.Title>
                  <div className="mt-2">
                   
        

  <div className=' mt-2  flex-grow'>
<select className='bg-[#171717] rounded-lg w-full text-gray-400 text-sm  p-2'>
    <option value="" className='text-gray-500'>Select your country</option>
</select>


  </div>



  <div className='flex flex-col mt-2 w-full'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200 p-6'>
              <thead className='bg-gray-600 mb-6'>
                <tr>
                  <th scope='col' className='px-6 py-3 flex items-center gap-x-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                  <Icon icon="vaadin:phone" color='#FE7E29' height={"17"} width={"17"} />
                    Number
                  </th>
                  <th scope='col' className='px-6 py-3 text-left  text-xs font-medium text-white uppercase tracking-wider'>
                 <div className='flex gap-x-2 items-center'>
                 <Icon icon="eva:person-add-fill" color='#FE7E29' height={"17"} width={"17"} />
                    Friendly Name
                 </div>
                  </th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    <div className='flex gap-x-2 items-center'>
                    <Icon icon="eva:pie-chart-fill" color='#FE7E29' height={"17"} width={"17"} />
                    Capabilities
                    </div>
                  </th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>

                    <div className='flex gap-x-2 items-center'>
                    <Icon icon="la:money-bill-wave"  color='#FE7E29' height={"17"} width={"17"}  />
                    Monthly Fee
                    </div>

                  </th>
                  <th scope='col' className='pl-20 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Order Now
                  </th>
                </tr>
              </thead>
              <tbody className=' my-6 divide-y divide-gray-200'>
                {/* Repeat this tr for each phone number */}
                <tr className='mb-7'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-white'>
                    +123 323 4234
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>
                    (123) 323-4234
                  </td>


                  <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>

                  <div className='flex gap-x-2 items-center'>
                  <Icon icon="eva:mic-fill" color='#FE7E29' height={"17"} width={"17"} />

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



<Icon icon="fa-solid:sms" color='#FE7E29' height={"17"} width={"17"} />
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


<Icon icon="fa-regular:image" color='#FE7E29' height={"17"} width={"17"} />

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


                
                  </td>



                  <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>
                    \$2.00
                  </td>
                  <td className='px-10 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <button className='text-white bg-[#55E3CB] px-4 py-2 rounded'>
                    <Icon icon="fa:shopping-cart" color='black' />
                    </button>
                  </td>
                </tr>
                
                {/* End of phone number row */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>



  <button onClick={closeModal} className='bg-[#55E3CB] px-3 py-1 rounded-md float-right'>Create</button>



                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>












    </div>
  )
}

export default PhoneNumber