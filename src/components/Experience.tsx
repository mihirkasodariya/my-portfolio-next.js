"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  company: string;
  date: string;
  role: string;
  description: string;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    company: "CodeSmith InfoSoft LLP",
    date: "May 2025 - Present",
    role: "MERN Stack Developer",
    description:
      "Building scalable, secure, and high-performance web applications using the MERN stack. Experienced in AWS deployment, Node.js, React.js, Next.js, TypeScript, and JavaScript. Skilled in MongoDB, SQL, MySQL, Express.js, Adonis.js, Socket.IO, and serverless architectures.",
    color: "bg-yellow-400",
  },
  {
    company: "NetDroid Technology",
    date: "July 2022 – April 2025 (including 6-month internship)",
    role: "Node.js Developer",
    description:
      "Started as a 6-month intern, transitioning into a full-time Node.js Developer. Engineered robust backend systems using Node.js, Express.js, Adonis.js, and Socket.IO. Built RESTful APIs, optimized database queries, and deployed serverless services for fast, reliable, and scalable applications.",
    color: "bg-red-500",
  },
];

// Variants for cards
const cardVariants = (isLeft: boolean) => ({
  hidden: { opacity: 0, x: isLeft ? -80 : 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

// Variants for dots
const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.2 },
  },
};

const Experience: FC = () => {
  return (
    <div id="experience" className="w-full max-w-[1400px] py-20  mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C9F31D] drop-shadow-md"
      >
        EXPERIENCE
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-3 text-lg"
      >
        A journey through my professional career, showcasing roles and skills
        developed along the way.
      </motion.p>

      {/* Timeline */}
      <div className="relative mt-10">
        {/* Middle Line - hidden on small screens */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block absolute left-1/2 top-0 h-full w-[4px] bg-gradient-to-b from-[#C9F31D] via-gray-300 to-[#C9F31D] rounded-full -translate-x-1/2 origin-top"
        ></motion.div>

        <div className="flex flex-col gap-10">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex items-center w-full ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:!flex-nowrap`}
              >
                {/* Card */}
                <motion.div
                  className="relative w-full md:w-1/2"
                  variants={cardVariants(isLeft)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform border border-white/10 mx-0 md:mx-5">
                    <h3 className="text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-[#C9F31D] font-medium mt-1">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-300 mt-1">{item.date}</p>
                    <p className="text-gray-300 mt-3">{item.description}</p>
                  </div>
                </motion.div>

                {/* Dot - hidden on small screens */}
                <motion.div
                  className="hidden md:flex w-10 h-10 items-center justify-center relative z-10"
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full ${item.color} shadow-lg`}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                </motion.div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
