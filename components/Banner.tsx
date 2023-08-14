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
                Back in 2016, I took the plunge into the world of computer science during my Bachelor's days.
                
                Since then, I've been on an incredible journey, from crafting interactive game mechanics to freelancing as a software developer. 
                
                Today, as a fresh Master's graduate, I'm excited to bring my skills in cloud computing and 3D visualization to new horizons. 
                
                I'm on the lookout for opportunities to collaborate and innovate. 
                
                When I'm not shaping ideas on the screen, you'll find me exploring the outdoors, sharing moments with loved ones, or uncovering digital gems in the virtual realms. Let's connect and create something amazing together!
                {""}
            </motion.p>
            <motion.button initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }} className={styles.button}> My Learning Grove </motion.button>
        </section>

    )
}

export default Banner;