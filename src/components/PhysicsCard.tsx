import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface PhysicsCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const PhysicsCard: React.FC<PhysicsCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(41, 151, 255, 0.15)',
  onClick,
  interactive = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth physics spring configuration
  const springConfig = { stiffness: 350, damping: 28 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Calculate normalized rotation (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -5; // max 5deg tilt
    const tiltY = ((x - centerX) / centerX) * 5;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseEnter = () => {
    if (!interactive) return;
    setIsHovered(true);
    scale.set(1.015);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        scale: interactive ? scale : 1,
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-3xl overflow-hidden glass-panel transition-colors duration-300 ${
        isHovered ? 'border-white/20' : 'border-white/8'
      } ${interactive ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Specular Spotlight Glow following cursor */}
      {interactive && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Subtle top edge specular highlight (Apple glass shine) */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

      {/* Card Content */}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};
