import React from 'react'
import SectionTitle from './SectionTitle';
import {FaPython, FaHtml5} from 'react-icons/fa';
import {SiDjango} from 'react-icons/si';

const Projects = () => {
  return (
    <section id='project'
    className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Some things I have built' />
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='w-full xl:2-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
            <p className='font-titleFont text-textDarkGold text-sm tracking-wide'>Featured Projects</p>
            <h3 className='text-2xl font-bold'>Golden Ticket</h3>
            <p className='bg-hoverBg text-sm md:text-base p-2 md:p-6 rounded-md '>
              Movie website for visualing a wide range of movie catalogs. 
              <p>Add your account for a personalized profile. </p>
                <p>Includes an interactive reviews and rating system.</p>
              <p>The site offers a watchlist for bookmarking future movies.
            </p>
            </p>
  
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
              <li className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center text-textLightGold '>< FaPython/></li>
              <li className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center text-textLightGold'><FaHtml5 /></li>
              <li className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center text-textLightGold'><SiDjango /></li>
            </ul>
            </div>
        </div>
        </section>
  )
}

export default Projects