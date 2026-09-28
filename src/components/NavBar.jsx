import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'About', href: '#about-detailed' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#work' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' }
    ];

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

            {/* Desktop Links */}
            <div className="nav-links">
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} className="nav-link">{item.name}</a>
                ))}
                <a href="#contact" className="nav-link" style={{ color: 'var(--accent-1)', fontWeight: 600 }}>Get In Touch</a>

                <button
                    onClick={() => document.documentElement.classList.toggle('dark')}
                    style={{ background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '1rem', width: '38px', height: '38px' }}
                    aria-label="Toggle theme"
                >
                    <Moon size={20} className="dark:hidden" />
                    {/* Note: In a real app we'd toggle based on state, but keeping your manual classList approach */}
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-links active"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                            <button
                                onClick={toggleMenu}
                                style={{ background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', padding: '0.5rem', borderRadius: '12px', cursor: 'pointer' }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="nav-link" style={{ fontSize: '1.5rem' }} onClick={toggleMenu}>{item.name}</a>
                        ))}
                        <a href="#contact" className="nav-link" style={{ color: 'var(--accent-1)', fontWeight: 600, fontSize: '1.5rem' }} onClick={toggleMenu}>Get In Touch</a>

                        <div style={{ marginTop: 'auto', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Appearance</span>
                            <button
                                onClick={() => document.documentElement.classList.toggle('dark')}
                                style={{ background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', padding: '0.8rem', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <Moon size={20} /> Dark Mode
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
