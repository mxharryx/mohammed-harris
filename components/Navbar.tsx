/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const ref = useRef<string | any>('')

    const [showMenu, setShowMenu] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: "smooth",
        });

        const links = document.querySelectorAll(".nav-link")
        links.forEach((link) => {
            link.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    };

    function handleClick(e: any) {
        if (e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }

    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
                <motion.div
                    initial={{ opacity: 0 }} // Initial opacity
                    animate={{ opacity: 1 }} // Final opacity
                    transition={{ duration: 0.5 }} // Animation duration
                    className="text-textDarkGold text-2xl font-bold"
                >
                    mohammed-harris();
                </motion.div>
                <div className='hidden mdl:inline-flex items-center gap-7'>
                    <ul className='flex text-[13px] gap-7'>
                        <Link
                            href="#home"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}>
                                <span className='text-textLightGold'>//</span>Home</motion.li>
                        </Link>
                        <Link
                            href="#about"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}>
                                <span className='text-textLightGold'>//</span>About</motion.li>
                        </Link>
                        <Link
                            href="#education"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}>
                                <span className='text-textLightGold'>//</span>Education</motion.li>
                        </Link>
                        <Link
                            href="#experience"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}>
                                <span className='text-textLightGold'>//</span>Experience</motion.li>
                        </Link>
                        <Link
                            href="#projects"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}>
                                <span className='text-textLightGold'>//</span>Projects</motion.li>
                        </Link>
                        <Link
                            href="#skills"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}>
                                <span className='text-textLightGold'>//</span>Skills</motion.li>
                        </Link>
                        <Link
                            href="#contact"
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <span className='text-textLightGold'>//</span>Contact</motion.li>
                        </Link>
                    </ul>
                    <a href='/assets/Resume-Harris.pdf'>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="px-4 py-2 rounded-md text-textDarkGold text-[13px] border border-textDarkGold hover:bg-hoverColor duration-300">Resume</motion.button>
                    </a>
                </div>
                <div
                    onClick={() => setShowMenu(true)}
                    className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textLightGold cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textDarkGold inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textDarkGold inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textDarkGold inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>

                </div>
                {
                    showMenu && (
                        <div ref={(node) => (ref.current = node)}
                            onClick={handleClick}
                            className=' absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-black flex flex-col items-center px-4 py-10 relative">
                                <AiFillCloseCircle onClick={() => setShowMenu(false)} className='text-3xl text-textLightGold cursor-pointer hover:text-red-600 absolute top-4 right-4' />
                                <div className='flex flex-col items-center gap-7'>
                                    <ul className='flex flex-col text-[13px] gap-7'>
                                        <Link
                                            href="#home"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.2 }}>
                                                <span className='text-textLightGold'>//</span>Home</motion.li>
                                        </Link>
                                        <Link
                                            href="#about"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}>
                                                <span className='text-textLightGold'>//</span>About</motion.li>
                                        </Link>
                                        <Link
                                            href="#education"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.4 }}>
                                                <span className='text-textLightGold'>//</span>Education</motion.li>
                                        </Link>
                                        <Link
                                            href="#experience"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.5 }}>
                                                <span className='text-textLightGold'>//</span>Experience</motion.li>
                                        </Link>
                                        <Link
                                            href="#projects"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.6 }}>
                                                <span className='text-textLightGold'>//</span>Projects</motion.li>
                                        </Link>
                                        <Link
                                            href="#skills"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.7 }}>
                                                <span className='text-textLightGold'>//</span>Skills</motion.li>
                                        </Link>
                                        <Link
                                            href="#contact"
                                            onClick={handleScroll}
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textLightGold cursor-pointer duration-300 nav-link'>
                                            <motion.li
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.8 }}>
                                                <span className='text-textLightGold'>//</span>Contact</motion.li>
                                        </Link>
                                    </ul>
                                    <a href='/assets/Resume-Harris.pdf'>
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.9, ease: "easeIn" }}
                                            className="px-4 py-2 rounded-md text-textDarkGold text-[13px] border border-textDarkGold hover:bg-hoverColor duration-300">Resume</motion.button>
                                    </a>
                                    <div className='mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>

                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1, ease: "easeIn" }}
                                            href='https://github.com/mxharryx' target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-bodyColor text-textDarkGold rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                                                <FaGithub />
                                            </span>
                                        </motion.a >
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1, ease: "easeIn" }}
                                            href='https://linkedin.com/in/mohammedharrisjinnah' target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-bodyColor text-textDarkGold rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                                                <FaLinkedin />
                                            </span>
                                        </motion.a >
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1, ease: "easeIn" }} href='https://www.instagram.com/_harryyyy_____/' target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-bodyColor text-textDarkGold rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                                                <FaInstagram />
                                            </span>
                                        </motion.a >
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1, ease: "easeIn" }} href='https://twitter.com/mohammedharris_' target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-bodyColor text-textDarkGold rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                                                <FaTwitter />
                                            </span>
                                        </motion.a >
                                    </div>
                                    <motion.a 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, ease: "easeIn" }}
                                    href='mailto:mohammedharrisjinnah@gmail.com' 
                                    className='text-md w-42 tracking-wide text-textDarkGold  hover:text-textLightGold hover:-translate-y-2 transition-all duration-300'>
                                        <FaEnvelope />
                                    </motion.a>
                                </div>
                            </motion.div>

                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;