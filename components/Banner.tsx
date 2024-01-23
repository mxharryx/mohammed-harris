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
        className='text-5xl lgl:text-7xl font-titleFont font-semibold flex flex-col'>
            Mohammed Harris. <span className='text-textDark mt-2 lgl:mt-4'>Azure Cloud Engineer</span>
        </motion.h1>
        <motion.p
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5,delay:2.1}}
        className='text-base md:max-w-[650px] text-textDark font-medium'>
            {""}
            Masters graduate of Applied Computing. 
            As an Azure Cloud Engineer, I specialize in crafting innovative solutions. Certified in Microsoft Azure Fundamentals and Azure Administrator, I excel in architecting and optimizing cloud environments. 
            {""}
        </motion.p>
        
    </section>
    );
}

export default Banner;