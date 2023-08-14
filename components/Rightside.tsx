import React from "react";
import styles from "../styles/Rightside.module.scss";
import { FaEnvelope } from 'react-icons/fa';


const RightSide =()=>{
    return (
    <div className={styles.side}>
        <a href="mailto:mohammedharrisjinnah@gmail.com"><FaEnvelope /></a>
        <span className={styles.border}></span>
    </div>
    
    );
}

export default RightSide;