import React from "react";

const About = () => {
  return (
    <section id="sobre-wannacode" className="min-h-screen bg-[#417430] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white text-left">
            Sobre Wannacode
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16 relative min-h-[300px]">
            <div className="text-white/90 text-left md:self-start">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="text-white/90 text-left md:self-end">
              <p className="text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>

          <div className="w-4/5 mx-auto">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Equipo Wannacode"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
