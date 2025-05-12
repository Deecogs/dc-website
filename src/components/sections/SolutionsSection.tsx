// src/components/sections/SolutionsSection.tsx
"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SolutionsSection = () => {
  const swiperRef = useRef<any>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  
  // Solution types (non-clickable)
  const solutionTypes = [
    "Vision Tech",
    "LLMs",
    "Edge Computing",
    "Prediction Models",
    "Language Processing"
  ];
  
  // Combined solutions data without categorization
  const solutions = [
    {
      title: "Docurate",
      description: "Streamlining complex data and unstructured information into actionable insights for seamless data management and analysis.",
      image: "/image/llm-1.png",
      link: "/products/docurate",
      category: "Document Processing"
    },
    {
      title: "VisionTech",
      description: "Reforming visual data processing with our Vision Tech platform and delivering unparalleled image recognition and analysis.",
      image: "/image/llm-2.png",
      link: "/coming-soon",
      category: "Computer Vision"
    },
    {
      title: "Loupe",
      description: "Transform complex medical reports into easy-to-understand summaries with AI-powered scanning and multilingual support.",
      image: "/image/loupe-card.png", // Create an appropriate image
      link: "/products/loupe",
      category: "Healthcare"
    },
    {
      title: "Fusio",
      description: "Harnessing the Power of multimodal LLMs for advanced data processing, seamlessly integrating different data types.",
      image: "/image/llm-3.png",
      link: "/coming-soon",
      category: "Data Fusion"
    },
    {
      title: "Canse",
      subtitle: "(Cancer Prognostic Tool)",
      description: "Transforming oncology with AI-powered cancer prediction, enabling early detection, personalized treatment plans, and better outcomes.",
      image: "/image/llm-4.png",
      link: "/coming-soon",
      category: "Healthcare"
    },
    {
      title: "Notei",
      description: "Deciphering medical data processing with AI, ensuring accurate analysis, seamless integration, and enhanced clinical workflows.",
      image: "/image/llm-5.png",
      link: "/coming-soon",
      category: "Medical Notes"
    }
  ];

  // Simple, elegant animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="solutions" className="delivering-ai-solutions relative [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,160px)] bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Section heading */}
          <motion.span 
            className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000] inline-block"
            variants={itemVariants}
          >
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

          {/* Solution Types (non-clickable) */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={itemVariants}
          >
            {solutionTypes.map((type, index) => (
              <motion.div
                key={`type-${index}`}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {type}
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Slider */}
          <motion.div
            className="mt-6"
            variants={itemVariants}
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={1.1}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 2.5, spaceBetween: 40 },
                1280: { slidesPerView: 3, spaceBetween: 50 }
              }}
              modules={[Pagination, Navigation]}
              className="solutions-swiper !pb-20"
            >
              {solutions.map((solution, index) => (
              <SwiperSlide key={`solution-${index}`}>
              <motion.div
                className="slider-column relative rounded-xl overflow-hidden shadow-lg group h-[550px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                variants={itemVariants}
              >
                {/* Removed Link from wrapping the entire card */}
                <div className="h-full w-full">
                  <div className="h-[300px] w-full overflow-hidden">
                    <img
                      src={solution.image}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      alt={solution.title}
                    />
                    
                    {/* Category tag */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
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
                        {/* Better text visibility with fixed height and line clamp */}
                        <p className="text-[#E6E6E6] w-full text-base leading-relaxed line-clamp-4 overflow-hidden">
                          {solution.description}
                        </p>
                      </div>
                      
                      <div className="shrink-0 mt-3 self-end flex items-center justify-between w-full">
                        {/* Made "Click to explore" clickable */}
                        <Link 
                          href={solution.link}
                          className="text-[#CED4D7] text-xs opacity-80 hover:opacity-100 transition-opacity duration-300 hover:text-white"
                        >
                          Click to explore →
                        </Link>
                        
                        {/* Arrow button with animation restored - made clickable */}
                        <div className="relative">
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