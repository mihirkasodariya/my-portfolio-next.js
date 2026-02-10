"use client";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    };
  }
}

import React, { useEffect, useState } from "react";
import { Button } from "@/components/MovingBorder";
import { motion, AnimatePresence } from "motion/react";

const ContactForm: React.FC = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!document.getElementById("calendly-widget")) {
      const script = document.createElement("script");
      script.id = "calendly-widget";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (showCalendly) {
      window.Calendly?.initInlineWidget({
        url: "https://calendly.com/mihirkasodariya21/30min",
        parentElement: document.getElementById("calendly-inline-widget")!,
        prefill: {},
        utm: {},
      });
    }
  }, [showCalendly]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setMessage(
        "Thank you! Your message has been sent successfully. We'll get back to you shortly."
      );
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setMessage(
        `Oops! Something went wrong while sending your message. Please try again later. (${error.message})`
      );
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        // Clear message after animation finishes
        setTimeout(() => setMessage(""), 500);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="w-full max-w-[1200px] pb-[50px] mx-auto px-4 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-5 left-1/2 z-[9999] px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md text-white font-semibold text-center min-w-[300px] max-w-[90vw] border ${isSuccess
              ? "bg-green-600/90 border-green-400"
              : "bg-red-600/90 border-red-400"
              }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C9F31D] drop-shadow-md mb-4"
      >
        GET IN TOUCH
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg md:text-xl mb-12"
      >
        Create a powerful impact online with a custom, modern website designed
        to meet your goals. Ready to bring your vision to life? Contact me and
        let’s get started!
      </motion.p>

      <section
        id="contact"
        className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-start"
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full flex flex-col"
        >
          <h2 className="text-3xl max-lg:text-2xl font-extrabold leading-tight tracking-tight text-white">
            Let’s Connect & <br /> <span className="text-[#C9F31D]">Collaborate</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-md text-lg">
            Have a project in mind? Let’s make it happen! Drop us a message,
            and we’ll connect with you soon.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            {[
              {
                href: "https://github.com/mihirkasodariya",
                src: "/assets/github.svg",
                label: "github",
                hoverDetails: "hover:bg-[#5865F2]/20 hover:border-[#5865F2]"
              },
              {
                href: "https://www.upwork.com/freelancers/~01e115c6a20bfa3866?mp_source=share",
                src: "/assets/upwork.svg",
                label: "upwork",
                hoverDetails: "hover:bg-[#00FB73]/20 hover:border-[#00FB73]"
              },
              {
                href: "https://linkedin.com/in/mihirkasodariya",
                src: "/assets/linkedin.svg",
                label: "linkedin",
                hoverDetails: "hover:bg-[#007BB8]/20 hover:border-[#007BB8]"
              },
              {
                href: "https://www.instagram.com/mihir_kasodariya",
                src: "/assets/instagram.svg",
                label: "instagram",
                hoverDetails: "hover:bg-[#F63395]/20 hover:border-[#F63395]"
              },
              {
                href: "https://x.com/mihirkasodariya",
                src: "/assets/twitter.svg",
                label: "twitter",
                hoverDetails: "hover:bg-white/20 hover:border-white"
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`transition-all duration-300 rounded-xl p-3 border border-[#333] bg-[#111] ${item.hoverDetails}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            <div className="group flex items-center gap-4 text-gray-300 hover:text-[#C9F31D] transition-colors cursor-pointer" onClick={() => setShowCalendly(true)}>
              <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-[#C9F31D]/10 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Request a Meeting</span>
            </div>

            <div className="group flex items-center gap-4 text-gray-300 hover:text-[#C9F31D] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-[#C9F31D]/10 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a href="mailto:mihirkasodariya21@gmail.com" className="text-lg font-medium">
                mihirkasodariya21@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C9F31D]/50 focus:border-[#C9F31D] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C9F31D]/50 focus:border-[#C9F31D] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="subject">Subject *</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write your subject"
                required
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C9F31D]/50 focus:border-[#C9F31D] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C9F31D]/50 focus:border-[#C9F31D] transition-all duration-300 resize-none"
              />
            </div>

            {!showCalendly && (
              <div className="mt-4">
                <Button
                  as="button"
                  type="submit"
                  borderRadius="1.75rem"
                  className="bg-slate-900 text-white border-slate-800 font-semibold tracking-wide w-full h-full"
                  containerClassName="w-full h-12"
                  duration={3000}
                >
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </motion.form>
      </section>

      {/* Calendly Modal */}
      <AnimatePresence>
        {showCalendly && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowCalendly(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111] w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[1000] text-white"
                onClick={() => setShowCalendly(false)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div
                id="calendly-inline-widget"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
