import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "sobre-wannacode", "proyectos", "contacto"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-4 bg-gray-400 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row p-4">
          <a href="#hero" className="text-xl font-medium ">
            <img
              src="src/assets/images/Logo 2(tamaño) 1.png"
              alt="Wannacode"
              className="h-8 pr-4"
            />
          </a>
          <a href="#hero" className="text-xl font-medium ">
            <img
              src="src/assets/images/Rectangle.png"
              alt="Wannacode"
              className="h-8 aling-left"
            />
          </a>
        </div>
        <div className="flex gap-4 md:gap-8">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="bg-gray-50 hover:bg-gray-400 text-gray-800 hover:text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-200 rounded-full transition-all"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("sobre-wannacode")}
            className="bg-gray-50 hover:bg-gray-400 text-gray-800 hover:text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-200 rounded-full transition-all"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-400 rounded-full transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
