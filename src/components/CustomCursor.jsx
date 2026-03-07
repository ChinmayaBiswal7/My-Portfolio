import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'normal'
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 2.5,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderColor: 'transparent',
      mixBlendMode: 'difference'
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 0,
    }
  };

  return (
    <>
      <motion.div
        className="cursor-outline"
        variants={variants}
        animate={isHovered ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
      <motion.div
        className="cursor-dot"
        variants={dotVariants}
        animate={isHovered ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
