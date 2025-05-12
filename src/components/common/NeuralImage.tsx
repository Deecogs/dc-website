"use client";
import React, { useEffect, useRef } from "react";

// This component creates an animated version of the Intelligent.png image
// It maintains the same look and dimensions but adds subtle animations
const NeuralImage: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const imageLoaded = useRef<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions to match the original image dimensions
    canvas.width = 240; 
    canvas.height = 240;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load the original image first to get dimensions and for reference
    const img = new Image();
    imageRef.current = img;
    img.src = "/image/Intelligent.png";
    
    img.onload = () => {
      imageLoaded.current = true;
      // Canvas might need adjustment based on the actual image size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Start animation once image is loaded
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Neural network node data
    interface Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
      connections: number[];
    }

    // Define nodes based on the original image structure
    // These positions will be similar to the original image
    const nodes: Node[] = [
      // Center nodes (brain part)
      { x: 30, y: 30, radius: 3, color: "#FE6623", pulse: 0, pulseSpeed: 0.003, connections: [1, 2, 3] },
      { x: 20, y: 40, radius: 2, color: "#1c77cb", pulse: Math.PI/2, pulseSpeed: 0.002, connections: [0, 4] },
      { x: 40, y: 35, radius: 2.5, color: "#1c77cb", pulse: Math.PI, pulseSpeed: 0.0025, connections: [0, 5] },
      { x: 30, y: 45, radius: 2, color: "#1c77cb", pulse: Math.PI*1.5, pulseSpeed: 0.003, connections: [0, 6] },
      
      // Outer nodes (electronic parts)
      { x: 10, y: 50, radius: 1.5, color: "#FE6623", pulse: 0, pulseSpeed: 0.002, connections: [1] },
      { x: 50, y: 25, radius: 1.5, color: "#FE6623", pulse: Math.PI/3, pulseSpeed: 0.0025, connections: [2] },
      { x: 35, y: 55, radius: 1.5, color: "#FE6623", pulse: Math.PI*1.2, pulseSpeed: 0.003, connections: [3] }
    ];

    // Animation timing variables
    let lastTimestamp = 0;

    // Animation function
    function animate(timestamp: number) {
      if (!ctx || !imageLoaded.current || !imageRef.current) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate deltaTime for smooth animation
      const deltaTime = lastTimestamp ? timestamp - lastTimestamp : 16;
      lastTimestamp = timestamp;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the original image first as the base
      ctx.globalAlpha = 0.9; // Slightly transparent to blend with the animation
      ctx.drawImage(imageRef.current, 0, 0);
      ctx.globalAlpha = 1.0;

      // Update and draw connections
      nodes.forEach(node => {
        // Update pulse phase
        node.pulse += node.pulseSpeed * (deltaTime / 16);
        if (node.pulse > Math.PI * 2) node.pulse -= Math.PI * 2;

        // Draw connections to other nodes
        node.connections.forEach(targetIdx => {
          const targetNode = nodes[targetIdx];
          
          // Calculate pulse position (0-1 based on node pulse)
          const pulsePosition = (Math.sin(node.pulse) + 1) / 2;
          
          // Create gradient for connection
          const gradient = ctx.createLinearGradient(
            node.x, node.y, 
            targetNode.x, targetNode.y
          );
          
          // Set gradient colors
          gradient.addColorStop(0, `rgba(254, 102, 35, ${0.4 + pulsePosition * 0.3})`);
          gradient.addColorStop(1, `rgba(28, 119, 203, ${0.4 + pulsePosition * 0.3})`);
          
          // Draw connection line
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
          
          // Draw pulse dot moving along the connection if active
          if (pulsePosition > 0.3 && pulsePosition < 0.7) {
            const normalizedPulsePos = (pulsePosition - 0.3) / 0.4; // Convert 0.3-0.7 range to 0-1
            const pulseX = node.x + (targetNode.x - node.x) * normalizedPulsePos;
            const pulseY = node.y + (targetNode.y - node.y) * normalizedPulsePos;
            
            // Draw pulse glow
            const pulseGlow = ctx.createRadialGradient(
              pulseX, pulseY, 0,
              pulseX, pulseY, 4
            );
            pulseGlow.addColorStop(0, "rgba(254, 102, 35, 0.8)");
            pulseGlow.addColorStop(1, "rgba(254, 102, 35, 0)");
            
            ctx.fillStyle = pulseGlow;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw pulse core
            ctx.fillStyle = "#FE6623";
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });
      
      // Draw nodes on top
      nodes.forEach(node => {
        // Calculate pulse effect
        const pulse = 0.8 + 0.2 * Math.sin(node.pulse);
        
        // Draw node glow
        const glowRadius = node.radius * 2 * pulse;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        
        gradient.addColorStop(0, `rgba(${node.color === "#FE6623" ? "254, 102, 35" : "28, 119, 203"}, ${0.6 * pulse})`);
        gradient.addColorStop(1, `rgba(${node.color === "#FE6623" ? "254, 102, 35" : "28, 119, 203"}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      // Continue animation
      animationFrameId.current = requestAnimationFrame(animate);
    }

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
      style={{ width: "auto", height: "100%" }}
    />
  );
};

export default NeuralImage;