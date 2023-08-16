
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import {motion} from 'framer-motion';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import LeftSide from '@/components/Leftside';
import RightSide from '@/components/Rightside';

export default function Home() {
  return (
    <>
    <Head>
    <title>Mohammed Harris | Software Developer | Portfolio</title>
      <meta name="description" content="Passionate software developer actively seeking new opportunities. Skilled in creating innovative solutions and crafting engaging user experiences. Eager to contribute my expertise to a dynamic team and take on new challenges in the world of technology. Open to exciting job opportunities that align with my skills and drive for excellence. "/>
      <meta name="viewport" content="width=device-width, initial-scale-1" />
      <meta name="keywords" content="Mohammed Harris Jinnah Mohideen, Mohammed, Mohamed, Muhammad, Harris, Mohideen, Software Developer, Game Developer, Cloud Developer, Portfolio" />
      <meta name="author" content="Mohammed Harris" />
      <meta property="og:title" content="Mohammed Harris | Software Developer | Portfolio" />
      <meta property="og:description" content="Passionate software developer actively seeking new opportunities. Skilled in creating innovative solutions and crafting engaging user experiences. Eager to contribute my expertise to a dynamic team and take on new challenges in the world of technology. Open to exciting job opportunities that align with my skills and drive for excellence." />
      <meta property="og:image" content="https://mohammed-harris.vercel.app/home_page.png" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://mohammed-harris.vercel.app" />
      <meta property="twitter:image" content="https://mohammed-harris.vercel.app/home_page.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Mohammed Harris | Software Developer | Portfolio" />
        <meta property="twitter:description" content="Actively Seeking Software Developer Jobs in Canada" />
        <meta name="twitter:image:alt" content="Mohammed Harris' Landing Page"/>
        <meta name="twitter:creator" content="@mohammedharris_"/>
    </Head>
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overscroll-y-scroll scrollbar-thin scrollbar-track-textDark/20 scrollbar-thumb-textDarkGold/50'>
      <Navbar />
      <div>
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between '>
          <motion.div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 1.5, duration: 0.5 }}
          className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </motion.div>
          <div className='h-[88vh] w-full mx-auto p-4'>
            <Banner />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
          <motion.div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 1.5, duration: 0.5 }}
          className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide />
          </motion.div>
        </div>
      </div>
    </main>
    </>
  )
}
