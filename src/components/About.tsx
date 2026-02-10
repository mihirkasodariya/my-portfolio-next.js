"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ReactNode } from "react";
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
  return (
    <section
      id="about"
      className="w-full max-w-[1520px] justify-between items-center mx-auto py-12 lg:py-20 px-4"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C9F31D] drop-shadow-md"
      >
        ABOUT ME
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto mt-4 text-center text-gray-300 text-lg md:text-xl"
      >
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </motion.p>

      {/* Content Grid */}
      <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8 text-white text-center lg:text-left">
            Get to know me!
          </h3>
          <div className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl space-y-4 md:space-y-6 text-justify sm:text-left">
            <p>
              I’m a{" "}
              <span className="text-[#00FFCC] font-semibold">
                MERN Stack Developer
              </span>{" "}
              who enjoys building complete web applications - from designing the
              database and backend logic to creating{" "}
              <span className="text-[#FF9D00] font-semibold">
                smooth, user-friendly interfaces
              </span>
              .
            </p>
            <p>
              I love taking an idea and turning it into{" "}
              <span className="text-[#00FFCC] font-semibold">
                something people can use
              </span>
              . I focus on clean, maintainable code and making sure{" "}
              <span className="text-[#FF9D00] font-semibold">
                everything works seamlessly
              </span>
              , from the server to the browser.
            </p>
            <p>
              Problem-solving is my favorite part of development - whether it’s{" "}
              <span className="text-[#00FFCC] font-semibold">
                optimizing performance
              </span>
              , improving user experience, or finding creative solutions to tricky
              challenges.
            </p>
            <p>
              When I’m not coding, I’m{" "}
              <span className="text-[#FF9D00] font-semibold">
                exploring new tools
              </span>
              , keeping up with the latest trends in web development, or
              brainstorming ideas for my next project.
            </p>
            <p>
              My goal is to{" "}
              <span className="text-[#00FFCC] font-semibold">
                craft digital experiences
              </span>{" "}
              that are{" "}
              <span className="text-[#FF9D00] font-semibold">
                efficient and built to last
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* Right - Technologies */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8 text-white text-center lg:text-left">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start">
            {techStack.map((tech, index) => {
              const isEven = index % 2 === 0;
              return (
                <Button
                  key={index}
                  as={motion.div}
                  borderRadius="16px"
                  className="bg-[#111] dark:bg-[#111] text-white dark:text-white border-slate-800 dark:border-slate-800 flex flex-col items-center justify-center gap-1 sm:gap-2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
                  duration={Math.floor(Math.random() * 4000) + 4000} // Random duration for organic feel
                  animate={{
                    y: [isEven ? -4 : 4, 0, isEven ? -4 : 4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + Math.random(), // Randomize duration slightly
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex flex-col items-center justify-center p-1">
                    {tech.isImage ? (
                      <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center relative">
                        <Image
                          src={tech.icon as string}
                          alt={tech.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 32px, 48px"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl sm:text-3xl md:text-4xl">{tech.icon}</span>
                    )}
                    <span className="text-[10px] sm:text-xs font-medium text-gray-300 mt-1 sm:mt-2 text-center line-clamp-1 w-full px-1">
                      {tech.name}
                    </span>
                  </div>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
