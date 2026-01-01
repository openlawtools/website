import styles from '../page.module.css';

export default function FoundationPage() {
    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '40px' }}>
                <h1 className={styles.title}>The Open Law Tools Foundation</h1>

                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Our mission is to reduce legal costs and make legal help available to a wider group of people through open source software.
                    </p>

                    <h3 style={{ marginTop: '2rem' }}>Founding Members</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        Founded by <a href="https://www.forumandlex.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Forum and Lex</a>.
                    </p>

                    <h3 style={{ marginTop: '2rem' }}>Join the Foundation</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        This website is run by a group of law firms. New firms can join this group to support our mission.
                    </p>
                    <div style={{ background: '#f7f9f8', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                        <strong>Annual Membership Fee:</strong> $5,000
                    </div>
                </div>
            </div>
        </main>
    );
}
