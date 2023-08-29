import React from 'react';
import {FaFolder} from 'react-icons/fa';
import {MdOutlineOpenInNew} from 'react-icons/md';

interface Props{
  title:string;
  des: string;
  listItem:React.ReactNode[];
  link: string;
}



const ProjectCards = ({title, des, listItem, link}: Props) => {
  return (
    <a href={link} target="_blank"> 
        <div className='w-full h-80 rounded-lg bg-hoverBg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
        <div className='flex justify-between items-center'>
            <FaFolder className='text-2xl text-textLightGold'/>
            <MdOutlineOpenInNew className='text-2xl hover:text-textLightGold'/>
        </div>
        <div>
        <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textLightGold'>{title}</h2>
        <p className='text-sm mt-3'>
        {des}
        </p>
        </div>
        <ul className='text-md mdl:text-sm text-textLightGold flex items-center gap-2 justify-between flex-wrap'>
            {
              listItem.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
        </ul>
    </div>
    </a>
  );
};

export default ProjectCards;