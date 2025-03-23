"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroSectionProps {
  onBookDemo: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  const settings = {
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

  return (
    <section className="hero-bg h-[390px] md:h-screen overflow-hidden relative">
      <div className="container max-w-[90rem] relative z-10 mx-auto px-[10px] flex flex-col justify-end h-full">
        <div className="flex flex-row">
          <div className="basis-full">
            <h1 className="[font-size:_clamp(24px,4vw,80px)] mb-[0] font-normal leading-[1.3] text-[#ffffffb3]">
              Intelligent Systems
            </h1>
            <div className="[font-size:_clamp(24px,4vw,80px)] [margin-bottom:_clamp(17px,2vw,48px)] font-normal leading-[1.3] text-[#ffffffb3]">
              <div className="flex items-center flex-wrap flex-row">
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
                  className="bg-[#fe6623e3] hover:!bg-[#fe6623e3] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)] [font-size:_clamp(8px,2vw,22px)] border border-[#fe6623] hover:bottom-[#fff] leading-[1] rounded-[32px] inline-block text-[#ffffffe6]"
                  onClick={onBookDemo}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between [margin-top:_clamp(18px,2vw,97px)] border-t border-[#ffffffb3] pb-[13px] lg:pt-[13px] lg:pb-[38px] gap-[5px] lg:gap-[10px]">
          <div>
            <span className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]">
              LLMs
            </span>
          </div>
          <div>
            <span className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]">
              NLP
            </span>
          </div>
          <div>
            <span className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]">
              Edge Computing
            </span>
          </div>
          <div>
            <span className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]">
              Machine Learning
            </span>
          </div>
          <div>
            <span className="text-[#AAAAAD] helvetica-light font-thin [font-size:_clamp(12px,2vw,24px)]">
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
  );
};

export default HeroSection;