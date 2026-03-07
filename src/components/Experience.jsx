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
        <section id="experience">
            <div className="content">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ color: 'var(--accent-1)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}
                    >
                        Career Path
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-color)', marginBottom: '1rem', fontFamily: 'Outfit' }}
                    >
                        Professional <span style={{ color: 'var(--accent-1)' }}>Experience</span>
                    </motion.h2>
                </div>

                <div className="timeline-container">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className="timeline-line"
                    />

                    {experiences.map((exp, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 20px 40px rgba(26, 115, 232, 0.15)',
                                    borderColor: 'rgba(26, 115, 232, 0.4)',
                                    transition: hoverSpring
                                }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
                            >
                                <div className="timeline-dot" />
                                <span className="timeline-year">{exp.year}</span>
                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-desc">{exp.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <style jsx>{`
                .timeline-container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .timeline-line {
                    position: absolute;
                    left: 20px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, var(--accent-1), rgba(26,115,232,0.1));
                }

                .timeline-item {
                    width: calc(100% - 60px);
                    margin-left: 60px;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    padding: 2rem;
                    position: relative;
                    will-change: transform;
                    cursor: pointer;
                }

                .timeline-dot {
                    position: absolute;
                    left: -49px;
                    top: 2rem;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: var(--card-bg);
                    border: 4px solid var(--accent-1);
                    z-index: 2;
                }

                .timeline-year {
                    display: inline-block;
                    background: var(--card-alt);
                    color: var(--text-muted);
                    padding: 0.3rem 0.8rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 0.8rem;
                }

                .timeline-role {
                    font-size: 1.3rem;
                    color: var(--text-color);
                    margin-bottom: 0.3rem;
                    font-weight: 600;
                }

                .timeline-company {
                    color: var(--accent-1);
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    font-weight: 500;
                }

                .timeline-desc {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                @media (min-width: 768px) {
                    .timeline-line {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .timeline-item {
                        width: 42%;
                        margin-left: 0;
                    }

                    .timeline-item.left {
                        align-self: flex-start;
                        text-align: right;
                    }

                    .timeline-item.right {
                        align-self: flex-end;
                        text-align: left;
                    }

                    .timeline-dot {
                        left: auto;
                        right: -51px;
                    }

                    .timeline-item.right .timeline-dot {
                        right: auto;
                        left: -51px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
