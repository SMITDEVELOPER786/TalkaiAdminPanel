import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

import play from "../assets/play.png"
import download from "../assets/download.png"
import eye from "../assets/eye.png"

const CallRecord = ({ assistant, to, duration, startedAt, endedAt, source }) => {
  return (
    <div className="flex flex-col md:flex-row items-center m-3 text-xs justify-between bg-[#26292E] p-4 rounded-md mb-2">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <Icon icon="heroicons-solid:phone-outgoing" width="25" color='#55E3CB' height="25" />
        <p className="text-white ">Assistant: {assistant}</p>
        <p className="text-white">To: {to}</p>
        <p className="text-white">Call Duration: {duration}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-3">
        <p className="text-white md:mr-4 mb-2 md:mb-0">Started At: {startedAt}</p>
        <p className="text-white md:mr-4 mb-2 md:mb-0">Ended At: {endedAt}</p>
        <p className="text-white mb-2 md:mb-0">{source}</p>
        <Icon icon="entypo:laptop" width="22" className='md:block hidden' color='#6C6C6C' height="22" />
      </div>
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        {/* Replace the following with actual icons or images */}
        <img src={play} className='w-7 h-7' alt="play" />
        <img src={download} className='w-7 h-7' alt="download" />
        <img src={eye} className='w-7 h-7' alt="eye" />
      </div>
    </div>
  );
};

export default CallRecord;
