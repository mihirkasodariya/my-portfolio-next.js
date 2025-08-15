"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../MovingBorder";

const navItems = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#project" },
  { name: "Contact", url: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  // Smooth scroll handler for mobile menu links
  const handleLinkClick = (url: string) => {
    setMenuOpen(false);
    const id = url.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Add this CSS globally: html { scroll-behavior: smooth; } */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 max-w-[1440px] w-full mx-auto mt-4 glow-border z-[100]">
        <Button
          borderRadius="1.75rem"
          className={`bg-white bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] !flex justify-between text-white dark:text-white border-slate-800 dark:border-slate-800
            relative w-full rounded-full px-6 py-3 transition-all duration-500 z-[80]
            ${
              scrolled
                ? "bg-[#0a0a0a] shadow-lg backdrop-blur-md"
                : "bg-[#0a0a0a]/60 backdrop-blur-lg"
            }`}
          containerClassName=""
          borderClassName=""
          duration={9000}
        >
          <div className="px-4 w-full sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold text-white tracking-wide"
            >
              MIHIR
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ name, url }) => (
                <motion.div key={name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={url}
                    className="group relative inline-block overflow-hidden h-[28px] px-1"
                  >
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    <span className="flex space-x-0.5">
                      {name.split("").map((char, idx) => (
                        <span
                          key={idx}
                          className="relative inline-block overflow-hidden"
                        >
                          <span
                            className="block transition-transform duration-300 group-hover:-translate-y-full text-white"
                            style={{ transitionDelay: `${idx * 40}ms` }}
                          >
                            {char}
                          </span>
                          <span
                            className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-white"
                            style={{ transitionDelay: `${idx * 40}ms` }}
                          >
                            {char}
                          </span>
                        </span>
                      ))}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="max-md:flex hidden text-white z-[90]"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[555] bg-black bg-opacity-95 backdrop-blur-md p-8 flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Menu Items */}
            <nav className="mt-10 flex flex-col items-center space-y-8">
              {navItems.map(({ name, url }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleLinkClick(url)}
                >
                  <span className="cursor-pointer text-white text-2xl font-medium">
                    {name}
                  </span>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
