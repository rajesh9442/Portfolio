import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import EmployeeCRUD from '../images/EmployeeCRUD.png';
import LED from '../images/led.png';
import Chat from '../images/chat.png';
import Notes from '../images/notes.png';
import Recipe from '../images/recipe.png';
import ML from '../images/ml.png';
import Weather from '../images/weather.png';

const Projects = () => {
  const projects = [
    {
      name: "Employee CRUD",
      description: "Full Stack Application for employee management using Java Spring Boot and TypeScript.",
      tags: ["Java Spring Boot", "TypeScript", "MySQL"],
      githubLink: "https://github.com/rajesh9442/Employee_CRUD-UI",
      image: EmployeeCRUD
    },
    {
      name: "LED Website",
      description: "Designed LED Website for a Company owner who required website for his company.",
      tags: ["React js", "JavaScript"],
      demoLink: "https://led-website-lac.vercel.app/",
      githubLink: "https://github.com/rajesh9442/LED-Website",
      image: LED
    },
    {
      name: "Chat Buddy",
      description: "Real-time chat application using Spring Boot and WebSocket for instant messaging.",
      tags: ["Spring Boot", "WebSocket", "JavaScript"],
      githubLink: "https://github.com/rajesh9442/ChatBuddy",
      image: Chat
    },
    {
      name: "Note Stack",
      description: "React Node Project for note-taking with RESTful APIs and AWS-hosted PostgreSQL database.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      githubLink: "https://github.com/NabeelAhmed08/notes-app",
      image: Notes
    },
    {
      name: "Recipe Finder",
      description: "JavaScript-based recipe search engine with access to over 500,000 recipes.",
      tags: ["JavaScript", "API Integration"],
      demoLink: "https://recipe-finder-blond-tau.vercel.app/",
      githubLink: "https://github.com/rajesh9442/RecipeFinder",
      image: Recipe
    },
    {
      name: "Weather Today",
      description: "Check today's weather using this application.",
      tags: ["Angular", "TypeScript"],
      demoLink: "https://weather-today-tau.vercel.app/",
      githubLink: "https://github.com/rajesh9442/Weather-Today",
      image: Weather
    },
    {
      name: "Image Detection",
      description: "Machine learning project for image classification with 90% accuracy.",
      tags: ["Python", "Machine Learning", "Computer Vision"],
      githubLink: "https://github.com/rajesh9442/ImageClassification",
      image: ML
    }
  ]

  return (
    <section id="projects" className="mt-16">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card hover:scale-105 transition-transform duration-300 p-4 border rounded-lg">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-auto object-cover mb-4 rounded-lg" 
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">{tag}</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              {/* Conditional rendering for the demo link */}
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  <ExternalLink size={16} className="mr-1" /> Demo
                </a>
              )}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:underline">
                <Github size={16} className="mr-1" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
