import React from "react";
import styles from "../styles/Leftside.module.scss";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const LeftSide =()=>{
    return (
    <div className={styles.iconStyles}>
        <div className={styles.icon}>
            <div className={styles.socialIcons}>
                <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
                <a href="https://linkedin.com/" target="_blank"><FaLinkedin/></a>
                <a href="https://instagram.com/" target="_blank"><FaInstagram/></a>
                <a href="https://github.com/" target="_blank"><FaGithub/></a>
            </div>
        </div>
        </div>
    );
};

export default LeftSide;