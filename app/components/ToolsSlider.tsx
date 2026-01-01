'use client';
import { useState } from 'react';
import styles from './ToolsSlider.module.css';

interface Tool {
    id: string;
    title: string;
    description: string;
    image?: string;
    status: 'Ready' | 'Beta';
}

const tools: Tool[] = [
    {
        id: 'custody',
        title: 'Custody Visualizer',
        description: 'Easily create and visualize parenting schedules. Drag-and-drop calendar interface to reduce conflict.',
        status: 'Ready'
    },
    {
        id: 'support-calc',
        title: 'Support Calculator',
        description: 'Open source child support estimator based on state guidelines.',
        status: 'Beta'
    },
    {
        id: 'doc-gen',
        title: 'Doc Gen',
        description: 'Automated legal document generation for common filings.',
        status: 'Beta'
    }
];

export default function ToolsSlider() {
    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
                {tools.map((tool) => (
                    <div key={tool.id} className={styles.card}>
                        <div className={styles.cardImage}>
                            <span>{tool.title.charAt(0)}</span>
                        </div>
                        <div className={styles.cardContent}>
                            <span className={`${styles.badge} ${tool.status === 'Ready' ? styles.ready : styles.beta}`}>
                                {tool.status}
                            </span>
                            <h3>{tool.title}</h3>
                            <p>{tool.description}</p>
                            <button className={styles.actionBtn}>Open Tool</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
