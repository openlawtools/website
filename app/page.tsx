import ToolsSlider from './components/ToolsSlider';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>
                        Why Open Law Tools?
                    </h1>
                    <p className={styles.subtitle}>
                        Legal help should be accessible to everyone. We build open source tools
                        to reduce costs and democratize justice for all.
                    </p>
                </div>
            </section>

            {/* Tools Section */}
            <section className={styles.section}>
                <div className="container">
                    <h2>Available Tools</h2>
                    <div className={styles.toolsGrid}>
                        <ToolsSlider />
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Open Law Tools Foundation.</p>
                </div>
            </footer>
        </main>
    );
}
