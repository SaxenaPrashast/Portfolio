import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Prashast Saxena</h1>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-white">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-4 pb-4 space-y-3 text-white text-center">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="block py-2 hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
