import ToolVoting from '../components/ToolVoting';
import styles from '../page.module.css';

export default function ToolsToMakePage() {
    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '40px' }}>
                <h1 className={styles.title}>Tools to Make</h1>
                <p className={styles.subtitle} style={{ marginBottom: '40px' }}>
                    Help us prioritize our roadmap. Vote on tools you want to see or suggest new ones.
                </p>
                <ToolVoting />
            </div>
        </main>
    );
}
