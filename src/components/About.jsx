import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Lightbulb } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Rocket size={24} />,
            color: "#1a73e8",
            title: "My Mission",
            desc: "To bridge the gap between complex algorithms and human-centric design, creating software that doesn't just work, but inspires.",
            glow: "rgba(26, 115, 232, 0.25)"
        },
        {
            icon: <Lightbulb size={24} />,
            color: "#fbbc04",
            title: "Mac Versus",
            desc: "Founded this initiative to explore the cutting edge of tech competition and development, pushing boundaries in the student developer ecosystem.",
            glow: "rgba(251, 188, 4, 0.2)"
        },
        {
            icon: <Heart size={24} />,
            color: "#ea4335",
            title: "Passions",
            desc: "When I'm not coding, I'm deep diving into Machine Learning research or contributing to the growth of the GDG community.",
            glow: "rgba(234, 67, 53, 0.2)"
        }
    ];

    return (
        <section id="about-detailed" style={{ padding: '8rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                width: 'clamp(280px, 30vw, 400px)',
                                height: 'clamp(350px, 40vw, 500px)',
                                background: 'var(--card-alt)',
                                borderRadius: '32px',
                                border: '1px solid var(--border-color)',
                                overflow: 'hidden',
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: 1 }}
                                transition={{ duration: 0.6 }}
                                src="/profile.jpg"
                                alt="Chinmaya Biswal"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Chinmaya+Biswal&background=1a73e8&color=fff&size=512';
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </motion.div>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--accent-1)',
                            borderRadius: '32px',
                            zIndex: 1,
                            opacity: 0.3
                        }} />
                    </div>
                </motion.div>

                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--accent-1)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}
                    >
                        Detailed Story
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}
                    >
                        More than just <br /><span className="text-gradient">a developer.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}
                    >
                        My journey began at Kendriya Vidyalaya No 1, where I first discovered the magic of logic. Currently, as a 2nd-year B.Tech CSE student at KIIT, I spend my days building the foundation of <b>Mac Versus</b> and scaling community impact with <b>GDG</b>. I believe the best code is written with purpose and a deep understanding of the problem space.
                    </motion.p>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.2 + (i * 0.1),
                                        duration: 0.5
                                    }
                                }}
                                whileHover="hover"
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'flex-start',
                                    padding: '1.5rem',
                                    background: 'var(--card-bg)',
                                    borderRadius: '20px',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow-sm)',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                                variants={{
                                    hover: {
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow: `0 25px 50px ${card.glow}`,
                                        borderColor: card.glow.replace('0.2)', '0.6)').replace('0.25)', '0.6)')
                                    }
                                }}
                            >
                                <motion.div
                                    variants={{
                                        hover: { color: card.color, scale: 1.1 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    style={{
                                        padding: '0.8rem',
                                        background: 'var(--card-alt)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    {card.icon}
                                </motion.div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{card.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
