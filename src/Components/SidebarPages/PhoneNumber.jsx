import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function PhoneNumber() {
  return (
    <div className='text-white'>

<header className='flex justify-between items-center px-4 my-4'>
  <div className='leading-5 text-start'>
    <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>Phone Number</h1> {/* Text size changes with screen size */}
    <span className='text-sm md:text-base text-white'>By your number or add your existing number  </span> {/* Adjusted text size */}
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











    </div>
  )
}

export default PhoneNumber