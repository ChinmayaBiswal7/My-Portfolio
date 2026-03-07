import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            year: '2024 - Present',
            degree: 'B.Tech in Computer Science',
            school: 'KIIT University (2nd Year)',
            desc: 'Pursuing my undergraduate degree. Developing a strong foundation in core CS topics, algorithms, and full-stack software creation.'
        },
        {
            year: 'Prior',
            degree: 'High School Education',
            school: 'Kendriya Vidyalaya No 1, BBSR',
            desc: 'Completed my foundational schooling which sparked my initial deep interest in mathematics, logic, and computing.'
        }
    ];

    const hoverSpring = { type: "spring", stiffness: 400, damping: 25 };

    return (
        <section id="education">
            <div className="content">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ color: '#34a853', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}
                    >
                        Foundational Knowledge
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-color)', marginBottom: '1rem', fontFamily: 'Outfit' }}
                    >
                        Academic <span style={{ color: '#34a853' }}>Journey</span>
                    </motion.h2>
                </div>

                <div className="education-grid">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            className="education-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                scale: 1.01,
                                boxShadow: '0 25px 50px rgba(52, 168, 83, 0.15)',
                                borderColor: 'rgba(52, 168, 83, 0.4)',
                                transition: hoverSpring
                            }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <div className="edu-tag-box">
                                <span className="edu-year-tag">
                                    {edu.year}
                                </span>
                            </div>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <h4 className="edu-school">{edu.school}</h4>
                            <p className="edu-desc">{edu.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .education-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                @media (min-width: 768px) {
                    .education-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 3rem;
                    }
                }

                .education-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-top: 4px solid #34a853;
                    border-radius: 24px;
                    padding: clamp(1.5rem, 5vw, 3rem);
                    cursor: pointer;
                    will-change: transform;
                    position: relative;
                }

                .edu-tag-box {
                    margin-bottom: 1.5rem;
                }

                .edu-year-tag {
                    background: rgba(52,168,83,0.1);
                    color: #34a853;
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 700;
                }

                .edu-degree {
                    font-size: 1.5rem;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                    font-family: 'Outfit';
                    font-weight: 700;
                }

                .edu-school {
                    color: #34a853;
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                    font-family: 'Inter';
                    font-weight: 500;
                }

                .edu-desc {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.7;
                }
            `}</style>
        </section>
    );
};

export default Education;
