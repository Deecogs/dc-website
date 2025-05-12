"use client";
import React, { useEffect, useRef } from "react";

const WaveformAnimation: React.FC<{ className?: string }> = ({ className = "" }) => {
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

    // Create multiple wave layers
    const waves = [
      {
        color: COLORS.primary,
        amplitude: 20,
        frequency: 0.02,
        speed: 0.04,
        phase: 0,
        opacity: 0.7,
        thickness: 3,
      },
      {
        color: COLORS.secondary,
        amplitude: 15,
        frequency: 0.03,
        speed: 0.03,
        phase: Math.PI / 3,
        opacity: 0.6,
        thickness: 2.5,
      },
      {
        color: COLORS.white,
        amplitude: 8,
        frequency: 0.05,
        speed: 0.05,
        phase: Math.PI / 2,
        opacity: 0.5,
        thickness: 2,
      }
    ];

    // Data packets traveling along the waves
    const dataPackets = [];
    const packetCount = 8;
    
    for (let i = 0; i < packetCount; i++) {
      dataPackets.push({
        waveIndex: i % waves.length,
        position: Math.random() * canvas.width,
        speed: 1 + Math.random() * 1.5,
        size: 3 + Math.random() * 2,
        pulseFrequency: 0.1 + Math.random() * 0.2,
        startTime: Math.random() * 2000, // Stagger starting times
        active: false,
        lifetime: 0
      });
    }

    // Waveform analysis markers
    const analysisMarkers = [];
    const markerCount = 3;
    
    for (let i = 0; i < markerCount; i++) {
      const x = canvas.width * (0.3 + 0.4 * (i / (markerCount - 1)));
      analysisMarkers.push({
        x,
        radius: 5,
        glowRadius: 15,
        color: i === 0 ? COLORS.primary : (i === 1 ? COLORS.secondary : COLORS.white),
        pulseFrequency: 0.002 + Math.random() * 0.001
      });
    }

    // Vertical measurement lines
    const measurementLines = [
      {
        x: canvas.width * 0.2,
        color: COLORS.primary,
        opacity: 0.2
      },
      {
        x: canvas.width * 0.5,
        color: COLORS.secondary,
        opacity: 0.2
      },
      {
        x: canvas.width * 0.8, 
        color: COLORS.white,
        opacity: 0.2
      }
    ];

    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animation
      const delta = lastTimestamp ? timestamp - lastTimestamp : 16;
      lastTimestamp = timestamp;
      const normalizedDelta = delta / 16; // Normalize to 60fps
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw horizontal grid lines
      const gridLinesCount = 5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 1; i < gridLinesCount; i++) {
        const y = (canvas.height * i) / gridLinesCount;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw vertical measurement lines
      measurementLines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, canvas.height);
        ctx.strokeStyle = hexToRgba(line.color, line.opacity);
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Update and draw each wave
      waves.forEach((wave, index) => {
        // Update wave phase
        wave.phase += wave.speed * normalizedDelta;
        
        // Calculate wave points
        const points = [];
        const step = 2; // Pixel step for drawing the wave
        
        for (let x = 0; x <= canvas.width; x += step) {
          // Calculate combined sine waves for more complex appearance
          const y = canvas.height / 2 + 
                    wave.amplitude * Math.sin(x * wave.frequency + wave.phase) +
                    (wave.amplitude / 3) * Math.sin(x * wave.frequency * 2 + wave.phase * 1.5);
          
          points.push({ x, y });
        }
        
        // Draw wave
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        
        ctx.strokeStyle = hexToRgba(wave.color, wave.opacity);
        ctx.lineWidth = wave.thickness;
        ctx.stroke();
        
        // Draw wave glow
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        
        ctx.strokeStyle = hexToRgba(wave.color, wave.opacity * 0.3);
        ctx.lineWidth = wave.thickness * 3;
        ctx.stroke();
        
        // Store wave points for data packets
        wave.points = points;
      });
      
      // Update and draw data packets
      dataPackets.forEach(packet => {
        packet.lifetime += normalizedDelta;
        
        // Only activate packet after its start time
        if (packet.lifetime > packet.startTime) {
          packet.active = true;
        }
        
        if (packet.active) {
          // Update position
          packet.position += packet.speed * normalizedDelta;
          
          // Reset if off screen
          if (packet.position > canvas.width) {
            packet.position = 0;
            packet.waveIndex = (packet.waveIndex + 1) % waves.length;
          }
          
          // Get corresponding wave and calculate Y position
          const wave = waves[packet.waveIndex];
          if (!wave.points) return;
          
          // Find closest point in wave data
          const pointIndex = Math.floor(packet.position / 2);
          if (pointIndex >= wave.points.length) return;
          
          const wavePoint = wave.points[pointIndex];
          
          // Pulse size based on time
          const pulse = 0.6 + 0.4 * Math.sin(packet.lifetime * packet.pulseFrequency);
          const currentSize = packet.size * pulse;
          
          // Draw glow
          const glowSize = currentSize * 2.5;
          const gradient = ctx.createRadialGradient(
            wavePoint.x, wavePoint.y, 0,
            wavePoint.x, wavePoint.y, glowSize
          );
          
          gradient.addColorStop(0, hexToRgba(wave.color, 0.7 * pulse));
          gradient.addColorStop(1, hexToRgba(wave.color, 0));
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(wavePoint.x, wavePoint.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw packet
          ctx.fillStyle = wave.color;
          ctx.beginPath();
          ctx.arc(wavePoint.x, wavePoint.y, currentSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // Draw analysis markers
      analysisMarkers.forEach(marker => {
        // Calculate pulse based on time
        const pulse = 0.7 + 0.3 * Math.sin(timestamp * marker.pulseFrequency);
        const currentGlowRadius = marker.glowRadius * pulse;
        
        // Draw marker glow
        const gradient = ctx.createRadialGradient(
          marker.x, canvas.height / 2, 0,
          marker.x, canvas.height / 2, currentGlowRadius
        );
        
        gradient.addColorStop(0, hexToRgba(marker.color, 0.7 * pulse));
        gradient.addColorStop(1, hexToRgba(marker.color, 0));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(marker.x, canvas.height / 2, currentGlowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw measurement line from marker
        ctx.beginPath();
        ctx.moveTo(marker.x, canvas.height / 2 - 40);
        ctx.lineTo(marker.x, canvas.height / 2 + 40);
        ctx.strokeStyle = hexToRgba(marker.color, 0.3);
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Draw marker
        ctx.fillStyle = marker.color;
        ctx.beginPath();
        ctx.arc(marker.x, canvas.height / 2, marker.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
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

export default WaveformAnimation;