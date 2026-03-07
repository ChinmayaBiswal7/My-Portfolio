import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="content">
                <div className="contact-card">
                    <div className="contact-info-side">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-color)', fontFamily: 'Outfit', lineHeight: 1.1, marginBottom: '1.5rem' }}
                        >
                            Let's build <br />
                            <span style={{ color: 'var(--accent-1)' }}>something great.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '400px', lineHeight: 1.7 }}
                        >
                            Whether it's an app idea or a technical collaboration, I am always open to discussing new opportunities.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}
                        >
                            {[
                                { icon: <Github size={20} />, link: 'https://github.com/ChinmayaBiswal7' },
                                { icon: <Linkedin size={20} />, link: '#' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: 'var(--accent-1)', borderColor: 'var(--accent-1)' }}
                                    className="social-icon-btn"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="contact-form-side"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-input" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Contact</label>
                                    <input type="text" className="form-input" placeholder="Email or Phone" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea rows="4" className="form-input" style={{ resize: 'none' }} placeholder="What's on your mind?"></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary"
                                style={{ alignSelf: 'flex-start', marginTop: '1rem', width: '100%' }}
                                onClick={e => e.preventDefault()}
                            >
                                Send Message <ArrowRight size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .contact-card {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 32px;
                    padding: clamp(1.5rem, 5vw, 4rem);
                    box-shadow: var(--shadow-sm);
                }

                @media (min-width: 1024px) {
                    .contact-card {
                        grid-template-columns: 1fr 1.2fr;
                        gap: 6rem;
                    }
                }

                .social-icon-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: var(--card-alt);
                    color: var(--text-muted);
                    border: 1px solid var(--border-color);
                    transition: all 0.2s;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                @media (min-width: 640px) {
                    .form-row {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-label {
                    fontSize: 0.85rem;
                    fontWeight: 600;
                    color: var(--text-color);
                    margin-left: 0.5rem;
                }

                .form-input {
                    box-sizing: border-box;
                    padding: 1rem;
                    background: var(--card-alt);
                    border: 1px solid var(--border-color);
                    color: var(--text-color);
                    border-radius: 12px;
                    fontSize: 1rem;
                    font-family: 'Inter';
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .form-input:focus {
                    border-color: var(--accent-1);
                    box-shadow: 0 0 0 4px rgba(26,115,232,0.1);
                }

                @media (min-width: 768px) {
                    .btn-primary {
                        width: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
