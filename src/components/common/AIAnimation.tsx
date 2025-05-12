"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Optimized AI background animation with performance enhancements
const AIAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Use media query to detect mobile devices
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Helper function to convert hex to rgba (memoized)
  const hexToRgba = useCallback((hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }, []);

  // Colors
  const colors = {
    primary: "#FE6623",   // Orange (DeeCogs primary)
    secondary: "#1c77cb", // Blue
    tertiary: "#7C3AED",  // Purple
    white: "#FFFFFF"
  };

  // Particle interface
  interface Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    speed: number;
    angle: number;
    opacity: number;
    pulseSpeed: number;
    pulseFactor: number;
    connectionRadius: number;
  }

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Function to generate particles
  const generateParticles = useCallback((centerX: number, centerY: number, radius: number) => {
    const particles: Particle[] = [];
    // Reduce particles based on device and reduced motion preference
    let particleCount = 60;
    if (isReducedMotion) {
      particleCount = 20;
    } else if (isMobile) {
      particleCount = 30;
    } else if (isTablet) {
      particleCount = 45;
    }

    for (let i = 0; i < particleCount; i++) {
      // Polar coordinates for better distribution
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * radius * 0.9;

      // Position particles
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      // Particle properties
      const size = 1.5 + Math.random() * 2;
      const colorChoice = Math.random();
      const color = colorChoice < 0.4 ? colors.primary :
                    colorChoice < 0.7 ? colors.secondary :
                    colorChoice < 0.9 ? colors.tertiary : colors.white;

      // Reduce animation speed for reduced motion preference
      const baseSpeed = isReducedMotion ? 0.05 : 0.1;
      const pulseSpeed = isReducedMotion ? 0.0005 : 0.001;

      particles.push({
        x,
        y,
        size,
        color,
        speed: baseSpeed + Math.random() * baseSpeed,
        angle: Math.random() * Math.PI * 2,
        opacity: 0.3 + Math.random() * 0.6,
        pulseSpeed: pulseSpeed + Math.random() * pulseSpeed * 2,
        pulseFactor: Math.random() * Math.PI * 2,
        connectionRadius: isMobile ? 60 + Math.random() * 30 : 90 + Math.random() * 40
      });
    }

    return particles;
  }, [isMobile, isTablet, isReducedMotion, colors]);

  // Debounced window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    // Initialize dimensions
    handleResize();

    // Debounced resize listener
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Main animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size with device pixel ratio for high-DPI displays
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * pixelRatio;
    canvas.height = dimensions.height * pixelRatio;

    // Scale all drawing operations according to the pixel ratio
    ctx.scale(pixelRatio, pixelRatio);

    // Set canvas CSS size
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    // Define responsive variables
    const RIGHT_SIDE_CENTER_X = dimensions.width * (isMobile ? 0.5 : 0.7);
    const CENTER_Y = dimensions.height * 0.5;
    const RADIUS = Math.min(dimensions.width, dimensions.height) * (isMobile ? 0.35 : 0.45);

    // Generate particles
    particlesRef.current = generateParticles(RIGHT_SIDE_CENTER_X, CENTER_Y, RADIUS);

    // Time tracking for smooth animation
    let lastTime = 0;

    // Performance optimization - pre-calculate connection pairs
    const connectionPairs: [number, number][] = [];

    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        // Pre-emptively add all pairs - we'll check distances in the animation loop
        connectionPairs.push([i, j]);
      }
    }

    // Animation loop
    const animate = (timestamp: number) => {
      // Time delta for consistent animation speed across devices
      const delta = lastTime ? timestamp - lastTime : 16;
      lastTime = timestamp;

      // Clear canvas with slight fade for subtle trails
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw connections first (behind particles)
      // Only process a portion of connections each frame for better performance
      for (const [i, j] of connectionPairs) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];

        // Calculate distance between particles
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only connect particles within range
        if (distance < (p1.connectionRadius + p2.connectionRadius) / 2) {
          // Calculate opacity based on distance and particle opacities
          const opacity = (
            (1 - distance / ((p1.connectionRadius + p2.connectionRadius) / 2)) *
            Math.min(p1.opacity, p2.opacity) * 0.5
          );

          // Create gradient for connection line
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, hexToRgba(p1.color, opacity));
          gradient.addColorStop(1, hexToRgba(p2.color, opacity));

          // Draw connection
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.7; // Thicker lines
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Update and draw particles
      particlesRef.current.forEach(p => {
        // Slower movement for reduced motion preference
        const speedFactor = isReducedMotion ? 0.5 : 1;

        // Very slow movement
        p.x += Math.cos(p.angle) * p.speed * (delta / 16) * speedFactor;
        p.y += Math.sin(p.angle) * p.speed * (delta / 16) * speedFactor;

        // Occasionally change direction slightly (less often for reduced motion)
        if (Math.random() < (isReducedMotion ? 0.005 : 0.01)) {
          p.angle += (Math.random() - 0.5) * 0.2 * speedFactor;
        }

        // Keep particles within the right-side area
        const dx = p.x - RIGHT_SIDE_CENTER_X;
        const dy = p.y - CENTER_Y;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

        if (distanceFromCenter > RADIUS) {
          // Gently push back toward center
          p.angle = Math.atan2(CENTER_Y - p.y, RIGHT_SIDE_CENTER_X - p.x);
        }

        // Calculate pulse for size/opacity variation (reduced for prefers-reduced-motion)
        const pulseAmount = isReducedMotion ? 0.1 : 0.2;
        const pulse = 0.9 + pulseAmount * Math.sin(timestamp * p.pulseSpeed + p.pulseFactor);

        // Draw particle glow
        const glowRadius = p.size * 4 * pulse;
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, glowRadius
        );

        gradient.addColorStop(0, hexToRgba(p.color, p.opacity * pulse));
        gradient.addColorStop(1, hexToRgba(p.color, 0));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      // Continue animation (use lower framerate for reduced motion)
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions, isMobile, isTablet, generateParticles, hexToRgba, isReducedMotion]);

  // Optimized rendering for different motion preferences
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Dark background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient focused on right side for depth without overwhelming text */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/70"
        ></div>
      </div>

      {/* Background decoration - optimized for different devices */}
      {!isReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Responsive orange glow */}
          <motion.div
            className="absolute top-1/4 right-0 md:w-2/3 w-full h-2/3"
            style={{
              background: "radial-gradient(circle at 70% 50%, rgba(254, 102, 35, 0.2) 0%, rgba(0, 0, 0, 0) 60%)",
              filter: "blur(70px)",
            }}
            animate={{
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Enhanced blue accent - adjusted for mobile */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 md:w-1/2 w-3/4 h-1/2"
            style={{
              background: "radial-gradient(circle at 75% 75%, rgba(28, 119, 203, 0.15) 0%, rgba(0, 0, 0, 0) 60%)",
              filter: "blur(90px)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      {/* Canvas for network visualization */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Static gradient fallback for reduced motion */}
      {isReducedMotion && (
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 opacity-50"></div>
      )}

      {/* Very subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFISURBVGhD7ZixTsMwFEXTDSDxB3wBExNDx36ME+PzCRQWpnyEMDAgMTCURarUHmynTmw/tuXR2ST2PfZxkmYY955FxfR9v2GMeRyG4cw5d4HdS2vtB7a9VgdQI7Dte79A5ZBaA7Zt+zoZgj0nQj1JbGbInhNp6oQ6YtgTWk5YXpC9LWf/BNQmKTfwRmClI78EcHI6R8wtPG5ScgAT29AV5hVm4JQI2HMitQkZHpfQsafQTWjYU2Y9U7DnRDw3KZMvGHtCl5yQDcGeE1nshNgD2BMZnVicEJyRIecE1QnZPyB7DqmL+eHRB9yM+zMz5oKV8zUZ7FfQGUTUf1AwUCPk32hoUCPUD1uooEZa+9iKCmqkxc/mKKBG5MVzOq5xXXnPeWTxW1/yAIo/pUvN+2RIcSPLEQrFjVjrzpumeTLG3MJuYv0Xf9d177BdL62v4xusGsIwP05tAAAAAElFTkSuQmCC')] opacity-[0.01]"></div>
    </div>
  );
};

export default AIAnimation;