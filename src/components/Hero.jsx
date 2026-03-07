import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Code } from 'lucide-react';

const Hero = () => {
    const roles = ["Building the future.", "Founder of Mac Versus.", "CSE Student @ KIIT.", "Innovating Web Apps.", "Member of GDG Growth Team."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(springY, [-300, 300], [15, -15]);
    const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX - innerWidth / 2);
        mouseY.set(clientY - innerHeight / 2);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40, rotateX: -10 },
        show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", damping: 14, stiffness: 100 }
        }
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            style={{
                justifyContent: 'center',
                minHeight: '100vh',
                display: 'flex',
                paddingTop: '6rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <style>
                {`
                @keyframes textShine {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .shine-text {
                    background: linear-gradient(
                        to right,
                        var(--accent-1) 0%,
                        var(--accent-2) 20%,
                        #8ab4f8 40%,
                        var(--accent-1) 60%,
                        var(--accent-1) 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: textShine 4s linear infinite;
                }
                .mouse-spotlight {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(26, 115, 232, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                    transform: translate(-50%, -50%);
                }
                `}
            </style>

            <motion.div
                className="mouse-spotlight"
                style={{
                    left: springX,
                    top: springY,
                    x: '50vw',
                    y: '50vh'
                }}
            />

            <motion.div
                className="hero-content"
                style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        perspective: '1000px',
                        rotateX,
                        rotateY,
                        marginBottom: '2rem'
                    }}
                >
                    <motion.div
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        style={{
                            width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(26,115,232,0.2)', position: 'relative'
                        }}
                    >
                        <Terminal size={48} color="var(--card-bg)" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{ position: 'absolute', width: '100%', height: '100%', background: 'var(--accent-1)', borderRadius: '50%', filter: 'blur(20px)', zIndex: -1 }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(26, 115, 232, 0.1)', padding: '0.5rem 1.2rem', borderRadius: '50px', color: 'var(--accent-1)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem', border: '1px solid rgba(26, 115, 232, 0.2)' }}
                >
                    <Sparkles size={14} /> B.Tech CSE Student @ KIIT University
                </motion.div>

                <motion.div variants={container} initial="hidden" animate="show" style={{ perspective: '1000px', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                    <motion.span variants={item} style={{ display: 'block', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800 }}>
                        Hi, I'm <span className="shine-text">Chinmaya.</span>
                    </motion.span>

                    <motion.div variants={item} style={{ height: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 15, letterSpacing: '8px', scale: 0.95 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0, letterSpacing: '0px', scale: 1 }}
                                exit={{ opacity: 0, filter: 'blur(12px)', y: -15, letterSpacing: '-2px', scale: 1.05 }}
                                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    color: 'var(--text-color)',
                                    fontSize: 'clamp(1.5rem, 3.8vw, 3rem)',
                                    fontWeight: 800,
                                    fontFamily: 'Outfit',
                                    position: 'relative',
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                {roles[index]}
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1.3, opacity: 0.12 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '120%',
                                        height: '140%',
                                        background: 'var(--accent-1)',
                                        filter: 'blur(50px)',
                                        borderRadius: '50%',
                                        zIndex: -1
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{ margin: '1.5rem auto 3rem auto', maxWidth: '700px', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}
                >
                    I'm currently in my 2nd year of Computer Science. As the founder of <b>Mac Versus</b> and a member of <b>GDG Growth Team</b>, I focus on engineering scalable solutions and building next-gen web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#work"
                        className="btn btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2rem' }}
                    >
                        View My Work <ArrowRight size={18} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/resume.pdf"
                        download
                        className="btn"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2rem', background: 'var(--card-alt)', color: 'var(--text-color)', border: '1px solid var(--border-color)' }}
                    >
                        Download Resume <Code size={18} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
