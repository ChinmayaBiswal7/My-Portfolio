import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: 'Present',
            role: 'Growth Team Member',
            company: 'Google Developer Groups (GDG)',
            desc: 'Actively contributing to the tech community, organizing events, and collaborating with fellow developers on scalable ideas.'
        },
        {
            year: 'Present',
            role: 'Founder',
            company: 'Mac Versus',
            desc: 'Spearheading a new initiative. Overseeing the foundational technical architecture, team building, and product roadmap.'
        }
    ];

    const hoverSpring = { type: "spring", stiffness: 400, damping: 25 };

    return (
        <section id="experience" style={{ padding: '4rem 0 8rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    style={{ color: 'var(--accent-1)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}
                >
                    Career Path
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ fontSize: '3rem', color: 'var(--text-color)', marginBottom: '1rem', fontFamily: 'Outfit' }}
                >
                    Professional <span style={{ color: 'var(--accent-1)' }}>Experience</span>
                </motion.h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                {/* Vertical Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    style={{ position: 'absolute', right: '50%', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, var(--accent-1), rgba(26,115,232,0.1))', transform: 'translateX(50%)' }}
                />

                {experiences.map((exp, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                        <motion.div
                            key={idx}
                            className="premium-card"
                            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                                x: isLeft ? -10 : 10,
                                scale: 1.02,
                                boxShadow: '0 20px 40px rgba(26, 115, 232, 0.15)',
                                borderColor: 'rgba(26, 115, 232, 0.4)',
                                transition: hoverSpring
                            }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                            style={{
                                width: '45%',
                                alignSelf: isLeft ? 'flex-start' : 'flex-end',
                                padding: '2rem 2.5rem',
                                position: 'relative',
                                textAlign: isLeft ? 'right' : 'left',
                                cursor: 'pointer',
                                willChange: 'transform'
                            }}
                        >
                            <div style={{ position: 'absolute', [isLeft ? 'right' : 'left']: '-36px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--card-bg)', border: '5px solid var(--accent-1)', boxShadow: '0 0 0 5px rgba(26,115,232,0.1)', zIndex: 2 }} />

                            <div style={{ display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                                <span style={{ background: 'var(--card-alt)', color: 'var(--text-muted)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid var(--border-color)' }}>{exp.year}</span>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-color)', margin: '1rem 0 0.5rem 0', fontFamily: 'Inter', fontWeight: 600 }}>{exp.role}</h3>
                            <h4 style={{ color: 'var(--accent-1)', fontSize: '1rem', marginBottom: '1.2rem', fontFamily: 'Inter', fontWeight: 500 }}>{exp.company}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{exp.desc}</p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
};

export default Experience;
