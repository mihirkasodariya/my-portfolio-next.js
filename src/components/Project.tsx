// "use client";
// import React, { useState } from "react";
// import { PinContainer } from "../components/ui/3DProjectCard";
// import { motion } from "framer-motion";
// import { Button } from "@/components/MovingBorder";

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   href: string;
//   images: string[];
// }

// export default function Project() {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const projects = [
//     {
//       title: "Aceternity UI",
//       description: "Customizable Tailwind CSS and Framer Motion Components.",
//       href: "https://aceternity.com",
//       images: [
//         "https://ebrandpromotion.com/wp-content/uploads/2024/08/ecommerce-website-homepage-design.webp",
//         "https://ebrandpromotion.com/wp-content/uploads/2024/08/ecommerce-website-homepage-design.webp",
//         "https://ebrandpromotion.com/wp-content/uploads/2024/08/ecommerce-website-homepage-design.webp",
//       ],
//       technologies: ["MongoDB", "Express", "React", "Node.js"],
//     },
//     {
//       title: "Portfolio Website",
//       description: "A modern portfolio built with Next.js and Tailwind CSS.",
//       href: "https://example.com",
//       images: [
//         "/images/portfolio-1.jpg",
//         "/images/portfolio-2.jpg",
//         "/images/portfolio-3.jpg",
//       ],
//       technologies: ["MongoDB", "Express", "React", "Node.js"],
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack MERN e-commerce application.",
//       href: "https://shop.example.com",
//       images: [
//         "/images/ecommerce-1.jpg",
//         "/images/ecommerce-2.jpg",
//         "/images/ecommerce-3.jpg",
//       ],
//       technologies: ["MongoDB", "Express", "React", "Node.js"],
//     },
//   ];

//   return (
//     <section
//       id="project"
//       className="w-full max-w-[1520px] sm:px-6 md:px-10 pb-20 md:py-20 mx-auto flex flex-col items-center"
//     >
//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C9F31D] drop-shadow-md"
//       >
//         RECENT PROJECTS
//       </motion.h2>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//         className="max-w-3xl mx-auto mt-3 text-center text-gray-300 text-base sm:text-lg md:text-xl"
//       >
//         Here are some of my recent works showcasing my skills and technologies.
//       </motion.p>

//       <div className="w-full flex flex-wrap gap-20 md:gap-[170px] [@media(min-width:1025px)]:gap-0 items-center justify-center sm:p-10 pt-12 md:pt-24">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             <PinContainer
//               title="Read More"
//               onClick={() => setSelectedProject(project)}
//             >
//               <div className="relative flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] sm:w-[18rem] md:w-[20rem] h-[16rem] sm:h-[18rem] md:h-[20rem] rounded-lg overflow-hidden">
//                 {/* Multiple images stacked */}
//                 {project.images.map((img, i) => (
//                   <div
//                     key={i}
//                     className="absolute inset-0 rounded-lg transition-transform duration-700"
//                     style={{
//                       backgroundImage: `url(${img})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       transform: `translate(${i * 6}px, ${i * 6}px) scale(${
//                         1 - i * 0.05
//                       })`,
//                       zIndex: project.images.length - i,
//                     }}
//                   />
//                 ))}
//               </div>

//               <div className="relative z-10 pt-4 flex flex-col h-full justify-between">
//                 <div>
//                   <h3 className="max-w-xs font-bold text-sm sm:text-base text-white pb-3 sm:pb-5">
//                     {project.title}
//                   </h3>
//                   <div className="text-sm sm:text-base !m-0 !p-0 font-normal ">
//                     <span className="text-gray-300">{project.description}</span>
//                   </div>
//                 </div>
//                 <div className="flex-1" />
//               </div>
//             </PinContainer>
//           </motion.div>
//         ))}

//         {/* View More Button */}
//         <div className="w-full pt-0 [@media(min-width:1025px)]:pt-30 flex justify-center">
//           <div className="w-full sm:w-[144px]">
//             <Button
//               borderRadius="1.75rem"
//               className="w-full bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] text-white dark:text-white border-slate-800 dark:border-slate-800 rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-500"
//               containerClassName=""
//               borderClassName=""
//               duration={5000}
//             >
//               View More
//             </Button>
//           </div>
//         </div>

//         {/* Modal */}
//         {selectedProject && (
//           <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300">
//             <div className="bg-black/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 w-full max-w-3xl relative transform scale-95 animate-modalIn shadow-xl">
//               {/* Close button */}
//               <button
//                 className="absolute top-3 right-3 text-white text-xl sm:text-2xl font-bold hover:text-red-500 transition-colors"
//                 onClick={() => setSelectedProject(null)}
//               >
//                 &times;
//               </button>

//               {/* Project Title */}
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-3 sm:mb-4">
//                 {selectedProject.title}
//               </h2>

//               {/* Project Description */}
//               <p className="text-slate-300 text-sm sm:text-base text-center mb-4 sm:mb-6">
//                 {selectedProject.description}
//               </p>

