'use client';
import { useState } from 'react';
import styles from './ToolVoting.module.css';

interface ProposedTool {
    id: string;
    name: string;
    description: string;
    votes: number;
}

const initialTools: ProposedTool[] = [
    { id: '1', name: 'Lease Analyzer', description: 'AI-powered lease agreement review tool.', votes: 42 },
    { id: '2', name: 'Estate Planner', description: 'Simple will and trust generator.', votes: 35 },
    { id: '3', name: 'Small Claims Bot', description: 'Guide for filing small claims court documents.', votes: 28 },
];

export default function ToolVoting() {
    const [tools, setTools] = useState(initialTools);
    const [suggestion, setSuggestion] = useState('');

    const handleVote = (id: string) => {
        setTools(tools.map(t =>
            t.id === id ? { ...t, votes: t.votes + 1 } : t
        ));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!suggestion.trim()) return;

        // Simulate adding (in real app, this would go to backend)
        const newTool: ProposedTool = {
            id: Date.now().toString(),
            name: suggestion,
            description: 'Community suggestion',
            votes: 1
        };

        setTools([...tools, newTool]);
        setSuggestion('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {tools.sort((a, b) => b.votes - a.votes).map(tool => (
                    <div key={tool.id} className={styles.item}>
                        <div className={styles.voteBox} onClick={() => handleVote(tool.id)}>
                            <span className={styles.chevron}>▲</span>
                            <span className={styles.count}>{tool.votes}</span>
                        </div>
                        <div className={styles.info}>
                            <h4>{tool.name}</h4>
                            <p>{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Suggest a Tool</h3>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        placeholder="e.g. Traffic Ticket Fighter"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.btn}>Suggest</button>
                </div>
            </form>
        </div>
    );
}
