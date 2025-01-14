import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Soluciones personalizadas, elaboradas con colaboración y experiencia.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          En Wannacode, nos dedicamos a ofrecer calidad, innovación y
          adaptabilidad para satisfacer tus necesidades específicas.
        </p>
        <div className="mt-16">
          <button className="text-gray-500 flex items-center gap-2 mx-auto">
            Conócenos
            <svg
              className="w-6 h-6"
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
      </div>
    </section>
  );
};

export default Hero;
