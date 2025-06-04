import { motion } from "framer-motion";
import React from "react";
import image from "../assets/image.png";

const About = () => (
  <section id="about" className="py-20 bg-gray-900 px-4 text-white">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <img src={image} alt="Profile" className="rounded-2xl w-full" />
      <div>
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="mb-4">
          I'm a Computer Science and Engineering (Artificial Intelligence) student at KIET Group of Institutions with strong experience in full-stack development. I love solving problems, building projects, and participating in coding contests. I’ve solved 700+ questions across platforms like LeetCode, Codeforces, and Hackerrank.
        </p>
        <h4 className="font-semibold mb-2">Skills:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>C/C++, Java, Python, JavaScript, SQL</li>
          <li>React.js, Node.js, Express.js, Next.js, TypeScript</li>
          <li>MongoDB, MySQL, PostgreSQL</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>Git, Linux, Postman</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
