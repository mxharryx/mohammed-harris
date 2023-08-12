import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'; // Import your styles
import {motion} from 'framer-motion';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <motion.div className={styles.logo} initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}}>Harris();</motion.div>
            <div>
            <ul className={styles.navLinks}>
                <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1, delay:0.1}}>
                    <Link href="/">//home</Link>
                </motion.li>
                <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1, delay:0.2}}>
                    <Link href="/about">//about</Link>
                </motion.li>
                <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1, delay:0.3}}>
                    <Link href="/Skills">//skills</Link>
                </motion.li>
                <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1, delay:0.4}}>
                    <Link href="/Experience">//experience</Link>
                </motion.li>
                <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1, delay:0.5}}>
                    <Link href="/Contact">//coffee?</Link>
                </motion.li> 
                <a href="/assets/Resume-Harris.pdf" target="_blank">
                    <motion.button className={styles.resumeButton} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} >Resume</motion.button>
                </a>
            </ul>
            
            </div>
        
        </nav>
    );
};

export default Navbar;

