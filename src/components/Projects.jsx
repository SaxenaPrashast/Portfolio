import { motion } from "framer-motion";
import React from "react";

const Projects = () => (
  <section id="projects" className="py-20 bg-black px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 shadow-lg rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Word Lookup Dictionary</h4>
              <p className="mb-2">Implemented a fast English dictionary using Trie structures and file handling for word management in C++.</p>
              <p className="text-sm text-gray-400 mb-2">Tech: C++, File I/O</p>
              <a href="https://github.com/SaxenaPrashast/word-dictionary" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
            </div>
            <div className="bg-gray-800 p-6 shadow-lg rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Smart Bus Tracker</h4>
              <p className="mb-2">Built real-time location tracking with Node.js, WebSockets, MongoDB, and a React dashboard. Led a team of 5.</p>
              <p className="text-sm text-gray-400 mb-2">Tech: Node.js, React, MongoDB</p>
              <a href="https://github.com/SaxenaPrashast/SmartBusTracker" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
            </div>
            <div className="bg-gray-800 p-6 shadow-lg rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Job Application Portal</h4>
              <p className="mb-2">Spring Boot backend for job listings with role-based access, RESTful API, and authentication system.</p>
              <p className="text-sm text-gray-400 mb-2">Tech: Spring Boot, REST API, MySQL</p>
              <a href="https://github.com/SaxenaPrashast/Job-APP" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>
);

export default Projects;
