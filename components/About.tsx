import React from 'react';
import Sectiontitle from './Sectiontitle';
import styles from "../styles/About.module.scss";
import profileImage from "../public/assets/images/profileImage.jpg";
import Image from 'next/image';

const About = () => {
  return (
    <section id='about'>
      <Sectiontitle title="About Me"/>
      <div className={styles.about}>
        <div className={styles.para}>
          <p>
          I'm Mohammed Harris Jinnah Mohideen, and I've been diving into the tech world since my Bachelor's in Computer Science. From Chennai to Toronto, I've journeyed through game development, cloud computing, and backend magic. As a recent Master's grad from the University of Windsor, I've conjured interactive game mechanics, curated captivating UI/UX with Figma, and even delved into AR projects. I've got a soft spot for Python, Django, and the art of agile methodologies.
          </p>
          <p>
          As a <span className={styles.highlight}>Software Developer</span>, 
          I brought puzzle games to life, utilizing WebGL and AWS EC2. 
          <span className={styles.highlight}>Freelance gigs</span> expanded my repertoire, melding UI/UX design with Python and Django. 
          <span className={styles.highlight}>University projects</span> took me to big data, creating an Express app for airline performance analysis using Amazon services. 
          I built a web crawler, sped up browsing with caching, and crafted an augmented reality app called ATHENA. 
          Proficient in Python, C++, and more, I'm geared with tools like Unity3D and Azure.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.container}>
            <div>
              <Image className={styles.profile} src={profileImage} alt="profileImage"/>
            </div> 
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;