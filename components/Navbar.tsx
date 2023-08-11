import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'; // Import your styles

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Harris();</div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/">//home</Link>
                </li>
                <li>
                    <Link href="/about">//about</Link>
                </li>
                <li>
                    <Link href="/Skills">//skills</Link>
                </li>
                <li>
                    <Link href="/Experience">//experience</Link>
                </li>
                <li>
                    <Link href="/Contact">//coffee?</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
