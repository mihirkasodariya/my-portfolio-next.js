"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/MovingBorder";
import Typewriter from "@/components/ui/Typewriter";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col lg:flex-row max-w-[1520px] pt-2 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-[50px] sm:px-6 lg:px-10 justify-between items-center mx-auto min-h-screen lg:min-h-screen overflow-hidden"
    >
      {/* Content Section */}
      <div className="xl:max-w-4/6 lg:max-w-1/2 w-full space-y-6 sm:space-y-8 lg:space-y-5 px-4 sm:px-0 mt-8 lg:mt-0 z-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[60px] font-bold block"
        >
          Hi, I am Mihir
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-[68px] font-extrabold leading-tight tracking-tight min-h-[60px] sm:min-h-[80px]"
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
        </motion.div>

        <motion.p
          className="max-w-xl text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          {[
            {
              href: "https://github.com/mihirkasodariya",
              label: "github",
              src: "/assets/github.svg",
              colors: "hover:bg-gradient-to-br from-[#5865F2] via-[#651EE2] to-[#6A00DB]",
              borderColor: "hover:border-[#6A00DB]",
            },
            {
              href: "https://www.upwork.com/freelancers/~01e115c6a20bfa3866?mp_source=share",
              label: "upwork",
              src: "/assets/upwork.svg",
              colors: "hover:bg-gradient-to-br from-[#00FB73] to-[#00B25B]",
              borderColor: "hover:border-[#00B25B]",
            },
            {
              href: "https://linkedin.com/in/mihirkasodariya",
              label: "linkedin",
              src: "/assets/linkedin.svg",
              colors: "hover:bg-gradient-to-tr from-[#007BB8] to-[#0044E9] hover:from-[#0044E9] hover:to-[#007BB8]",
              borderColor: "hover:border-[#0044E9]",
            },
            {
              href: "https://www.instagram.com/mihir_kasodariya",
              label: "instagram",
              src: "/assets/instagram.svg",
              colors: "hover:bg-[linear-gradient(135deg,_#FFE185_7.47%,_#FFBB36_25.23%,_#FF5176_39.47%,_#F63395_52.03%,_#A436D2_70.41%,_#5F4EED_92.63%)]",
              borderColor: "hover:border-[#FF5176]",
            },
            {
              href: "https://x.com/mihirkasodariya",
              label: "twitter",
              src: "/assets/twitter.svg",
              colors: "hover:bg-gradient-to-br from-[#23004A] via-[#020003] to-[#000000]",
              borderColor: "hover:border-[#23004A]",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`${item.colors} transition-all duration-300 rounded-[12px] p-2.5 border border-[#C9F31D] ${item.borderColor}`}
            >
              <img
                src={item.src}
                alt={`${item.label} icon`}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full sm:w-auto flex justify-center lg:justify-start pt-4"
        >
          <a
            href="/assets/mihir_resume.pdf"
            download
            className="w-full sm:w-auto"
          >
            <Button
              borderRadius="1.75rem"
              className="w-full sm:w-auto bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] button-hover-fix !flex justify-center text-white dark:text-white border-slate-800 dark:border-slate-800 relative rounded-full px-8 py-3.5 transition-all duration-500 z-[80] cursor-pointer"
              containerClassName="h-12 sm:h-14"
              borderClassName=""
              duration={3500}
            >
              Download CV
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex xl:max-w-2/6 lg:max-w-1/2 w-full justify-center items-center mt-10 lg:mt-0 px-4 relative z-0"
      >
        <motion.img
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="/assets/hero.svg"
          alt="Hero"
          className="w-[80%] max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[550px] xl:max-w-[650px] h-auto object-contain drop-shadow-[0_0_20px_rgba(201,243,29,0.25)]"
        />
      </motion.div>
    </section>
  );
}