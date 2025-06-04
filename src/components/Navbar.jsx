import React from "react";
import { motion } from "framer-motion";

const Navbar = () => (
   <div className="font-sans text-white bg-black scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Prashast Saxena</h1>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>
      </div>
);

export default Navbar;
