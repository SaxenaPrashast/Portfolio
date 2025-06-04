import React from "react";

const Contact = () => (
  <section id="contact" className="py-20 bg-black px-4 text-white">
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
      
      <form
        className="space-y-4"
        action="https://formspree.io/f/mdkzorlq"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full border border-gray-300 p-3 rounded-xl bg-gray-900 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 p-3 rounded-xl bg-gray-900 text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full border border-gray-300 p-3 rounded-xl bg-gray-900 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 space-x-4">
        <a href="https://www.linkedin.com/in/prashastsaxena2003/" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/SaxenaPrashast" className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://leetcode.com/u/PrashastSaxena/" className="text-blue-400 hover:underline">LeetCode</a>
      </div>
    </div>
  </section>
);

export default Contact;
