import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import DotBackground from './components/DotBackground';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const orb1X = useTransform(springX, [0, 1920], [-25, 25]);
  const orb1Y = useTransform(springY, [0, 1080], [-25, 25]);
  const orb2X = useTransform(springX, [0, 1920], [35, -35]);
  const orb2Y = useTransform(springY, [0, 1080], [35, -35]);
  const orb3X = useTransform(springX, [0, 1920], [-50, 50]);
  const orb3Y = useTransform(springY, [0, 1080], [15, -15]);

  return (
    <>
      <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent-1)', transformOrigin: '0%', scaleX, zIndex: 9999 }} />
      <div className="mesh-bg">
        <motion.div
          className="mesh-orb orb-1"
          style={{
            x: orb1X,
            y: orb1Y,
            background: 'rgba(26, 115, 232, 0.2)'
          }}
        />
        <motion.div
          className="mesh-orb orb-2"
          style={{
            x: orb2X,
            y: orb2Y,
            background: 'rgba(52, 168, 83, 0.15)'
          }}
        />
        <motion.div
          className="mesh-orb orb-3"
          style={{
            x: orb3X,
            y: orb3Y,
            background: 'rgba(233, 66, 53, 0.15)'
          }}
        />
      </div>

      <DotBackground />
      <div className="app-container" style={{ position: 'relative', zIndex: 10 }}>
        <NavBar />

        <main className="content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>

        <footer style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--border-color)', padding: '5rem 0 3rem 0', marginTop: '4rem' }}>
          <div className="content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            <div>
              <div className="logo" style={{ marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--accent-1)' }}>✦</span>
                <span>Chinmaya Biswal</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Engineering scalable solutions and building the future of the web as a student founder and community leader.
              </p>
            </div>

            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <a href="#about-detailed" className="hover:text-blue-500 transition-colors">About My Journey</a>
                <a href="#work" className="hover:text-blue-500 transition-colors">Projects & Work</a>
                <a href="/resume.pdf" download className="hover:text-blue-500 transition-colors">Download Resume</a>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>Connect</h4>
              <div style={{ display: 'flex', gap: '1.2rem', color: 'var(--text-muted)' }}>
                <a href="https://github.com/ChinmayaBiswal7" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-all transform hover:-translate-y-1"><Github size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-all transform hover:-translate-y-1"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-all transform hover:-translate-y-1"><Twitter size={20} /></a>
                <a href="mailto:contact@example.com" className="hover:text-blue-500 transition-all transform hover:-translate-y-1"><Mail size={20} /></a>
              </div>
            </div>
          </div>

          <div className="content" style={{ padding: '2rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <p>© {new Date().getFullYear()} Chinmaya Biswal. Built with React & Antigravity Intelligence.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
