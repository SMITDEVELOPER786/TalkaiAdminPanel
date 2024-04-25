import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../App.css"
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
<div className='w-full lg:w-[80%] p-2 border bg-black border-gray-500 rounded-md '>

{/* assistant nav content start */}

<div className=' space-y-2'>
<div className='w-full flex justify-between items-center md:flex-row flex-col bg-[#26292E] p-2'>
<div className='flex '>

<span className='text-white'>Ava</span>
<span className='text-gray-500 ml-2'>49aecaf4-b1db</span>
<div className='bg-black flex rounded-lg justify-center items-center p-1.5'>
<Icon icon="fa-solid:copy" color='gray' width="18" height="18" />
</div>
</div>
<div className='flex gap-1'>

<div className='bg-black text-center rounded-lg flex justify-center items-center'>
<Icon icon="fa-solid:share-alt" color='gray' width="26" height="26" className='p-1.5' />
</div>
<div className='bg-black text-center rounded-lg flex justify-center items-center'>
<Icon icon="fluent-mdl2:location-dot" color='gray' width="28" height="28" className='p-1' />
</div>

<div className='bg-[#FE7E29] p-1 rounded-full flex items-center gap-1.5'>
<div className='bg-black text-center rounded-full flex justify-center items-center'>
<Icon icon="subway:call" color='#55E3CB' width="28" height="28" className='p-1.5' />
</div>
<h1>Test Ava</h1>
</div>

</div>
</div>
<div className='w-full flex justify-between items-center md:flex-row flex-col bg-[#26292E] p-2'>
<div className='flex items-center gap-2'>

<Icon icon="subway:menu" color='#171717' width="20" height="20" />
<div className='p-1'>
<span className='text-white mr-1'>Mode</span>
<select name="" id="" className='bg-black text-white border border-gray-600 px-1 rounded-lg w-32'>
  <option value="">Web</option>
</select>
</div>
</div>
<div className='flex gap-1'>

<div className='bg-black p-1.5 rounded-full flex items-center gap-1.5'>
<div className='bg-[#26292E] text-center rounded-full flex justify-center items-center'>
<Icon icon="wpf:delete" fill='gray' color='#6C6C6C' width="28" height="28" className='p-1.5' />
</div>
<h1 className='text-[#BCBDBF]'>Discard</h1>
</div>

<div className='bg-[#FE7E29] p-1 rounded-full flex items-center gap-1.5'>
<div className='bg-black text-center rounded-full flex justify-center items-center'>
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


<div className='p-2 border border-gray-600 '>
<Tabs >
    <TabList className="border-b-0  ">
      <Tab >Voice</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

</div>




</div>
</div>

    </div>
  )
}

export default Assistants