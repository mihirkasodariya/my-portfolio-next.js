"use client";

import React, { useEffect, useState } from "react";

type TypewriterProps = {
  phrases: string[];
  typingSpeed?: number;   // milliseconds per letter when typing
  deletingSpeed?: number; // milliseconds per letter when deleting
  pauseTime?: number;     // pause before deleting or switching phrase
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1000,
  className,
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing
      const timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return <span className={className}>{text}</span>;
};

export default Typewriter;
