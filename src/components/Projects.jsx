import React from "react";

const About = () => {
  return (
    <section id="sobre-wannacode" className="py-20 bg-gray-100 relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-20 text-white"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Sobre Wannacode</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-16 bg-gray-200 aspect-video max-w-4xl mx-auto rounded-lg"></div>
      </div>
    </section>
  );
};

export default About;
