'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image 
                        src="/logo.svg" 
                        alt="The Legal Project Logo" 
                        width={32} 
                        height={32}
                        className={styles.logoImage}
                    />
                    <span>TheLegalProject</span>
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
