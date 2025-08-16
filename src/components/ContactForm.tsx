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
import { motion } from "framer-motion";


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

      const data = await response.json();
      setMessage(
        "Thank you! Your message has been sent successfully. We'll get back to you shortly."
      );
      setIsSuccess(true);
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
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (!showMessage && message) {
      const timeout = setTimeout(() => setMessage(""), 500);
      return () => clearTimeout(timeout);
    }
  }, [showMessage, message]);
  return (
    <>
      <div className="w-full max-w-[1200px] pb-[50px] justify-between items-center mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C9F31D] drop-shadow-md"
        >
          GET IN TOUCH
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto mt-3 text-center text-gray-300 text-lg md:text-xl"
        >
          Create a powerful impact online with a custom, modern website designed
          to meet your goals. Ready to bring your vision to life? Contact me and
          let’s get started!
        </motion.p>
        <section
          id="contact"
          className="w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row max-w-[1520px] mt-12 px-10  justify-between items-center mx-auto"
        >
          {/* Left Side */}
          <div className="flex-1 w-full lg:max-w-lg flex flex-col justify-center">
            <h2 className="text-3xl max-lg:text-2xl font-extrabold mt-2 leading-tight tracking-tight">
              Let’s Connect & <br /> Collaborate
            </h2>
            <p className="mt-4 text-white max-w-md">
              Have a project in mind? Let’s make it happen! Drop us a message,
              and we’ll connect with you soon.
            </p>

            <nav className="mt-6 flex gap-6 text-gray-300 text-sm font-medium">
              <div className="flex space-x-2 lg:space-x-6">
                <a
                  href="https://github.com/mihirkasodariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                  className="hover:bg-gradient-to-br from-[#5865F2] via-[#651EE2] to-[#6A00DB] transition-all duration-300 rounded-[12px] p-[10px] border border-[#C9F31D] hover:border-[#6A00DB]"
                >
                  <img
                    src="/assets/github.svg"
                    alt="github icon"
                    className="!h-[20px] md:!h-[22px]"
                  />
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~01e115c6a20bfa3866?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="upwork"
                  className="hover:bg-gradient-to-br from-[#00FB73] to-[#00B25B] transition-all duration-300 rounded-[12px] p-[10px] border border-[#C9F31D] hover:border-[#00B25B]"
                >
                  <img
                    src="/assets/upwork.svg"
                    alt="upwork icon"
                    className="!h-[20px] md:!h-[22px]"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/mihirkasodariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  className="hover:bg-gradient-to-tr from-[#007BB8] to-[#0044E9] hover:from-[#0044E9] hover:to-[#007BB8] transition-all duration-300 rounded-[12px] p-[10px] border border-[#C9F31D] hover:border-[#0044E9]"
                >
                  <img
                    src="/assets/linkedin.svg"
                    alt="linkedin icon"
                    className="!h-[20px] md:!h-[22px]"
                  />
                </a>

                <a
                  href="https://www.instagram.com/mihir_kasodariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                  className="hover:bg-[linear-gradient(135deg,_#FFE185_7.47%,_#FFBB36_25.23%,_#FF5176_39.47%,_#F63395_52.03%,_#A436D2_70.41%,_#5F4EED_92.63%)] transition-all duration-300 rounded-[12px] p-[10px] border border-[#C9F31D] hover:border-[#FF5176]"
                >
                  <img
                    src="/assets/instagram.svg"
                    alt="instagram icon"
                    className="!h-[20px] md:!h-[22px]"
                  />
                </a>

                <a
                  href="https://x.com/mihirkasodariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                  className="hover:bg-gradient-to-br from-[#23004A] via-[#020003] to-[#000000] transition-all duration-300 rounded-[12px] p-[10px] border border-[#C9F31D] hover:border-[#23004A]"
                >
                  <img
                    src="/assets/twitter.svg"
                    alt="twitter icon"
                    className="!h-[20px] md:!h-[22px]"
                  />
                </a>
              </div>
            </nav>
            <div className="space-y-2">
              <div className="hover:text-[#C9F31D] mt-10 space-y-4 text-white text-sm">
                <div className="flex items-center gap-1 sm:gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    className="w-[12px] sm:w-auto h-[20px]"
                  >
                    <path
                      fill="currentColor"
                      d="m14.928,9h.072c1.654,0,3-1.346,3-3v-3c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v3c0,1.654,1.346,3,3,3h.202l1.834,1.617c.29.256.653.384,1.016.384.358,0,.716-.126.998-.376l1.878-1.624Zm-2.877-.156l-1.81-1.594c-.183-.161-.418-.25-.661-.25h-.58c-.552,0-1-.449-1-1v-3c0-.551.448-1,1-1h6c.552,0,1,.449,1,1v3c0,.551-.448,1-1,1h-.444c-.24,0-.473.086-.654.244l-1.851,1.601Zm-6.551,9.156c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5Zm0-5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm9.5,1.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5-3.5,1.57-3.5,3.5Zm3.5-1.5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm-7.563,9.649c.193.517-.068,1.094-.585,1.288-.116.043-.234.064-.352.064-.404,0-.786-.248-.937-.649-.527-1.406-1.959-2.351-3.563-2.351s-3.036.945-3.563,2.351c-.194.518-.771.776-1.288.585-.517-.194-.778-.771-.585-1.288.818-2.183,3.003-3.649,5.437-3.649s4.618,1.466,5.437,3.649Zm12.415,1.288c-.116.043-.234.064-.352.064-.404,0-.786-.248-.937-.649-.527-1.406-1.959-2.351-3.563-2.351s-3.036.945-3.563,2.351c-.194.518-.771.776-1.288.585-.517-.194-.778-.771-.585-1.288.818-2.183,3.003-3.649,5.437-3.649s4.618,1.466,5.437,3.649c.193.517-.068,1.094-.585,1.288Z"
                    />
                  </svg>
                  <button
                    type="button"
                    className="text-sm sm:text-[18px]"
                    onClick={() => setShowCalendly(true)}
                  >
                    Request a Meeting
                  </button>
                </div>
              </div>

              <div className="hover:text-[#C9F31D]  flex items-center gap-1 sm:gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="h-[20px]"
                >
                  <path
                    fill="currentColor"
                    d="M21.793,4c-.112-.319-.378-.559-.706-.639-.172-.042-4.257-1.025-9.087-1.025-4.744,0-8.907,.982-9.082,1.024-.333,.08-.601,.323-.712,.646-.049,.143-1.206,3.536-1.206,7.994s1.156,7.852,1.206,7.994c.112,.324,.383,.568,.717,.646,.178,.042,4.42,1.023,9.078,1.023,4.819,0,8.914-.983,9.086-1.025,.33-.08,.596-.322,.708-.643,.049-.141,1.206-3.51,1.206-7.996,0-4.525-1.158-7.86-1.207-8Zm-9.793,.336c3.591,0,6.82,.589,8.067,.848,.069,.241,.156,.561,.247,.949-.56,.591-1.981,2.025-3.959,3.551-1.642,1.267-3.499,2.381-4.355,2.875-.856-.494-2.71-1.606-4.356-2.876-1.973-1.521-3.39-2.951-3.954-3.545,.091-.388,.177-.71,.246-.953,1.264-.259,4.527-.849,8.064-.849Zm8.064,14.479c-1.251,.26-4.483,.848-8.064,.848-3.472,0-6.785-.593-8.066-.852-.304-1.072-.934-3.668-.934-6.812,0-1.265,.103-2.444,.246-3.471,.77,.742,1.851,1.716,3.177,2.739,2.338,1.804,4.986,3.258,5.098,3.319,.15,.082,.315,.123,.48,.123s.33-.041,.479-.123c.112-.061,2.76-1.515,5.098-3.319,1.329-1.025,2.411-2.001,3.182-2.743,.14,1.021,.241,2.198,.241,3.475,0,3.152-.631,5.748-.936,6.815Z"
                  />
                </svg>

                <a
                  href="mailto:mihirkasodariya21@gmail.com"
                  className="text-sm sm:text-[18px]"
                >
                  mihirkasodariya21@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            className="flex-1 w-full lg:max-w-lg flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <label
              className="flex flex-col text-sm font-semibold"
              htmlFor="name"
            >
              Name *
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className={`mt-2 border rounded-md px-4 py-3 placeholder-[#838383] text-gray-900
    focus:outline-none focus:ring-1 focus:ring-[#C9F31D] focus:border-transparent
    ${
      formData.name ? "bg-sky-100" : "bg-transparent border-white text-gray-200"
    }`}
              />
            </label>

            <label
              className="flex flex-col text-sm font-semibold"
              htmlFor="email"
            >
              Email *
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className={`mt-2 border rounded-md px-4 py-3 placeholder-[#838383] text-gray-900
    focus:outline-none focus:ring-1 focus:ring-[#C9F31D] focus:border-transparent
    ${
      formData.email
        ? "bg-sky-100"
        : "bg-transparent border-white text-gray-200"
    }`}
              />
            </label>

            <label
              className="flex flex-col text-sm font-semibold"
              htmlFor="subject"
            >
              Subject *
              <input
                id="subject"
                name="subject"
                type="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write your subject"
                required
                className={`mt-2 border rounded-md px-4 py-3 placeholder-[#838383] text-gray-900
    focus:outline-none focus:ring-1 focus:ring-[#C9F31D] focus:border-transparent
    ${
      formData.subject
        ? "bg-sky-100"
        : "bg-transparent border-white text-gray-200"
    }`}
              />
            </label>

            <label
              className="flex flex-col text-sm font-semibold"
              htmlFor="message"
            >
              Message *
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
                className={`mt-2 border rounded-md px-4 py-3 placeholder-[#838383] text-gray-900
    focus:outline-none focus:ring-1 focus:ring-[#C9F31D] focus:border-transparent
    ${
      formData.message
        ? "bg-sky-100"
        : "bg-transparent border-white text-gray-200"
    }`}
              />
            </label>

            {/* Hide Send Your Message button when Calendly modal is open */}
            {!showCalendly && (
              <div className="w-[220px]">
                <button type="submit" className="w-full p-0">
                  <Button
                    borderRadius="1.75rem"
                    className="w-full bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] dark:bg-[radial-gradient(circle,rgba(57,61,66,1)_0%,rgba(9,12,17,1)_100%)] button-hover-fix !flex justify-between text-white dark:text-white border-slate-800  dark:border-slate-800 relative rounded-full px-8 py-4 transition-all duration-500 z-[80] cursor-pointer"
                    containerClassName=""
                    borderClassName=""
                    duration={3000}
                  >
                    Send Your Message
                  </Button>
                </button>
              </div>
            )}
          </form>
        </section>

        {/* Calendly Modal */}
        {showCalendly && (
          <div
            className="pt-20 fixed inset-0 flex justify-center items-center  h-screen w-screen  bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowCalendly(false)}
          >
            <div
              className="bg-opacity-30 backdrop-blur-sm w-full h-full flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close button */}
              <button
                className="absolute right-[30px] w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full shadow hover:bg-gray-400 transition cursor-pointer z-50"
                onClick={() => setShowCalendly(false)}
                aria-label="Close Calendly popup"
              >
                <span className="text-black text-lg font-bold leading-none select-none">
                  ×
                </span>
              </button>

              {/* Calendly widget */}
              <div
                id="calendly-inline-widget"
                className="flex-grow"
                style={{ minHeight: 0, height: "100%" }}
              />
            </div>
          </div>
        )}

        {handleSubmit && (
          <form onSubmit={handleSubmit} className="relative">
            {message && (
              <div
                className={`z-999 fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md text-white font-semibold shadow-lg transition-opacity duration-500 ${
                  showMessage ? "opacity-100" : "opacity-0"
                } ${isSuccess ? "bg-green-600" : "bg-red-600"}`}
                role="alert"
              >
                {message}
              </div>
            )}

            {/* Your form inputs and submit button */}
          </form>
        )}
      </div>
    </>
  );
};

export default ContactForm;
