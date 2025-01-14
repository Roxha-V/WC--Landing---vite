import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-medium">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20(1)-pRws5Hh5sHXEeDzAc7QwEmf8fOcuJl.png"
            alt="Wannacode"
            className="h-8"
          />
        </a>
        <div className="flex gap-8">
          <a href="#proyectos" className="text-gray-700 hover:text-gray-900">
            Proyectos
          </a>
          <a
            href="#sobre-wannacode"
            className="text-gray-700 hover:text-gray-900"
          >
            Sobre Wannacode
          </a>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
            Trabajemos juntos
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
