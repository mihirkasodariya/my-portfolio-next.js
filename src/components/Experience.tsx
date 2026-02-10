"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TimelineItem {
  company: string;
  location?: string;
  role: string;
  date: string;
  description: string;
  color: string;
  type?: string;
}

const timelineData: TimelineItem[] = [
  {
    company: "Freelance",
    role: "Freelancer",
    type: "Full-time",
    date: "Aug 2025 - Present",
    description: "Developing full-stack applications using the MERN stack. Specialized in building scalable web solutions with Node.js, React, and modern cloud technologies.",
    color: "bg-blue-500 box-shadow-blue",
  },
  {
    company: "CodeSmith InfoSoft LLP",
    location: "Surat, Gujarat, India",
    role: "Web Developer",
    type: "Full-time",
    date: "May 2025 - Oct 2025",
    description: "Contributed to backend development using Node.js and Express.js. Collaborated on various web projects, ensuring code quality and performance.",
    color: "bg-yellow-400 box-shadow-yellow",
  },
  {
    company: "NetDroid Technology",
    location: "Surat, Gujarat, India",
    role: "Web Developer",
    type: "Full-time",
    date: "Oct 2022 - Mar 2025",
    description: "Developed scalable backend services using Node.js, Express.js, and Serverless architecture. Managed data with MongoDB, SQL and MySQL, and deployed applications on AWS with S3 integration and React.js.",
    color: "bg-red-500 box-shadow-red",
  },
];

const Experience: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full max-w-[1400px] py-20 px-4 mx-auto relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9F31D]/5 rounded-full blur-[100px] -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C9F31D] drop-shadow-[0_0_15px_rgba(201,243,29,0.4)]">
          EXPERIENCE
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg md:text-xl"
        >
          A journey through my professional career, showcasing roles and skills
          developed along the way.
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative mt-10">
        {/* Animated Central Line (Desktop) */}
        <motion.div
          style={{ scaleY }}
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9F31D] to-transparent -translate-x-1/2 origin-top"
        />

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-0 relative">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center w-full relative ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full md:w-1/2 p-0 sm:p-4 md:p-8"
                >
                  <div
                    className={`bg-[#0a0a0a]/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-[#C9F31D]/50 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(201,243,29,0.15)] relative overflow-hidden`}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9F31D]/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#C9F31D] transition-colors leading-tight">
                          {item.role}
                        </h3>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[#C9F31D] font-mono text-[10px] sm:text-xs md:text-sm bg-[#C9F31D]/10 px-2 sm:px-3 py-1 rounded-full border border-[#C9F31D]/20 whitespace-nowrap">
                            {item.date}
                          </span>
                          {item.type && (
                            <span className="text-gray-400 text-[10px] sm:text-xs">
                              {item.type}
                            </span>
                          )}
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9F31D]" />
                        {item.company}
                      </h4>

                      {item.location && (
                        <p className="text-gray-500 text-sm mb-3 sm:mb-4 italic">
                          {item.location}
                        </p>
                      )}

                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-justify sm:text-left mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Central Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 0.2
                    }}
                    className="relative flex items-center justify-center p-2"
                  >
                    <div className={`w-4 h-4 rounded-full ${item.color.split(" ")[0]} shadow-[0_0_15px_currentColor] z-20 relative ring-4 ring-[#0a0a0a]`} />
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-full ${item.color.split(" ")[0]}`}
                    />
                  </motion.div>
                </div>

                {/* Spacer for 50% width on Desktop */}
                <div className="w-full md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
