import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function AudioCall({assistants,id,gender}) {
  return (
    <div class=" lg:w-[24%] md:w-[32.2222%] sm:w-[49%] my-2 w-full p-3   rounded-lg bg-[#26292E] shadow-2xl">

    <div class="h-full flex items-center  px-3">
    <div class="flex-grow">
      <h2 class="text-white text-base title-font font-medium">Assistants:{assistants}</h2>
      <p class="text-white text-[14px]">ID: {id}</p>
      <p class="text-white text-[14px]">Gender: {gender}</p>
    </div>

    <Icon icon="vaadin:play-circle-o" width="65" height="60" />
  </div>
  </div>
  )
}

export default AudioCall