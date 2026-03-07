import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Navigation, Gamepad2, Target, Cpu, ExternalLink } from 'lucide-react';

const Projects = () => {
    const data = [
        {
            title: 'OneBus Tracking System',
            desc: 'Live tracking of college buses featuring real-time ETA, dedicated admin dashboard, and robust driver panel.',
            tech: ['React', 'Node.js', 'Maps API'],
            imgUrl: '/onebus.png',
            icon: <Navigation size={22} color="#e94235" />,
            githubUrl: 'https://github.com/ChinmayaBiswal7/bus-tracker',
            liveUrl: 'https://bus-tracker-kmd5.onrender.com/'
        },
        {
            title: 'Gammers Hub',
            desc: 'A dedicated gaming platform featuring classic board games and engaging Player-vs-Player matchmaking capabilities.',
            tech: ['JavaScript', 'HTML/CSS', 'Socket.io'],
            imgUrl: '/gammers.png',
            icon: <Gamepad2 size={22} color="#fabb05" />,
            githubUrl: 'https://github.com/ChinmayaBiswal7/GammersGames',
            liveUrl: 'https://gammersgames.netlify.app/games.html'
        },
        {
            title: 'Student Buddy App',
            desc: 'An all-in-one productivity suite for students integrating a focus timer, task/work tracker, and fitness goals.',
            tech: ['React Native', 'MongoDB', 'PostgreSQL'],
            imgUrl: '/buddyapp.png',
            icon: <Target size={22} color="#34a853" />,
            githubUrl: 'https://github.com/ChinmayaBiswal7/Buddy-App',
            liveUrl: 'https://buddy-app-8ad7.onrender.com'
        },
    ];

    const [active, setActive] = useState(0);

    // Flawless mathematically calculated auto-rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % 3);
        }, 5000); // 1/3rd of the 15s orbit animation
        return () => clearInterval(timer);
    }, []);

    // Starting positions logic so they hit left axis exactly at 0s, 5s, and 10s
    const angles = [180, 60, 300];
    const radius = 140;
    const cx = 140;
    const cy = 140;

    return (
        <section id="work" style={{
            background: 'var(--card-bg)',
            borderRadius: '40px',
            padding: '8rem 2rem',
            margin: '2rem 5%',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
        }}>
            <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
                <style>
                    {`
          @keyframes orbitSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbitSpinReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .orbit-container {
            position: relative;
            width: clamp(240px, 80vw, 280px);
            height: clamp(240px, 80vw, 280px);
            border: 2px dashed rgba(26,115,232,0.2);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin: 0 auto;
            transform: scale(var(--orbit-scale, 1));
          }
          .orbit-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation: orbitSpin 15s linear infinite;
          }
          .orbit-core {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--accent-1), #8ab4f8);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 30px rgba(26,115,232,0.3);
            z-index: 10;
          }
          .orbit-planet-wrapper {
            position: absolute;
            width: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            margin-left: -50px;
            margin-top: -25px;
            animation: orbitSpinReverse 15s linear infinite;
          }
          .orbit-planet {
            width: 50px;
            height: 50px;
            background: var(--card-bg);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 2px solid transparent;
            z-index: 20;
          }
          .orbit-planet-title {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-color);
            background: var(--glass);
            padding: 4px 8px;
            border-radius: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
            text-align: center;
            white-space: nowrap;
            transition: all 0.3s;
          }
          .orbit-planet-wrapper.active .orbit-planet {
            border: 2px solid var(--accent-1);
            background: var(--card-alt);
            box-shadow: 0 0 0 6px rgba(26,115,232,0.1);
            transform: scale(1.15);
          }
          .orbit-planet-wrapper.active .orbit-planet-title {
            color: var(--accent-1);
            background: var(--card-bg);
            border: 1px solid var(--accent-1);
            transform: scale(1.05);
          }
          
          .work-layout {
            display: flex;
            gap: 5rem;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 4rem;
          }

          @media (max-width: 1000px) {
            .work-layout {
               flex-direction: column;
               gap: 3rem;
               align-items: center;
            }
          }
          @media (max-width: 768px) {
            #work {
              margin: 1rem 3% !important;
              padding: 4rem 1.5rem !important;
              border-radius: 24px !important;
            }
          }
          @media (max-width: 480px) {
            .orbit-container {
              --orbit-scale: 0.8;
            }
            .premium-card {
              padding: 1.5rem !important;
            }
          }
        `}
                </style>

                <div style={{ textAlign: 'center' }}>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ color: 'var(--accent-1)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}
                    >
                        Project Architecture
                    </motion.p>
                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem' }}
                    >
                        The Ecosystem
                    </motion.h2>
                </div>

                <div className="work-layout">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '2rem 0', minWidth: '320px' }}
                    >
                        <div className="orbit-container">
                            <div className="orbit-core">
                                <Cpu size={36} color="var(--card-bg)" />
                            </div>
                            <div className="orbit-ring">
                                {data.map((proj, idx) => {
                                    const angle = angles[idx];
                                    const left = cx + radius * Math.cos(angle * Math.PI / 180);
                                    const top = cy + radius * Math.sin(angle * Math.PI / 180);
                                    return (
                                        <div
                                            key={idx}
                                            className={`orbit-planet-wrapper ${active === idx ? 'active' : ''}`}
                                            style={{ left: left + 'px', top: top + 'px' }}
                                        >
                                            <div className="orbit-planet">
                                                {proj.icon}
                                            </div>
                                            <div className="orbit-planet-title">{proj.title}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ flex: 1, minWidth: '300px', width: '100%', maxWidth: '600px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, filter: 'blur(10px)', x: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                                exit={{ opacity: 0, filter: 'blur(10px)', x: -30 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="premium-card"
                                style={{ overflow: 'hidden', padding: 0 }}
                            >
                                <div
                                    style={{
                                        height: '260px',
                                        background: `url(${data[active].imgUrl}) no-repeat center center/cover`,
                                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                />
                                <div style={{ padding: '2.5rem' }}>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '0.8rem', fontFamily: 'Outfit' }}>{data[active].title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>{data[active].desc}</p>

                                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                                        {data[active].tech.map(t => (
                                            <span key={t} style={{ background: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-1)' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <a href={data[active].liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                                            Live Demo <ExternalLink size={16} />
                                        </a>
                                        <a href={data[active].githubUrl} target="_blank" rel="noreferrer" className="btn" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem', background: 'var(--card-alt)', color: 'var(--text-color)', border: '1px solid var(--border-color)' }}>
                                            Source Code <Github size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
