import React from 'react';
import {motion} from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti'

const Infocrush = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 text-textDarkGold font-medium text-xl font-titleFont'>Cloud Developer (Co-op)</h3>
        <p className='text-sm mt-1 font-medium text-textDark'>May 2022 - Aug 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textDarkGold'><TiArrowForward/></span>
            {""}
            Developed and designed the gameplay mechanics for an interactive puzzle game, including programming the graphics, scripts, interface and sounds to prepare for market release
            </li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textDarkGold'><TiArrowForward/></span>
            {""}
            Performed various beta-tests for quality assurance to prepare the game for launch
            </li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textDarkGold'><TiArrowForward/></span>
            {""}
            Leveraged WebGL to build game, while managing deployment through AWS EC2 instances
            </li>
            
        </ul>
    </motion.div>
  );
}

export default Infocrush;