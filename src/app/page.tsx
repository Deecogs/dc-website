"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Flowbite, Navbar } from "flowbite-react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Tabs } from "flowbite-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const customTheme = {
  navbar: {
    collapse: {
      base: "w-[344px] md:w-[532px] xl:w-full mobile-menu transition-transform fixed z-40 right-0 top-0 xl:static  xl:block xl:w-auto",

      hidden: {
        on: " translate-x-full ",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex    xl:hidden",
      icon: "text-white",
    },
  },

  modal: {
    content: {
      base: "relative h-screen w-full p-0 ",
      inner:
        "relative flex max-h-screen h-screen flex-col bg-image-modal rounded-[24px]",
    },
    header: {
      base: "flex  !bg-transparent lg:!px-[200px] items-start justify-start",
      close: {
        base: " inline-flex  items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
  },
};



// import required modules
import { Pagination } from "swiper/modules";

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };

  const [openModal, setOpenModal] = useState(false);


    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);
    const [isHoveredFour, setIsHoveredFour] = useState(false);
  
    

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
      <header className="absolute z-20 w-100 start-0 right-0 top-0">
          <div className="container max-w-[90rem]  mx-auto">
            <Navbar
              className="bg-transparent py-0 md:py-[15px] xl:py-[30px]"
              rounded
            >
              <Navbar.Brand as={Link} href="#">
                <img
                  src="/image/white-logo.png"
                  className="mr-3 h-[75px] md:h-[103px]"
                  alt="Flowbite React Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <ul className="flex mobile-ul flex-col p-4 xl:p-0 text-[16px] xl:text-[18px] w-full mt-0 border-t border-[#ffffffb3] bg-white xl:bg-black xl:bg-transparent items-end  space-y-[32px] xl:space-y-0   xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 ">
                  <li className="block toogle0btns xl:hidden">
                  <Navbar.Toggle />
                  </li>
                  
                  <li>
                    <Link
                      href="#"
                      className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal  tracking-[-0.54px]"
                      aria-current="page"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal  tracking-[-0.54px]"
                      aria-current="page"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal  tracking-[-0.54px]"
                      aria-current="page"
                    >
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal  tracking-[-0.54px]"
                      aria-current="page"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal  tracking-[-0.54px]"
                      aria-current="page"
                    >
                      Company
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white xl:hidden inline-block me-[10px]  font-normal text-[16px] bg-[#FE6623E3]  xl:text-[22px] border py-[8px] px-[36px] rounded-[24px] hover:bg-[#fe6623] border-[#fe6623]"
                    >
                      {" "}
                      Book a Demo
                    </Link>
                    <Link
                      href="#"
                      className="text-[#707070] xl:text-white  font-normal text-[16px]  xl:text-[22px] border py-[8px] px-[36px] rounded-[24px] hover:bg-[#fe6623] border-[#fe6623]"
                    >
                      {" "}
                      Login
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </header>
      </Flowbite>

      <main>
        <section className="hero-bg h-[390px]  md:h-screen overflow-hidden relative    ">
          <div className="container max-w-[90rem] relative z-10  mx-auto px-[10px] flex flex-col  justify-end h-full ">
            <div className="flex flex-row">
              <div className="basis-full ">
                <h1 className="   [font-size:_clamp(24px,4vw,80px)]  mb-[0] font-normal leading-[1.3] text-[#ffffffb3]">
                  Intelligent Systems
                </h1>
                <div className="[font-size:_clamp(24px,4vw,80px)] [margin-bottom:_clamp(17px,2vw,48px)]   font-normal leading-[1.3] text-[#ffffffb3]">
                  <div className="flex items-center flex-wrap flex-row ">
                    <div>
                      <img
                        src="/image/Intelligent.png"
                        className="max-w-full h-[26px] md:h-[40px] xl:h-[61px]"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="px-[15px] leading-[] xl:px-[24px]">
                        For
                      </span>
                    </div>

                    <div className="max-w-[220px] relative z-0 md:max-w-[400px] xl:max-w-[700px]">
                      <Slider {...settings}>
                        <div>
                          <span className="text-[#1c77cb] leading-[]">
                            Hyper Automation.
                          </span>
                        </div>
                        <div>
                          <span className="text-[#1c77cb] leading-[]">
                            Risk Mitigation
                          </span>
                        </div>
                        <div>
                          <span className="text-[#1c77cb] leading-[]">
                            Encoding
                          </span>
                        </div>
                        <div>
                          <span className="text-[#1c77cb] leading-[]">
                            Financial Analysis
                          </span>
                        </div>
                        <div>
                          <span className="text-[#1c77cb]">
                            Complex Analysis
                          </span>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap flex-col md:flex-row md:items-center">
                  <div>
                    <p className="max-w-[581px] mb-[18px] xl:mb-[0px] text-[#C3C3C5] [font-size:_clamp(8.5px,3vw,22px)] Helvetica-400 font-normal leading-[1.3]">
                      At DeeCogs Technologies we build AI-Driven solutions that
                      transform challenges into opportunities—step into the
                      future of innovation with us.
                    </p>
                  </div>
                  <div className="h-[92px] hidden md:block [margin-left:_clamp(30px,2vw,58px)] [margin-right:_clamp(30px,2vw,58px)] border border-[#ffffff]"></div>

                  <div className="flex-shrink-0">
                    <button
                      className="bg-[#fe6623e3]   hover:!bg-[#fe6623e3] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)]   [font-size:_clamp(8px,2vw,22px)] border border-[#fe6623] hover:bottom-[#fff] leading-[1] rounded-[32px]  inline-block text-[#ffffffe6]"
                      onClick={() => setOpenModal(true)}
                    >
                      Book a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-wrap justify-between [margin-top:_clamp(18px,2vw,97px)]   border-t border-[#ffffffb3] pb-[13px] lg:pt-[13px] lg:pb-[38px] gap-[5px] lg:gap-[10px]">
              <div>
                <span className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]">
                  LLMs
                </span>
              </div>
              <div>
                <span className="text-[#AAAAAD] helvetica-light font-thin  [font-size:_clamp(12px,2vw,24px)]">
                  NLP
                </span>
              </div>
              <div>
                <span className="text-[#AAAAAD] helvetica-light font-thin  [font-size:_clamp(12px,2vw,24px)]">
                  Edge Computing
                </span>
              </div>
              <div>
                <span className="text-[#AAAAAD] helvetica-light font-thin  [font-size:_clamp(12px,2vw,24px)]">
                  Machine Learning
                </span>
              </div>
              <div>
                <span className="text-[#AAAAAD] helvetica-light font-thin  [font-size:_clamp(12px,2vw,24px)]">
                  Computer Vision
                </span>
              </div>
            </div>
          </div>
          <img
            src="/image/hero-bg.png"
            className="w-full opacity-[25%] absolute z-0 left-0 right-0 top-0 bottom-0"
            alt=""
          />
        </section>
        <section className="our-collaborators-sec  [padding-top:_clamp(36px,4vw,136px)] [padding-bottom:_clamp(36px,4vw,136px)]">
          <div className=" container max-w-[90rem]  mx-auto px-[10px]">
            <div className="flex justify-center flex-row flex-wrap">
              <div className="basis-full lg:basis-8/12">
                <div className="text-center">
                  <h2 className=" leading-[1] [font-size:_clamp(26px,2vw,48px)] [margin-bottom:_clamp(15px,2vw,26px)] text-[#505050] font-normal">
                    Our Collaborators
                  </h2>
                  <p className="[font-size:_clamp(16px,2vw,22px)] [margin-bottom:_clamp(12px,2vw,55px)] text-[#000000bf] font-normal">
                    We bring together the best of our network to help your
                    business gain the competitive edge.
                  </p>
                </div>
                <div className="flex justify-center  flex-wrap flex-row">
                  <div className="basis-8/12">
                    <div className="flex justify-between items-center  flex-wrap flex-row">
                      <img
                        src="/image/our-collaborators-1.jpeg"
                        className="w-full [max-width:_clamp(41px,4vw,128px)] inline-block"
                        alt=""
                      />
                      <img
                        src="/image/our-collaborators-2.jpeg"
                        className="w-full inline-block [max-width:_clamp(48px,10vw,193px)]"
                        alt=""
                      />
                      <img
                        src="/image/our-collaborators-3.png"
                        className="w-full inline-block [max-width:_clamp(23px,4vw,72px)]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="we-specialize-sec bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/we-specialize.gif')] bg-no-repeat bg-cover bg-center [padding-top:_clamp(29px,4vw,238px)] [padding-bottom:_clamp(28px,4vw,198px)]">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
            <div className="flex flex-wrap flex-row">
              <div className="basis-full md:basis-8/12 lg:basis-6/12">
                <div className="bg-[#FFFFFFAD] border [padding-top:_clamp(20px,4vw,62px)] [padding-bottom:_clamp(20px,4vw,62px)] [padding-left:_clamp(20px,4vw,42px)] [padding-right:_clamp(20px,4vw,42px)]  rounded-[24px]">
                  <div>
                    <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                      Who we are
                    </span>
                    <h2 className="[font-size:_clamp(26px,2vw,46px)] [padding-top:_clamp(8px,4vw,24px)]  leading-[1.3] text-[#000]">
                      We specialize in{" "}
                      <span className="heading-orange ">Cutting-Edge </span>
                    </h2>
                    <h2 className="[font-size:_clamp(26px,2vw,46px)]   [padding-bottom:_clamp(8px,4vw,31px)] leading-[1.3] text-[#000]">
                      <span className="heading-orange ">AI Solutions</span>
                    </h2>
                  </div>
                  <p className="[font-size:_clamp(8px,2vw,22px)] [margin-bottom:_clamp(21px,2vw,57px)] Helvetica-400 font-normal leading-normal text-[#000000BF]">
                    A forward-thinking AI company dedicated to delivering
                    intelligent, scalable solutions. Driving innovation and
                    progress across diverse industries with expertise and
                    impact.
                  </p>
                  <a
                    className="bg-[#FE6623E3] leading-[1.2] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)]   [font-size:_clamp(8px,2vw,22px)]  border border-[#FE6623] rounded-[32px]  inline-block text-[#ffffffe6]"
                    href="#"
                    onClick={() => setOpenModal(true)}
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="delivering-ai-solutions [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,160px)]">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
            
            <div>
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Solutions
              </span>
              <div className="flex [margin-bottom:_clamp(15px,2vw,38px)] [margin-top:_clamp(12px,2vw,53px)]  flex-row flex-wrap items-start">
                <div className="flex-grow">
                  <h2 className="[font-size:_clamp(15px,2vw,46px)]  text-[#000000CC] leading-[1.3] font-normal">
                    <span className="block">
                      Delivering AI solutions that are resilient
                    </span>
                    and{" "}
                    <span className="heading-orange [font-size:_clamp(17px,2vw,48px)]">
                      Uncompromising
                    </span>{" "}
                    in achieving Excellence.
                  </h2>
                </div>
                <div className="flex-shrink-0  hidden md:block">
                  <Link
                    href="#"
                    className="text-[#FE6623] text-[18px] lg:text-[22px] explor-link flex items-center font-normal"
                  >
                    Explore All
                    <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 16.5L16.075 15.1L18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12L17.5 16.5Z" fill="currentColor"/>
</svg>


                  </Link>
                </div>
              </div>
              <Tabs
                className="slider-tab-bar   flex-nowrap  whitespace-nowrap  overflow-x-auto"
                aria-label="Pills"
                variant="pills"
              >
                <Tabs.Item
                  className="custom-tab mt-[71px]"
                  active
                  title="Vision Tech"
                >
                  <Swiper
                    slidesPerGroup={2}
                    centeredSlides={false}
                    observer={true}
                    observeParents={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2.4,
                        spaceBetween: 71,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
                  >
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-1.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Docurate
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Streamlining complex data and unstructured
                                information into actionable insights for
                                seamless...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/blog-page">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-2.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                VisionTech
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Reforming visual data processing with our Vision
                                Tech platform and delivering unparalleled..
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-3.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Fusio
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Harnessing the Power of multimodal LLMs for
                                advanced data processing, seamlessly
                                integrating...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-4.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Canse{" "}
                                <span className="inline-block text-[#CED4D7] font-normal">
                                  (Cancer Prognostic Tool)
                                </span>
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Transforming oncology with AI-powered cancer
                                prediction, enabling early detection,
                                personalized...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-5.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Notei
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Deciphering medical data processing with AI,
                                ensuring accurate analysis, seamless
                                integration...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Tabs.Item>
                <Tabs.Item title="LLMs">
                <Swiper
                    slidesPerGroup={2}
                    centeredSlides={false}
                    observer={true}
                    observeParents={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2.4,
                        spaceBetween: 71,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
                  >
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-1.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Docurate
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Streamlining complex data and unstructured
                                information into actionable insights for
                                seamless...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-2.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                VisionTech
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Reforming visual data processing with our Vision
                                Tech platform and delivering unparalleled..
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-3.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Fusio
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Harnessing the Power of multimodal LLMs for
                                advanced data processing, seamlessly
                                integrating...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-4.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Canse{" "}
                                <span className="inline-block text-[#CED4D7] font-normal">
                                  (Cancer Prognostic Tool)
                                </span>
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Transforming oncology with AI-powered cancer
                                prediction, enabling early detection,
                                personalized...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-5.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Notei
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Deciphering medical data processing with AI,
                                ensuring accurate analysis, seamless
                                integration...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Tabs.Item>
                <Tabs.Item title="Edge Computing">
                <Swiper
                    slidesPerGroup={2}
                    centeredSlides={false}
                    observer={true}
                    observeParents={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2.4,
                        spaceBetween: 71,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
                  >
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-1.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Docurate
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Streamlining complex data and unstructured
                                information into actionable insights for
                                seamless...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/blog-page">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-2.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                VisionTech
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Reforming visual data processing with our Vision
                                Tech platform and delivering unparalleled..
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-3.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Fusio
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Harnessing the Power of multimodal LLMs for
                                advanced data processing, seamlessly
                                integrating...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-4.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Canse{" "}
                                <span className="inline-block text-[#CED4D7] font-normal">
                                  (Cancer Prognostic Tool)
                                </span>
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Transforming oncology with AI-powered cancer
                                prediction, enabling early detection,
                                personalized...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-5.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Notei
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Deciphering medical data processing with AI,
                                ensuring accurate analysis, seamless
                                integration...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Tabs.Item>
                <Tabs.Item title="Prediction Models">
                <Swiper
                    slidesPerGroup={2}
                    centeredSlides={false}
                    observer={true}
                    observeParents={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2.4,
                        spaceBetween: 71,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mycustom-slider !pb-[56px] lg:!pb-[91px]"
                  >
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-1.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Docurate
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Streamlining complex data and unstructured
                                information into actionable insights for
                                seamless...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-2.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                VisionTech
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Reforming visual data processing with our Vision
                                Tech platform and delivering unparalleled..
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-3.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Fusio
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Harnessing the Power of multimodal LLMs for
                                advanced data processing, seamlessly
                                integrating...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-4.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Canse{" "}
                                <span className="inline-block text-[#CED4D7] font-normal">
                                  (Cancer Prognostic Tool)
                                </span>
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Transforming oncology with AI-powered cancer
                                prediction, enabling early detection,
                                personalized...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-column relative rounded-[24px]  overflow-hidden">
                        <img
                          src="/image/llm-5.png"
                          className="max-w-full w-full [height:_clamp(8vh,650px)] object-cover object-center"
                          alt=""
                        />
                        <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                          <div className="bg-[#292C334D] blur-bg items-center rounded-[16px]  lg:py-[28px] p-[15px] lg:px-[36px] flex justify-between ">
                            <div className="grow">
                              <h3 className="text-white [font-size:_clamp(12px,2vw,32px)] font-bold">
                                Notei
                              </h3>
                              <p className="text-[#CED4D7] line-1 Helvetica-400 w-full lg:max-w-[494px] whitespace-normal [font-size:_clamp(11px,2vw,22px)] font-normal">
                                Deciphering medical data processing with AI,
                                ensuring accurate analysis, seamless
                                integration...
                              </p>
                            </div>
                            <div className="shrink-0">
                              <Link href="/coming-soon">
                                <img
                                  src="/image/arrow-btn.png"
                                  className="max-w-full [width:_clamp(26px,2vw,76px)]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Tabs.Item>
              </Tabs>

              <div className=" flex justify-center text-center md:hidden">
                <Link
                  href="#"
                  className="text-[#FE6623] explor-link text-[18px] lg:text-[22px] flex items-center font-normal"
                >
                  Explore All

                  <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 16.5L16.075 15.1L18.175 13H3V11H18.175L16.1 8.9L17.525 7.5L22 12L17.5 16.5Z" fill="currentColor"/>
</svg>

                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="ensuring-sec  relative  bg-[#FFFAF8] [padding-top:_clamp(17px,4vw,71px)] [padding-bottom:_clamp(17px,4vw,128px)]">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
            <div className="flex justify-center">
              <div className="basis-full md:basis-11/12">
            <div className="text-center">
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Privacy & Security
              </span>
              <h2 className="[font-size:_clamp(15px,2vw,48px)] [margin-top:_clamp(8px,2vw,39px)]    text-[#000000CC] leading-[1.3] font-normal">
                <span>Ensuring</span>{" "}
                <span className="heading-orange">End-to-End</span> Encryption
              </h2>
            </div>
            <div className="grid-cols-1 grid md:grid-cols-2 place-items-stretch  [margin-top:_clamp(40px,2vw,107px)] gap-[16px] lg:gap-[32px]  xl:gap-[64px]">
              <div className="bg-[#FE66232E] items-center flex flex-row  rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
                <div className="shrink-0">
                  <svg
                    className="[height:_clamp(32px,2vw,79px)]"
                    viewBox="0 0 63 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 79.3984C5.70938 79.3984 3.85547 78.6617 2.31328 77.1883C0.771094 75.7149 0 73.9437 0 71.8746V34.2556C0 32.1865 0.771094 30.4153 2.31328 28.9419C3.85547 27.4685 5.70938 26.7318 7.875 26.7318H11.8125V19.208C11.8125 14.004 13.732 9.56808 17.5711 5.90022C21.4102 2.23237 26.0531 0.398438 31.5 0.398438C36.9469 0.398438 41.5898 2.23237 45.4289 5.90022C49.268 9.56808 51.1875 14.004 51.1875 19.208V26.7318H55.125C57.2906 26.7318 59.1445 27.4685 60.6867 28.9419C62.2289 30.4153 63 32.1865 63 34.2556V71.8746C63 73.9437 62.2289 75.7149 60.6867 77.1883C59.1445 78.6617 57.2906 79.3984 55.125 79.3984H7.875ZM7.875 71.8746H55.125V34.2556H7.875V71.8746ZM31.5 60.5889C33.6656 60.5889 35.5195 59.8522 37.0617 58.3788C38.6039 56.9054 39.375 55.1342 39.375 53.0651C39.375 50.9961 38.6039 49.2248 37.0617 47.7514C35.5195 46.278 33.6656 45.5413 31.5 45.5413C29.3344 45.5413 27.4805 46.278 25.9383 47.7514C24.3961 49.2248 23.625 50.9961 23.625 53.0651C23.625 55.1342 24.3961 56.9054 25.9383 58.3788C27.4805 59.8522 29.3344 60.5889 31.5 60.5889ZM19.6875 26.7318H43.3125V19.208C43.3125 16.073 42.1641 13.4084 39.8672 11.2139C37.5703 9.01947 34.7812 7.92225 31.5 7.92225C28.2188 7.92225 25.4297 9.01947 23.1328 11.2139C20.8359 13.4084 19.6875 16.073 19.6875 19.208V26.7318Z"
                      fill="black"
                      fillOpacity="0.85"
                    />
                  </svg>
                </div>
                <div className="grow [padding-left:_clamp(15px,3vw,36px)]">
                  <h3 className="text-[#0E1A36] mb-[11px] [font-size:_clamp(14px,2vw,32px)] leading-[1.3]">
                    Data Encryption & Storage
                  </h3>
                  <p className="text-[#000000BF] [font-size:_clamp(10px,2vw,20px)] leading-[1.3]">
                    We use data-encryption to protective sensitive data,
                    ensuring compliance with international standards.
                  </p>
                </div>
              </div>
              <div className="bg-[#FE66232E] items-center flex flex-row  rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
                <div className="shrink-0">
                  {/* <svg
                    className="[height:_clamp(32px,2vw,79px)]"
                    viewBox="0 0 79 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.5016 44.3484C40.7462 44.3481 41.8136 43.9206 42.6699 43.0644C43.5266 42.2077 43.9529 41.1407 43.95 39.8972C43.947 38.6551 43.5198 37.5893 42.6665 36.7331C41.8123 35.8759 40.7453 35.4484 39.5 35.4484C38.2546 35.4484 37.1876 35.8759 36.3334 36.7331C35.4802 37.5893 35.0529 38.6551 35.05 39.8972C35.0471 41.1412 35.4751 42.2094 36.334 43.0683C37.1929 43.9272 38.2598 44.3541 39.5016 44.3484ZM39.5016 44.3484C39.501 44.3484 39.5005 44.3484 39.5 44.3484V43.8484L39.5023 44.3484C39.5021 44.3484 39.5018 44.3484 39.5016 44.3484ZM51.3516 44.3484C52.5962 44.3481 53.6636 43.9206 54.5199 43.0644C55.3766 42.2077 55.8029 41.1407 55.8 39.8972C55.797 38.6551 55.3698 37.5893 54.5165 36.7331C53.6623 35.8759 52.5953 35.4484 51.35 35.4484C50.1046 35.4484 49.0376 35.8759 48.1834 36.7331C47.3302 37.5893 46.9029 38.6551 46.9 39.8972C46.897 41.1412 47.3251 42.2094 48.184 43.0683C49.0429 43.9272 50.1098 44.3541 51.3516 44.3484ZM51.3516 44.3484C51.351 44.3484 51.3505 44.3484 51.35 44.3484V43.8484L51.3523 44.3484C51.3521 44.3484 51.3518 44.3484 51.3516 44.3484ZM27.6516 44.3484C28.8963 44.3481 29.9636 43.9206 30.8199 43.0644C31.6766 42.2077 32.1029 41.1407 32.1 39.8972C32.097 38.6551 31.6698 37.5893 30.8166 36.7331C29.9623 35.8759 28.8954 35.4484 27.65 35.4484C26.4046 35.4484 25.3376 35.8759 24.4834 36.7331C23.6302 37.5893 23.2029 38.6551 23.2 39.8972C23.1971 41.1412 23.6251 42.2094 24.484 43.0683C25.3429 43.9272 26.4098 44.3541 27.6516 44.3484ZM27.6516 44.3484C27.6511 44.3484 27.6505 44.3484 27.65 44.3484V43.8484L27.6524 44.3484C27.6521 44.3484 27.6519 44.3484 27.6516 44.3484ZM39.5016 56.1984C40.7462 56.1981 41.8136 55.7706 42.6699 54.9144C43.5266 54.0577 43.9529 52.9907 43.95 51.7472C43.947 50.5051 43.5198 49.4393 42.6665 48.5831C41.8123 47.7259 40.7453 47.2984 39.5 47.2984C38.2546 47.2984 37.1876 47.7259 36.3334 48.5831C35.4802 49.4393 35.0529 50.5051 35.05 51.7472C35.0471 52.9912 35.4751 54.0594 36.334 54.9183C37.1929 55.7772 38.2598 56.2041 39.5016 56.1984ZM39.5016 56.1984C39.501 56.1984 39.5005 56.1984 39.5 56.1984V55.6984L39.5023 56.1984C39.5021 56.1984 39.5018 56.1984 39.5016 56.1984ZM51.3516 56.1984C52.5962 56.1981 53.6636 55.7706 54.5199 54.9144C55.3766 54.0577 55.8029 52.9907 55.8 51.7472C55.797 50.5051 55.3698 49.4393 54.5165 48.5831C53.6623 47.7259 52.5953 47.2984 51.35 47.2984C50.1046 47.2984 49.0376 47.7259 48.1834 48.5831C47.3302 49.4393 46.9029 50.5051 46.9 51.7472C46.897 52.9912 47.3251 54.0594 48.184 54.9183C49.0429 55.7772 50.1098 56.2041 51.3516 56.1984ZM51.3516 56.1984C51.351 56.1984 51.3505 56.1984 51.35 56.1984V55.6984L51.3523 56.1984C51.3521 56.1984 51.3518 56.1984 51.3516 56.1984ZM27.6516 56.1984C28.8963 56.1981 29.9636 55.7706 30.8199 54.9144C31.6766 54.0577 32.1029 52.9907 32.1 51.7472C32.097 50.5051 31.6698 49.4393 30.8166 48.5831C29.9623 47.7259 28.8954 47.2984 27.65 47.2984C26.4046 47.2984 25.3376 47.7259 24.4834 48.5831C23.6302 49.4393 23.2029 50.5051 23.2 51.7472C23.1971 52.9912 23.6251 54.0594 24.484 54.9183C25.3429 55.7772 26.4098 56.2041 27.6516 56.1984ZM27.6516 56.1984C27.6511 56.1984 27.6505 56.1984 27.65 56.1984V55.6984L27.6524 56.1984C27.6521 56.1984 27.6519 56.1984 27.6516 56.1984ZM39.5016 32.4984C40.7462 32.4981 41.8136 32.0706 42.6699 31.2144L39.5016 32.4984ZM39.5016 32.4984C39.501 32.4984 39.5005 32.4984 39.5 32.4984V31.9984L39.5023 32.4984C39.5021 32.4984 39.5018 32.4984 39.5016 32.4984ZM51.3516 32.4984C52.5962 32.4981 53.6636 32.0706 54.5199 31.2144L51.3516 32.4984ZM51.3516 32.4984C51.351 32.4984 51.3505 32.4984 51.35 32.4984V31.9984L51.3523 32.4984C51.3521 32.4984 51.3518 32.4984 51.3516 32.4984ZM27.6516 32.4984C28.8963 32.4981 29.9636 32.0706 30.8199 31.2144L27.6516 32.4984ZM27.6516 32.4984C27.6511 32.4984 27.6505 32.4984 27.65 32.4984V31.9984L27.6524 32.4984C27.6521 32.4984 27.6518 32.4984 27.6516 32.4984ZM39.5005 78.8984H39.5C34.1009 78.8984 29.0337 77.8736 24.2932 75.8268C19.5428 73.7757 15.4157 70.9969 11.9072 67.491C8.39884 63.9853 5.62021 59.8583 3.57177 55.1055C1.5274 50.3622 0.502607 45.2947 0.500005 39.8982C0.497403 34.502 1.52213 29.4349 3.57159 24.6918C5.62537 19.9386 8.40418 15.8115 11.9074 12.3056C15.4105 8.79994 19.5375 6.02126 24.293 3.97015C29.039 1.92319 34.1063 0.898438 39.5 0.898438C44.8937 0.898438 49.961 1.92319 54.7069 3.97015C59.4625 6.02126 63.5895 8.79994 67.0925 12.3056C70.5958 15.8115 73.376 19.9388 75.4324 24.692C77.4844 29.4349 78.5078 34.5017 78.5 39.8977C78.4921 45.2946 77.4673 50.3623 75.428 55.1059C73.3849 59.8584 70.6065 63.9851 67.0931 67.4907C63.579 70.9969 59.4516 73.7771 54.7064 75.8309C49.9715 77.8802 44.9046 78.9036 39.5005 78.8984Z"
                      stroke="black"
                    />
                  </svg> */}
                  <svg className="[height:_clamp(32px,2vw,79px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg>
                </div>
                <div className="grow [padding-left:_clamp(15px,3vw,36px)]">
                  <h3 className="text-[#0E1A36] mb-[11px] [font-size:_clamp(14px,2vw,32px)] leading-[1.3]">
                    Policies and Consent
                  </h3>
                  <p className="text-[#000000BF] [font-size:_clamp(10px,2vw,20px)] leading-[1.3]">
                    We use data policies, obtain consent from the users and use
                    anonymization for maximum privacy.
                  </p>
                </div>
              </div>
              <div className="bg-[#FE66232E] items-center flex flex-row  rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
                <div className="shrink-0">
                  {/* <svg
                    className="[height:_clamp(32px,2vw,79px)]"
                    viewBox="0 0 79 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.4394 25.4718L40.4395 25.4719L40.446 25.4605L51.9942 5.42395C52.4396 4.70396 52.939 4.35666 53.4768 4.24552C54.0617 4.12463 54.7452 4.22064 55.5586 4.62502L55.5718 4.63155L55.5851 4.63756C60.0381 6.63815 63.9744 9.42794 67.3977 13.0114C70.8213 16.5952 73.4677 20.6457 75.3407 25.1662C75.5984 25.8415 75.5274 26.3107 75.2686 26.6885C75.0102 27.0658 74.5974 27.3005 73.8672 27.2984H73.865H41.475C41.033 27.2984 40.7087 27.124 40.4394 26.6751C40.3 26.4428 40.25 26.2455 40.25 26.0734C40.25 25.9014 40.3 25.704 40.4394 25.4718ZM16.1534 11.9724L16.1481 11.9632L16.1425 11.9541C15.7135 11.257 15.6339 10.6233 15.8256 10.0003C16.0349 9.31997 16.4492 8.76704 17.1048 8.32998L17.1136 8.32409L17.1223 8.31796C20.2207 6.12325 23.6621 4.37776 27.4501 3.08313C31.2196 1.79488 35.2346 1.14844 39.5 1.14844C40.4627 1.14844 41.5276 1.19724 42.6956 1.29588C43.8696 1.39501 44.8363 1.50758 45.6003 1.63238L45.6078 1.63359L45.6152 1.63465C46.3659 1.74189 46.7052 2.02882 46.8667 2.3861C47.0374 2.76374 47.0315 3.2274 46.6543 3.87016L46.6513 3.87541L30.1637 32.5066C29.9021 32.9397 29.5691 33.1247 29.0839 33.1247C28.5986 33.1247 28.2635 32.9395 27.9993 32.5053L16.1534 11.9724ZM12.3725 16.2538L12.3783 16.2646L12.3844 16.2752L28.9744 45.209L28.9781 45.2154L28.9819 45.2218C29.1186 45.4497 29.1636 45.6405 29.1596 45.8054C29.1556 45.9715 29.1007 46.1678 28.9482 46.4031C28.6468 46.8683 28.2969 47.0484 27.8475 47.0484H3.3575C2.82015 47.0484 2.32899 46.8712 1.86188 46.483C1.39865 46.098 1.13303 45.6426 1.03424 45.0972C0.909798 44.4103 0.831318 43.6562 0.800836 42.8332C0.769646 41.9911 0.752626 41.0128 0.75 39.8976C0.750094 35.8333 1.41181 31.7821 2.7389 27.7413C4.06115 23.7153 6.10818 19.8896 8.88741 16.2634C9.50416 15.4799 10.1424 15.1709 10.8151 15.1709C11.4408 15.1709 11.9519 15.4611 12.3725 16.2538ZM23.4604 75.1817L23.4477 75.1749L23.4347 75.1686C19.1694 73.1006 15.2543 70.2871 11.6891 66.7219C8.13902 63.1718 5.4652 59.1438 3.66081 54.6348C3.40618 53.9698 3.48497 53.511 3.76334 53.134C4.05559 52.7383 4.5006 52.5008 5.23464 52.4984C5.23505 52.4984 5.23547 52.4984 5.23589 52.4984L37.4263 52.4984C37.8682 52.4984 38.1925 52.6729 38.4619 53.1218C38.6012 53.354 38.6512 53.5514 38.6512 53.7234C38.6512 53.8955 38.6012 54.0928 38.4619 54.3251L38.4579 54.3317L38.454 54.3385L27.1039 74.1764C26.6511 74.9085 26.1241 75.3311 25.5366 75.5269C25.002 75.7051 24.3313 75.6461 23.4604 75.1817ZM33.4897 78.1631L33.4836 78.1622C32.7332 78.055 32.3621 77.7643 32.1721 77.3843C31.9842 77.0086 31.978 76.5569 32.3466 75.9251L32.3495 75.92L48.6391 47.4873C48.8699 47.1067 49.251 46.8697 49.9675 46.8697C50.6843 46.8697 51.0655 47.1069 51.2962 47.4879L62.945 67.7251L62.9533 67.7395L62.9623 67.7536C63.3188 68.3139 63.4327 68.9091 63.3046 69.5804C63.186 70.2021 62.7817 70.8448 61.9557 71.4941C59.0019 73.6757 55.5411 75.4166 51.5643 76.7102C47.5899 78.0032 43.5693 78.6484 39.5 78.6484C38.6046 78.6484 37.5892 78.5998 36.4522 78.5011C35.3097 78.402 34.3229 78.2891 33.4897 78.1631ZM50.1236 34.5865L50.1237 34.5864L50.1169 34.5751C49.9803 34.3475 49.9358 34.1573 49.9401 33.9929C49.9444 33.8273 49.9998 33.6311 50.1534 33.3956C50.4588 32.9271 50.8089 32.7484 51.2513 32.7484H75.6425C76.1787 32.7484 76.6694 32.9262 77.1366 33.3166C77.6022 33.7056 77.8675 34.1611 77.9659 34.7006C78.0902 35.3814 78.1687 36.1351 78.1992 36.9635C78.2304 37.8113 78.2474 38.7899 78.25 39.9002C78.2498 43.9643 77.5881 48.0506 76.26 52.1617C74.9373 56.256 72.8906 60.0783 70.1141 63.6303L70.1061 63.6405L70.0984 63.6511C69.7228 64.1675 69.1919 64.4531 68.4078 64.4802C68.0169 64.4938 67.723 64.4245 67.4979 64.3066C67.2763 64.1906 67.0786 64.0053 66.9105 63.7168C66.9102 63.7162 66.9099 63.7157 66.9096 63.7152L50.1236 34.5865Z"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  </svg> */}
                  <svg className="[height:_clamp(32px,2vw,79px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
                </div>
                <div className="grow [padding-left:_clamp(15px,3vw,36px)]">
                  <h3 className="text-[#0E1A36] mb-[11px] [font-size:_clamp(14px,2vw,32px)] leading-[1.3]">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-[#000000BF] [font-size:_clamp(10px,2vw,20px)] leading-[1.3]">
                    We have deployed AI monitoring to detect and neutralize
                    real-time cyber threats and unauthorized access.
                  </p>
                </div>
              </div>

              <div className="bg-[#FE66232E] items-center flex flex-row  rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
                <div className="shrink-0">
                  <svg
                    className="[height:_clamp(32px,2vw,79px)]"
                    viewBox="0 0 62 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31 73.3984C22.0229 71.2693 14.612 66.4178 8.76719 58.8441C2.9224 51.2703 0 42.8601 0 33.6134V11.3484L31 0.398438L62 11.3484V33.6134C62 42.8601 59.0776 51.2703 53.2328 58.8441C47.388 66.4178 39.9771 71.2693 31 73.3984ZM31 65.7334C37.7167 63.7259 43.2708 59.7109 47.6625 53.6884C52.0542 47.6659 54.25 40.9743 54.25 33.6134V16.3672L31 8.15469L7.75 16.3672V33.6134C7.75 40.9743 9.94583 47.6659 14.3375 53.6884C18.7292 59.7109 24.2833 63.7259 31 65.7334ZM23.25 51.4984H38.75C39.8479 51.4984 40.7682 51.1486 41.5109 50.4491C42.2536 49.7495 42.625 48.8826 42.625 47.8484V36.8984C42.625 35.8643 42.2536 34.9974 41.5109 34.2978C40.7682 33.5982 39.8479 33.2484 38.75 33.2484V29.5984C38.75 27.5909 37.9911 25.8724 36.4734 24.4428C34.9557 23.0132 33.1312 22.2984 31 22.2984C28.8687 22.2984 27.0443 23.0132 25.5266 24.4428C24.0089 25.8724 23.25 27.5909 23.25 29.5984V33.2484C22.1521 33.2484 21.2318 33.5982 20.4891 34.2978C19.7464 34.9974 19.375 35.8643 19.375 36.8984V47.8484C19.375 48.8826 19.7464 49.7495 20.4891 50.4491C21.2318 51.1486 22.1521 51.4984 23.25 51.4984ZM27.125 33.2484V29.5984C27.125 28.5643 27.4964 27.6974 28.2391 26.9978C28.9818 26.2982 29.9021 25.9484 31 25.9484C32.0979 25.9484 33.0182 26.2982 33.7609 26.9978C34.5036 27.6974 34.875 28.5643 34.875 29.5984V33.2484H27.125Z"
                      fill="black"
                      fillOpacity="0.85"
                    />
                  </svg>
                </div>
                <div className="grow [padding-left:_clamp(15px,3vw,36px)]">
                  <h3 className="text-[#0E1A36] mb-[11px] [font-size:_clamp(14px,2vw,32px)] leading-[1.3]">
                    Access Control & Authentication
                  </h3>
                  <p className="text-[#000000BF] [font-size:_clamp(10px,2vw,20px)] leading-[1.3]">
                    Implementation of multi-factor authentication (MFA) and
                    role-based access control (RBAC) for restricted access.
                  </p>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
          <img
            src="/image/shp-1.png"
            className="w-full max-w-[350px] hidden lg:block absolute left-0 -top-[550px]"
            alt=""
          />
        </section>
        <section className="driving-growth-sec relative [padding-top:_clamp(54px,4vw,192px)] [padding-bottom:_clamp(54px,4vw,192px)]">
          <div className="container max-w-[90rem]  mx-auto px-[10px] relative z-10 ">
            <div className="flex justify-center">
              <div className= "basis-full md:basis-11/12">
            <div className="flex flex-wrap items-center flex-row">
              <div className="basis-full md:basis-6/12">
                <div>
                  <div>
                    <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                      What Sets us Apart
                    </span>
                    <h2 className="[font-size:_clamp(16px,2vw,46px)]  [padding-top:_clamp(8px,4vw,41px)] [padding-bottom:_clamp(20px,4vw,30px)] leading-[1.3] text-[#000]">
                      Driving Growth and Shaping a{/* */}{" "}
                      <span className="heading-orange">Smarter Future </span>{" "}
                      for Our Clients
                    </h2>
                  </div>
                  <p className="[font-size:_clamp(16px,2vw,22px)] mb-[30px] lg:mb-[57px] leading-normal text-[#000000BF]">
                    From enhancing decision-making with advanced analytics to
                    streamlining operations through intelligent automation.
                  </p>
                </div>
                <div className="grid  grid-cols-2 place-items-stretch gap  gap-x-[9px] gap-y-[8px] lg:gap-x-[32px]">
                  <div className={`min-h-[120px]  [padding:_clamp(13px,2vw,30px)] bordern-nn-1  rounded-[24px] bg-[#292C3305] ${
          isHovered ? "cardHover" : ""}`}>
                    <div className="flex flex-row">
                      <div className="shrink-0 ">
                        <img
                          src="/image/v-1.png"
                          className="[height:_clamp(14px,2vw,36px)] mt-[18px]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <span className="heading-orange-two mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +10
                        </span>
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Empowering Businesses to unlock limitless
                          possibilities & achieve unparalleled success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`min-h-[120px]  [padding:_clamp(13px,2vw,30px)] bordern-nn-1  rounded-[24px] bg-[#292C3305] ${
          isHoveredTwo ? "cardHover" : ""}`}>
                    <div className="flex flex-row">
                      <div className="shrink-0 ">
                        <img
                          src="/image/v-2.png"
                          className="[height:_clamp(14px,2vw,36px)] mt-[18px]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <span className="heading-orange-two mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +5
                        </span>
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Successfully delivered impactful solutions globally,
                          meeting diverse customer needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`min-h-[120px]  [padding:_clamp(13px,2vw,30px)] bordern-nn-1  rounded-[24px] bg-[#292C3305] ${
          isHoveredFour ? "cardHover" : ""}`}>
                    <div className="flex flex-row">
                      <div className="shrink-0 ">
                        <img
                          src="/image/v-3.png"
                          className="[height:_clamp(14px,2vw,36px)] mt-[18px]"
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        <span className="heading-orange-two mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +3
                        </span>
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Providing transformative AI solutions across
                          healthcare, finance, fintech, defense, and security.
                        </p>
                      </div>
                    </div>
                  </div>

                  


                  <div className={`min-h-[120] [padding:_clamp(13px,2vw,30px)] bordern-nn-1 flex flex-col justify-center  rounded-[24px] bg-[#292C3305] ${
          isHoveredThree ? "cardHover" : ""}`}>
                    <div className="flex  flex-row">
                      <div className="shrink-0 ">
                        <img
                          src="/image/v-4.png"
                          className="[height:_clamp(14px,4vw,36px)] "
                          alt=""
                        />
                      </div>
                      <div className="grow [padding-left:_clamp(12px,3vw,30px)]">
                        {/* <span className="heading-orange-two  mb-[8px] [font-size:_clamp(12px,2vw,32px)] leading-normal font-bold">
                          +10
                        </span> */}
                        <p className="text-[#646464] text-[12px] leading-normal">
                          Stay informed with our newsroom updates, delivering
                          insights straight to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-start">
                  <a
                    className="bg-[#FE6623E3] leading-[1.2] [margin-top:_clamp(21px,2vw,80px)] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)]   [font-size:_clamp(8px,2vw,22px)]  border border-[#FE6623] rounded-[32px]  inline-block text-[#ffffffe6]"
                    href="#"
                    onClick={() => setOpenModal(true)}
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
              <div className="basis-full hidden md:block mt-[30px] md:mt-0 md:basis-6/12">
                {/* <img
                  src="/image/driving-image.png"
                  className="max-w-full"
                  alt=""
                /> */}
                <div>
                  <div className={`main-circle common-border ${
          isHovered ? "borderHover" : ""}`}>
                    <div className="circle-4-1 ">
                      <div className="flex s4 items-center flex-wrap">
                        <span onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="bg-[#004A7C40] btnhover   mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border border-[#004A7C] ">
                          Growth
                        </span>
                        <span className="dot">
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="9"
                              cy="9.56958"
                              r="9"
                              fill="url(#paint0_linear_2637_182)"
                            />
                            <circle
                              cx="9"
                              cy="9.56958"
                              r="8.5"
                              stroke="white"
                              strokeOpacity="0.6"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2637_182"
                                x1="9"
                                y1="0.56958"
                                x2="9"
                                y2="18.5696"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F9763C" />
                                <stop offset="1" stopColor="#934623" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className={`circle-2 common-border ${
          isHoveredTwo ? "borderHover" : ""}`}>
                      <div className="circle-4-1">
                        <div className="flex s3 items-center flex-wrap">
                          <span onMouseEnter={() => setIsHoveredTwo(true)} onMouseLeave={() => setIsHoveredTwo(false)} className="bg-[#004A7C40] btn btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border  border-[#004A7C] ">
                            Insights
                          </span>
                          <span className="dot">
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="9"
                                fill="url(#paint0_linear_2637_182)"
                              />
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="8.5"
                                stroke="white"
                                strokeOpacity="0.6"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2637_182"
                                  x1="9"
                                  y1="0.56958"
                                  x2="9"
                                  y2="18.5696"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F9763C" />
                                  <stop offset="1" stopColor="#934623" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`circle-3 common-border ${
          isHoveredFour ? "borderHover" : ""}`} >
                      <div className="circle-4-1">
                        <div className="flex s2 items-center flex-wrap">
                          <span className="dot">
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="9"
                                fill="url(#paint0_linear_2637_182)"
                              />
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="8.5"
                                stroke="white"
                                strokeOpacity="0.6"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2637_182"
                                  x1="9"
                                  y1="0.56958"
                                  x2="9"
                                  y2="18.5696"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F9763C" />
                                  <stop offset="1" stopColor="#934623" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <span onMouseEnter={() => setIsHoveredFour(true)} onMouseLeave={() => setIsHoveredFour(false)} className="bg-[#004A7C40] btn btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border  border-[#004A7C] ">
                            Industries
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`circle-4 common-border ${
          isHoveredThree ? "borderHover" : ""}`} >
                      <div className="circle-4-1">
                        <div className="flex s1 items-center flex-wrap">
                          <span className="dot">
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="9"
                                fill="url(#paint0_linear_2637_182)"
                              />
                              <circle
                                cx="9"
                                cy="9.56958"
                                r="8.5"
                                stroke="white"
                                strokeOpacity="0.6"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2637_182"
                                  x1="9"
                                  y1="0.56958"
                                  x2="9"
                                  y2="18.5696"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F9763C" />
                                  <stop offset="1" stopColor="#934623" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <span
                            onMouseEnter={() => setIsHoveredThree(true)} onMouseLeave={() => setIsHoveredThree(false)} className="bg-[#004A7C40] btn btnhover mx-[12px] btn py-[3px] px-[15px] lg:py-[8px] lg:px-[30px] text-white [font-size:_clamp(15px,2vw,20px)] text-center rounded-[12px] border  border-[#004A7C] "
                            
                          >
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
          <img
            src="/image/svgf.svg"
            className="w-full hidden lg:block absolute z-0 max-w-[300px] right-0 top-[100px]"
            alt=""
          />
        </section>
        <section className="smart-note-tab flex py-[88px] lg:py-0 items-center md:h-screen bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/End-to-End.gif')] bg-no-repeat bg-cover bg-cente">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
            <div className="text-center">
              <div>
                <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                  Upcoming
                </span>
                <h2 className="[font-size:_clamp(15px,2vw,56px)] [margin-top:_clamp(15px,2vw,36px)] [margin-bottom:_clamp(15px,2vw,28px)]  text-[#000000CC] leading-[1] font-normal">
                  <span>Explore the</span>{" "}
                  <span className="heading-orange">Smart Note-Tab</span>
                </h2>
                <p className="text-[#707070] [font-size:_clamp(16px,2vw,28px)] leading-normal">
                  Capture, Transform, Simplify—Smart Notes Redefined.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="the-challenges [padding-top:_clamp(54px,4vw,200px)] [padding-bottom:_clamp(54px,4vw,181px)]">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
          <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <div>
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Challenges
              </span>

              <div className="flex  [margin-bottom:_clamp(21px,2vw,75px)] [margin-top:_clamp(18px,2vw,30px)] lg:items-center   flex-col lg:flex-row flex-wrap items-start">
                <div className="grow">
                  <h2 className="mb-[10px] lg:mb-[0px] [font-size:_clamp(17px,2vw,48px)]  text-[#000000CC] leading-[1.2] font-normal">
                    <span className="heading-orange">The Challenges</span> we
                    are<span className="block">addressing.</span>
                  </h2>
                </div>
                <div className="shrink-0">
                  <div className=" lg:max-w-[444px] lg:ms-auto lg:text-end">
                    <span className="[font-size:_clamp(8px,2vw,22px)] block text-[#0000007D] leading-normal">
                      Transforming businesses by solving complex AI-driven
                      challenges tailored for industries.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3  gap-x-[15px] lg:gap-x-[43px] gap-y-[30px] lg:gap-y-[53px] place-items-stretch">
              <div className="flex flex-col justify-between [padding:_clamp(14px,2vw,42px)] border rounded-[24px] border-[#292C330F]">
                <h3 className="text-[#000000D9] leading-[1.3]  font-normal [margin-bottom:_clamp(10px,2vw,55px)] [font-size:_clamp(8px,3vw,28px)]">
                  Scaling Operations Efficiently
                </h3>
                <p className="text-[#000000BF] max-w-[363px] [font-size:_clamp(8px,2vw,20px)] [margin-bottom:_clamp(10px,2vw,55px)] font-normal">
                  Scalable AI systems designed to grow alongside businesses,
                  ensuring smooth and efficient operations.
                </p>
                <div className="text-end">
                  <svg
                    className="inline-block [width:_clamp(17px,5vw,45px)]"
                    viewBox="0 0 45 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4388 28.6577L15.4388 28.6576L15.4332 28.6601L15.2786 28.7293C13.9876 29.2886 13.3733 30.8874 14.0192 32.1815C15.6789 35.5782 18.4316 36.8145 20.02 37.2778V37.882C20.02 39.2927 21.1272 40.45 22.5 40.45C23.9025 40.45 24.98 39.2617 24.98 37.882V37.4462C25.7852 37.2703 27.2436 36.8573 28.604 35.8997C30.2718 34.7259 31.775 32.7425 31.775 29.469C31.775 27.7517 31.4155 26.0974 30.3153 24.615C29.2197 23.1388 27.4297 21.8872 24.6724 20.8912L24.6724 20.8912L24.6661 20.889C22.6485 20.1905 21.2301 19.6521 20.3102 19.0317C19.8597 18.7279 19.5539 18.4201 19.3584 18.0876C19.1655 17.7595 19.0625 17.3779 19.0625 16.8965C19.0625 15.9056 19.5656 15.2338 20.2745 14.7875C21.0017 14.3297 21.9233 14.13 22.635 14.13C24.2851 14.13 25.2698 14.9387 25.8264 15.7277L25.8263 15.7278L25.8333 15.7372C26.501 16.638 27.6898 17.0084 28.7295 16.556L28.7321 16.5548C30.1929 15.9093 30.698 14.0397 29.7433 12.7469C28.8162 11.4722 27.3055 10.1254 24.98 9.58149V9.118C24.98 7.7073 23.8728 6.55 22.5 6.55C21.1272 6.55 20.02 7.7073 20.02 9.118V9.57146C17.1716 10.3253 15.6824 12.0375 14.9193 13.6315C14.1326 15.2748 14.125 16.7718 14.125 16.92C14.125 19.7908 15.4952 21.6442 17.1691 22.8774C18.6246 23.9497 20.3312 24.5668 21.5417 25.0045C21.6994 25.0615 21.8486 25.1155 21.9878 25.167C23.7575 25.8339 24.9644 26.4363 25.7289 27.1142C26.4616 27.7639 26.7925 28.4861 26.7925 29.469C26.7925 30.6253 26.2881 31.4245 25.5574 31.9509C24.8087 32.4903 23.804 32.7525 22.8375 32.7525C20.4834 32.7525 19.1988 31.1714 18.5143 29.8086L18.5143 29.8086L18.5119 29.8039C17.9273 28.6699 16.6192 28.1465 15.4388 28.6577ZM0.5 23.5C0.5 10.7834 10.3764 0.5 22.5 0.5C34.6236 0.5 44.5 10.7834 44.5 23.5C44.5 36.2166 34.6236 46.5 22.5 46.5C10.3764 46.5 0.5 36.2166 0.5 23.5Z"
                      fill="#131631"
                      fillOpacity="0.8"
                      stroke="url(#paint0_linear_1422_1693)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1422_1693"
                        x1="22.5"
                        y1="0"
                        x2="22.5"
                        y2="47"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#131631" />
                        <stop offset="1" stopColor="#26211E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between [padding:_clamp(17px,2vw,42px)] border rounded-[24px] border-[#292C330F]">
                <h3 className="text-[#000000D9] leading-[1.3]  font-normal [margin-bottom:_clamp(10px,2vw,55px)] [font-size:_clamp(8px,3vw,28px)]">
                  Improving Decision Accuracy
                </h3>
                <p className="text-[#000000BF]  max-w-[363px] [font-size:_clamp(8px,2vw,20px)] [margin-bottom:_clamp(10px,2vw,55px)] font-normal">
                  Predictive analytics and real-time insights for more accurate,
                  data-driven decision-making.
                </p>
                <div className="text-end">
                  <svg
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block [width:_clamp(17px,5vw,45px)]"
                  >
                    <path
                      d="M0.523889 5.00034V5C0.523889 2.50114 2.4505 0.5 4.77778 0.5H38.2222C40.5527 0.5 42.5 2.50448 42.5 5V40C42.5 42.4955 40.5527 44.5 38.2222 44.5H4.77778C2.44732 44.5 0.5 42.4955 0.5 40L0.523889 5.00034ZM26.7778 35V28H33.4444C35.0557 28 36.3333 26.6295 36.3333 25V20C36.3333 18.3705 35.0557 17 33.4444 17H26.7778V10C26.7778 8.37052 25.5001 7 23.8889 7H19.1111C17.4999 7 16.2222 8.37052 16.2222 10V17H9.55556C7.94435 17 6.66667 18.3705 6.66667 20V25C6.66667 26.6295 7.94435 28 9.55556 28H16.2222V35C16.2222 36.6295 17.4999 38 19.1111 38H23.8889C25.5001 38 26.7778 36.6295 26.7778 35Z"
                      fill="#131631"
                      fillOpacity="0.8"
                      stroke="url(#paint0_linear_1422_1698)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1422_1698"
                        x1="21.5"
                        y1="0"
                        x2="21.5"
                        y2="45"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#131631"></stop>
                        <stop offset="1" stopColor="#26211E"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between [padding:_clamp(17px,2vw,42px)] border rounded-[24px] border-[#292C330F]">
                <h3 className="text-[#000000D9] leading-[1.3]  font-normal [margin-bottom:_clamp(10px,2vw,55px)] [font-size:_clamp(8px,3vw,28px)]">
                  Making Sense of Complex Data
                </h3>
                <p className="text-[#000000BF] max-w-[363px] [font-size:_clamp(10px,2vw,20px)] [margin-bottom:_clamp(10px,2vw,55px)] font-normal">
                  Advanced AI analytics that simplify data interpretation and
                  enable informed decision-making.
                </p>
                <div className="text-end">
                  <svg
                    className="inline-block [width:_clamp(17px,5vw,45px)]"
                    viewBox="0 0 45 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 3.68182H4V4.18182V8.36364C4 9.2036 3.24652 9.95455 2.25 9.95455C1.25348 9.95455 0.5 9.2036 0.5 8.36364V2.09091C0.5 1.25095 1.25348 0.5 2.25 0.5H9C9.99652 0.5 10.75 1.25095 10.75 2.09091C10.75 2.93087 9.99652 3.68182 9 3.68182H4.5ZM41 4.18182V3.68182H40.5H36C35.0035 3.68182 34.25 2.93087 34.25 2.09091C34.25 1.25095 35.0035 0.5 36 0.5H42.75C43.7465 0.5 44.5 1.25095 44.5 2.09091V8.36364C44.5 9.2036 43.7465 9.95455 42.75 9.95455C41.7535 9.95455 41 9.2036 41 8.36364V4.18182ZM4 41.8182V42.3182H4.5H9C9.99652 42.3182 10.75 43.0691 10.75 43.9091C10.75 44.7491 9.99652 45.5 9 45.5H2.25C1.25348 45.5 0.5 44.7491 0.5 43.9091V37.6364C0.5 36.7964 1.25348 36.0455 2.25 36.0455C3.24652 36.0455 4 36.7964 4 37.6364V41.8182ZM40.5 42.3182H41V41.8182V37.6364C41 36.7964 41.7535 36.0455 42.75 36.0455C43.7465 36.0455 44.5 36.7964 44.5 37.6364V43.9091C44.5 44.7491 43.7465 45.5 42.75 45.5H36C35.0035 45.5 34.25 44.7491 34.25 43.9091C34.25 43.0691 35.0035 42.3182 36 42.3182H40.5ZM37.75 35.5455C37.75 37.5354 35.984 39.2273 33.75 39.2273H11.25C9.01598 39.2273 7.25 37.5354 7.25 35.5455V10.4545C7.25 8.46458 9.01598 6.77273 11.25 6.77273H33.75C35.984 6.77273 37.75 8.46459 37.75 10.4545V35.5455ZM15.25 16.7273C15.25 18.1873 16.5215 19.3182 18 19.3182H27C28.4785 19.3182 29.75 18.1873 29.75 16.7273C29.75 15.2672 28.4785 14.1364 27 14.1364H18C16.5215 14.1364 15.25 15.2672 15.25 16.7273ZM15.25 23C15.25 24.46 16.5215 25.5909 18 25.5909H27C28.4785 25.5909 29.75 24.46 29.75 23C29.75 21.54 28.4785 20.4091 27 20.4091H18C16.5215 20.4091 15.25 21.54 15.25 23ZM15.25 29.2727C15.25 30.7328 16.5215 31.8636 18 31.8636H27C28.4785 31.8636 29.75 30.7328 29.75 29.2727C29.75 27.8127 28.4785 26.6818 27 26.6818H18C16.5215 26.6818 15.25 27.8127 15.25 29.2727Z"
                      fill="#131631"
                      fillOpacity="0.8"
                      stroke="url(#paint0_linear_1422_1703)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1422_1703"
                        x1="22.5"
                        y1="0"
                        x2="22.5"
                        y2="46"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#131631" />
                        <stop offset="1" stopColor="#26211E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between [padding:_clamp(17px,2vw,42px)] border rounded-[24px] border-[#292C330F]">
                <h3 className="text-[#000000D9] leading-[1.3]  font-normal [margin-bottom:_clamp(10px,2vw,55px)] [font-size:_clamp(8px,3vw,28px)]">
                  Enhancing Security and Fraud Detection
                </h3>
                <p className="text-[#000000BF]  max-w-[363px] [font-size:_clamp(10px,2vw,20px)] [margin-bottom:_clamp(10px,2vw,55px)] font-normal">
                  AI systems trained to identify anomalies and patterns,
                  offering robust security and fraud prevention.
                </p>
                <div className="text-end">
                  <svg
                    className="inline-block [width:_clamp(17px,5vw,45px)]"
                    width="45"
                    height="47"
                    viewBox="0 0 45 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4388 28.6577L15.4388 28.6576L15.4332 28.6601L15.2786 28.7293C13.9876 29.2886 13.3733 30.8874 14.0192 32.1815C15.6789 35.5782 18.4316 36.8145 20.02 37.2778V37.882C20.02 39.2927 21.1272 40.45 22.5 40.45C23.9025 40.45 24.98 39.2617 24.98 37.882V37.4462C25.7852 37.2703 27.2436 36.8573 28.604 35.8997C30.2718 34.7259 31.775 32.7425 31.775 29.469C31.775 27.7517 31.4155 26.0974 30.3153 24.615C29.2197 23.1388 27.4297 21.8872 24.6724 20.8912L24.6724 20.8912L24.6661 20.889C22.6485 20.1905 21.2301 19.6521 20.3102 19.0317C19.8597 18.7279 19.5539 18.4201 19.3584 18.0876C19.1655 17.7595 19.0625 17.3779 19.0625 16.8965C19.0625 15.9056 19.5656 15.2338 20.2745 14.7875C21.0017 14.3297 21.9233 14.13 22.635 14.13C24.2851 14.13 25.2698 14.9387 25.8264 15.7277L25.8263 15.7278L25.8333 15.7372C26.501 16.638 27.6898 17.0084 28.7295 16.556L28.7321 16.5548C30.1929 15.9093 30.698 14.0397 29.7433 12.7469C28.8162 11.4722 27.3055 10.1254 24.98 9.58149V9.118C24.98 7.7073 23.8728 6.55 22.5 6.55C21.1272 6.55 20.02 7.7073 20.02 9.118V9.57146C17.1716 10.3253 15.6824 12.0375 14.9193 13.6315C14.1326 15.2748 14.125 16.7718 14.125 16.92C14.125 19.7908 15.4952 21.6442 17.1691 22.8774C18.6246 23.9497 20.3312 24.5668 21.5417 25.0045C21.6994 25.0615 21.8486 25.1155 21.9878 25.167C23.7575 25.8339 24.9644 26.4363 25.7289 27.1142C26.4616 27.7639 26.7925 28.4861 26.7925 29.469C26.7925 30.6253 26.2881 31.4245 25.5574 31.9509C24.8087 32.4903 23.804 32.7525 22.8375 32.7525C20.4834 32.7525 19.1988 31.1714 18.5143 29.8086L18.5143 29.8086L18.5119 29.8039C17.9273 28.6699 16.6192 28.1465 15.4388 28.6577ZM0.5 23.5C0.5 10.7834 10.3764 0.5 22.5 0.5C34.6236 0.5 44.5 10.7834 44.5 23.5C44.5 36.2166 34.6236 46.5 22.5 46.5C10.3764 46.5 0.5 36.2166 0.5 23.5Z"
                      fill="#131631"
                      fillOpacity="0.8"
                      stroke="url(#paint0_linear_1422_1693)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1422_1693"
                        x1="22.5"
                        y1="0"
                        x2="22.5"
                        y2="47"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#131631" />
                        <stop offset="1" stopColor="#26211E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between [padding:_clamp(17px,2vw,42px)] border rounded-[24px] border-[#292C330F]">
                <h3 className="text-[#000000D9] leading-[1.3]  font-normal [margin-bottom:_clamp(10px,2vw,55px)] [font-size:_clamp(8px,3vw,28px)]">
                  Reducing Operational <br /> Costs
                </h3>
                <p className="text-[#000000BF]  max-w-[363px] [font-size:_clamp(10px,2vw,20px)] [margin-bottom:_clamp(10px,2vw,55px)] font-normal">
                  AI-driven automation that reduces manual tasks, optimizes
                  processes, and cuts costs.
                </p>
                <div className="text-end">
                  <svg
                    className="inline-block [width:_clamp(17px,5vw,45px)]"
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.523889 5.00034V5C0.523889 2.50114 2.4505 0.5 4.77778 0.5H38.2222C40.5527 0.5 42.5 2.50448 42.5 5V40C42.5 42.4955 40.5527 44.5 38.2222 44.5H4.77778C2.44732 44.5 0.5 42.4955 0.5 40L0.523889 5.00034ZM26.7778 35V28H33.4444C35.0557 28 36.3333 26.6295 36.3333 25V20C36.3333 18.3705 35.0557 17 33.4444 17H26.7778V10C26.7778 8.37052 25.5001 7 23.8889 7H19.1111C17.4999 7 16.2222 8.37052 16.2222 10V17H9.55556C7.94435 17 6.66667 18.3705 6.66667 20V25C6.66667 26.6295 7.94435 28 9.55556 28H16.2222V35C16.2222 36.6295 17.4999 38 19.1111 38H23.8889C25.5001 38 26.7778 36.6295 26.7778 35Z"
                      fill="#131631"
                      fillOpacity="0.8"
                      stroke="url(#paint0_linear_1422_1698)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1422_1698"
                        x1="21.5"
                        y1="0"
                        x2="21.5"
                        y2="45"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#131631"></stop>
                        <stop offset="1" stopColor="#26211E"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between [padding:_clamp(17px,2vw,42px)] border rounded-[24px] border-[#292C330F]">
                <h3 className="text-[#000000D9] leading-[1.3]  font-normal [margin-bottom:_clamp(10px,2vw,55px)] [font-size:_clamp(8px,3vw,28px)]">
                  Personalizing Customer Experiences
                </h3>
                <p className="text-[#000000BF]  max-w-[363px] [font-size:_clamp(10px,2vw,20px)] [margin-bottom:_clamp(10px,2vw,55px)] font-normal">
                  AI-powered personalization engines that adapt to individual
                  customer needs and preferences in real time.
                </p>
                <div className="text-end">
                  <svg
                    viewBox="0 0 45 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block [width:_clamp(17px,5vw,45px)]"
                  >
                    <path
                      d="M4.5 3.68182H4V4.18182V8.36364C4 9.2036 3.24652 9.95455 2.25 9.95455C1.25348 9.95455 0.5 9.2036 0.5 8.36364V2.09091C0.5 1.25095 1.25348 0.5 2.25 0.5H9C9.99652 0.5 10.75 1.25095 10.75 2.09091C10.75 2.93087 9.99652 3.68182 9 3.68182H4.5ZM41 4.18182V3.68182H40.5H36C35.0035 3.68182 34.25 2.93087 34.25 2.09091C34.25 1.25095 35.0035 0.5 36 0.5H42.75C43.7465 0.5 44.5 1.25095 44.5 2.09091V8.36364C44.5 9.2036 43.7465 9.95455 42.75 9.95455C41.7535 9.95455 41 9.2036 41 8.36364V4.18182ZM4 41.8182V42.3182H4.5H9C9.99652 42.3182 10.75 43.0691 10.75 43.9091C10.75 44.7491 9.99652 45.5 9 45.5H2.25C1.25348 45.5 0.5 44.7491 0.5 43.9091V37.6364C0.5 36.7964 1.25348 36.0455 2.25 36.0455C3.24652 36.0455 4 36.7964 4 37.6364V41.8182ZM40.5 42.3182H41V41.8182V37.6364C41 36.7964 41.7535 36.0455 42.75 36.0455C43.7465 36.0455 44.5 36.7964 44.5 37.6364V43.9091C44.5 44.7491 43.7465 45.5 42.75 45.5H36C35.0035 45.5 34.25 44.7491 34.25 43.9091C34.25 43.0691 35.0035 42.3182 36 42.3182H40.5ZM37.75 35.5455C37.75 37.5354 35.984 39.2273 33.75 39.2273H11.25C9.01598 39.2273 7.25 37.5354 7.25 35.5455V10.4545C7.25 8.46458 9.01598 6.77273 11.25 6.77273H33.75C35.984 6.77273 37.75 8.46459 37.75 10.4545V35.5455ZM15.25 16.7273C15.25 18.1873 16.5215 19.3182 18 19.3182H27C28.4785 19.3182 29.75 18.1873 29.75 16.7273C29.75 15.2672 28.4785 14.1364 27 14.1364H18C16.5215 14.1364 15.25 15.2672 15.25 16.7273ZM15.25 23C15.25 24.46 16.5215 25.5909 18 25.5909H27C28.4785 25.5909 29.75 24.46 29.75 23C29.75 21.54 28.4785 20.4091 27 20.4091H18C16.5215 20.4091 15.25 21.54 15.25 23ZM15.25 29.2727C15.25 30.7328 16.5215 31.8636 18 31.8636H27C28.4785 31.8636 29.75 30.7328 29.75 29.2727C29.75 27.8127 28.4785 26.6818 27 26.6818H18C16.5215 26.6818 15.25 27.8127 15.25 29.2727Z"
                      fill="#131631"
                      fillOpacity="0.8"
                      stroke="url(#paint0_linear_1422_1703)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1422_1703"
                        x1="22.5"
                        y1="0"
                        x2="22.5"
                        y2="46"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#131631"></stop>
                        <stop offset="1" stopColor="#26211E"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className="[padding-top:_clamp(53px,4vw,193px)] [padding-bottom:_clamp(47px,4vw,196px)] latest-insights">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
            <div className="text-center">
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Newsroom
              </span>
              <h2 className="[font-size:_clamp(17px,2vw,48px)] mt-[12px] lg:mt-[39px]  text-[#000000CC] leading-normal font-normal">
                <span>Latest</span>{" "}
                <span className="heading-orange">Insights</span>
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="basis-full md:basis-10/12">
            <div className="grid mt-[30px] md:mt-[100px]  md:grid-cols-2 md:gap-x-[41px] gap-y-[15px] place-items-stretch ">
              <div>
                <div className="relative rounded-[24px] overflow-hidden">
                  <img src="/image/Insights-1.png" className="w-full" alt="" />
                  <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                    <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] py-[15px] lg:py-[28px] px-[15px] lg:px-[36px] flex justify-between flex-wrap">
                      <div className="flex-grow">
                        <span className="[font-size:_clamp(10px,2vw,16px)] text-[#c7c5d4] mb-[3px]">
                          13th December 2024 | Blog
                        </span>
                        <h3 className="text-white [font-size:_clamp(14px,2vw,32px)] font-normal">
                          Enhancing Cancer Care
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <Link href="#">
                          <img
                            src="/image/arrow-btn.png"
                            className="max-w-full [width:_clamp(26px,2vw,76px)]"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative rounded-[24px] overflow-hidden">
                  <img src="/image/Insights-2.png" className="w-full" alt="" />
                  <div className="absolute w-full bottom-0 left-0 right-0 p-[14px]">
                    <div className="bg-[#292C334D] blur-bg items-center rounded-[16px] py-[15px] lg:py-[28px] px-[15px] lg:px-[36px] flex justify-between flex-wrap">
                      <div className="flex-grow">
                        <span className="[font-size:_clamp(10px,2vw,16px)] text-[#c7c5d4] mb-[3px]">
                          11th December 2024 | Blog
                        </span>
                        <h3 className="text-white [font-size:_clamp(14px,2vw,32px)] font-normal">
                          Streamlining Healthcare
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <Link href="#">
                          <img
                            src="/image/arrow-btn.png"
                            className="max-w-full [width:_clamp(26px,2vw,76px)]"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-[30px] lg:mt-[64px]">
              <Link
                href="/blog-page"
                className="hover:bg-[#fe6623e3] [font-size:_clamp(8px,3vw,22px)] border border-[#fe6623] rounded-[32px] py-[8px] px-[26px] inline-block text-[#fe6623] hover:text-[#ffffffe6] "
              >
                View more
              </Link>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className="redy-to-unlock flex justify-center items-center flex-wrap  [padding-top:_clamp(54px,4vw,122px)] [padding-bottom:_clamp(54px,4vw,122px)] bg-[url('/image/image-bg-gradient.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="container max-w-[90rem]  mx-auto px-[10px]">
            <div className="flex justify-center flex-wrap">
              <div className="basis-full md:basis-8/12">
                <div className="relative z-10  [padding-top:_clamp(52px,11vw,202px)] [padding-bottom:_clamp(42px,11vw,188px)]">
                  <h2 className="Helvetica-400 [font-size:_clamp(10px,3vw,36px)] text-[#000] leading-normal">
                    <span className="text-[#5B5958] block">
                      Ready to unlock the power of AI for your business?
                    </span>
                    Let’s start the journey today!
                  </h2>
                  <img
                    src="/image/d.png"
                    className="[max-width:_clamp(126px,30vw,508px)] z-0 w-full  absolute right-[20%] md:right-0 top-0 bottom-0"
                    alt=""
                  />
                  <div>
                    <Link
                      className="bg-[#FE6623E3] leading-[1.2] [margin-top:_clamp(21px,2vw,80px)] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)]   [font-size:_clamp(8px,2vw,22px)]  border border-[#FE6623] rounded-[32px]  inline-block text-[#ffffffe6]"
                      href="#"
                      onClick={() => setOpenModal(true)}
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[url('/image/footer.jpg')] [padding-top:_clamp(88px,4vw,255px)]  relative   bg-cover bg-center bg-no-repeat">
        <div className="container max-w-[90rem]  mx-auto px-[10px] relative z-10 ">
          <div className="flex flex-wrap flex-row ">
            <div className="basis-full mb-[20px] lg:basis-5/12">
              <div className="pe-[15px]">
                <Link href="#">
                  <img
                    src="/image/logo-footer.png"
                    className="[max-width:_clamp(137px,10vw,444px)] mb-[15px] lg:mb-[55px] block"
                    alt=""
                  />
                </Link>

                <p className="text-[#838383] max-w-[531px] text-[16px] lg:text-[22px]">
                  We craft AI-driven solutions to transform your challenges into
                  opportunities.
                </p>

                <div className="flex flex-wrap  mt-[30px] items-center">
                  <div className="px-[4px] lg:px-[10px] ps-0">
                    <Link
                      className="text-[#6D6F7F]"
                      href="https://in.linkedin.com/company/deecogs"
                    >
                      <svg
                        viewBox="0 0 55 54"
                        className="ftsvg [height:_clamp(17px,2vw,32px)]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.8889 0C50.5097 0 52.064 0.632141 53.2101 1.75736C54.3562 2.88258 55 4.4087 55 6V48C55 49.5913 54.3562 51.1174 53.2101 52.2426C52.064 53.3679 50.5097 54 48.8889 54H6.11111C4.49034 54 2.93596 53.3679 1.7899 52.2426C0.643847 51.1174 0 49.5913 0 48V6C0 4.4087 0.643847 2.88258 1.7899 1.75736C2.93596 0.632141 4.49034 0 6.11111 0H48.8889ZM47.3611 46.5V30.6C47.3611 28.0062 46.3116 25.5186 44.4436 23.6845C42.5755 21.8504 40.0419 20.82 37.4 20.82C34.8028 20.82 31.7778 22.38 30.3111 24.72V21.39H21.7861V46.5H30.3111V31.71C30.3111 29.4 32.2056 27.51 34.5583 27.51C35.6929 27.51 36.7809 27.9525 37.5832 28.7402C38.3854 29.5278 38.8361 30.5961 38.8361 31.71V46.5H47.3611ZM11.8556 16.68C13.217 16.68 14.5227 16.149 15.4854 15.2038C16.4481 14.2586 16.9889 12.9767 16.9889 11.64C16.9889 8.85 14.6972 6.57 11.8556 6.57C10.486 6.57 9.17255 7.10416 8.20413 8.05497C7.23572 9.00578 6.69167 10.2954 6.69167 11.64C6.69167 14.43 9.01389 16.68 11.8556 16.68ZM16.1028 46.5V21.39H7.63889V46.5H16.1028Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="px-[4px] lg:px-[10px]">
                    <Link
                      className="text-[#6D6F7F]"
                      href="https://x.com/Deecogs_ai"
                    >
                      <svg
                        viewBox="0 0 55 54"
                        fill="none"
                        className="ftsvg [height:_clamp(17px,2vw,32px)]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0H6.25L43.75 54H37.5L0 0ZM11.25 0H17.5L55 54H48.75L11.25 0Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5 0L17.5 0V5.4H5V0ZM37.5 54H50V48.6H37.5V54Z"
                          fill="currentColor"
                        />
                        <path
                          d="M43.75 0H52.5L10 54H1.25L43.75 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="px-[4px] lg:px-[10px]">
                    <Link className="text-[#6D6F7F]" href="#">
                      <svg
                        viewBox="0 0 72 48"
                        fill="none"
                        className="ftsvg [height:_clamp(17px,2vw,32px)]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.8 34.2857L47.484 24L28.8 13.7143V34.2857ZM70.416 7.44C70.884 9.05143 71.208 11.2114 71.424 13.9543C71.676 16.6971 71.784 19.0629 71.784 21.12L72 24C72 31.5086 71.424 37.0286 70.416 40.56C69.516 43.6457 67.428 45.6343 64.188 46.4914C62.496 46.9371 59.4 47.2457 54.648 47.4514C49.968 47.6914 45.684 47.7943 41.724 47.7943L36 48C20.916 48 11.52 47.4514 7.812 46.4914C4.572 45.6343 2.484 43.6457 1.584 40.56C1.116 38.9486 0.792 36.7886 0.576 34.0457C0.324 31.3029 0.216 28.9371 0.216 26.88L0 24C0 16.4914 0.576 10.9714 1.584 7.44C2.484 4.35429 4.572 2.36571 7.812 1.50857C9.504 1.06286 12.6 0.754285 17.352 0.548571C22.032 0.308571 26.316 0.205714 30.276 0.205714L36 0C51.084 0 60.48 0.548572 64.188 1.50857C67.428 2.36571 69.516 4.35429 70.416 7.44Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="px-[4px] lg:px-[21] pe-[0px]">
                    <Link
                      className="text-[#6D6F7F]"
                      href="https://www.instagram.com/deecogs_/#"
                    >
                      <svg
                        className="ftsvg [height:_clamp(17px,2vw,32px)]"
                        viewBox="0 0 55 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.95 0H39.05C47.85 0 55 7.02 55 15.66V38.34C55 42.4933 53.3196 46.4765 50.3284 49.4133C47.3372 52.3501 43.2802 54 39.05 54H15.95C7.15 54 0 46.98 0 38.34V15.66C0 11.5067 1.68044 7.52353 4.67165 4.58671C7.66285 1.64989 11.7198 0 15.95 0ZM15.4 5.4C12.7744 5.4 10.2563 6.42407 8.39964 8.24692C6.54303 10.0698 5.5 12.5421 5.5 15.12V38.88C5.5 44.253 9.9275 48.6 15.4 48.6H39.6C42.2256 48.6 44.7437 47.5759 46.6004 45.7531C48.457 43.9302 49.5 41.4579 49.5 38.88V15.12C49.5 9.747 45.0725 5.4 39.6 5.4H15.4ZM41.9375 9.45C42.8492 9.45 43.7235 9.80558 44.3682 10.4385C45.0128 11.0715 45.375 11.9299 45.375 12.825C45.375 13.7201 45.0128 14.5786 44.3682 15.2115C43.7235 15.8444 42.8492 16.2 41.9375 16.2C41.0258 16.2 40.1515 15.8444 39.5068 15.2115C38.8622 14.5786 38.5 13.7201 38.5 12.825C38.5 11.9299 38.8622 11.0715 39.5068 10.4385C40.1515 9.80558 41.0258 9.45 41.9375 9.45ZM27.5 13.5C31.1467 13.5 34.6441 14.9223 37.2227 17.4541C39.8013 19.9858 41.25 23.4196 41.25 27C41.25 30.5804 39.8013 34.0142 37.2227 36.5459C34.6441 39.0777 31.1467 40.5 27.5 40.5C23.8533 40.5 20.3559 39.0777 17.7773 36.5459C15.1987 34.0142 13.75 30.5804 13.75 27C13.75 23.4196 15.1987 19.9858 17.7773 17.4541C20.3559 14.9223 23.8533 13.5 27.5 13.5ZM27.5 18.9C25.312 18.9 23.2135 19.7534 21.6664 21.2724C20.1192 22.7915 19.25 24.8517 19.25 27C19.25 29.1483 20.1192 31.2085 21.6664 32.7276C23.2135 34.2466 25.312 35.1 27.5 35.1C29.688 35.1 31.7865 34.2466 33.3336 32.7276C34.8808 31.2085 35.75 29.1483 35.75 27C35.75 24.8517 34.8808 22.7915 33.3336 21.2724C31.7865 19.7534 29.688 18.9 27.5 18.9Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-7/12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px]">
                <div>
                  <h2 className="[font-size:_clamp(14px,2vw,26px)] font-bold mb-[15px] lg:mb-[46px] text-[#0000009c]">
                    Company
                  </h2>
                  <ul className="m-0 p-0 ">
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Trust Centre
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Recognitions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="[font-size:_clamp(14px,2vw,26px)] font-bold mb-[15px] lg:mb-[46px] text-[#0000009c]">
                    Resources
                  </h2>
                  <ul className="m-0 p-0 ">
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Publications
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Testinonials
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="[font-size:_clamp(14px,2vw,26px)] font-bold mb-[15px] lg:mb-[46px] text-[#0000009c]">
                    Products
                  </h2>
                  <ul className="m-0 p-0 ">
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Docurate
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        VisionTech
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Fusio
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Rae
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Notei
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="[font-size:_clamp(14px,2vw,26px)] font-bold mb-[15px] lg:mb-[46px] text-[#0000009c]">
                    Solutions
                  </h2>
                  <ul className="m-0 p-0 ">
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Canse{" "}
                        <span className="text-[14px]">
                          (Cancer Risk Predictor)
                        </span>
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Therai{" "}
                        <span className="text-[14px]">
                          (Cancer Prognostic Tool)
                        </span>
                      </Link>
                    </li>
                    <li className="mb-[10px] lg:mb-[24px]">
                      <Link
                        href="#"
                        className="text-[#707070] [font-size:_clamp(10px,2vw,20px)]"
                      >
                        Excerli{" "}
                        <span className="text-[14px]">(Workout Platform)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-[30px] lg:mt-[0px] mb-[30px] lg:mb-[58px] flex-row items-end  ">
            <div className="basis-full pe-[15px] lg:basis-6/12">
              <div className="max-w-[556px]">
                <span className="text-[#0000008a] font-normal [font-size:_clamp(12px,2vw,32px)] ">
                  For Latest Insights
                </span>
                <h3 className="text-[#000000] font-normal leading-[1.3] [font-size:_clamp(16px,2vw,48px)]">
                  Subscribe for Updates.
                </h3>
                <form action="" className="mt-[30px] lg:mt-[50px]">
                  <div className="w-full  group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block arrow-bg-input pe-[35px] bg-no-repeat  py-2.5 px-0 w-full  text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none   focus:outline-none focus:ring-0 placeholder:font-light placeholder:text-[#000000bf] text-[20px] focus:border-[#FE6623E3] peer"
                      placeholder="Enter your email address.."
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <hr className="border-0 h-[1px] bg-hr-gradient" />
          </div>
          <div className="text-center py-[15px] lg:py-[32px]">
            <span className="text-[#292C33] block mb-[32px] text-[14px]">
              @2024 DeeCogs
            </span>
            <ul className="flex justify-center">
              <li className="px-[32px]">
                <Link href="#" className="text-[#292C33] text-[14px]">
                  Legal
                </Link>
              </li>
              <li className="px-[32px]">
                <Link href="#" className="text-[#292C33] text-[14px]">
                  Privacy
                </Link>
              </li>
              <li className="px-[32px]">
                <Link href="#" className="text-[#292C33] text-[14px]">
                  Trust
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="/image/footer-shape.png"
          className="absolute max-w-[315px]  md:max-w-[1280px] right-0 bottom-0 z-0"
          alt=""
        />
      </footer>

      <Flowbite theme={{ theme: customTheme }}>
        <Modal
          show={openModal}
          size="xxl"
          popup
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header />

          <Modal.Body className="lg:px-[200px] lg:pb-[80px] relative">
            <div className="space-y-6 h-full flex items-center flex-wrap ">
              <div className="w-full">
                <h3 className="text-[#000]  text-[28px] lg:text-[56px] leading-normal">
                  <span className="text-[#454545] block">
                    Get in touch with Us.
                  </span>{" "}
                  We are here to Assist you.
                </h3>

                <form action="" className="!mt-[30px] lg:!mt-[80px]">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-[48px] gap-y-[20px] gap-x-[15px]  md:gap-x-[32px]">
                    <div>
                      <input
                        type="text"
                        id="floating_email"
                        className="block min-h-[56px]  md:min-h-[78px]    p-[10px] w-full  text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none   focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                        placeholder="Your Name"
                        required
                        name="floating_email"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="floating_email"
                        className="block min-h-[56px]  md:min-h-[78px]     p-[10px] w-full  text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none   focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                        placeholder="Email Address"
                        required
                        name="floating_email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="floating_email"
                        className="block min-h-[56px]  md:min-h-[78px]     p-[10px] w-full  text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none   focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                        placeholder="Phone Number (optional)"
                        required
                        name="floating_email"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <textarea
                        id="floating_email"
                        className="block min-h-[110px]  md:min-h-[146px] p-[10px]     w-full  text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none   focus:outline-none focus:ring-0 placeholder:text-[#000000] text-[20px] focus:border-[#FE6623E3] peer"
                        placeholder="Message"
                        required
                        name="floating_email"
                      ></textarea>
                    </div>

                    <div className="md:col-span-3">
                      <Button className="bg-[#fe6623e3] !outline-0  hover:!bg-[#fe6623e3] !shadow-none !text-[16px] xl:!text-[22px] border border-[#fe6623] hover:!bottom-[#fff] leading-[] rounded-[32px] py-[8px] px-[62px] inline-block text-[#ffffffe6]">
                        <span className="!text-[16px] xl:!text-[22px]">
                          Send
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <img
                src="/image/d-overlay.png"
                className="max-w-[360px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                alt=""
              />
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </>
  );
}
