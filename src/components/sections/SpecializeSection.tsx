// src/components/sections/SpecializeSection.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useAnimation, useInView } from "framer-motion";
import Button from "@/components/common/Button";

interface SpecializeSectionProps {
  onBookDemo: () => void;
}

const SpecializeSection = ({ onBookDemo }: SpecializeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  // Mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position into subtle parallax values
  const backgroundX = useTransform(mouseX, [-500, 500], [5, -5]);
  const backgroundY = useTransform(mouseY, [-500, 500], [5, -5]);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  // Floating particles animation
  const generateParticles = () => {
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            opacity: [
              Math.random() * 0.5 + 0.1,
              Math.random() * 0.5 + 0.3,
              Math.random() * 0.5 + 0.1,
            ],
            scale: [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.5 + 1,
              Math.random() * 0.5 + 0.5,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      );
    }
    
    return particles;
  };
  
  // Features data
  const features = [
    { title: "AI-Driven Solutions", description: "Leveraging advanced machine learning to solve complex business challenges" },
    { title: "Scalable Architecture", description: "Building systems that grow with your business needs" },
    { title: "Secure By Design", description: "Implementing robust security measures at every level" },
    { title: "Data-Powered Insights", description: "Transforming raw data into actionable business intelligence" }
  ];

  // Neural Network animation elements
  const generateNetworkLines = () => {
    const lines = [];
    const lineCount = 15;
    
    for (let i = 0; i < lineCount; i++) {
      lines.push(
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full"
          style={{
            height: Math.random() * 1 + 1,
            width: `${30 + Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            width: [`${30 + Math.random() * 40}%`, `${35 + Math.random() * 40}%`, `${30 + Math.random() * 40}%`],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      );
    }
    
    return lines;
  };

  // Neural Network nodes
  const generateNetworkNodes = () => {
    const nodes = [];
    const nodeCount = 20;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        <motion.div
          key={`node-${i}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      );
    }
    
    return nodes;
  };

  return (
    <section 
      ref={sectionRef}
      className="we-specialize-sec relative [padding-top:_clamp(29px,4vw,238px)] [padding-bottom:_clamp(28px,4vw,198px)] min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c1d] to-[#1a1a3a]">
        {/* Moving gradient background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(254, 102, 35, 0.4) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 70% 70%, rgba(13, 71, 161, 0.4) 0%, rgba(0, 0, 0, 0) 50%)",
            x: backgroundX,
            y: backgroundY
          }}
        />

        {/* Neural network animation */}
        <div className="absolute inset-0 overflow-hidden">
          {generateNetworkLines()}
          {generateNetworkNodes()}
          {generateParticles()}
        </div>

        {/* Pulsing gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <div className="flex flex-wrap flex-row">
          <div className="basis-full md:basis-8/12 lg:basis-6/12">
            {/* Content Box */}
            <motion.div
              className="bg-white/90 dark:bg-[#161627]/90 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.div
                className="pt-xl [padding-bottom:_clamp(20px,4vw,62px)] [padding-left:_clamp(20px,4vw,42px)] [padding-right:_clamp(20px,4vw,42px)]"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
              >
                {/* Badge */}
                <motion.span 
                  className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#FE6623", color: "#FFF" }}
                >
                  Who we are
                </motion.span>

                {/* Title */}
                <motion.div variants={itemVariants}>
                  <h2
                    className="[font-size:_clamp(26px,2vw,46px)] [padding-top:_clamp(8px,4vw,24px)] leading-[1.3] text-[#000] relative"
                  >
                    We specialize in{" "}
                    <motion.span 
                      className="heading-orange relative inline-block"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      Cutting-Edge
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[3px] bg-[#FE6623]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </motion.span>
                  </h2>

                  <h2
                    className="[font-size:_clamp(26px,2vw,46px)] [padding-bottom:_clamp(8px,4vw,31px)] leading-[1.3] text-[#000]"
                  >
                    <motion.span 
                      className="heading-orange"
                      whileHover={{ scale: 1.02 }}
                    >
                      AI Solutions
                    </motion.span>
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="[font-size:_clamp(8px,2vw,22px)] [margin-bottom:_clamp(21px,2vw,40px)] font-normal leading-normal text-gray-800"
                  variants={itemVariants}
                >
                  A forward-thinking AI company dedicated to delivering intelligent, scalable solutions. Driving innovation and progress across diverse industries with expertise and impact.
                </motion.p>
                
                {/* Features Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 [margin-bottom:_clamp(21px,2vw,40px)]"
                  variants={containerVariants}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FE6623]/10 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[#000000] font-medium mb-1">{feature.title}</h3>
                        <p className="text-gray-800 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Button */}
                <motion.div variants={itemVariants}>
                  <Button 
                    onClick={onBookDemo}
                    text="Book a Demo"
                    variant="primary"
                    size="lg"
                    icon={
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated 3D brain visualization for larger screens */}
          <div className="hidden lg:block basis-6/12">
            <motion.div 
              className="flex justify-center items-center h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Brain visualization container */}
              <div className="relative w-[400px] h-[400px]">
                {/* Central glowing orb */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-primary/40 to-blue-500/40 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Orbital rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={`ring-${ring}`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
                    style={{
                      width: `${ring * 100}px`,
                      height: `${ring * 100}px`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20 + ring * 5,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  />
                ))}
                
                {/* Orbital nodes on rings */}
                {[...Array(24)].map((_, i) => {
                  const ring = 1 + Math.floor(i / 8);
                  const angle = (i % 8) * (360 / 8);
                  const radius = ring * 50;
                  const x = radius * Math.cos(angle * Math.PI / 180);
                  const y = radius * Math.sin(angle * Math.PI / 180);
                  
                  return (
                    <motion.div
                      key={`node-orbital-${i}`}
                      className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-white/50"
                      style={{
                        x: x - 6,
                        y: y - 6,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                        boxShadow: [
                          "0 0 0 rgba(254, 102, 35, 0.4)",
                          "0 0 10px rgba(254, 102, 35, 0.7)",
                          "0 0 0 rgba(254, 102, 35, 0.4)",
                        ]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  );
                })}
                
                {/* Connection lines between nodes */}
                {[...Array(12)].map((_, i) => {
                  const startNode = Math.floor(Math.random() * 24);
                  const endNode = Math.floor(Math.random() * 24);
                  
                  return (
                    <motion.div
                      key={`connection-${i}`}
                      className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/20"
                      animate={{
                        opacity: [0, 0.7, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 4
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;