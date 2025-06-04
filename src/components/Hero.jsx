import { motion } from "framer-motion";
import React from "react";
const Hero = () => (
  <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Prashast Saxena</h2>
      <p className="text-xl md:text-2xl mb-6">Full Stack Developer | CSE (AI) Student</p>
      <a href="https://drive.google.com/file/d/1r5TmGrDx9dUIYhftcwveWV3ceV8WSiFq/view?usp=sharing"
         target="_blank" rel="noopener noreferrer"
         className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
         Download Resume
      </a>
    </motion.div>
  </section>
);

export default Hero;
