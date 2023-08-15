import React from 'react';
import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti'

const Unadio = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 text-textDarkGold font-medium text-xl font-titleFont'>Software Developer (Freelance)</h3>
        <p className='text-sm mt-1 font-medium text-textDark'>May 2022 - Sept 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textDarkGold'><TiArrowForward/></span>
            {""}
            Designed user interface flows, visuals, color palettes, and graphics using Figma to enhance the learning journey for consumers.
            </li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textDarkGold'><TiArrowForward/></span>
            {""}
            Simultaneously engaged in backend development using Python and Django, ensuring a seamless connection between interface and functionality.
            </li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textDarkGold'><TiArrowForward/></span>
            {""}
            Developed database architecture with a meticulous adherence to established methodology, ensuring robust design and efficient development.
            </li>
            
        </ul>
    </motion.div>
  );
}

export default Unadio;