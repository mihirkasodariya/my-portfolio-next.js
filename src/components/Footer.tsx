"use client";

import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@example.com", label: "Email" },
    ];

    return (
        <footer className="w-full border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9F31D]/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Logo/Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-white mb-6"
                >
                    Portfolio<span className="text-[#C9F31D]">.</span>
                </motion.div>

                {/* Navigation Links */}
                <motion.nav
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8"
                >
                    {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-400 hover:text-[#C9F31D] transition-colors text-sm sm:text-base font-medium relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C9F31D] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </motion.nav>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4 mb-8"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/5 p-3 rounded-full text-gray-400 hover:text-[#C9F31D] hover:bg-white/10 border border-white/5 hover:border-[#C9F31D]/30 transition-all duration-300"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Copyright & Credits */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-between w-full text-center sm:text-left gap-4 text-sm text-gray-500"
                >
                    <p>
                        &copy; {currentYear} Mihir Kasodariya. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> using Next.js & Tailwind
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
