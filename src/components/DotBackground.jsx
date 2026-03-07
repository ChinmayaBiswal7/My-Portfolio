import React, { useEffect, useRef } from 'react';

const DotBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const dots = [];
        const spacing = 40; // Clean grid gap
        const mouse = { x: -1000, y: -1000, radius: 180 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const init = () => {
            dots.length = 0;
            for (let x = 0; x < canvas.width + spacing; x += spacing) {
                for (let y = 0; y < canvas.height + spacing; y += spacing) {
                    dots.push({
                        baseX: x,
                        baseY: y,
                        x: x,
                        y: y,
                        size: 1.5, // Clearly visible but not huge
                        density: (Math.random() * 20) + 1
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDark = document.documentElement.classList.contains('dark');
            const scrollY = window.scrollY;

            // Noticeable but professional pattern
            const dotColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)';
            const activeColor = isDark ? 'rgba(88, 166, 255, 0.8)' : 'rgba(26, 115, 232, 0.7)';

            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];

                const scrollOffset = (scrollY % spacing);
                const drawY = dot.baseY - scrollOffset;

                const dx = mouse.x - dot.x;
                const dy = mouse.y - drawY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let renderX = dot.x;
                let renderY = drawY;

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = (dx / distance) * force * dot.density * 0.6;
                    const directionY = (dy / distance) * force * dot.density * 0.6;

                    renderX -= directionX;
                    renderY -= directionY;

                    ctx.fillStyle = activeColor;
                    ctx.beginPath();
                    ctx.arc(renderX, renderY, dot.size * 1.8, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillStyle = dotColor;
                    ctx.beginPath();
                    ctx.arc(renderX, renderY, dot.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Securely behind everything
                pointerEvents: 'none',
                opacity: 0.8 // Softness
            }}
        />
    );
};

export default DotBackground;
