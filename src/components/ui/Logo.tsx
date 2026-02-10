"use client";

import React from "react";
import { motion } from "motion/react";

export const Logo = () => {
    return (
        <motion.div
            className="flex items-center gap-2 group cursor-pointer"
            whileHover="hover"
        >
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Outer Hexagon/Shape */}
                <motion.div
                    className="absolute inset-0 border-2 border-[#C9F31D]/30 rounded-xl rotate-45 group-hover:rotate-90 group-hover:border-[#C9F31D] transition-all duration-500"
                />

                {/* Inner Graphic - "M" Stylized */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 z-10"
                >
                    <motion.path
                        d="M4 18V6L12 14L20 6V18"
                        stroke="#C9F31D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>

                {/* Dynamic Glow */}
                <div className="absolute inset-0 bg-[#C9F31D]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white">
                    MIHIR<span className="text-[#C9F31D]">.</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    Developer
                </span>
            </motion.div>
        </motion.div>
    );
};
