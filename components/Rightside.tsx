import React from "react";
import styles from "../styles/Rightside.module.scss";
import { FaEnvelope } from 'react-icons/fa';
import {motion} from "framer-motion"

const RightSide =()=>{
    return (
    <motion.div initial={{ y: 50, opacity: 0 }} // Initial position and opacity
    animate={{ y: 0, opacity: 1 }} // Final position and opacity
    transition={{ delay: 0.5, duration: 0.5 }} // Animation delay and duration
    className={styles.side}>
        <a href="mailto:mohammedharrisjinnah@gmail.com"><FaEnvelope /></a>
        <span className={styles.border}></span>
    </motion.div>
    
    );
}

export default RightSide;