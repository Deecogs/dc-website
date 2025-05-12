// src/components/sections/SolutionsSection.tsx
"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, useAnimation, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const SolutionsSection = () => {
  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  // Updated solution types with icons
  const solutionTypes = [
    { name: "Vision Tech", icon: "👁️" },
    { name: "LLMs", icon: "🧠" },
    { name: "Edge Computing", icon: "⚡" },
    { name: "Prediction Models", icon: "📊" },
    { name: "Language Processing", icon: "💬" }
  ];
  
  // Enhanced solutions data with more detailed descriptions
  const solutions = [
    {
      title: "Docurate",
      description: "Our flagship document intelligence platform transforms unstructured data into structured insights, enabling businesses to extract actionable information from documents with unprecedented accuracy.",
      image: "/image/llm-1.png",
      link: "/products/docurate",
      category: "Document Processing",
      techTags: ["NLP", "OCR", "Deep Learning"]
    },
    {
      title: "VisionTech",
      description: "Advanced computer vision platform that processes and analyzes visual data with state-of-the-art accuracy, enabling real-time object detection, recognition, and intelligent visual analytics.",
      image: "/image/llm-2.png",
      link: "/coming-soon",
      category: "Computer Vision",
      techTags: ["CNN", "Object Detection", "Image Analysis"]
    },
    {
      title: "Fusio",
      description: "Revolutionary multimodal platform that seamlessly integrates text, image, and audio data, powered by advanced LLMs to deliver comprehensive analysis and insights across data types.",
      image: "/image/llm-3.png",
      link: "/coming-soon",
      category: "Data Fusion",
      techTags: ["Multimodal AI", "Integration", "LLMs"]
    },
    {
      title: "Canse",
      subtitle: "(Cancer Prognostic Tool)",
      description: "AI-powered oncology solution that analyzes medical imaging and patient data to enable early cancer detection, personalized treatment recommendations, and improved clinical outcomes.",
      image: "/image/llm-4.png",
      link: "/coming-soon",
      category: "Healthcare",
      techTags: ["Medical AI", "Predictive Analytics", "Imaging"]
    },
    {
      title: "Notei",
      description: "Intelligent medical note platform that uses AI to analyze, extract, and organize clinical information, dramatically improving the accuracy and efficiency of medical documentation workflows.",
      image: "/image/llm-5.png",
      link: "/coming-soon",
      category: "Medical Notes",
      techTags: ["Healthcare NLP", "FHIR", "Clinical AI"]
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="solutions" 
      ref={sectionRef}
      className="delivering-ai-solutions relative [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,160px)] bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section heading */}
          <motion.span 
            className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block"
            variants={scaleVariants}
          >
            <span className="mr-2">✨</span>
            Solutions
          </motion.span>
          
          <div className="flex [margin-bottom:_clamp(15px,2vw,38px)] [margin-top:_clamp(12px,2vw,53px)] flex-row flex-wrap items-start">
            <motion.div 
              className="flex-grow"
              variants={itemVariants}
            >
              <h2 className="[font-size:_clamp(15px,2vw,46px)] text-[#000000CC] leading-[1.3] font-normal">
                <span className="block">
                  Delivering AI solutions that are resilient
                </span>
                and{" "}
                <span className="heading-orange [font-size:_clamp(17px,2vw,48px)]">
                  Uncompromising
                </span>{" "}
                in achieving Excellence.
              </h2>
              
              <p className="text-[#0000007D] [font-size:_clamp(8px,2vw,20px)] mt-4 max-w-2xl">
                Cutting-edge AI platforms designed to transform industries with reliable, 
                accurate, and scalable intelligence.
              </p>
            </motion.div>
            
            <motion.div
              className="flex-shrink-0 hidden md:block"
              variants={itemVariants}
            >
              <Link
                href="/products"
                className="text-primary text-[18px] lg:text-[22px] flex items-center font-normal hover:translate-x-1 transition-transform duration-300"
              >
                <span>Explore All</span>
                <svg
                  className="ml-2 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 12L6.5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 7.5L17.5 12L13 16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Technology Tags */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={itemVariants}
          >
            {solutionTypes.map((type, index) => (
              <motion.div
                key={`type-${index}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700 hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Slider */}
          <motion.div variants={scaleVariants} className="mt-6">
            <Swiper
              ref={swiperRef}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={false}
              slidesPerView={1.1}
              spaceBetween={15}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 2.5, spaceBetween: 40 },
                1280: { slidesPerView: 3, spaceBetween: 50 }
              }}
              modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
              className="solutions-swiper !pb-20"
            >
              {solutions.map((solution, index) => (
                <SwiperSlide key={`solution-${index}`}>
                  <motion.div
                    className="slider-column relative rounded-xl overflow-hidden shadow-lg group h-[550px] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                    variants={itemVariants}
                  >
                    <div className="h-[300px] w-full overflow-hidden relative">
                      <img
                        src={solution.image}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        alt={solution.title}
                      />
                      
                      {/* Category tag */}
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        {solution.category}
                      </div>
                    </div>
                    
                    <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                      <div className="bg-gradient-to-t from-[#1A1D24DD] to-[#292C3380] backdrop-blur-md rounded-[16px] h-[250px] lg:py-[22px] p-[15px] lg:px-[28px] flex flex-col transition-all duration-300 group-hover:bg-[#292C33CC]">
                        <div className="grow">
                          <h3 className="text-white text-2xl font-bold flex flex-wrap items-center mb-3">
                            {solution.title}
                            {solution.subtitle && (
                              <span className="inline-block ml-2 text-[#CED4D7] font-normal text-base">
                                {solution.subtitle}
                              </span>
                            )}
                          </h3>
                          
                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {solution.techTags?.map((tag, i) => (
                              <span key={i} className="inline-block text-xs px-2 py-1 bg-white/10 text-gray-200 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-[#E6E6E6] w-full text-base leading-relaxed line-clamp-3">
                            {solution.description}
                          </p>
                        </div>
                        
                        <div className="mt-3 self-end flex items-center justify-between w-full">
                          <Link 
                            href={solution.link}
                            className="text-[#CED4D7] text-sm hover:text-white transition-colors duration-300"
                          >
                            Learn more <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                          </Link>
                          
                          <Link href={solution.link}>
                            <motion.div 
                              className="bg-[#FE6623] text-white p-3 rounded-full flex items-center justify-center w-12 h-12 transition-all duration-300"
                              whileHover={{ 
                                y: -5,
                                boxShadow: "0 10px 15px -3px rgba(254, 102, 35, 0.4), 0 4px 6px -2px rgba(254, 102, 35, 0.2)"
                              }}
                            >
                              <svg 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none"
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                              </svg>
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Mobile "View All" button */}
          <div className="text-center mt-[30px] lg:mt-[64px] md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center text-primary font-medium bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>Explore All Solutions</span>
              <svg
                className="ml-2 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 12L6.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7.5L17.5 12L13 16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;