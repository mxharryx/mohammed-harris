import Image from 'next/image';
import React from 'react'
import SectionTitle from './SectionTitle';
import profileImage from '../public/assets/images/profileImage.jpg';

const About = () => {
  return (
    <section id="about"
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
       <SectionTitle  title="More about me"/>
       <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
            <p>
            My journey into <span className='text-textLightGold'>software development</span> began with something that lights up the eyes of many: <span className='text-textLightGold'>video games</span>. As a kid, I was captivated by the magic of games – the way they transported me to other worlds. Little did I know, this fascination would become the foundation of my career. From hours spent playing, my curiosity shifted towards how these games were created. This led me to explore coding, diving into languages like Python and C++. 
            </p>
            <p>
            During my <span className='text-textLightGold'>co-op</span> at Infocrush Consulting, I crafted an interactive puzzle game, blending graphics, sounds, and scripts seamlessly. As a <span className='text-textLightGold'>Freelance</span> gig with Unadio, I fused design finesse with Python skills, elevating user experiences. <span className='text-textLightGold'>University projects</span> displayed my prowess in melding data and tech, while an AR Project stood as a pinnacle, fusing augmented reality and audiobooks into innovation.
            </p>
            <p>
                Oh, and I am absolutely non-photogenic and hence, I apologize for this travesty!
            </p>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
            <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                <Image className='rounded-lg h-full object-cover'
                src={profileImage}
                alt="profileImage" />
                <div className='hidden lgl:inline-block absolute w-full h-80 bg-textDarkGold/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>
                </div>
                </div>
            </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textDarkGold rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'>
                </div>
        </div>
       </div>
       </section>
  );
}

export default About;