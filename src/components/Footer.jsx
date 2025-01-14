import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold mb-6">Somos Wannacode</h3>
            <div className="space-y-2">
              <a
                href="https://linkedin.com"
                className="block hover:text-gray-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:wannacode@gmail.com"
                className="block hover:text-gray-300"
              >
                wannacode@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-gray-400">Productos</p>
            <p className="mt-2">Desarrollo de aplicaciones web</p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-gray-400">Ubicación</p>
            <p className="mt-2">Córdoba (Argentina)</p>
            <p className="text-5xl font-bold mt-4">2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
