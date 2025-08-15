"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/MovingBorder";
import Typewriter from "@/components/ui/Typewriter";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [text, setText] = useState("");
  const name = "Mihir Kasodariya";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    setText("");
    const type = () => {
      if (i < name.length) {
        setText(name.slice(0, i + 1));
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  }, []);

  const techStack = [
    "Node.js",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "MySQL",
    "SQL",
    "Express.js",
    "Adonis.js",
    "Socket.io",
    "Serverless",
    "AWS",
  ];

  return (
    <>
      <section 
        id="home" 
        className="w-full flex flex-col-reverse lg:flex-row max-w-[1520px] py-8 sm:py-12 lg:py-[50px] sm:px-6 lg:px-10 justify-between items-center mx-auto min-h-screen lg:min-h-screen"
      >
        {/* Content Section */}
        <div className="xl:max-w-4/6 lg:max-w-1/2 w-full space-y-4 sm:space-y-4 lg:space-y-5 order-2 lg:order-1">
          <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[60px] font-bold block">
            Hi, I am Mihir
          </span>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl sm:text-3xl h-7 sm:h-auto md:text-4xl lg:text-5xl xl:text-[68px] font-extrabold leading-tight tracking-tight"
          >
            <Typewriter
              phrases={[
                "Web Developer",
                "MERN Stack Developer",
                "Full-Stack Developer",
                "AWS Deployment",
                "Back-end Developer",
                "Front-end Developer",
              ]}
              typingSpeed={100}
              deletingSpeed={60}
              pauseTime={1000}
              className="text-[#C9F31D]"
            />
            <br className="hidden sm:block" />
          </motion.h1>
          
          <motion.p
            className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            I'm a{" "}
            <span className="font-semibold text-[#FF9D00] drop-shadow-md">
              Web Developer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#00FFCC] drop-shadow-md">
              MERN Stack
            </span>{" "}
            enthusiast, focused on building{" "}
            <span className="italic text-white">fast</span>,{" "}
            <span className="italic text-white">secure</span>, and{" "}
            <span className="italic text-white">scalable</span> web applications.
            My goal is to create clean, reliable digital products that deliver a
            smooth, intuitive user experience.
          </motion.p>
          
          {/* Social Media Links */}
          <motion.div className="flex flex-wrap  gap-3 sm:gap-4 lg:gap-6 justify-center sm:justify-start">
            <a
              href="https://github.com/mihirkasodariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="hover:bg-gradient-to-br from-[#5865F2] via-[#651EE2] to-[#6A00DB] transition-all duration-300 rounded-[12px] p-2 sm:p-[10px] border border-[#C9F31D] hover:border-[#6A00DB]"
            >
              <img
                src="/assets/github.svg"
                alt="github icon"
                className="!h-[20px] sm:!h-[22px]"
              />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01e115c6a20bfa3866?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="upwork"
              className="hover:bg-gradient-to-br from-[#00FB73] to-[#00B25B] transition-all duration-300 rounded-[12px] p-2 sm:p-[10px] border border-[#C9F31D] hover:border-[#00B25B]"
            >
              <img
                src="/assets/upwork.svg"
                alt="upwork icon"
                className="!h-[20px] sm:!h-[22px]"
              />
            </a>

            <a
              href="https://linkedin.com/in/mihirkasodariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="hover:bg-gradient-to-tr from-[#007BB8] to-[#0044E9] hover:from-[#0044E9] hover:to-[#007BB8] transition-all duration-300 rounded-[12px] p-2 sm:p-[10px] border border-[#C9F31D] hover:border-[#0044E9]"
            >
              <img
                src="/assets/linkedin.svg"
                alt="linkedin icon"
                className="!h-[20px] sm:!h-[22px]"
              />
            </a>

            <a
              href="https://www.instagram.com/mihir_kasodariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="hover:bg-[linear-gradient(135deg,_#FFE185_7.47%,_#FFBB36_25.23%,_#FF5176_39.47%,_#F63395_52.03%,_#A436D2_70.41%,_#5F4EED_92.63%)] transition-all duration-300 rounded-[12px] p-2 sm:p-[10px] border border-[#C9F31D] hover:border-[#FF5176]"
            >
              <img
                src="/assets/instagram.svg"
                alt="instagram icon"
                className="!h-[20px] sm:!h-[22px]"
              />
            </a>

            <a
              href="https://x.com/mihirkasodariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
              className="hover:bg-gradient-to-br from-[#23004A] via-[#020003] to-[#000000] transition-all duration-300 rounded-[12px] p-2 sm:p-[10px] border border-[#C9F31D] hover:border-[#23004A]"
            >
              <img
                src="/assets/twitter.svg"
                alt="twitter icon"
                className="!h-[20px] sm:!h-[22px]"
              />
            </a>
          </motion.div>
          
          {/* Download CV Button */}
          <div className="w-full sm:w-[180px] flex justify-center sm:justify-start">
            <a 
              href="/assets/mihir_resume.pdf" 
              download
              className="w-full sm:w-auto"
            >
              <Button
                borderRadius="1.75rem"
                className="w-full bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] button-hover-fix !flex justify-center text-white dark:text-white border-slate-800 dark:border-slate-800 relative rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 z-[80] cursor-pointer"
                containerClassName=""
                borderClassName=""
                duration={3500}
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
        
        {/* Hero Image Section */}
        <div className="flex xl:max-w-2/6  lg:max-w-1/2 w-[300px] xl:w-auto justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
          <img 
            src="/assets/hero.svg" 
            alt="Hero" 
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] 2xl:h-[720px] h-auto object-contain" 
          />
        </div>
      </section>
    </>
  );
}