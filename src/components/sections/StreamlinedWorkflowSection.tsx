// src/components/sections/StreamlinedWorkflowSection.tsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";

const StreamlinedWorkflowSection = () => {
  // References for each step section
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  
  // Track which step is in view
  const [activeStep, setActiveStep] = useState(1);
  const [allStepsViewed, setAllStepsViewed] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Animation controls for each step
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  
  // Check if each step is in view with higher threshold to ensure full visibility
  const isStep1InView = useInView(step1Ref, { amount: 0.9 });
  const isStep2InView = useInView(step2Ref, { amount: 0.9 });
  const isStep3InView = useInView(step3Ref, { amount: 0.9 });
  const isStep4InView = useInView(step4Ref, { amount: 0.9 });
  
  // Initialize step data
  const steps = [
    {
      number: 1,
      title: "Create New Project",
      image: "/image/products/docurate-step1.png",
      description: "Start by creating a new project and defining your document processing needs.",
      points: [
        "Add project name and select document type",
        "Upload documents – supports both single and bulk uploads",
        "Assign validators to the project"
      ],
      controls: controls1,
      ref: step1Ref
    },
    {
      number: 2,
      title: "Access Project Dashboard",
      image: "/image/products/docurate-step2.png",
      description: "A centralized dashboard provides a complete overview of all projects and documents with real-time status updates.",
      points: [
        "Monitor project progress and document status",
        "Track validation accuracy and AI performance",
        "Review documents requiring manual attention"
      ],
      controls: controls2,
      ref: step2Ref
    },
    {
      number: 3,
      title: "Preview Documents",
      image: "/image/products/docurate-step3.png",
      description: "Review processed documents with extracted data and validation status.",
      points: [
        "See document details including type, progress, upload date, and validation date",
        "Check assignee information and AI accuracy percentage",
        "Review auto-action validation results and make adjustment decisions"
      ],
      controls: controls3,
      ref: step3Ref
    },
    {
      number: 4,
      title: "Edit Documents",
      image: "/image/products/docurate-step4.png",
      description: "Make corrections and validate document data with an intuitive editing interface.",
      points: [
        "View project details and verification status",
        "Edit and correct OCR data with the interactive canvas",
        "Access other documents in the same project for cross-reference"
      ],
      controls: controls4,
      ref: step4Ref
    }
  ];
  
  // Handle mouse wheel scrolling within the section
  useEffect(() => {
    const handleWheel = (e) => {
      if (!allStepsViewed && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        
        // Check if section is in view and not currently in a scroll animation
        if (rect.top <= 0 && rect.bottom >= window.innerHeight && !isScrolling) {
          e.preventDefault();
          
          // Set scrolling state to prevent multiple rapid scrolls
          setIsScrolling(true);
          
          if (e.deltaY > 0) {
            // Scrolling down
            if (activeStep < 4) {
              setActiveStep(prev => Math.min(prev + 1, 4));
            } else {
              // When at the last step, mark all steps as viewed
              setAllStepsViewed(true);
            }
          } else if (e.deltaY < 0) {
            // Scrolling up
            setActiveStep(prev => Math.max(prev - 1, 1));
          }
          
          // Reset scrolling state after animation completes
          setTimeout(() => {
            setIsScrolling(false);
          }, 600); // Slightly longer than animation duration
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeStep, allStepsViewed, isScrolling]);

  // Update active step and animations based on active step state
  useEffect(() => {
    // Reset animations
    controls1.start("hidden");
    controls2.start("hidden");
    controls3.start("hidden");
    controls4.start("hidden");
    
    // Set appropriate animations based on active step
    switch (activeStep) {
      case 1:
        controls1.start("visible");
        break;
      case 2:
        controls1.start("completed");
        controls2.start("visible");
        break;
      case 3:
        controls1.start("completed");
        controls2.start("completed");
        controls3.start("visible");
        break;
      case 4:
        controls1.start("completed");
        controls2.start("completed");
        controls3.start("completed");
        controls4.start("visible");
        break;
      default:
        break;
    }
  }, [activeStep, controls1, controls2, controls3, controls4]);
  
  // Implement keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!allStepsViewed && sectionRef.current && !isScrolling) {
        const rect = sectionRef.current.getBoundingClientRect();
        
        // Check if section is in view
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            setIsScrolling(true);
            if (activeStep < 4) {
              setActiveStep(prev => Math.min(prev + 1, 4));
            } else {
              setAllStepsViewed(true);
            }
            e.preventDefault();
            setTimeout(() => setIsScrolling(false), 600);
          } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            setIsScrolling(true);
            setActiveStep(prev => Math.max(prev - 1, 1));
            e.preventDefault();
            setTimeout(() => setIsScrolling(false), 600);
          }
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStep, allStepsViewed, isScrolling]);

  // Detect scroll into view to fix section
  useEffect(() => {
    const checkInView = () => {
      if (sectionRef.current && !allStepsViewed) {
        const rect = sectionRef.current.getBoundingClientRect();
        
        // If top of section comes into view, lock it in place
        if (rect.top <= 1 && !isScrolling) {
          window.scrollTo({
            top: window.scrollY + rect.top,
            behavior: 'smooth'
          });
        }
      }
    };
    
    window.addEventListener('scroll', checkInView);
    
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, [allStepsViewed, isScrolling]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  const stepVariants = {
    hidden: { 
      opacity: 0.5,
      y: 20,
      height: "auto",
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      height: "auto",
      scale: 1,
      transition: { duration: 0.5 }
    },
    completed: {
      opacity: 0.7,
      y: -10,
      height: "auto",
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };
  
  const titleVariants = {
    hidden: { 
      fontSize: "1.25rem",
      opacity: 0.7,
      y: 0
    },
    visible: { 
      fontSize: "1.75rem",
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    completed: {
      fontSize: "1.15rem",
      opacity: 0.6,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      display: "none"
    },
    visible: { 
      opacity: 1,
      height: "auto",
      display: "block",
      transition: { duration: 0.5, delay: 0.2 }
    },
    completed: {
      opacity: 0,
      height: 0,
      display: "none",
      transition: { duration: 0.3 }
    }
  };
  
  const imageVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    completed: {
      opacity: 0,
      x: -100,
      scale: 0.9,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      id="streamlined-workflow"
      style={{
        height: allStepsViewed ? 'auto' : '100vh',
        minHeight: allStepsViewed ? '100vh' : '100vh',
        position: allStepsViewed ? 'relative' : 'sticky',
        top: 0,
        zIndex: allStepsViewed ? 1 : 10
      }}
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-4 h-full flex flex-col"
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="heading-orange">Streamlined</span> Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a seamless document processing journey from upload to validation.
          </p>
        </motion.div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mb-8">
          {[1, 2, 3, 4].map(step => (
            <button 
              key={step}
              onClick={() => {
                if (!isScrolling) {
                  setIsScrolling(true);
                  setActiveStep(step);
                  setTimeout(() => setIsScrolling(false), 600);
                }
              }}
              className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                step === activeStep 
                  ? 'bg-[#FE6623] w-10' 
                  : step < activeStep 
                    ? 'bg-[#FE6623]/50' 
                    : 'bg-gray-300'
              }`}
              aria-label={`Go to step ${step}`}
            />
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-10 gap-8 flex-grow"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left side - Step descriptions (30%) */}
          <div className="lg:col-span-3 space-y-6 max-h-[60vh] overflow-y-auto pr-4">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                ref={step.ref}
                className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 border border-gray-200 ${activeStep === step.number ? 'border-[#FE6623]' : ''}`}
                variants={stepVariants}
                initial="hidden"
                animate={step.controls}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${activeStep === step.number ? 'bg-[#FE6623]' : 'bg-gray-400'}`}>
                    {step.number}
                  </div>
                  <motion.h3 
                    className="font-bold text-gray-800 transform-gpu"
                    variants={titleVariants}
                  >
                    {step.title}
                  </motion.h3>
                </div>
                
                <motion.div 
                  className="mt-4 space-y-4"
                  variants={contentVariants}
                >
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-[#FE6623] mt-1 mr-2 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Right side - Images (70%) */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            {steps.map((step) => (
              <motion.div 
                key={step.number}
                className="absolute inset-0"
                variants={imageVariants}
                initial="hidden"
                animate={step.controls}
              >
                <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden h-full">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto rounded-lg"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                  
                  <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <span className="font-medium text-[#FE6623]">Step {step.number}: {step.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Navigation arrows */}
        <div className="flex justify-between mt-8">
          <button 
            onClick={() => {
              if (!isScrolling && activeStep > 1) {
                setIsScrolling(true);
                setActiveStep(prev => Math.max(prev - 1, 1));
                setTimeout(() => setIsScrolling(false), 600);
              }
            }}
            className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${
              activeStep === 1 || isScrolling ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={activeStep === 1 || isScrolling}
            aria-label="Previous step"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-center text-gray-500">
            <span className="text-[#FE6623] font-bold">{activeStep}</span> / 4
          </div>
          
          <button 
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                if (activeStep < 4) {
                  setActiveStep(prev => prev + 1);
                } else {
                  setAllStepsViewed(true);
                }
                setTimeout(() => setIsScrolling(false), 600);
              }
            }}
            className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${
              isScrolling ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isScrolling}
            aria-label={activeStep < 4 ? "Next step" : "Complete workflow"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Instructions for scrolling */}
        {/* <div className="text-center text-gray-500 mt-4 text-sm">
          <p>Use mouse wheel or arrow keys to navigate steps</p>
        </div> */}
        
        {/* <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="bg-[#FE6623] text-white py-3 px-8 rounded-full font-medium hover:bg-[#FE6623]/90 transition-all duration-300 hover:shadow-lg">
            Book a Demo to See It in Action
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default StreamlinedWorkflowSection;