import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import CallRecord from "../../Common/CallRecord" 



function CallLogs() {


  const callRecords = [
    // Example data, replace with your own data source
    {
      assistant: 'Ava',
      to: 'Unknown number',
      duration: '00:30s',
      startedAt: 'Apr 2, 2024, 12:12 AM',
      endedAt: 'Apr 2, 2024, 12:12 AM',
      source: 'Web',
    },


    {
      assistant: 'Ava',
      to: 'Unknown number',
      duration: '00:30s',
      startedAt: 'Apr 2, 2024, 12:12 AM',
      endedAt: 'Apr 2, 2024, 12:12 AM',
      source: 'Web',
    },


    {
      assistant: 'Ava',
      to: 'Unknown number',
      duration: '00:30s',
      startedAt: 'Apr 2, 2024, 12:12 AM',
      endedAt: 'Apr 2, 2024, 12:12 AM',
      source: 'Web',
    },





    // ... add more call records as needed
  ];


  return (
<>



    <header className='flex justify-between items-center px-4 my-4'>
  <div className='leading-5 text-start'>
    <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>Call Logs</h1> {/* Text size changes with screen size */}
    <span className='text-sm md:text-base text-white'>You can check your call history</span> {/* Adjusted text size */}
  </div>
   
</header>



<div className='h-[570px] border-gray-500 border bg-[#171717] rounded-xl w-full'> 

{/* dropdown and search bar section */}

<div className='w-full mt-2 rounded-lg flex flex-col gap-5 py-3 px-5 bg-[#26292E] md:flex-row md:items-center'>

  {/* search bar */}
  <div className='flex w-full md:w-auto items-center bg-[#171717] rounded-lg border border-gray-500'>
    <input type="text" placeholder='Search' className='bg-transparent placeholder:text-white p-2 placeholder:text-sm w-full' />
    <Icon icon="heroicons-solid:search" width="26" height="26" color='gray' />
  </div>

  {/* dropdowns */}
  <div className='flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0'>
    <div className='flex items-center justify-between md:justify-start w-full md:w-auto'>
      <p className='text-sm text-white mr-2'>Type</p>
      <select name="" id="" className="bg-[#171717] text-white text-sm rounded-lg border border-gray-500 p-2 w-full md:w-40">
        <option value="">All</option>
        <option value="">Demo</option>
        <option value="">Demo</option>
        <option value="">Demo</option>
      </select>
    </div>

    <div className='flex items-center justify-between md:justify-start w-full md:w-auto mt-4 md:mt-0 md:ml-4'>
      <p className='text-sm text-white mr-2'>Assistant</p>
      <select name="" id="" className="bg-[#171717] text-white text-sm rounded-lg border border-gray-500 p-2 w-full md:w-40">
        <option value="">All</option>
        <option value="">Demo</option>
        <option value="">Demo</option>
        <option value="">Demo</option>
      </select>
    </div>
  </div>

  {/* icons */}
  <div className='flex w-full md:w-auto items-center justify-between md:justify-start rounded-md p-1.5 gap-2 mt-4 md:mt-0'>
    <Icon icon="fontisto:date" className='h-8 w-8 bg-[#171717] text-[#6C6C6C] p-1.5 rounded-md' />
    <div className='flex items-center bg-[#171717] p-1.5 rounded-md'>
      <Icon icon="dashicons:filter" className='h-6 w-6 text-[#6C6C6C]' />
      <p className='text-white'>Clear</p>
    </div>
  </div>

</div>

{/* calling  */}


<div className=' border-gray-500 mt-2 border h-[570px]  bg-[#171717] rounded-xl w-full'>
<div className="overflow-y-auto max-h-96">
      {callRecords.map((record, index) => (
        <CallRecord key={index} {...record} />
      ))}
    </div>
</div>









</div>










</>



  )
}

export default CallLogs