import React from "react";
import frontEnd from "../assets/images/front-end.png";
import backEnd from "../assets/images/backend.png";
import uiImg from "../assets/images/design.png";
import appsImg from "../assets/images/apps.png";

import { FaNode, FaJava, FaGithub, FaAws, FaPython  } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoFigma } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiReact,
  SiOracle,
} from "react-icons/si";
import { TbBrandAws } from "react-icons/tb";
const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-4">
            What I can do
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            As a proficient developer in MERN stack and Java, I offer a strong
            foundation in both front-end and back-end technologies, enabling me
            to build robust and dynamic web applications. My expertise in these
            areas will empower your company to deliver cutting-edge solutions
            and drive forward in today's competitive digital landscape.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:msx-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm text-semibold">
              {/* Vertical line runing through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* Left card */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] text-xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Craft captivating user interfaces and interactive web
                          experiences using the latest frontend technologies. I
                          combine creativity and functionality to deliver
                          seamless user journeys that leave a lasting impact.
                        </p>

                        <div className="flex flex-wrap gap-3 items-center rounded-xl py-3  group-hover:text-white">
                          <AiFillHtml5 className="text-2xl" />
                          <span className="">HTML</span>

                          <IoLogoCss3 className="text-2xl" />
                          <span>CSS</span>

                          <BiLogoTailwindCss className="text-2xl" />
                          <span>Tailwind</span>

                          <SiJavascript className="text-2xl" />
                          <span>JavaScript</span>

                          <SiReact className="text-2xl" />
                          <span>React</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontEnd} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* RightCard */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] text-xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Build robust and scalable server-side applications
                          with my expertise in backend technologies. I create
                          efficient and secure systems to handle complex
                          business logic and ensure seamless data management.
                        </p>

                        <div className="flex flex-wrap gap-3 items-center rounded-xl py-3 group-hover:text-white">
                          <SiMongodb className="text-2xl" />
                          <span className="">MongoDB</span>

                          <SiExpress className="text-2xl" />
                          <span>Express.JS</span>

                          <FaNode className="text-2xl" />
                          <span>Node.JS</span>

                          <FaJava className="text-2xl" />
                          <span>Java</span>

                          <FaPython className="text-2xl" />
                          <span>Python</span>

                          <SiMysql className="text-2xl" />
                          <span>MySQL</span>


                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backEnd} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Left card-----2 */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] text-xl">
                          UI-UX Design
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Create visually stunning and user-friendly interfaces
                          that elevate user experiences. My keen eye for design
                          and understanding of user behavior drives my
                          commitment to crafting elegant and intuitive designs.
                        </p>

                        <div className="flex flex-wrap gap-3 items-center rounded-xl py-3 group-hover:text-white">
                          <BiLogoFigma className="text-2xl" />
                          <span className="">Figma</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* RightCard-------2 */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] text-xl">
                          Full-Stack Web Development & Cloud Solutions
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Expert in full-stack web development & cloud
                          solutions, leveraging tools like Git/GitHub, Oracle
                          Cloud, and AWS to build scalable and secure
                          applications that drive business success.
                        </p>

                        <div className="flex flex-wrap gap-3 items-center rounded-xl py-3 group-hover:text-white">
                          <FaGithub className="text-2xl" />
                          <span>Git/ Github</span>
                          <SiOracle className="text-2xl" />
                          <span>Oracle Cloud</span>
                          <FaAws className="text-2xl" />
                          <span>AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backEnd} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
