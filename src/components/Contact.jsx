import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '4rem 0 8rem 0' }}>
            <div className="premium-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'flex-start', background: 'var(--card-bg)', borderRadius: '32px', padding: '4rem' }}>
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-color)', fontFamily: 'Outfit', lineHeight: 1.1, marginBottom: '1.5rem' }}
                    >
                        Let's build <br />
                        <span style={{ color: 'var(--accent-1)' }}>something great.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '400px', lineHeight: 1.7 }}
                    >
                        Whether it's an app idea or a technical collaboration, I am always open to discussing new opportunities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        {[
                            { icon: <Github size={22} />, link: 'https://github.com/ChinmayaBiswal7' },
                            { icon: <Linkedin size={22} />, link: '#' }
                        ].map((social, i) => (
                            <a key={i} href={social.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--card-alt)', color: 'var(--text-muted)', border: '1px solid var(--border-color)', transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
                                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-1)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.05)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-color)' }}>Name</label>
                                <input type="text" style={{ width: '100%', boxSizing: 'border-box', padding: '1rem', background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '12px', fontSize: '1rem', fontFamily: 'Inter', outline: 'none', transition: 'border-color 0.2s' }} placeholder="Your Name" onFocus={e => e.target.style.borderColor = 'var(--accent-1)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-color)' }}>Contact</label>
                                <input type="text" style={{ width: '100%', boxSizing: 'border-box', padding: '1rem', background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '12px', fontSize: '1rem', fontFamily: 'Inter', outline: 'none', transition: 'border-color 0.2s' }} placeholder="Email or Phone" onFocus={e => e.target.style.borderColor = 'var(--accent-1)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-color)' }}>Message</label>
                            <textarea rows="4" style={{ width: '100%', boxSizing: 'border-box', padding: '1rem', background: 'var(--card-alt)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '12px', fontSize: '1rem', fontFamily: 'Inter', outline: 'none', resize: 'none', transition: 'border-color 0.2s' }} placeholder="What's on your mind?" onFocus={e => e.target.style.borderColor = 'var(--accent-1)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                        </div>
                        <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }} onClick={e => e.preventDefault()}>
                            Send Message <ArrowRight size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
