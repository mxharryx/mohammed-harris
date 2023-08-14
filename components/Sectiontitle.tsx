import React from 'react';
import styles from '../styles/SectionTitle.module.scss';

const Sectiontitle= () => {
  return (
    <h2 className={styles.title}>
        <span>//</span>{""}
        About Me
        <span className={styles.border}></span>
    </h2>
  )
}

export default Sectiontitle;