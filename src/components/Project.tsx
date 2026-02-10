"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/MovingBorder";
import { Lock, Globe, Server, Database, Code2, Layers, Cpu, Smartphone, ExternalLink, Github, Zap } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  github?: string;
  icon: React.ReactElement;
  gradient: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Real-Time Chat App",
    description: "A seamless real-time messaging platform with group chats, typing indicators, and online status. Built for scalability and performance.",
    href: "https://example.com/chat",
    github: "https://github.com/example/chat",
    technologies: ["MERN Stack", "Socket.io", "Redux", "Tailwind"],
    icon: <Smartphone className="w-full h-full text-white" />,
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform leveraging OpenAI GPT-4 to generate blog posts, social media captions, and marketing copy in seconds.",
    href: "https://example.com/ai-saas",
    github: "https://github.com/example/ai-saas",
    technologies: ["Next.js 14", "OpenAI API", "Stripe", "PostgreSQL"],
    icon: <Cpu className="w-full h-full text-white" />,
    gradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
    featured: true,
  },
  {
    title: "E-Commerce Dashboard",
    description: "Comprehensive admin dashboard for managing products, orders, and customers. Features realtime sales analytics and inventory tracking.",
    href: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
    technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    icon: <Database className="w-full h-full text-white" />,
    gradient: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
    featured: true,
  },
  {
    title: "Crypto Trading Platform",
    description: "Live cryptocurrency trading interface with real-time price websockets, portfolio management, and secure wallet integration.",
    href: "https://example.com/crypto",
    github: "https://github.com/example/crypto",
    technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    icon: <Zap className="w-full h-full text-white" />,
    gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management tool with drag-and-drop kanban boards, team assignments, and deadline notifications.",
    href: "https://example.com/task",
    github: "https://github.com/example/task",
    technologies: ["MERN Stack", "React DnD", "JWT", "Express"],
    icon: <Layers className="w-full h-full text-white" />,
    gradient: "from-blue-500/20 via-cyan-500/20 to-sky-500/20",
  },
  {
    title: "API Gateway Service",
    description: "High-performance microservices gateway handling authentication, rate limiting, and request routing for enterprise applications.",
    href: "https://example.com/api",
    github: "https://github.com/example/api",
    technologies: ["Node.js", "Redis", "Docker", "Nginx"],
    icon: <Server className="w-full h-full text-white" />,
    gradient: "from-gray-700/50 via-gray-600/50 to-gray-500/50",
  },
];

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="project"
      className="w-full max-w-[1520px] py-20 md:py-32 mx-auto px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-[#C9F31D]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C9F31D] mb-4">
          FEATURED PROJECTS
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Building scalable, high-performance applications with modern technologies.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative w-full"
            >
              <div
                className={`
                  relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden
                  transition-all duration-500 ease-out
                  hover:border-[#C9F31D]/30 hover:shadow-[0_0_30px_-5px_rgba(201,243,29,0.1)]
                `}
              >
                {/* Content Container */}
                <div className="flex flex-col h-full p-6 md:p-8">
                  {/* Icon & Links Row */}
                  <div className="flex justify-between items-start mb-6">
                    {/* Animated Icon Container */}
                    <div className={`
                      w-14 h-14 p-3 rounded-2xl bg-gradient-to-br ${project.gradient} 
                      border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500
                    `}>
                      {project.icon}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {/* {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )} */}
                      {/* <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#C9F31D]/10 hover:bg-[#C9F31D]/20 text-[#C9F31D] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a> */}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9F31D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-[#C9F31D] bg-[#C9F31D]/5 border border-[#C9F31D]/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View All Button */}
      {projects.length > 4 && (
        <motion.div
          layout
          className="w-full flex justify-center mt-16"
        >
          <div className="w-full sm:w-[200px]">
            <Button
              borderRadius="1.75rem"
              className="w-full bg-[#111] dark:bg-[#111] py-4 text-white border-slate-800 hover:border-[#C9F31D]/50 transition-colors font-medium text-base"
              onClick={() => setShowAll(!showAll)}
              duration={4000}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
