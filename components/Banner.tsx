import React from 'react';
import styles from "../styles/Banner.module.scss";
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section id='home' className={styles.home}>
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={styles.textlg}>
                Welcome to my page! My name is
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className={styles.h1}>
                Mohammed Harris Jinnah Mohideen. {""}
                <span>Passionate Software Developer.
                </span>
            </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={styles.para}>{""}
                I am a recent Master of Applied Computing graduate from the University of Windsor.
                With a passion for crafting immersive experiences, I've honed my skills in software development, cloud computing, and 3D visualization.
                From creating captivating game mechanics to building user-centric interfaces, I thrive on bringing ideas to life.
                Currently on the lookout for exciting opportunities, I'm eager to contribute my innovative mindset to a dynamic team.
                Let's connect and explore how we can collaborate!
                {""}
            </motion.p>
            <motion.button initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }} className={styles.button}> My Learning Grove </motion.button>
        </section>

    )
}

export default Banner;