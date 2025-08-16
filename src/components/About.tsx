"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Button } from "@/components/MovingBorder";

interface Tech {
  icon: ReactNode | string; // can be SVG path or emoji
  name: string;
  isImage?: boolean;
}

const techStack: Tech[] = [
  { icon: "/technology/Node.svg", name: "Node.js", isImage: true },
  { icon: "/technology/AdonisJS.svg", name: "AdonisJS", isImage: true },
  { icon: "/technology/AWS.svg", name: "AWS", isImage: true },
  { icon: "/technology/azure.svg", name: "Azure", isImage: true },
  { icon: "/technology/bootstrap.svg", name: "Bootstrap", isImage: true },
  { icon: "/technology/CSS.svg", name: "CSS", isImage: true },
  { icon: "/technology/docker.svg", name: "Docker", isImage: true },
  { icon: "/technology/express.svg", name: "Express.js", isImage: true },
  { icon: "/technology/firebase.svg", name: "Firebase", isImage: true },
  { icon: "/technology/html.svg", name: "HTML", isImage: true },
  { icon: "/technology/JavaScript.svg", name: "JavaScript", isImage: true },
  { icon: "/technology/mongodb.svg", name: "MongoDB", isImage: true },
  {
    icon: "/technology/MS-SQL-Server.svg",
    name: "MS SQL Server",
    isImage: true,
  },
  { icon: "/technology/mysql.svg", name: "MySQL", isImage: true },
  { icon: "/technology/Next.svg", name: "Next.js", isImage: true },
  { icon: "/technology/prisma.svg", name: "Prisma", isImage: true },
  { icon: "/technology/React.svg", name: "React", isImage: true },
  { icon: "/technology/serverless.svg", name: "Serverless", isImage: true },
  { icon: "/technology/Shopify.svg", name: "Shopify", isImage: true },
  { icon: "/technology/socket.io.svg", name: "Socket.IO", isImage: true },
  { icon: "/technology/Tailwind.svg", name: "Tailwind CSS", isImage: true },
  { icon: "/technology/TypeScript.svg", name: "TypeScript", isImage: true },
  { icon: "/technology/Vite.svg", name: "Vite", isImage: true },
  { icon: "/technology/Mongoose.svg", name: "Mongoose", isImage: true },
  { icon: "/technology/Strapi.svg", name: "Strapi", isImage: true },
];

export default function AboutMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="w-full max-w-[1520px] justify-between items-center mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C9F31D] drop-shadow-md"
      >
        ABOUT ME
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-3xl mx-auto mt-3 text-center text-gray-300 text-lg md:text-xl"
      >
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </motion.p>

      {/* Content Grid */}
      <div className="mt-12 grid xl:grid-cols-2 gap-20 items-start">
        {/* Left - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-extrabold mt-2 max-lg:text-2xl leading-tight tracking-tight mb-10 max-lg:mb-4">
            Get to know me!
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-300 leading-relaxed text-lg md:text-xl"
          >
            I’m a{" "}
            <span className="text-[#00FFCC] font-semibold">
              MERN Stack Developer
            </span>{" "}
            who enjoys building complete web applications — from designing the
            database and backend logic to creating{" "}
            <span className="text-[#FF9D00] font-semibold">
              smooth, user-friendly interfaces
            </span>
            .
            <br />
            <br />I love taking an idea and turning it into{" "}
            <span className="text-[#00FFCC] font-semibold">
              something people can use
            </span>
            . I focus on clean, maintainable code and making sure{" "}
            <span className="text-[#FF9D00] font-semibold">
              everything works seamlessly
            </span>
            , from the server to the browser.
            <br />
            <br />
            Problem-solving is my favorite part of development — whether it’s{" "}
            <span className="text-[#00FFCC] font-semibold">
              optimizing performance
            </span>
            , improving user experience, or finding creative solutions to tricky
            challenges.
            <br />
            <br />
            When I’m not coding, I’m{" "}
            <span className="text-[#FF9D00] font-semibold">
              exploring new tools
            </span>
            , keeping up with the latest trends in web development, or
            brainstorming ideas for my next project.
            <br />
            <br />
            My goal is to{" "}
            <span className="text-[#00FFCC] font-semibold">
              craft digital experiences
            </span>{" "}
            that are{" "}
            <span className="text-[#FF9D00] font-semibold">
              efficient and built to last
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Right - Technologies */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-extrabold max-lg:text-2xl leading-tight tracking-tight mb-10 max-lg:mb-4">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-7 justify-center xl:justify-start">
            {techStack.map((tech, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex flex-col items-center"
                >
                  {isHovered ? (
                    <Button
                      borderRadius="20px"
                      className="bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] text-white dark:text-white border-slate-800 dark:border-slate-800 relative transition-all duration-300 h-25 w-25 space-y-2 flex flex-col items-center"
                      containerClassName=""
                      borderClassName=""
                      duration={6000}
                    >
                      <motion.div
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                          ease: "easeInOut",
                          delay: index * 0.15,
                        }}
                        whileHover={{
                          boxShadow: `0 0 15px`,
                        }}
                        className="flex-col flex items-center justify-center cursor-pointer transition-shadow duration-300"
                        style={{ color: "" }}
                      >
                        {tech.isImage ? (
                          <Image
                            src={tech.icon as string}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-contain"
                            priority
                          />
                        ) : (
                          <span className="text-4xl">{tech.icon}</span>
                        )}
                      </motion.div>
                      <span className="text-sm font-sm text-gray-200 dark:text-gray-200">
                        {tech.name}
                      </span>
                    </Button>
                  ) : (
                    <motion.div
                      initial={{ y: isEven ? -10 : 10 }}
                      animate={{ y: [isEven ? -10 : 10, 0, isEven ? -10 : 10] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                      className="h-25 w-25 flex-col space-y-2 rounded-[20px] flex items-center justify-center cursor-pointer bg-white/5 backdrop-blur-sm transition-shadow duration-300"
                    >
                      {tech.isImage ? (
                        <Image
                          src={tech.icon as string}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="object-contain"
                          priority
                        />
                      ) : (
                        <span className="text-4xl">{tech.icon}</span>
                      )}
                      <span className="text-sm font-sm text-gray-200 dark:text-gray-200">
                        {tech.name}
                      </span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
