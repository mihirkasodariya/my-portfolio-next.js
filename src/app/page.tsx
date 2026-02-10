"use client";
import Home from "../components/Home";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Footer from "../components/Footer";

import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";

import { motion } from "motion/react";

export default function MyApp() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-white overflow-hidden"
    >
      <ScrollProgress />
      <BackToTop />
      <Home />
      <About />
      <Experience />
      <Project />
      <ContactForm />
      <Footer />
    </motion.main>
  );
}
