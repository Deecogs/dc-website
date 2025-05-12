"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/utils/theme";
import Button from "@/components/common/Button";
import AnimatedCard from "@/components/common/AnimatedCard";
import ContactModal from "@/components/common/ContactModal";

const LoupePage = () => {
  const controls = useAnimation();
  const [openModal, setOpenModal] = useState(false);
  const featuresRef = useRef(null);
  
  useEffect(() => {
    controls.start({ 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    });
  }, [controls]);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const reportTypes = [
    "Mammogram",
    "Histopathology",
    "Blood Test Report",
    "CT Scan",
    "Prescription",
    "MRI",
    "Ultrasound",
    "X-Ray"
  ];

  const appFeatures = [
    {
      icon: "🔍",
      title: "AI-Powered Analysis",
      description: "Advanced language models extract key details from complex medical reports with high accuracy."
    },
    {
      icon: "🌐",
      title: "Bilingual Support",
      description: "Provides summaries in English and Hindi languages for broader accessibility."
    },
    {
      icon: "📱",
      title: "Mobility & Convenience",
      description: "Scan reports anywhere with your smartphone camera for instant understanding."
    },
    {
      icon: "🔄",
      title: "Seamless Sharing",
      description: "Easily share digital summaries with family members or healthcare providers."
    },
    {
      icon: "♿",
      title: "Accessibility First",
      description: "WCAG-compliant design with screen reader support and adjustable text features."
    },
    {
      icon: "🔒",
      title: "Secure Processing",
      description: "End-to-end encryption ensures your sensitive medical data remains private."
    }
  ];

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Redesigned to match the provided screenshot */}
        <section className="bg-[#0B0C1B] text-white min-h-screen flex items-center relative overflow-hidden">
          <div className="container max-w-[90rem] mx-auto px-4 py-20 md:py-28 lg:py-20 relative z-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Left column - Text content */}
              <div className="md:col-span-5 z-10">
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  LOUPE
                </motion.h1>
                
                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Scan and summarize your medical reports using AI, delivering easy-to-read results with secure multilingual support for better patient clarity and communication.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Button 
                    text="Download the App"
                    variant="primary"
                    size="lg"
                    className="shadow-primary"
                  />
                  
                  <Button 
                    text="Know More"
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    onClick={scrollToFeatures}
                  />
                </motion.div>
                
                <motion.div 
                  className="flex items-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <span className="text-gray-300 mr-3">+100 Active Users</span>
                  <div className="flex -space-x-3">
                    <img className="w-8 h-8 border-2 border-white rounded-full" src="/image/client-1.png" alt="User" />
                    <img className="w-8 h-8 border-2 border-white rounded-full" src="/image/client-2.png" alt="User" />
                    <img className="w-8 h-8 border-2 border-white rounded-full" src="/image/client-4.png" alt="User" />
                  </div>
                </motion.div>
              </div>
              
              {/* Right column - Phone with scanning animation */}
              <div className="md:col-span-7 z-10">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {/* Phone device */}
                  <motion.div
                    className="relative z-20 mx-auto"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <img 
                      src="/image/loupe-device-mockup.png" 
                      alt="Loupe App Interface" 
                      className="w-full max-w-2xl mx-auto"
                    />
                    
                    {/* Scanning interface overlay */}
                    <motion.div 
                      className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center"
                      animate={{ 
                        y: [0, -20, 0],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    >
                      <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                      <span className="text-white text-sm">Scan your report...</span>
                    </motion.div>
                    
                    {/* Document animation */}
                    <motion.div
                      className="absolute top-[40%] left-1/2 -translate-x-1/2 z-10 flex justify-center"
                    >
                      <motion.div
                        className="w-20 h-28 bg-white rounded-md flex items-center justify-center shadow-lg mr-8 z-20"
                        animate={{ 
                          rotateY: [0, 180, 360],
                          x: [0, -60, -30],
                          opacity: [1, 0.8, 0.6],
                          scale: [1, 0.9, 0.8]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      >
                        <div className="w-14 h-4 bg-gray-300 mb-1"></div>
                        <div className="w-14 h-1 bg-gray-300 mb-1"></div>
                        <div className="w-14 h-1 bg-gray-300"></div>
                      </motion.div>
                      
                      <motion.div
                        className="w-20 h-28 bg-white rounded-md flex items-center justify-center shadow-lg z-10"
                        animate={{ 
                          rotateY: [0, 180, 360],
                          x: [0, 60, 30],
                          opacity: [0.6, 0.8, 1],
                          scale: [0.8, 0.9, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      >
                        <div className="w-14 h-4 bg-gray-300 mb-1"></div>
                        <div className="w-14 h-1 bg-gray-300 mb-1"></div>
                        <div className="w-14 h-1 bg-gray-300"></div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Scanning animation */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-10 bg-primary/20 rounded-full"
                      animate={{ 
                        y: [-50, 50, -50],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    >
                      <motion.div
                        className="h-full w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
                        animate={{ 
                          x: [-100, 100, -100],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Highlight circle */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full z-0"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    style={{ 
                      background: 'radial-gradient(circle, rgba(254,102,35,0.3) 0%, rgba(254,102,35,0) 70%)'
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Technology tags */}
            <motion.div 
              className="flex flex-wrap justify-between mt-16 pt-6 gap-4 overflow-x-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {["LLMs", "NLP", "Edge Computing", "Machine Learning", "Computer Vision"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="text-gray-400 text-sm md:text-base"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          {/* Background gradient effects */}
          <motion.div 
            className="absolute top-0 right-0 w-full h-full opacity-50 z-0"
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            style={{
              background: 'radial-gradient(circle at 70% 50%, rgba(254, 102, 35, 0.15) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 30% 70%, rgba(0, 0, 100, 0.1) 0%, rgba(0, 0, 0, 0) 50%)'
            }}
          />
          
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat'
            }}
          />
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                About the Product
              </span>
              <h2 className="text-3xl md:text-4xl font-normal mb-6">
                <span className="heading-orange">Effortless</span> Medical Report Summarizer
              </h2>
              <p className="text-gray-600 text-lg">
                Loupe is an AI-powered mobile app that scans radiology reports and delivers clear, bilingual summaries—making medical results easy to understand for patients and caregivers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-medium mb-4">Start Summarizing Today!</h3>
                <p className="text-gray-600 mb-6">
                  Transform complex medical reports into easy-to-understand summaries with just a tap. Download Loupe now and take control of your healthcare information.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="#" className="inline-block">
                    <img src="/image/app-store-badge.png" alt="Download on App Store" className="h-12" />
                  </Link>
                  <Link href="#" className="inline-block">
                    <img src="/image/google-play-badge.png" alt="Get it on Google Play" className="h-12" />
                  </Link>
                </div>
                
                <p className="text-gray-500 text-sm">
                  Or scan the QR code with your mobile device
                </p>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-square max-w-md mx-auto">
                  <img 
                    src="/image/qr-code-app.png" 
                    alt="QR Code to download Loupe" 
                    className="w-full"
                  />
                  <p className="text-center text-gray-500 mt-2">Scan to download the App</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key <span className="heading-orange">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Loupe transforms how you understand medical reports with powerful AI features designed for accessibility and ease of use.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appFeatures.map((feature, index) => (
                <AnimatedCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={<div className="text-3xl mb-2">{feature.icon}</div>}
                  delay={index * 0.1}
                  hoverEffect="glow"
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Document Processing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                  Sequential Document Processing for Medical Summaries
                </h2>
                <p className="text-gray-600 mb-6">
                  Struggling with medical reports? Easily extract key details, generate clear summaries, and simplify complex medical notes, making it faster and easier to understand and analyze medical information with accuracy and efficiency.
                </p>
                <Link href="#">
                  <span className="text-primary inline-flex items-center hover:underline">
                    Know More →
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <img 
                    src="/image/medical-scan-example.png" 
                    alt="Medical Scan Example" 
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile App Showcase */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 md:order-1 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/image/mobile-app-showcase.png" 
                  alt="Loupe Mobile App" 
                  className="w-full max-w-md mx-auto"
                />
              </motion.div>
              
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-gray-500 mb-2 block">Revolutionizing Medical Scanning with Instant AI-Powered Summaries</span>
                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                  Get them <span className="text-primary">whenever and Wherever</span> you need them!
                </h2>
                <p className="text-gray-600 mb-8">
                  Access your medical report summaries on-the-go with our intuitive mobile application. Simply scan, process, and understand your reports in seconds.
                </p>
                <Button 
                  text="Download the App"
                  variant="primary"
                  size="lg"
                  className="shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supported Report Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                Versatility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Works for wide range of <span className="heading-orange">medical test reports</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Loupe can process and summarize a variety of medical reports, giving you comprehensive coverage for all your healthcare needs.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {reportTypes.map((type, index) => (
                <motion.div
                  key={type}
                  className="bg-white px-6 py-3 rounded-full shadow-sm text-gray-800 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  {type}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-[#FFF5F0] p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">Bilingual Summary Support</h3>
                <p className="text-gray-700 mb-4">
                  Provides content summaries in English & Hindi languages for broader accessibility and user convenience.
                </p>
                <img 
                  src="/image/bilingual-support.png" 
                  alt="Bilingual Support" 
                  className="w-full rounded-lg"
                />
              </motion.div>
              
              <motion.div
                className="bg-[#F5F5F7] p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Seamless Sharing</h3>
                <p className="text-gray-700 mb-4">
                  Share reports and summaries instantly via WhatsApp, email, download, or print for better coordination with healthcare providers.
                </p>
                <img 
                  src="/image/seamless-sharing.png" 
                  alt="Seamless Sharing" 
                  className="w-full rounded-lg"
                />
              </motion.div>
              
              <motion.div
                className="bg-[#FFF5F0] p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">Accessibility First</h3>
                <p className="text-gray-700 mb-4">
                  WCAG-compliant design with screen reader support, keyboard navigation, and adjustable text for inclusive user experience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="text-primary font-bold mt-1">•</div>
                    <p>Screen reader compatibility</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-primary font-bold mt-1">•</div>
                    <p>Keyboard navigation support</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-primary font-bold mt-1">•</div>
                    <p>Adjustable text size and contrast</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-primary font-bold mt-1">•</div>
                    <p>Voice guidance features</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block mb-4">
                User Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our <span className="heading-orange">Users Say</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src="/image/client-1.png" 
                      alt="Dr. Mehta" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Anand Mehta</h3>
                    <p className="text-gray-600">Cardiologist</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Loupe has transformed how I communicate with patients. The ability to quickly generate simplified summaries of complex cardiac reports helps patients understand their conditions better. The bilingual support is especially valuable in our diverse patient population."
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src="/image/client-2.png" 
                      alt="Priya Sharma" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Priya Sharma</h3>
                    <p className="text-gray-600">Patient</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As someone who struggles with medical terminology, Loupe has been a game-changer. I was able to understand my diagnostic reports without constantly calling my doctor for clarification. The Hindi translation feature helped my elderly parents understand my condition too."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5F0] flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-normal">Become Our Next Partner</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Interested in transforming industries with cutting-edge AI solutions? Join our network of collaborators and innovators.
                </p>
                <Button 
                  text="Let's Talk"
                  variant="primary"
                  size="md"
                  onClick={() => setOpenModal(true)}
                />
              </motion.div>
              
              <motion.div
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5F0] flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-normal">Partner Success Stories</h3>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30 mb-6">
                  <svg className="absolute top-0 left-0 w-4 h-4 -ml-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "Partnering with DeeCogs has opened new horizons for our business. Their AI solutions have truly transformed our operations."
                  </p>
                  <p className="text-gray-700 font-medium mt-2">- Partner Company CEO</p>
                </div>
                <Link href="/testimonials" className="text-primary flex items-center hover:underline">
                  Read more success stories
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-[#FE6623]/10">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Simplify Medical Reports?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Download Loupe today and start understanding your medical reports with ease. Available on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="inline-block">
                    <img src="/image/app-store-badge.png" alt="Download on App Store" className="h-12" />
                  </Link>
                  <Link href="#" className="inline-block">
                    <img src="/image/google-play-badge.png" alt="Get it on Google Play" className="h-12" />
                  </Link>
                </div>
                <Button 
                  text="Contact Us"
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
    </Flowbite>
  );
};

export default LoupePage;