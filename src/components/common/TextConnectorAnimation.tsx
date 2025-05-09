"use client";
import React, { useEffect, useRef } from "react";

const TextConnectorAnimation: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 160;

    // Colors matching DeeCogs branding
    const COLORS = {
      primary: "#FE6623", // DeeCogs orange
      secondary: "#1c77cb", // Blue
      white: "#FFFFFF",
      dark: "#121212",
    };

    // Animation variables
    const particles: Particle[] = [];
    const connections: Connection[] = [];
    const particleCount = 25;
    const maxDistance = 60;
    const baseSize = 3;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: baseSize * (0.5 + Math.random()),
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: i % 3 === 0 ? COLORS.primary : (i % 3 === 1 ? COLORS.secondary : COLORS.white),
        pulseSpeed: 0.03 + Math.random() * 0.04,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Neural-like data paths (fixed paths that data flows along)
    const createPath = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      const points = Math.ceil(len / 15); // One pulse every ~15px
      
      for (let i = 0; i < points; i++) {
        connections.push({
          x1, y1, x2, y2,
          pulsePosition: i / points,
          pulseSpeed: 0.005 + Math.random() * 0.005,
          color
        });
      }
    };

    // Create neural-like pathways (more structured than random connections)
    // Central vertical spine
    const spineX = canvas.width * 0.5;
    createPath(spineX, 0, spineX, canvas.height, COLORS.secondary);
    
    // Branching horizontal paths
    const branches = 5;
    for (let i = 1; i <= branches; i++) {
      const y = (canvas.height / (branches + 1)) * i;
      createPath(0, y, canvas.width, y, i % 2 === 0 ? COLORS.primary : COLORS.secondary);
    }
    
    // Additional diagonal paths
    createPath(0, 0, canvas.width, canvas.height, COLORS.primary);
    createPath(0, canvas.height, canvas.width, 0, COLORS.secondary);
    
    // Create some small diagonal branches
    for (let i = 1; i < branches; i++) {
      const x = (canvas.width / branches) * i;
      const startY = i % 2 === 0 ? 0 : canvas.height;
      const endY = i % 2 === 0 ? canvas.height / 3 : canvas.height * 2/3;
      createPath(x, startY, x + 40, endY, COLORS.white);
    }

    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animation
      const delta = lastTimestamp ? timestamp - lastTimestamp : 16;
      lastTimestamp = timestamp;
      const normalizedDelta = delta / 16; // Normalize to 60fps

      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections first (they'll be in the background)
      connections.forEach(connection => {
        // Update pulse positions
        connection.pulsePosition += connection.pulseSpeed * normalizedDelta;
        if (connection.pulsePosition > 1) connection.pulsePosition = 0;

        // Calculate current pulse coordinates
        const pulseX = connection.x1 + (connection.x2 - connection.x1) * connection.pulsePosition;
        const pulseY = connection.y1 + (connection.y2 - connection.y1) * connection.pulsePosition;

        // Draw line
        ctx.beginPath();
        ctx.moveTo(connection.x1, connection.y1);
        ctx.lineTo(connection.x2, connection.y2);
        ctx.strokeStyle = hexToRgba(connection.color, 0.2);
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw pulse
        const pulseSize = 4;
        const pulseGradient = ctx.createRadialGradient(
          pulseX, pulseY, 0,
          pulseX, pulseY, pulseSize
        );
        
        pulseGradient.addColorStop(0, hexToRgba(connection.color, 0.8));
        pulseGradient.addColorStop(1, hexToRgba(connection.color, 0));
        
        ctx.fillStyle = pulseGradient;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw pulse core
        ctx.fillStyle = connection.color;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX * normalizedDelta;
        particle.y += particle.speedY * normalizedDelta;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Pulse effect
        const pulseFactor = 0.5 + Math.sin(Date.now() * particle.pulseSpeed + particle.pulseOffset) * 0.5;
        const currentSize = particle.size * (0.8 + pulseFactor * 0.5);
        
        // Draw glow
        const glowSize = currentSize * 3;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, hexToRgba(particle.color, 0.6 * pulseFactor));
        gradient.addColorStop(1, hexToRgba(particle.color, 0));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Draw connection with opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, hexToRgba(p1.color, opacity * 0.4));
            gradient.addColorStop(1, hexToRgba(p2.color, opacity * 0.4));
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Helper function for RGBA colors
    function hexToRgba(hex: string, alpha: number): string {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={className} 
    />
  );
};

// Types
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  pulsePosition: number;
  pulseSpeed: number;
  color: string;
}

export default TextConnectorAnimation;