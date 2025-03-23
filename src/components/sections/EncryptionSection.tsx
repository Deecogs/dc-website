import React from "react";

const EncryptionSection = () => {
  return (
    <section className="ensuring-sec relative bg-[#FFFAF8] [padding-top:_clamp(17px,4vw,71px)] [padding-bottom:_clamp(17px,4vw,128px)]">
      <div className="container max-w-[90rem] mx-auto px-[10px]">
        <div className="flex justify-center">
          <div className="basis-full md:basis-11/12">
            <div className="text-center">
              <span className="bg-[#1316310D] rounded-[31px] py-[8px] px-[16px] text-[13px] text-[#000]">
                Privacy & Security
              </span>
              <h2 className="[font-size:_clamp(15px,2vw,48px)] [margin-top:_clamp(8px,2vw,39px)] text-[#000000CC] leading-[1.3] font-normal">
                <span>Ensuring</span>{" "}
                <span className="heading-orange">End-to-End</span> Encryption
              </h2>
            </div>
            <div className="grid-cols-1 grid md:grid-cols-2 place-items-stretch [margin-top:_clamp(40px,2vw,107px)] gap-[16px] lg:gap-[32px] xl:gap-[64px]">
              <div className="bg-[#FE66232E] items-center flex flex-row rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
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
              <div className="bg-[#FE66232E] items-center flex flex-row rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
                <div className="shrink-0">
                  <svg className="[height:_clamp(32px,2vw,79px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/>
                  </svg>
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
              <div className="bg-[#FE66232E] items-center flex flex-row rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
                <div className="shrink-0">
                  <svg className="[height:_clamp(32px,2vw,79px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                  </svg>
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
              <div className="bg-[#FE66232E] items-center flex flex-row rounded-[24px] [padding-top:_clamp(26px,3vw,48px)] [padding-bottom:_clamp(26px,3vw,48px)] [padding-left:_clamp(14px,3vw,65px)] [padding-right:_clamp(14px,3vw,65px)]">
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
  );
};

export default EncryptionSection;