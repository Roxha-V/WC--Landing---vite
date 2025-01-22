import React, { useState } from "react";
import "../styles/animations.css";

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("sobre-wannacode");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleEffect = () => {
    setIsGlitching(!isGlitching);
  };

  const wannaCodeText = "<wanna/code>".split("").map((letter, index) => (
    <span
      key={index}
      className={isGlitching ? "" : "wave-text"}
      style={{
        animationDelay: !isGlitching ? `${index * 0.1}s` : "0s",
        display: "inline-block",
      }}
    >
      {letter}
    </span>
  ));

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-black text-white"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-normal leading-tight mb-8">
          Soluciones personalizadas, elaboradas con colaboración y experiencia
        </h1>

        <div className="my-12 cursor-pointer" onClick={toggleEffect}>
          <h2 className={`glitch-text ${isGlitching ? "animate-glitch" : ""}`}>
            {wannaCodeText}
          </h2>
        </div>

        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-16">
          Calidad, innovación y adaptabilidad para satisfacer tus necesidades
          específicas
        </p>

        <button
          onClick={scrollToAbout}
          className="text-white flex items-center gap-2 mx-auto hover:text-gray-300 transition-colors duration-300 group"
        >
          ¡Conócenos!
          <svg
            className="w-6 h-6 transform group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
