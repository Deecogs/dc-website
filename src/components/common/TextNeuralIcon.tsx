"use client";
import React, { useEffect, useRef } from "react";

// Small neural network animation that fits inline with text
const TextNeuralIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set up canvas context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions - matching text height
    canvas.width = 180;  // Further increased width
    canvas.height = 180; // Further increased height

    // Colors matching DeeCogs branding
    const COLORS = {
      primary: "#FE6623", // DeeCogs orange
      secondary: "#1c77cb", // Blue (matching the text)
      white: "#FFFFFF",
    };

    // Center point of the animation
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Setup for 3D rotating neural structure
    // Central node and orbital nodes
    const centralNode = {
      x: centerX,
      y: centerY,
      z: 0,
      radius: 7.5,  // Further increased radius
      color: COLORS.primary,
    };

    // Orbital node positions in 3D space
    const orbitalNodes = [];
    const orbitalCount = 7; // Added more nodes for visual density
    const orbitalRadius = 30; // Further increased distance from center

    // Generate orbital nodes at different angles
    for (let i = 0; i < orbitalCount; i++) {
      // Distribute points evenly around a sphere
      const theta = Math.PI * 2 * i / orbitalCount;
      const phi = Math.PI * (0.3 + 0.6 * i / orbitalCount); // Distribute vertically
      
      orbitalNodes.push({
        theta,
        phi,
        radius: 4 + Math.random() * 2, // Further increased node size
        color: i % 3 === 0 ? COLORS.primary : COLORS.secondary,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    // Connection lines between central and orbital nodes
    const connections = [];
    // Also add some connections between orbital nodes
    for (let i = 0; i < orbitalCount; i++) {
      // Connect to central node
      connections.push({
        from: 'central',
        to: i,
        color: orbitalNodes[i].color,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        pulsePosition: 0,
      });
      
      // Connect to next node in sequence
      connections.push({
        from: i,
        to: (i + 1) % orbitalCount,
        color: orbitalNodes[i].color,
        pulseSpeed: 0.007 + Math.random() * 0.015,
        pulseOffset: Math.random() * Math.PI * 2,
        pulsePosition: 0,
      });
    }

    // Rotation angles and speeds
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;
    const rotationSpeedX = 0.001;
    const rotationSpeedY = 0.002;
    const rotationSpeedZ = 0.0005;

    // Last timestamp for delta calculation
    let lastUpdateTime = 0;

    // Animation loop
    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animation
      const delta = lastUpdateTime ? timestamp - lastUpdateTime : 16;
      lastUpdateTime = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update rotations
      rotationX += rotationSpeedX * delta;
      rotationY += rotationSpeedY * delta;
      rotationZ += rotationSpeedZ * delta;

      // Calculate 3D positions of orbital nodes
      const nodePositions = orbitalNodes.map((node, index) => {
        // Base position on sphere
        let x = Math.sin(node.phi) * Math.cos(node.theta + rotationY) * orbitalRadius;
        let y = Math.sin(node.phi) * Math.sin(node.theta + rotationY) * orbitalRadius;
        let z = Math.cos(node.phi) * orbitalRadius;
        
        // Apply rotations
        // Rotation around X-axis
        const rotY1 = y * Math.cos(rotationX) - z * Math.sin(rotationX);
        const rotZ1 = y * Math.sin(rotationX) + z * Math.cos(rotationX);
        
        // Rotation around Z-axis
        const rotX2 = x * Math.cos(rotationZ) - rotY1 * Math.sin(rotationZ);
        const rotY2 = x * Math.sin(rotationZ) + rotY1 * Math.cos(rotationZ);
        
        // Apply perspective and translate to center
        const scale = 1000 / (1000 + rotZ1);
        const screenX = rotX2 * scale + centerX;
        const screenY = rotY2 * scale + centerY;
        
        // Calculate pulse for node size
        const pulse = 0.8 + 0.2 * Math.sin(timestamp * node.pulseSpeed + node.pulseOffset);
        
        return {
          x: screenX,
          y: screenY,
          z: rotZ1,
          radius: node.radius * pulse * scale,
          color: node.color,
          scale,
        };
      });

      // Draw connections
      connections.forEach(connection => {
        let fromX, fromY, toX, toY, fromZ, toZ;
        let fromColor, toColor;
        
        if (connection.from === 'central') {
          fromX = centralNode.x;
          fromY = centralNode.y;
          fromZ = centralNode.z;
          fromColor = centralNode.color;
        } else {
          const fromPos = nodePositions[connection.from];
          fromX = fromPos.x;
          fromY = fromPos.y;
          fromZ = fromPos.z;
          fromColor = orbitalNodes[connection.from].color;
        }
        
        const toPos = nodePositions[connection.to];
        toX = toPos.x;
        toY = toPos.y;
        toZ = toPos.z;
        toColor = orbitalNodes[connection.to].color;
        
        // Only draw connections with positive z (facing forward)
        if ((fromZ < -orbitalRadius * 1.5 && toZ < -orbitalRadius * 1.5)) {
          return; // Skip connections behind the sphere
        }
        
        // Update pulse position
        connection.pulsePosition += connection.pulseSpeed * (delta / 16);
        if (connection.pulsePosition > 1) {
          connection.pulsePosition = 0;
        }
        
        // Create gradient for connection
        const gradient = ctx.createLinearGradient(fromX, fromY, toX, toY);
        
        // Calculate opacity based on z-position (farther back = more transparent)
        const avgZ = (fromZ + toZ) / 2;
        const baseOpacity = 0.6 - (avgZ < 0 ? Math.abs(avgZ) / (orbitalRadius * 3) * 0.4 : 0);
        
        gradient.addColorStop(0, hexToRgba(fromColor, baseOpacity));
        gradient.addColorStop(1, hexToRgba(toColor, baseOpacity));
        
        // Draw connection line
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8; // Further increased line thickness
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        
        // Draw pulse dot traveling along connection
        const pulsePosition = connection.pulsePosition;
        if (pulsePosition > 0 && pulsePosition < 1) {
          const pulseX = fromX + (toX - fromX) * pulsePosition;
          const pulseY = fromY + (toY - fromY) * pulsePosition;
          
          // Draw pulse glow
          const pulseSize = 7; // Further increased pulse size
          const pulseGradient = ctx.createRadialGradient(
            pulseX, pulseY, 0,
            pulseX, pulseY, pulseSize
          );
          
          pulseGradient.addColorStop(0, hexToRgba(connection.color, 0.7));
          pulseGradient.addColorStop(1, hexToRgba(connection.color, 0));
          
          ctx.fillStyle = pulseGradient;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw pulse core
          ctx.fillStyle = connection.color;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2); // Further increased core size
          ctx.fill();
        }
      });

      // Draw central node
      const centralGlow = ctx.createRadialGradient(
        centralNode.x, centralNode.y, 0,
        centralNode.x, centralNode.y, centralNode.radius * 2.5
      );
      
      centralGlow.addColorStop(0, hexToRgba(centralNode.color, 0.9)); // Increased opacity
      centralGlow.addColorStop(1, hexToRgba(centralNode.color, 0));
      
      ctx.fillStyle = centralGlow;
      ctx.beginPath();
      ctx.arc(centralNode.x, centralNode.y, centralNode.radius * 3, 0, Math.PI * 2); // Increased glow radius
      ctx.fill();
      
      ctx.fillStyle = centralNode.color;
      ctx.beginPath();
      ctx.arc(centralNode.x, centralNode.y, centralNode.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbital nodes (back to front based on z-order)
      nodePositions
        .slice()
        .sort((a, b) => a.z - b.z) // Sort by z-index (back to front)
        .forEach(node => {
          // Draw node glow
          const glowRadius = node.radius * 2.5;
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowRadius
          );
          
          gradient.addColorStop(0, hexToRgba(node.color, 0.8)); // Increased opacity
          gradient.addColorStop(1, hexToRgba(node.color, 0));
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius * 1.2, 0, Math.PI * 2); // Increased glow size
          ctx.fill();
          
          // Draw node
          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        });

      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Helper function to convert hex color to rgba
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

export default TextNeuralIcon;