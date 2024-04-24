import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Assistants() {
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
<div className='w-full lg:w-[80%] border border-gray-500 rounded-md '>d</div>
</div>

    </div>
  )
}

export default Assistants