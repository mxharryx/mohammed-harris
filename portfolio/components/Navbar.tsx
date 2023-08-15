/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import React from 'react';
import {motion} from "framer-motion";

const Navbar = () => {

    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div
                    initial={{ opacity: 0 }} // Initial opacity
                    animate={{ opacity: 1 }} // Final opacity
                    transition={{ duration: 0.5 }} // Animation duration
                    className="text-white text-1.5xl font-bold"
                >
                    MOHAMMED-HARRIS();
                </motion.div>
                <div className='hidden mdl:inline-flex items-center gap-7'>
                    <ul className='flex text-[13px] gap-7'>
                        <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                        <motion.li 
                        initial={{y:-10,opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.1}}>
                            <span className='text-textLightGold'>//</span>Home</motion.li>
                        </Link>
                        <Link href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{y:-10,opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.2}}>
                            <span className='text-textLightGold'>//</span>About</motion.li>
                        </Link>
                        <Link href="#skills" className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{y:-10,opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.3}}>
                            <span className='text-textLightGold'>//</span>Skills</motion.li>
                        </Link>
                        <Link href="#experience" className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{y:-10,opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.4}}>
                            <span className='text-textLightGold'>//</span>Experience</motion.li>
                        </Link>
                        <Link href="#coffee" className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                        <motion.li
                        initial={{y:-10,opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.5}}>
                            <span className='text-textLightGold'>//</span>Coffee</motion.li>
                        </Link>
                    </ul>
                    <a href='/assets/Resume-Harris.pdf'>
                    <motion.button
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5}}
                    className="px-4 py-2 rounded-md text-textDarkGold text-[13px] border border-textDarkGold hover:bg-hoverColor duration-300">Resume</motion.button>
                    </a>
                </div>
                <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textLightGold cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textDarkGold inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textDarkGold inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textDarkGold inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>

                </div>
            </div>
        </div>
    );
}

export default Navbar;