//               {/* Technologies */}
//               <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
//                 {selectedProject.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Images */}
//               <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
//                 {selectedProject.images.slice(1).map((img, i) => (
//                   <img
//                     key={i}
//                     src={img}
//                     alt={`${selectedProject.title} ${i + 2}`}
//                     className="w-full sm:w-72 h-40 sm:h-48 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
//                   />
//                 ))}
//               </div>

//               {/* Visit Website Button */}
//               {selectedProject.href && (
//                 <div className="mt-6 sm:mt-8 w-full sm:w-[180px] mx-auto">
//                   <a
//                     href={selectedProject.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button
//                       borderRadius="1.75rem"
//                       className="w-full bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] text-white dark:text-white border-slate-800 dark:border-slate-800 rounded-full px-6 py-2 transition-all duration-500 shadow-md hover:shadow-lg"
//                       containerClassName=""
//                       borderClassName=""
//                       duration={3000}
//                     >
//                       Visit Website
//                     </Button>
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { PinContainer } from "../components/ui/3DProjectCard";
import { motion } from "framer-motion";
import { Button } from "@/components/MovingBorder";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  images: string[];
}

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Aceternity UI",
      description: "Africa Auto Connect is the ultimate platform for buying and selling used cars across Africa. Whether you're a dealer looking to list vehicles or a buyer searching for the perfect ride, our platform offers a seamless and secure experience. With verified listings, direct communication, and an easy-to-use interface, finding or selling a car has never been easier. Connect with trusted sellers, explore a wide range of vehicles, and drive away with confidence.",
      href: "https://africaautoconnect.com/",
      images: [
        "/project/africaautoconnect1.png",
        "/project/africaautoconnect2.png",
        "/project/africaautoconnect3.png",
      
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with Next.js and Tailwind CSS.",
      href: "https://example.com",
      images: [
        "/images/portfolio-1.jpg",
        "/images/portfolio-2.jpg",
        "/images/portfolio-3.jpg",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce application.",
      href: "https://shop.example.com",
      images: [
        "/images/ecommerce-1.jpg",
        "/images/ecommerce-2.jpg",
        "/images/ecommerce-3.jpg",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editing.",
      href: "https://blog.example.com",
      images: [
        "/images/blog-1.jpg",
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    }, {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editing.",
      href: "https://blog.example.com",
      images: [
        "/images/blog-1.jpg",
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    }, {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editing.",
      href: "https://blog.example.com",
      images: [
        "/images/blog-1.jpg",
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    }, {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editing.",
      href: "https://blog.example.com",
      images: [
        "/images/blog-1.jpg",
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    }, {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editing.",
      href: "https://blog.example.com",
      images: [
        "/images/blog-1.jpg",
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="project"
      className="w-full max-w-[1520px] sm:px-6 md:px-10 pb-20 md:py-20 mx-auto flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C9F31D] drop-shadow-md"
      >
        RECENT PROJECTS
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-3xl mx-auto mt-3 text-center text-gray-300 text-base sm:text-lg md:text-xl"
      >
        Here are some of my recent works showcasing my skills and technologies.
      </motion.p>

      <div className="w-full flex flex-wrap gap-20 md:gap-[170px] [@media(min-width:1025px)]:gap-x-0 items-center justify-center sm:p-10 pt-12 md:pt-24">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <PinContainer
              title="Read More"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] sm:w-[18rem] md:w-[20rem] h-[16rem] sm:h-[18rem] md:h-[20rem] rounded-lg overflow-hidden">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-lg transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: `translate(${i * 6}px, ${i * 6}px) scale(${
                        1 - i * 0.05
                      })`,
                      zIndex: project.images.length - i,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 pt-4 flex flex-col h-full justify-between">
                <div>
                  <h3 className="max-w-xs font-bold text-sm sm:text-base text-white pb-3 sm:pb-5">
                    {project.title}
                  </h3>
                  <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
                    <span className="text-gray-300">{project.description}</span>
                  </div>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}

        {/* View More Button */}
        <div className="w-full pt-0 flex justify-center">
          <div className="w-full sm:w-[150px]">
            <Button
              borderRadius="1.75rem"
              className="w-full bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] text-white border-slate-800 rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-500"
              onClick={() => setShowAll(!showAll)}
              duration={5000}
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300">
            <div className="bg-black/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 w-full max-w-3xl relative transform scale-95 animate-modalIn shadow-xl">
              <button
                className="absolute top-3 right-3 text-white text-xl sm:text-2xl font-bold hover:text-red-500 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-3 sm:mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base text-center mb-4 sm:mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                {selectedProject.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedProject.title} ${i + 2}`}
                    className="w-full sm:w-72 h-40 sm:h-48 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>

              {selectedProject.href && (
                <div className="mt-6 sm:mt-8 w-full sm:w-[180px] mx-auto">
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      borderRadius="1.75rem"
                      className="w-full bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] text-white border-slate-800 rounded-full px-6 py-2 transition-all duration-500 shadow-md hover:shadow-lg"
                      duration={3000}
                    >
                      Visit Website
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
