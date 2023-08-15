import React from 'react';
import {FaEnvelope} from "react-icons/fa";
import {motion }from "framer-motion";

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textDarkGold'>
        <a href='mailto:mohammedharrisjinnah@gmail.com' className='text-md w-42 tracking-wide text-textDarkGold  hover:text-textLightGold hover:-translate-y-2 transition-all duration-300'>
            <FaEnvelope />
        </a>
        <span className='w-[2px] h-72 bg-textDarkGold inline-flex'></span>
    </div>
  );
}

export default RightSide;