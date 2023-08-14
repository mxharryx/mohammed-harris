import React from 'react';
import styles from "../styles/Banner.module.scss";
import {motion} from 'framer-motion';

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
            transition={{ duration: 0.5, delay: 0.9 }}>
                Mohammed Harris Jinnah Mohideen. {""} 
                <span className={styles.h1}>I build things.
                </span>
                </motion.h1>
        </section>

    )
}

export default Banner;