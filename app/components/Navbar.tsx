'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    TheLegalProject
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
                        Home
                    </Link>
                    <Link href="/tools-to-make" className={`${styles.link} ${isActive('/tools-to-make') ? styles.active : ''}`}>
                        Tools to Make
                    </Link>
                    <Link href="/foundation" className={`${styles.link} ${isActive('/foundation') ? styles.active : ''}`}>
                        Foundation
                    </Link>
                </div>
            </div>
        </nav>
    );
}
