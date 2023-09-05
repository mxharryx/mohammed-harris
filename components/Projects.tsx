/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import SectionTitle from './SectiontTitle';
import {FaPython, FaHtml5, FaCss3, FaReact, FaJava, FaStripeS} from 'react-icons/fa';
import {SiDjango, SiMysql, SiPrisma} from 'react-icons/si';
import {BiLogoTailwindCss,BiLogoJavascript, BiLogoTypescript} from 'react-icons/bi';
import {TbBrandVercel,TbBrandJavascript, TbBrandPowershell, TbBrandNextjs} from 'react-icons/tb';


import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section id='projects'>
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
          <span className='text-base md:text-lg text-textLightGold mr-2'>//</span>Projects
          <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-textDarkGold ml-6'></span>
        </h2>
        <p className='text-sm font-titleFont text-textLight'>
          {""}
          Here are some of the projects I've built. Please feel free to take a look at each repo.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <ProjectCards title='Golden Ticket'
        des='A movie website features a user login system, allowing users to create profiles and personalize their movie preferences. 
        Users can browse through a diverse catalog of movies.
        Includes interactive reviews and rating system.'
        listItem={[<FaPython />, <FaHtml5 />, <SiDjango />]}
        link='https://github.com/mxharryx/GoldenTicket'/>
        <ProjectCards title='AI - Companion'
        des='AI Chat Application that lets you create a fictional AI Companion by providing relevant details. 
        Built as a SaaS product incorporating Stripe.'
        listItem={[<TbBrandNextjs />, <FaReact />, <FaStripeS />, <SiPrisma />, <SiMysql />, <BiLogoTailwindCss />]}
        link='https://ai-companion-livid.vercel.app'/>
        <ProjectCards title='Landing Page'
        des='Visually appealing landing Page for a fictional shoe brand'
        listItem={[<FaCss3 />, <FaHtml5 />, <BiLogoJavascript />]}
        link='https://github.com/mxharryx/Product-Website'/>
        <ProjectCards title='NextJS Dynamic Portfolio'
        des='Personal Portfolio website describing who I am and what I do.'
        listItem={[<TbBrandNextjs />, <BiLogoTypescript />, <BiLogoTailwindCss />,<TbBrandVercel/>]}
        link='https://github.com/mxharryx/mohammed-harris'/>
        <ProjectCards title='Weather Application'
        des='Weather Application implemented by fetching weather data and writing API Services. Includes getting User location using Geolocation API. '
        listItem={[<FaReact />, <BiLogoJavascript/>,  <FaCss3/>]}
        link='https://github.com/mxharryx/weather-app'/>
        <ProjectCards title='Search Engine'
        des='Implementing a search engine with a web crawler algorithm by executing HTML to text parser functionality. Also implemented caching feature on the search engine '
        listItem={[<FaHtml5 />, <FaJava/>]}
        link='https://github.com/mxharryx/Appu'/>
      </div>
      <div className='mt-12 flex items-center justify-center'>
        <a href='https://github.com/mxharryx' target='_blank'>
        <button className='w-36 h-12 rounded-md text-textDarkGold text-[13px] border border-textDarkGold hover:bg-hoverColor duration-300'>
          View More
        </button>
        </a>
      </div>
    </div>
    </section>
  )
}

export default Projects;