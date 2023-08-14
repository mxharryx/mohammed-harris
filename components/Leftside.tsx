import React from "react";
import styles from "../styles/Leftside.module.scss";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import{motion} from "framer-motion";

const LeftSide =()=>{
    return (
    <div className={styles.iconStyles}>
        <motion.div initial={{ x: -50, opacity: 0 }} // Initial position and opacity
                animate={{ x: 0, opacity: 1 }} // Final position and opacity
                transition={{ delay: 0.5, duration: 0.5 }} // Animation delay and duration
                className={styles.icon}>
            <div className={styles.socialIcons}>
                <a href="https://twitter.com/mohammedharris_" target="_blank"><FaTwitter/></a>
                <a href="https://www.linkedin.com/in/mohammedharrisjinnah/" target="_blank"><FaLinkedin/></a>
                <a href="https://www.instagram.com/_harryyyy_____/" target="_blank"><FaInstagram/></a>
                <a href="https://github.com/mxharryx/" target="_blank"><FaGithub/></a>
                <div className={styles.border}></div>
            </div>
            
        </motion.div>
        </div>
    );
};

export default LeftSide;