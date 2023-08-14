import React from 'react';
import styles from '../styles/SectionTitle.module.scss';

interface Props{
    title: string;
}

const Sectiontitle= ({title}: Props) => {
  return (
    <h2 className={styles.title}>
        <span>//</span>{""}
        {title}
        <span className={styles.border}></span>
    </h2>
  )
}

export default Sectiontitle;