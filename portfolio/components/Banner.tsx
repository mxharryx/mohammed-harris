import React from 'react';
import {motion} from 'framer-motion';

const Banner = () => {
    return (<section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3 
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:1.7}}
        className='text-lg font-titleFont tracking-wide text-textDarkGold'>
            Hey there 👋 Welcome to my Portfolio! My name is 
        </motion.h3>
        <motion.h1
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5,delay:1.9}}
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>
            Mohammed Harris. <span className='text-textDark mt-2 lgl:mt-4'>Passionate Software Developer</span>
        </motion.h1>
        <motion.p
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5,delay:2.1}}
        className='text-base md:max-w-[650px] text-textDark font-medium'>
            {""}
            Masters graduate of Applied Computing. 
            I specialize in building interactive games, developing user-friendly interfaces, and leveraging technologies to bring ideas to life with creativity and precision.
            {""}
        </motion.p>
        <motion.button 
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5,delay:2.3}}className='w-52 h-14 text-sm font-titleFont border border-textDarkGold rounded-md text-textDarkGold tracking-wide hover:bg-hoverColor duration-300'>My learning grove</motion.button>
    </section>
    );
}

export default Banner;