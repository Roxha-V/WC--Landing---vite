import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-center gap-4">
            <a
              href="mailto:wannacode@gmail.com"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Mail size={20} />
              <span>wannacode@gmail.com</span>
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="tel:+543513476899"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Phone size={20} />
              <span>(+54) 351 347689</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="text-xl font-light">Wannacode 2025</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
