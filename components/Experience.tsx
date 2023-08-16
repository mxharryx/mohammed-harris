import React, { useState } from 'react';
import SectionTitle from './SectiontTitle';
import Infocrush from './works/Infocrush';
import Unadio from './works/Unadio';

const Experience = () => {
  const [workInfocrush, setWorkInfocrush] =useState(true);
  const [workUnadio, setWorkUnadio] =useState(false);

  const handleInfocrush=()=>{
    setWorkInfocrush(true);
    setWorkUnadio(false);
  }

  const handleUnadio=()=>{
    setWorkInfocrush(false);
    setWorkUnadio(true);
  }
  
  return (
    <section
    id='experience'
    className='max-w-containers mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title='Where I gained Experience'/>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className=' md:w-32 flex flex-col'>
        <li
  onClick={handleInfocrush}
  className={`py-3 px-8 text-sm font-medium cursor-pointer duration-300
    ${
      workInfocrush
        ? "border-l-2 border-l-textLightGold text-textDarkGold bg-transparent hover:bg-hoverBg"
        : "border-l-2 border-l-textDark text-textDark bg-transparent hover:bg-hoverBg"
    }`}
>
  Infocrush Consulting and Services Inc.
</li>
<li
  onClick={handleUnadio}
  className={`py-3 px-8 text-sm font-medium cursor-pointer duration-300
    ${
      workUnadio
        ? "border-l-2 border-l-textLightGold text-textDarkGold bg-transparent hover:bg-hoverBg"
        : "border-l-2 border-l-textDark text-textDark bg-transparent hover:bg-hoverBg"
    }`}
>
  Unadio
</li>
        </ul>
        {workInfocrush && <Infocrush />}
        {workUnadio && <Unadio />}
      </div>
    </section>
  );
}

export default Experience;