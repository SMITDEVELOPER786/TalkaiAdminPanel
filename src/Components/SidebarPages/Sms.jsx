import { Icon } from '@iconify/react/dist/iconify.js'
import React,{Fragment,useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Sms() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  return (
    <div className='overflow-hidden'>


    <header className='flex justify-between items-center px-4 my-4'>
    <div className='leading-5 text-start'>
      <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>SMS</h1> {/* Text size changes with screen size */}
      <span className='text-sm md:text-base text-white'>Customize your SMS.</span> {/* Adjusted text size */}
    </div>
    <div className='flex-shrink-0'> {/* Allows flexibility in space allocation */}
      <div  onClick={()=>setIsOpen(true)} className='flex items-center cursor-pointer justify-between gap-2 border border-gray-500 rounded-full px-3 py-3 text-white'>
        <Icon icon="fa6-solid:plus" width={15} color='#55E3CB' />
        <span className='hidden md:inline-block text-sm px-3 cursor-pointer'  >Add New Rule</span> {/* Hides text on smaller screens */}
      </div>
    </div>
  </header>


  <div className='  border-gray-500 border bg-[#171717] rounded-xl w-full'> 
{/* Search start */}
<div className=' mt-2 rounded-lg flex flex-col gap-5 py-3 px-5 m-2 bg-[#26292E] md:flex-row md:items-center'>


  <div className='flex w-full md:w-auto items-center bg-[#171717] rounded-lg border border-gray-500'>
    <input type="text" placeholder='Search' className='bg-transparent placeholder:text-white p-2 placeholder:text-sm w-[400px]' />
    <Icon icon="heroicons-solid:search" width="26" height="26" color='gray' />
  </div>

</div>
{/* Search end */}


<div className='mt-2 rounded-lg w-full gap-5 py-3 px-5 bg-[#26292E] flex flex-col md:flex-row md:items-center'>

  <div className="flex-grow">
    <h1 className='text-white text-base p-1'>scenario description</h1>
    <h1 className='text-white text-sm p-1'>scenario name</h1>
    <input type="text" placeholder='Name' className='bg-[#171717] rounded-lg w-full placeholder:px-2 placeholder:text-gray-500 p-1 placeholder:text-sm' />
  </div>

  <div className='mt-6 flex-grow'>
    <h1 className='text-white text-sm p-1'>scenario name</h1>
    <input type="text" placeholder='Name' className='bg-[#171717] rounded-lg w-full placeholder:px-2 placeholder:text-gray-500 p-1 placeholder:text-sm' />
  </div>

  <div className='bg-[#55E3CB] rounded-sm h-20 px-0.5 flex items-center justify-center'>
    <Icon icon="la:edit" />
  </div>

</div>

<div className=' w-full gap-5 py-3 px-5 bg-[#26292E] flex flex-col md:flex-row md:items-center'>
 
  <div className='mt-6 flex-grow'>
    <h1 className='text-white text-sm p-1'>scenario name</h1>
    <input type="text" placeholder='Name' className='bg-[#171717] rounded-lg w-full placeholder:px-2 placeholder:text-gray-500 p-1 placeholder:text-sm' />
  </div>

  <div className='bg-orange-600 rounded-sm  h-20 px-0.5 flex items-center justify-center'>
    <Icon icon="fluent-mdl2:delete"  />
  </div>

</div>


 




</div>





{/* Modal Start */}
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
                <Dialog.Panel className="w-full max-w-3xl border-[#55E3CB] border transform overflow-hidden rounded-2xl bg-[#26292E] p-6 text-left align-middle shadow-xl transition-all">
                <button className="absolute top-2 right-2 text-gray-300 hover:text-gray-400" onClick={closeModal}>
                <Icon icon="entypo:cross" color='orange' />
            </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-[#55E3CB]"
                  >
                    Add new SMS rule
                  </Dialog.Title>
                  <div className="mt-2">
                   
                  <div className="flex-grow">
    <h1 className='text-white text-sm p-1'>scenario description</h1>
    <h1 className='text-white text-xs p-1'>scenario name</h1>
    <input type="text" placeholder='scenario 01' className='bg-[#171717] rounded-lg w-full placeholder:px-2 placeholder:text-gray-500 p-1 placeholder:text-sm' />
  </div>

  <div className=' mt-2  flex-grow'>
    <h1 className='text-white text-xs p-1'>Describe the scenario in which would like to send text message.</h1>

<select className='bg-[#171717] rounded-lg w-full text-gray-500 text-sm  p-1'>
    <option value="" className='text-gray-500'>Select Rule</option>
</select>


  </div>



  <div className=' mt-2  flex-grow'>
    <h1 className='text-white text-xs font-bold p-1'>Text Message</h1>
    <h1 className='text-white text-xs  p-1'>Enter the text message to be send to user when this scenario is trigged</h1>

<textarea name="" id="" cols="80" rows="5" className='bg-[#171717] rounded-md w-full'></textarea>

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

export default Sms