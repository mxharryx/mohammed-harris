import React from 'react';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaAws, FaBootstrap, FaDocker, FaFigma, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaUnity } from 'react-icons/fa';
import { MdJavascript } from 'react-icons/md';
import { SiBlender, SiCplusplus, SiCsharp, SiExpress, SiMicrosoftazure, SiMysql, SiPostman, SiUnrealengine } from 'react-icons/si';
import { TbBrandDjango, TbBrandNextjs } from 'react-icons/tb';
import SectionTitle from './SectiontTitle';

const Skills = () => {
  return (
    <section
      id="skills"
      className='max-w-containers mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title="Skills I Possess" />
      <div className='flex flex-wrap gap-4 mt-10 lgl:px-10'>
      <div className='flex items-center'>
          <SiCplusplus className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>C++</span>
        </div>
        <div className='flex items-center'>
          <SiCsharp className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>C#</span>
        </div>
        <div className='flex items-center'>
          <FaPython className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Python</span>
        </div>
        <div className='flex items-center'>
          <FaHtml5 className='text-2xl text-textDarkGold  hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>HTML5</span>
        </div>
        <div className='flex items-center'>
          <FaReact className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>React</span>
        </div>
        <div className='flex items-center'>
          <TbBrandNextjs className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>NextJs</span>
        </div>
        <div className='flex items-center'>
          <FaJava className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Java</span>
        </div>
        <div className='flex items-center'>
          <MdJavascript className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>JavaScript</span>
        </div>
        <div className='flex items-center'>
          <FaNodeJs className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>NodeJs</span>
        </div>
        <div className='flex items-center'>
          <SiExpress className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>ExpressJs</span>
        </div>
        <div className='flex items-center'>
          <FaBootstrap className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Bootstrap</span>
        </div>
        <div className='flex items-center'>
          <TbBrandDjango className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Django</span>
        </div>
        
        <div className='flex items-center'>
          <SiMicrosoftazure className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Microsoft Azure</span>
        </div>
        <div className='flex items-center'>
          <FaUnity className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Unity</span>
        </div>
        <div className='flex items-center'>
          <SiUnrealengine className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Unreal Engine</span>
        </div>
        <div className='flex items-center'>
          <SiBlender className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Blender</span>
        </div>
        <div className='flex items-center'>
          <BiLogoTailwindCss className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Tailwind CSS</span>
        </div>
        <div className='flex items-center'>
          <SiMysql className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>MySQL</span>
        </div>
        <div className='flex items-center'>
          <FaFigma className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Figma</span>
        </div>
        <div className='flex items-center'>
          <FaDocker className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>Docker</span>
        </div>
        <div className='flex items-center'>
          <FaAws className='text-2xl text-textDarkGold hover:text-textLightGold' />
          <span className='ml-2 text-sm font-medium text-textLight'>AWS</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
