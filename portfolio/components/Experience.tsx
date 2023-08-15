import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
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
          className='border-l-2  border-l-textLightGold text-textDark bg-transparent hover:bg-textLightGold py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>Infocrush Consulting and Services Inc.</li>

          <li 
          onClick={handleUnadio}
          className='border-l-2  border-l-textDark text-textDark bg-transparent hover:bg-textLightGold py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>Unadio</li>
        </ul>
        {workInfocrush && <Infocrush />}
        {workUnadio && <Unadio />}
      </div>
    </section>
  );
}

export default Experience;