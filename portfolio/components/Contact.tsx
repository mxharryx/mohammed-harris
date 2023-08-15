import React from 'react'
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
      <SectionTitle title='Contact'/>
      <h2 className='font-titleFont text-5xl font-semibold'>
        Have an opportunity?
      </h2>
      <p className='max-w-[600px] text-center text-textDark'>
      I am <span className='text-textDarkGold'>Actively seeking</span> Job opportunities in <span className='text-textLightGold'>Cloud Development</span>, <span className='text-textLightGold'>Full Stack Development</span>, and <span className='text-textLightGold'>Game Development</span> roles.
      </p>
      </section>
  )
}

export default Contact;