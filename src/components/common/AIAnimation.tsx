"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Subtle AI background animation that won't overwhelm text
const AIAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Colors
    const colors = {
      primary: "#FE6623",   // Orange (DeeCogs primary)
      secondary: "#1c77cb", // Blue
      tertiary: "#7C3AED",  // Purple
      white: "#FFFFFF"
    };

    // Animation parameters - expanded to cover more of the right half
    const RIGHT_SIDE_CENTER_X = canvas.width * 0.7; // Moved more toward center
    const CENTER_Y = canvas.height * 0.5;
    const RADIUS = Math.min(canvas.width, canvas.height) * 0.45; // Larger radius

    // Particles/nodes
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

    // Generate particles - specifically on the right side
    const particles: Particle[] = [];
    const particleCount = 60; // Increased count for more visibility
    
    for (let i = 0; i < particleCount; i++) {
      // Polar coordinates for better distribution
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * RADIUS * 0.9; // Keep within radius
      
      // Position in right side area (with some jitter)
      const x = RIGHT_SIDE_CENTER_X + Math.cos(angle) * distance;
      const y = CENTER_Y + Math.sin(angle) * distance;
      
      // Particle properties
      const size = 1.5 + Math.random() * 2.5; // Slightly larger particles
      const colorChoice = Math.random();
      const color = colorChoice < 0.4 ? colors.primary : 
                    colorChoice < 0.7 ? colors.secondary : 
                    colorChoice < 0.9 ? colors.tertiary : colors.white;
      
      // Add particle
      particles.push({
        x,
        y,
        size,
        color,
        speed: 0.1 + Math.random() * 0.1, // Very slow movement
        angle: Math.random() * Math.PI * 2,
        opacity: 0.3 + Math.random() * 0.6, // Increased opacity
        pulseSpeed: 0.001 + Math.random() * 0.002, // Slow pulsing
        pulseFactor: Math.random() * Math.PI * 2, // Random phase offset
        connectionRadius: 90 + Math.random() * 40 // Larger connection radius
      });
    }

    // Time tracking for smooth animation
    let lastTime = 0;

    // Animation loop
    const animate = (timestamp: number) => {
      // Time delta for consistent animation speed across devices
      const delta = lastTime ? timestamp - lastTime : 16;
      lastTime = timestamp;
      
      // Clear with slight fade for subtle trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections first (behind particles)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          
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
            
            // Convert hex to rgba
            const hexToRgba = (hex: string, alpha: number) => {
              const r = parseInt(hex.slice(1, 3), 16);
              const g = parseInt(hex.slice(3, 5), 16);
              const b = parseInt(hex.slice(5, 7), 16);
              return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };
            
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
      }

      // Update and draw particles
      particles.forEach(p => {
        // Very slow movement
        p.x += Math.cos(p.angle) * p.speed * (delta / 16);
        p.y += Math.sin(p.angle) * p.speed * (delta / 16);
        
        // Occasionally change direction slightly
        if (Math.random() < 0.01) {
          p.angle += (Math.random() - 0.5) * 0.2;
        }
        
        // Keep particles within the right-side area
        const dx = p.x - RIGHT_SIDE_CENTER_X;
        const dy = p.y - CENTER_Y;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
        
        if (distanceFromCenter > RADIUS) {
          // Gently push back toward center
          p.angle = Math.atan2(CENTER_Y - p.y, RIGHT_SIDE_CENTER_X - p.x);
        }
        
        // Calculate pulse for size/opacity variation
        const pulse = 0.8 + 0.2 * Math.sin(timestamp * p.pulseSpeed + p.pulseFactor);
        
        // Draw particle glow
        const glowRadius = p.size * 4 * pulse; // Larger glow
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, glowRadius
        );
        
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
        
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

      // Continue animation
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dark background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient focused on right side for depth without overwhelming text */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/70"
        ></div>
      </div>
      
      {/* Background decoration - fixed on right side */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Larger orange glow on right side */}
        <motion.div 
          className="absolute top-1/4 right-0 w-2/3 h-2/3"
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
        
        {/* Enhanced blue accent */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2"
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
      
      {/* Canvas for network visualization */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Very subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFISURBVGhD7ZixTsMwFEXTDSDxB3wBExNDx36ME+PzCRQWpnyEMDAgMTCURarUHmynTmw/tuXR2ST2PfZxkmYY955FxfR9v2GMeRyG4cw5d4HdS2vtB7a9VgdQI7Dte79A5ZBaA7Zt+zoZgj0nQj1JbGbInhNp6oQ6YtgTWk5YXpC9LWf/BNQmKTfwRmClI78EcHI6R8wtPG5ScgAT29AV5hVm4JQI2HMitQkZHpfQsafQTWjYU2Y9U7DnRDw3KZMvGHtCl5yQDcGeE1nshNgD2BMZnVicEJyRIecE1QnZPyB7DqmL+eHRB9yM+zMz5oKV8zUZ7FfQGUTUf1AwUCPk32hoUCPUD1uooEZa+9iKCmqkxc/mKKBG5MVzOq5xXXnPeWTxW1/yAIo/pUvN+2RIcSPLEQrFjVjrzpumeTLG3MJuYv0Xf9d177BdL62v4xusGsIwP05tAAAAAElFTkSuQmCC')] opacity-[0.01]"></div>
    </div>
  );
};

export default AIAnimation;