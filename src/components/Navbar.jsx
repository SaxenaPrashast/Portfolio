import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Prashast<br />Saxena</h1>
        
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`md:flex space-x-6 text-white ${isOpen ? "block mt-4" : "hidden"} md:mt-0 md:space-x-6 md:flex-row`}>
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block py-2 md:py-0 hover:text-blue-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
