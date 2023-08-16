import React, { useState } from 'react';
import Grad from './education/Grad';
import Undergrad from './education/Undergrad';
import SectionTitle from './SectiontTitle';

const Education = () => {

    const [studyChennai, setStudyChennai] =useState(true);
  const [studyCanada, setStudyCanada] =useState(false);

  const handleChennai=()=>{
    setStudyChennai(true);
    setStudyCanada(false);
  }

  const handleCanada=()=>{
    setStudyChennai(false);
    setStudyCanada(true);
  }
  return (
    <section id='education'
    className='max-w-containers mx-auto py-10 lgl:py-24 px-4'>
        <SectionTitle title="Where I gained Knowledge"/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className=' md:w-32 flex flex-col'>
        <li
  onClick={handleChennai}
  className={`py-3 px-8 text-sm font-medium cursor-pointer duration-300
    ${
      studyChennai
        ? "border-l-2 border-l-textLightGold text-textDarkGold bg-transparent hover:bg-hoverBg"
        : "border-l-2 border-l-textDark text-textDark bg-transparent hover:bg-hoverBg"
    }`}
>
  BS Abdur Rahman University
</li>
<li
  onClick={handleCanada}
  className={`py-3 px-8 text-sm font-medium cursor-pointer duration-300
    ${
      studyCanada
        ? "border-l-2 border-l-textLightGold text-textDarkGold bg-transparent hover:bg-hoverBg"
        : "border-l-2 border-l-textDark text-textDark bg-transparent hover:bg-hoverBg"
    }`}
>
  University of Windsor
</li>
        </ul>
        {studyChennai && <Undergrad />}
        {studyCanada && <Grad />}
      </div>
        </section>
        
  );
}

export default Education;