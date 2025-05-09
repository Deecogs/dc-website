"use client";
import React, { useEffect, useRef } from "react";

const CircuitBrainAnimation: React.FC<{ className?: string }> = ({ className = "" }) => {
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
    };

    // Circuit and Brain shape parameters
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const brainSize = Math.min(canvas.width, canvas.height) * 0.5;
    
    // Nodes representing brain regions and circuit connections
    const nodes: Node[] = [];
    const nodeCount = 12;
    
    // Create nodes that form a brain-like shape
    // Left hemisphere
    createHemisphereNodes(-1);
    // Right hemisphere
    createHemisphereNodes(1);
    
    // Create hemisphere nodes
    function createHemisphereNodes(side: number) {
      const hemisphereCenter = centerX + (side * brainSize * 0.2);
      const hemisphereNodeCount = nodeCount / 2;
      
      // Create nodes in the hemisphere
      for (let i = 0; i < hemisphereNodeCount; i++) {
        // Calculate position to form brain-like shape
        // More complex layout with lobes-like distribution
        let angle: number, radius: number;
        
        // Distribute in different "lobes"
        if (i < hemisphereNodeCount * 0.3) {
          // Frontal lobe
          angle = (Math.PI * 0.4) + (Math.PI * 0.4 * i / (hemisphereNodeCount * 0.3));
          radius = brainSize * (0.6 + Math.random() * 0.2);
        } else if (i < hemisphereNodeCount * 0.6) {
          // Parietal lobe
          angle = (Math.PI * 0.8) + (Math.PI * 0.4 * (i - hemisphereNodeCount * 0.3) / (hemisphereNodeCount * 0.3));
          radius = brainSize * (0.65 + Math.random() * 0.15);
        } else {
          // Temporal/Occipital lobes
          angle = (Math.PI * 1.2) + (Math.PI * 0.8 * (i - hemisphereNodeCount * 0.6) / (hemisphereNodeCount * 0.4));
          radius = brainSize * (0.5 + Math.random() * 0.2);
        }
        
        // Adjust angle based on hemisphere
        if (side < 0) angle = Math.PI - angle;
        
        const x = hemisphereCenter + Math.cos(angle) * radius * 0.8;
        const y = centerY + Math.sin(angle) * radius;
        
        // Assign colors to create brain regions
        let color: string;
        if (i % 3 === 0) color = COLORS.primary;
        else if (i % 3 === 1) color = COLORS.secondary;
        else color = COLORS.white;
        
        nodes.push({
          x,
          y,
          radius: 3 + Math.random() * 2,
          color,
          pulseOffset: Math.random() * Math.PI * 2,
          pulseSpeed: 0.005 + Math.random() * 0.01,
          connections: [],
          signalPosition: Math.random()
        });
      }
    }
    
    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      // Connect to nearest nodes and some cross-hemisphere connections
      const connectionsPerNode = 2 + Math.floor(Math.random() * 2);
      let connectedNodes: number[] = [];
      
      // First, add some predefined connections for structure
      if (i < nodes.length / 2) {
        // Left hemisphere node - connect to right hemisphere
        const rightPair = i + Math.floor(nodes.length / 2);
        if (rightPair < nodes.length) {
          connectedNodes.push(rightPair);
        }
      }
      
      // Add nearest neighbors within the same hemisphere
      const hemisphereStart = i < nodes.length / 2 ? 0 : Math.floor(nodes.length / 2);
      const hemisphereEnd = i < nodes.length / 2 ? Math.floor(nodes.length / 2) : nodes.length;
      
      const distances: {index: number, distance: number}[] = [];
      for (let j = hemisphereStart; j < hemisphereEnd; j++) {
        if (j !== i && !connectedNodes.includes(j)) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          distances.push({index: j, distance});
        }
      }
      
      // Sort by distance and add closest ones
      distances.sort((a, b) => a.distance - b.distance);
      for (let j = 0; j < Math.min(connectionsPerNode, distances.length); j++) {
        connectedNodes.push(distances[j].index);
      }
      
      // Add random cross-hemisphere connections
      if (Math.random() < 0.3 && connectedNodes.length < connectionsPerNode + 1) {
        const otherHemisphereStart = i < nodes.length / 2 ? Math.floor(nodes.length / 2) : 0;
        const otherHemisphereEnd = i < nodes.length / 2 ? nodes.length : Math.floor(nodes.length / 2);
        const randomIndex = otherHemisphereStart + Math.floor(Math.random() * (otherHemisphereEnd - otherHemisphereStart));
        if (!connectedNodes.includes(randomIndex) && randomIndex !== i) {
          connectedNodes.push(randomIndex);
        }
      }
      
      // Create connection objects
      nodes[i].connections = connectedNodes.map(nodeIndex => ({
        to: nodeIndex,
        signalPosition: Math.random(),
        signalSpeed: 0.005 + Math.random() * 0.01,
        active: true
      }));
    }
    
    // Circuit paths (abstract circuit-like elements)
    const circuits: Circuit[] = [];
    const circuitCount = 8;
    
    for (let i = 0; i < circuitCount; i++) {
      let startX, startY, endX, endY;
      
      // Create circuits at the edges to resemble a circuit board
      if (i < circuitCount / 2) {
        // Horizontal circuits
        startX = 0;
        endX = canvas.width;
        const y = canvas.height * (0.1 + 0.8 * i / (circuitCount / 2));
        startY = endY = y;
        
        // Add some bends
        const segments = 2 + Math.floor(Math.random() * 3);
        const path = [{x: startX, y: startY}];
        
        for (let j = 1; j < segments; j++) {
          const segX = startX + (endX - startX) * (j / segments);
          const offset = (Math.random() - 0.5) * canvas.height * 0.15;
          path.push({x: segX, y: startY + offset});
        }
        
        path.push({x: endX, y: endY});
        
        circuits.push({
          path,
          color: i % 2 === 0 ? COLORS.primary : COLORS.secondary,
          pulseSpeed: 0.003 + Math.random() * 0.003,
          pulsePosition: Math.random()
        });
      } else {
        // Vertical circuits
        startY = 0;
        endY = canvas.height;
        const x = canvas.width * (0.15 + 0.7 * (i - circuitCount / 2) / (circuitCount / 2));
        startX = endX = x;
        
        // Add some bends
        const segments = 2 + Math.floor(Math.random() * 3);
        const path = [{x: startX, y: startY}];
        
        for (let j = 1; j < segments; j++) {
          const segY = startY + (endY - startY) * (j / segments);
          const offset = (Math.random() - 0.5) * canvas.width * 0.15;
          path.push({x: startX + offset, y: segY});
        }
        
        path.push({x: endX, y: endY});
        
        circuits.push({
          path,
          color: i % 2 === 0 ? COLORS.secondary : COLORS.primary,
          pulseSpeed: 0.003 + Math.random() * 0.003,
          pulsePosition: Math.random()
        });
      }
    }
    
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animation
      const delta = lastTimestamp ? timestamp - lastTimestamp : 16;
      lastTimestamp = timestamp;
      const normalizedDelta = delta / 16; // Normalize to 60fps
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw circuit paths first (background)
      circuits.forEach(circuit => {
        // Update pulse position
        circuit.pulsePosition += circuit.pulseSpeed * normalizedDelta;
        if (circuit.pulsePosition > 1) circuit.pulsePosition = 0;
        
        // Draw circuit path
        ctx.beginPath();
        ctx.moveTo(circuit.path[0].x, circuit.path[0].y);
        
        for (let i = 1; i < circuit.path.length; i++) {
          ctx.lineTo(circuit.path[i].x, circuit.path[i].y);
        }
        
        ctx.strokeStyle = hexToRgba(circuit.color, 0.15);
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw pulse moving along the path
        const totalLength = getPathLength(circuit.path);
        const pulsePosition = circuit.pulsePosition * totalLength;
        let currentLength = 0;
        
        for (let i = 1; i < circuit.path.length; i++) {
          const segmentLength = getDistance(
            circuit.path[i-1].x, circuit.path[i-1].y,
            circuit.path[i].x, circuit.path[i].y
          );
          
          if (currentLength + segmentLength >= pulsePosition) {
            const segmentPosition = (pulsePosition - currentLength) / segmentLength;
            const pulseX = circuit.path[i-1].x + (circuit.path[i].x - circuit.path[i-1].x) * segmentPosition;
            const pulseY = circuit.path[i-1].y + (circuit.path[i].y - circuit.path[i-1].y) * segmentPosition;
            
            // Draw pulse
            drawPulse(pulseX, pulseY, circuit.color);
            break;
          }
          
          currentLength += segmentLength;
        }
      });
      
      // Draw connections between nodes
      nodes.forEach((node, nodeIndex) => {
        node.connections.forEach(connection => {
          const toNode = nodes[connection.to];
          
          // Update signal position
          connection.signalPosition += connection.signalSpeed * normalizedDelta;
          if (connection.signalPosition > 1) connection.signalPosition = 0;
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(toNode.x, toNode.y);
          
          // Create gradient for line
          const gradient = ctx.createLinearGradient(node.x, node.y, toNode.x, toNode.y);
          gradient.addColorStop(0, hexToRgba(node.color, 0.3));
          gradient.addColorStop(1, hexToRgba(toNode.color, 0.3));
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Draw signal pulse traveling along the connection
          if (connection.active) {
            const pulseX = node.x + (toNode.x - node.x) * connection.signalPosition;
            const pulseY = node.y + (toNode.y - node.y) * connection.signalPosition;
            
            drawPulse(pulseX, pulseY, node.color);
          }
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Calculate pulse for node size
        const pulse = 0.7 + 0.3 * Math.sin(timestamp * node.pulseSpeed + node.pulseOffset);
        const currentSize = node.radius * pulse;
        
        // Draw glow
        const glowRadius = currentSize * 3;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        
        gradient.addColorStop(0, hexToRgba(node.color, 0.7 * pulse));
        gradient.addColorStop(1, hexToRgba(node.color, 0));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Helper function to draw a pulse at a given position
    function drawPulse(x: number, y: number, color: string) {
      const pulseSize = 4;
      const pulseGradient = ctx.createRadialGradient(
        x, y, 0,
        x, y, pulseSize
      );
      
      pulseGradient.addColorStop(0, hexToRgba(color, 0.8));
      pulseGradient.addColorStop(1, hexToRgba(color, 0));
      
      ctx.fillStyle = pulseGradient;
      ctx.beginPath();
      ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw pulse core
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Helper function to calculate distance between two points
    function getDistance(x1: number, y1: number, x2: number, y2: number): number {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    
    // Helper function to calculate total path length
    function getPathLength(path: {x: number, y: number}[]): number {
      let length = 0;
      for (let i = 1; i < path.length; i++) {
        length += getDistance(path[i-1].x, path[i-1].y, path[i].x, path[i].y);
      }
      return length;
    }
    
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
interface Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  pulseOffset: number;
  pulseSpeed: number;
  connections: NodeConnection[];
  signalPosition: number;
}

interface NodeConnection {
  to: number;
  signalPosition: number;
  signalSpeed: number;
  active: boolean;
}

interface Circuit {
  path: {x: number, y: number}[];
  color: string;
  pulseSpeed: number;
  pulsePosition: number;
}

export default CircuitBrainAnimation;