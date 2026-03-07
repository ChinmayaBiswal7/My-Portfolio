import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
        <nav>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="logo"
            >
                <span style={{ color: 'var(--accent-1)' }}>✦</span>
                <span>Chinmaya Biswal</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
                className="nav-links"
            >
                <a href="#about-detailed" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#work" className="nav-link">Projects</a>
                <a href="#education" className="nav-link">Education</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#contact" className="nav-link" style={{ color: 'var(--accent-1)', fontWeight: 600 }}>Get In Touch</a>

                <button
                    onClick={() => document.documentElement.classList.toggle('dark')}
                    style={{ background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '1rem', width: '38px', height: '38px' }}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
            </motion.div>
        </nav>
    );
};

export default NavBar;
