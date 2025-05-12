"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// A small animated neural network icon to replace static image
const NeuralIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size to match the expected icon size
    canvas.width = 60;
    canvas.height = 60;

    // Define colors
    const COLORS = {
      primary: "#FE6623", // DeeCogs orange
      secondary: "#1c77cb", // Blue matching the text color
      accent: "#FFFFFF",   // White
    };

    // Node structure
    interface Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    // Create neural network nodes
    const nodes: Node[] = [
      // Center node
      { 
        x: 30, 
        y: 30, 
        radius: 4, 
        color: COLORS.primary, 
        pulse: 0, 
        pulseSpeed: 0.005 
      },
      // Surrounding nodes in circular pattern
      { 
        x: 30 + 15 * Math.cos(0), 
        y: 30 + 15 * Math.sin(0), 
        radius: 3, 
        color: COLORS.secondary, 
        pulse: Math.PI * 0.5, 
        pulseSpeed: 0.004 
      },
      { 
        x: 30 + 15 * Math.cos(Math.PI * 0.5), 
        y: 30 + 15 * Math.sin(Math.PI * 0.5), 
        radius: 3, 
        color: COLORS.secondary, 
        pulse: Math.PI, 
        pulseSpeed: 0.003 
      },
      { 
        x: 30 + 15 * Math.cos(Math.PI), 
        y: 30 + 15 * Math.sin(Math.PI), 
        radius: 3, 
        color: COLORS.secondary, 
        pulse: Math.PI * 1.5, 
        pulseSpeed: 0.004 
      },
      { 
        x: 30 + 15 * Math.cos(Math.PI * 1.5), 
        y: 30 + 15 * Math.sin(Math.PI * 1.5), 
        radius: 3, 
        color: COLORS.secondary, 
        pulse: Math.PI * 2, 
        pulseSpeed: 0.003 
      },
      // Outer ring nodes
      { 
        x: 30 + 25 * Math.cos(Math.PI * 0.25), 
        y: 30 + 25 * Math.sin(Math.PI * 0.25), 
        radius: 2, 
        color: COLORS.accent, 
        pulse: Math.PI * 0.25, 
        pulseSpeed: 0.002 
      },
      { 
        x: 30 + 25 * Math.cos(Math.PI * 0.75), 
        y: 30 + 25 * Math.sin(Math.PI * 0.75), 
        radius: 2, 
        color: COLORS.accent, 
        pulse: Math.PI * 0.75, 
        pulseSpeed: 0.003 
      },
      { 
        x: 30 + 25 * Math.cos(Math.PI * 1.25), 
        y: 30 + 25 * Math.sin(Math.PI * 1.25), 
        radius: 2, 
        color: COLORS.accent, 
        pulse: Math.PI * 1.25, 
        pulseSpeed: 0.002 
      },
      { 
        x: 30 + 25 * Math.cos(Math.PI * 1.75), 
        y: 30 + 25 * Math.sin(Math.PI * 1.75), 
        radius: 2, 
        color: COLORS.accent, 
        pulse: Math.PI * 1.75, 
        pulseSpeed: 0.003 
      }
    ];

    // Animation function
    const animate = (timestamp: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update pulses
      nodes.forEach(node => {
        node.pulse += node.pulseSpeed;
        if (node.pulse > Math.PI * 2) {
          node.pulse -= Math.PI * 2;
        }
      });

      // Draw connections first
      ctx.lineWidth = 0.5;
      
      // Connect center to middle ring
      for (let i = 1; i <= 4; i++) {
        // Pulse opacity based on the receiving node
        const opacity = 0.3 + 0.5 * Math.sin(nodes[i].pulse);
        
        // Create gradient for connection
        const gradient = ctx.createLinearGradient(
          nodes[0].x, nodes[0].y,
          nodes[i].x, nodes[i].y
        );
        
        // Helper function for color conversion
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
        
        gradient.addColorStop(0, hexToRgba(nodes[0].color, opacity));
        gradient.addColorStop(1, hexToRgba(nodes[i].color, opacity));
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        ctx.lineTo(nodes[i].x, nodes[i].y);
        ctx.stroke();
      }

      // Connect middle ring to outer ring
      for (let i = 1; i <= 4; i++) {
        // Connect each middle node to nearest outer nodes
        const outerIndexes = i === 1 ? [5, 6] : 
                             i === 2 ? [6, 7] : 
                             i === 3 ? [7, 8] :
                             [8, 5];
                             
        for (const outerIdx of outerIndexes) {
          // Pulse opacity
          const opacity = 0.2 + 0.4 * Math.sin(nodes[outerIdx].pulse);
          
          // Create gradient
          const gradient = ctx.createLinearGradient(
            nodes[i].x, nodes[i].y,
            nodes[outerIdx].x, nodes[outerIdx].y
          );
          
          gradient.addColorStop(0, hexToRgba(nodes[i].color, opacity));
          gradient.addColorStop(1, hexToRgba(nodes[outerIdx].color, opacity));
          
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[outerIdx].x, nodes[outerIdx].y);
          ctx.stroke();
        }
      }

      // Draw nodes (on top of connections)
      nodes.forEach(node => {
        // Calculate pulse effect (makes nodes "breathe")
        const pulseEffect = 0.8 + 0.2 * Math.sin(node.pulse);
        const radius = node.radius * pulseEffect;
        
        // Draw node glow
        const glowRadius = radius * 2;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
        
        gradient.addColorStop(0, hexToRgba(node.color, 0.8));
        gradient.addColorStop(1, hexToRgba(node.color, 0));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node core
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Request next frame
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
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width={60} 
      height={60} 
      className={`${className}`}
    />
  );
};

export default NeuralIcon;