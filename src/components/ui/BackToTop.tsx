"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0], // Continuous floating effect
                    }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 },
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "#b0d618" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#C9F31D] text-black shadow-[0_0_20px_rgba(201,243,29,0.5)] focus:outline-none group"
                    aria-label="Back to Top"
                >
                    {/* Pulsing Ring Effect */}
                    <span className="absolute inset-0 rounded-full border-2 border-[#C9F31D] animate-ping opacity-75" />

                    <motion.div
                        className="relative z-10"
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <ArrowUp className="w-6 h-6 stroke-[2.5px]" />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
