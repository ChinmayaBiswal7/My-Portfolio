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
        <section id="education" style={{ padding: '8rem 0 4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    style={{ color: '#34a853', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}
                >
                    Foundational Knowledge
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    style={{ fontSize: '3rem', color: 'var(--text-color)', marginBottom: '1rem', fontFamily: 'Outfit' }}
                >
                    Academic <span style={{ color: '#34a853' }}>Journey</span>
                </motion.h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="premium-card"
                        initial={{ opacity: 0, y: 80, rotateX: 30 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        whileHover={{
                            y: -10,
                            scale: 1.01,
                            boxShadow: '0 25px 50px rgba(52, 168, 83, 0.15)',
                            borderColor: 'rgba(52, 168, 83, 0.4)',
                            transition: hoverSpring
                        }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: idx * 0.2 }}
                        viewport={{ once: true, margin: '-50px' }}
                        style={{ padding: '3rem', position: 'relative', overflow: 'hidden', perspective: '1000px', transformStyle: 'preserve-3d', borderTop: '4px solid #34a853', cursor: 'pointer', willChange: 'transform' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                            <span style={{ background: 'rgba(52,168,83,0.1)', color: '#34a853', padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>
                                {edu.year}
                            </span>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: 700 }}>{edu.degree}</h3>
                        <h4 style={{ color: '#34a853', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'Inter', fontWeight: 500 }}>{edu.school}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>{edu.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
