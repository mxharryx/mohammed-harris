import React from 'react';
import {motion} from 'framer-motion';

const undergrad = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 text-textDarkGold font-medium text-xl font-titleFont'>Bachelor of Computer Science and Engineering</h3>
        <p className='text-sm mt-1 font-medium text-textDark'>July 2016 - Aug 2020</p>
    </motion.div>
  );
}

export default undergrad;