"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/MovingBorder";
import { Logo } from "./Logo";

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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (url: string) => {
    setMenuOpen(false);
    const id = url.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, when: "afterChildren" }
    },
  };

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <div className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1440px] z-[100] transition-all duration-300`}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`rounded-full border transition-all duration-300 ${scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] py-2 px-2"
            : "bg-transparent border-transparent py-4 px-0"
            }`}
        >
          <div className="px-4 md:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative z-50 mix-blend-difference"
            >
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.url);
                  }}
                  className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden rounded-full"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                </a>
              ))}

              <Button
                borderRadius="1.5rem"
                className="bg-[#C9F31D] text-black font-bold text-sm tracking-wide border-transparent hover:bg-[#b0d618]"
                containerClassName="ml-4 h-10 w-32"
                onClick={() => handleLinkClick("#contact")}
                duration={3000}
              >
                Hire Me
              </Button>
            </nav>

            {/* Mobile Menu Button - Enhanced for touch targets */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white hover:text-[#C9F31D] transition-colors p-2 z-50 relative"
              aria-label="Open Menu"
            >
              <Menu size={32} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-[999] bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#C9F31D] transition-colors p-2 rounded-full border border-white/10 hover:bg-white/5"
            >
              <X size={36} />
            </button>

            <motion.nav className="flex flex-col items-center gap-8 w-full px-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.url);
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                  }}
                  whileHover={{ scale: 1.1, color: "#C9F31D" }}
                  className="text-3xl md:text-5xl font-bold text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                }}
                className="mt-8 w-full max-w-xs"
              >
                <Button
                  borderRadius="1.75rem"
                  className="w-full bg-[#C9F31D] text-black font-bold text-lg hover:bg-[#b0d618] border-transparent"
                  containerClassName="w-full h-14"
                  onClick={() => handleLinkClick("#contact")}
                  duration={3000}
                >
                  Let's Talk
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
