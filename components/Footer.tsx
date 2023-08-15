import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>

            <a href='https://github.com/mxharryx' target='_blank'>
                <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                    <FaGithub />
                </span>
            </a>
            <a href='https://linkedin.com/in/mohammedharrisjinnah' target='_blank'>
                <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                    <FaLinkedin />
                </span>
            </a>
            <a href='https://www.instagram.com/_harryyyy_____/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                    <FaInstagram />
                </span>
            </a>
            <a href='https://twitter.com/mohammedharris_' target='_blank'>
                <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover:text-textLightGold cursor-pointer hover:-translate-y-2 transition-all duration-300' >
                    <FaTwitter />
                </span>
            </a>


        </div>
    )
}

export default Footer