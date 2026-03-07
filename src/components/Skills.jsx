import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, BrainCircuit, Terminal, Blocks } from 'lucide-react';

const Skills = () => {
    const hoverSpring = { type: "spring", stiffness: 400, damping: 25, mass: 1 };

    const skills = [
        {
            title: "Core Languages",
            desc: "Solid fundamentals across various paradigms, ensuring efficient problem-solving and algorithmic logic.",
            icon: <Code2 size={32} />,
            tags: ['Python', 'Java', 'JavaScript', 'C'],
            className: "bento-item bento-wide",
            glow: "rgba(26, 115, 232, 0.25)",
            // Clipped background decoration
            extra: (
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '24px', pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05 }}>
                        <Terminal size={200} />
                    </div>
                </div>
            ),
            tagColor: 'rgba(26,115,232,0.1)',
            accent: '#1a73e8'
        },
        {
            title: "Databases",
            desc: "Reliable storage and queries.",
            icon: <Database size={32} />,
            tags: ['MongoDB', 'PostgreSQL', 'MySQL'],
            className: "bento-item",
            glow: "rgba(251, 188, 4, 0.25)",
            tagColor: 'rgba(250,187,5,0.1)',
            accent: '#fbbc04'
        },
        {
            title: "Frontend & UI",
            desc: "Building responsive and stunning user interfaces.",
            icon: <Layout size={32} />,
            tags: ['React', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'],
            className: "bento-item bento-tall",
            glow: "rgba(0, 0, 0, 0.4)",
            dark: true,
            accent: '#e94235'
        },
        {
            title: "Backend",
            desc: "Robust architectures powered mainly by Node.js.",
            icon: <Blocks size={32} />,
            className: "bento-item",
            glow: "rgba(52, 168, 83, 0.25)",
            accent: '#34a853',
            tagColor: 'rgba(52,168,83,0.1)'
        },
        {
            title: "Machine Learning",
            desc: "Foundational experience exploring predictive modelling, data extraction, and general intelligence pipelines.",
            icon: <BrainCircuit size={48} />,
            className: "bento-item bento-wide",
            glow: "rgba(233, 66, 53, 0.25)",
            accent: '#ea4335',
            isML: true
        }
    ];

    return (
        <section id="skills" style={{ minHeight: 'auto', padding: '6rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '1rem' }}>Technical <span style={{ color: 'var(--accent-1)' }}>Arsenal</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>A versatile toolkit focused on solving complex problems and delivering solid applications across the entire stack.</p>
            </div>

            <div className="bento-grid" style={{ overflow: 'visible' }}>
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.title}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } },
                            hover: {
                                y: -10,
                                scale: 1.02,
                                boxShadow: `0 25px 50px ${skill.glow}`,
                                borderColor: skill.glow.replace('0.25)', '0.6)'),
                                transition: hoverSpring
                            }
                        }}
                        className={skill.className}
                        style={{
                            background: skill.dark ? 'var(--text-color)' : 'var(--card-bg)',
                            color: skill.dark ? 'var(--bg-color)' : 'var(--text-color)',
                            cursor: 'pointer',
                            willChange: 'transform, box-shadow',
                            overflow: 'visible' // OVERRIDE CSS TO PREVENT ICON CUTTING
                        }}
                    >
                        {skill.extra}
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <motion.div
                                variants={{
                                    initial: { rotate: 0, scale: 1 },
                                    animate: {
                                        rotate: [0, 720, 720],
                                        transition: {
                                            duration: 2,
                                            times: [0, 0.6, 1],
                                            repeat: Infinity,
                                            repeatDelay: 5,
                                            ease: "circOut"
                                        }
                                    },
                                    hover: {
                                        rotate: 360,
                                        scale: 1.3, // Pop out even more
                                        transition: { type: "spring", stiffness: 260, damping: 20 }
                                    }
                                }}
                                style={{
                                    marginBottom: skill.isML ? '0.5rem' : '1.5rem',
                                    display: 'inline-flex',
                                    color: skill.accent,
                                    perspective: '1000px'
                                }}
                            >
                                {skill.icon}
                            </motion.div>

                            {skill.isML ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{skill.title}</h3>
                                        <p style={{ color: skill.dark ? '#bbb' : 'var(--text-muted)' }}>{skill.desc}</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h3 style={{ fontSize: skill.className.includes('wide') || skill.className.includes('tall') ? '1.5rem' : '1.2rem', marginBottom: '0.5rem' }}>{skill.title}</h3>
                                    <p style={{ color: skill.dark ? '#bbb' : 'var(--text-muted)', fontSize: skill.className.includes('tall') ? '1rem' : '0.95rem' }}>{skill.desc}</p>
                                </>
                            )}

                            {skill.tags && (
                                <div style={{ display: 'flex', flexDirection: skill.className.includes('tall') ? 'column' : 'row', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                                    {skill.tags.map(t => (
                                        <div key={t} style={{
                                            background: skill.dark ? 'rgba(255,255,255,0.05)' : skill.tagColor,
                                            color: skill.dark ? 'inherit' : skill.accent,
                                            padding: '5px 12px',
                                            borderRadius: '8px',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            border: skill.dark ? '1px solid rgba(255,255,255,0.1)' : 'none'
                                        }}>
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
