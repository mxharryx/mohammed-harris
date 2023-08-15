import React from 'react';
import {motion} from 'framer-motion';

const grad = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 text-textDarkGold font-medium text-xl font-titleFont'>Masters in Applied Computing</h3>
        <p className='text-sm mt-1 font-medium text-textDark'>May 2021 - Aug 2022</p>
    </motion.div>
  );
}

export default grad;