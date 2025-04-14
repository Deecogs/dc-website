import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[url('/image/footer.jpg')] [padding-top:_clamp(88px,4vw,255px)] relative bg-cover bg-center bg-no-repeat">
      <div className="container max-w-[90rem] mx-auto px-[10px] relative z-10">
        <div className="flex flex-wrap flex-row">
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

              <div className="flex flex-wrap mt-[30px] items-center">
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
                <ul className="m-0 p-0">
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
                <ul className="m-0 p-0">
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
                <ul className="m-0 p-0">
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
                <ul className="m-0 p-0">
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
        <div className="flex flex-wrap mt-[30px] lg:mt-[0px] mb-[30px] lg:mb-[58px] flex-row items-end">
          <div className="basis-full pe-[15px] lg:basis-6/12">
            <div className="max-w-[556px]">
              <span className="text-[#0000008a] font-normal [font-size:_clamp(12px,2vw,32px)]">
                For Latest Insights
              </span>
              <h3 className="text-[#000000] font-normal leading-[1.3] [font-size:_clamp(16px,2vw,48px)]">
                Subscribe for Updates.
              </h3>
              <form action="" className="mt-[30px] lg:mt-[50px]">
                <div className="w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block arrow-bg-input pe-[35px] bg-no-repeat py-2.5 px-0 w-full text-[#000] bg-transparent border-0 border-b-2 border-p[#000000bf] appearance-none focus:outline-none focus:ring-0 placeholder:font-light placeholder:text-[#000000bf] text-[20px] focus:border-[#FE6623E3] peer"
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
        className="absolute max-w-[315px] md:max-w-[1280px] right-0 bottom-0 z-0"
        alt=""
      />
    </footer>
  );
};

export default Footer;