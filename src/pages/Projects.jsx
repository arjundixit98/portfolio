// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Stock Screener",
    description: "A comprehensive web application showcasing key stock metrics with real-time data and integrated news.",
    techStack: ["React", "Django", "WebSockets"],
    liveDemo: "#",
    github: "#"
  },
  {
    title: "Online Code Compiler",
    description: "An online code compiler that supports remote execution of C++ and Python code with integrated test cases.",
    techStack: ["React", "Node.js", "MongoDB", "Redis"],
    liveDemo: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-md border">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-3">
              <h4 className="font-semibold">Tech Stack:</h4>
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href={project.liveDemo} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Live Demo</a>
              <a href={project.github} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;