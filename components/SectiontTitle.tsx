/* eslint-disable react/jsx-no-comment-textnodes */

import React from 'react';

interface Props{
    title:string;
}

const SectionTitle = ({title}:Props) => {
  return (
    <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
        <span className='text-base md:text-lg text-textLightGold mr-2'>//</span>{title}
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-textDarkGold ml-6'></span>
    </h2>
  );
}

export default SectionTitle;