import React from "react";
import Link from "next/link";

interface SpecializeSectionProps {
  onBookDemo: () => void;
}

const SpecializeSection = ({ onBookDemo }: SpecializeSectionProps) => {
  return (
    <section className="we-specialize-sec bg-[url('https://dcmedvectorstore.blob.core.windows.net/website-videos/we-specialize.gif')] bg-no-repeat bg-cover bg-center [padding-top:_clamp(29px,4vw,238px)] [padding-bottom:_clamp(28px,4vw,198px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex flex-wrap flex-row">
          <div className="basis-full md:basis-8/12 lg:basis-6/12">
            <div className="bg-[#FFFFFFAD] border [padding-top:_clamp(20px,4vw,62px)] [padding-bottom:_clamp(20px,4vw,62px)] [padding-left:_clamp(20px,4vw,42px)] [padding-right:_clamp(20px,4vw,42px)] rounded-[24px]">
              <div>
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                  Who we are
                </span>
                <h2 className="[font-size:_clamp(26px,2vw,46px)] [padding-top:_clamp(8px,4vw,24px)] leading-[1.3] text-[#000]">
                  We specialize in{" "}
                  <span className="heading-orange">Cutting-Edge </span>
                </h2>
                <h2 className="[font-size:_clamp(26px,2vw,46px)] [padding-bottom:_clamp(8px,4vw,31px)] leading-[1.3] text-[#000]">
                  <span className="heading-orange">AI Solutions</span>
                </h2>
              </div>
              <p className="[font-size:_clamp(8px,2vw,22px)] [margin-bottom:_clamp(21px,2vw,57px)] Helvetica-400 font-normal leading-normal text-[#000000BF]">
                A forward-thinking AI company dedicated to delivering
                intelligent, scalable solutions. Driving innovation and
                progress across diverse industries with expertise and
                impact.
              </p>
              
                <a className="bg-[#FE6623E3] leading-[1.2] [padding-left:_clamp(2px,2vw,20px)] [padding-right:_clamp(2px,2vw,20px)] [padding-top:_clamp(1px,2vw,7px)] [padding-bottom:_clamp(1px,2vw,7px)] [font-size:_clamp(8px,2vw,22px)] border border-[#FE6623] rounded-[32px] inline-block text-[#ffffffe6]"
                href="#"
                onClick={onBookDemo}
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;