import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Ai from "../../assets/Ai.png"
import Plus from "../../assets/Plus.png"
import 'react-tabs/style/react-tabs.css';
import "../../App.css"
import { useDispatch } from 'react-redux';
import { create_assistant } from '../../Store/Service/PhoneService';
function Assistants() {
  const [open, setOpen] = useState(false)

  const [tab,settab]=useState(false)
  const cancelButtonRef = useRef(null)

const dispatch = useDispatch()



const [seller,setSeller] = useState("Appointment Seller")

const [support,setSupport] = useState("Customer Support")

const [qa,setqa] = useState("Inbound Q/A")

const [npc,setnpc] = useState("Game NPC")

const [blank,setblank] = useState("New Assistant")


const [name,setname]=useState("")



const handleCreate =async ()=>{
console.log(name);
const post_data={
  "transcriber": {
    "provider": "deepgram",
    "model": "nova-2",
    "language": "cs",
    "keywords": ["keyword1", "keyword2"]
  },
  "model": {
    "messages": [
      {
        "content": "content",
        "role": "assistant",
        "function_call": {},
        "tool_calls": [{}]
      }
    ],
    "provider": "openai",
    "model": "gpt-4-1106-preview",
    "fallbackModels": ["gpt-4-0125-preview", "gpt-4-0613"],
    "semanticCachingEnabled": true,
    "temperature": 1,
    "functions": [
      {
        // "name": name,
        "name": "functionName",
        "async": true,
        "description": "functionDescription",
        "parameters": {
          "type": "object",
          "properties": {},
          "required": ["property1", "property2"]
        },
        "serverUrl": "https://example.com",
        "serverUrlSecret": "serverUrlSecret"
      }
    ],
    "maxTokens": 525
  },
  "voice": {
    "provider": "azure",
    "voiceId": "andrew",
    "speed": 1.25
  },
  "forwardingPhoneNumber": "+923173186615",
  "recordingEnabled": true,
  "endCallFunctionEnabled": true,
  "dialKeypadFunctionEnabled": true,
  "hipaaEnabled": true,
  "clientMessages": ["transcript", "hang", "function-call", "speech-update", "metadata", "conversation-update"],
  "serverMessages": ["end-of-call-report", "status-update", "hang", "function-call"],
  "silenceTimeoutSeconds": 30,
  "responseDelaySeconds": 0.4,
  "llmRequestDelaySeconds": 0.1,
  "numWordsToInterruptAssistant": 2,
  "maxDurationSeconds": 1800,
  "backgroundSound": "office",
  "name": name,
  // "name": "modelName",
  "forwardingPhoneNumbers": [{"number": "+923173186615", "sipUri": "sipUri", "message": "message"}],
  "firstMessage": "firstMessage",
  "voicemailDetectionEnabled": true,
  "voicemailMessage": "voicemailMessage",
  "endCallMessage": "endCallMessage",
  "endCallPhrases": ["phrase1", "phrase2"],
  "metadata": {},
  "serverUrl": "https://example.com",
  "serverUrlSecret": "serverUrlSecret"
}



  
await dispatch(create_assistant(post_data))
.then((res)=>{
  console.log(res);
  setOpen(false)
})
.catch(e=>{
  console.log(e);
})



}









  return (
    <div className=''>


    <header className='flex justify-between items-center px-4 my-4'>
  <div className='leading-5 text-start'>
    <h1 className='text-[18px] md:text-2xl text-[#55E3CB]'>Assistants</h1> {/* Text size changes with screen size */}
    <span className='text-sm md:text-base text-white'>Manage your voice assistants</span> {/* Adjusted text size */}
  </div>
  <div className='flex-shrink-0'> {/* Allows flexibility in space allocation */}
    <div className='flex items-center justify-between gap-2 border border-gray-500 rounded-full px-3 py-3 text-white'>
      <Icon icon="fa6-solid:plus" width={15} color='#55E3CB' />
      <span className='hidden md:inline-block cursor-pointer' onClick={()=>setOpen(true)}>Create new assistant</span> {/* Hides text on smaller screens */}
    </div>
  </div>
</header>



<div className=" mx-auto w-[98%] bg-[#171717] h-0.5 "></div>

<div className='flex lg:flex-row flex-col px-5 gap-2 mt-1   '>
<div className='w-full lg:w-[20%] border border-gray-500 rounded-md   '>

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
                  
                <div className='space-y-2  flex flex-col items-center' onClick={()=>setname(seller)}>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full hover:bg-gray-50 cursor-pointer duration-200 flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>{seller}</h1>
    </div>
    <div className='space-y-2  flex flex-col items-center' onClick={()=>setname(support)}>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full hover:bg-gray-50 cursor-pointer duration-200 flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>{support}</h1>
    </div>
    <div className='space-y-2  flex flex-col items-center' onClick={()=>setname(qa)}>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full hover:bg-gray-50 cursor-pointer duration-200 flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>{qa}</h1>
    </div>
    <div className='space-y-2  flex flex-col items-center' onClick={()=>setname(npc)}>
      <div className='p-2 border-2 bg-[#26292e] border-[#55E3CB] rounded-full  hover:bg-gray-50 cursor-pointer duration-200 flex-shrink-0'>
        <img src={Ai} alt="" className='rounded-full' />
      </div>
      <h1 className='text-white text-xs text-center md:text-left'>{npc}</h1>
    </div>
 
    <div className='space-y-2  flex flex-col justify-center items-center cursor-pointer ' onClick={()=>setname(blank)}>
      <div className='p-[27px] border-2 bg-[#26292e] hover:bg-gray-50 duration-200 rounded-full flex-shrink-0'>
        <img src={Plus} alt="" className='rounded-full' />
      </div>
      <h1  className='text-white text-xs text-center md:text-left'>{blank}</h1>
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
  <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  className='text-white w-full bg-[#26292E] rounded-lg py-2 pl-3' style={{ fontSize: '12px' }} placeholder='Name' />
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
    onClick={handleCreate}
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
    </Transition.Root>
{/*Modal End*/}


</div>
</div>

    </div>
  )
}

export default Assistants