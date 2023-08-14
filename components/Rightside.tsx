import React from "react";
import styles from "../styles/Rightside.module.scss";

const RightSide =()=>{
    return (
    <div className={styles.side}>
        <a href="mailto:mohammedharrisjinnah@gmail.com">
            <p className={styles.email}>email</p>
        </a>
        <span className={styles.border}></span>
    </div>
    
    );
}

export default RightSide;