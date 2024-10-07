import React from 'react';
import Backend from '../images/backend.png';
import Frontend from '../images/frontend.png';
import Software from '../images/software.jpeg';
import Database from '../images/database.png';
import CroosFunctionalCollaboration from '../images/cfc.jpeg';

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      skills: ["Java", "Java Spring Boot", "C", "C++", "Python", "Pyspark", "REST API", "QA testing"],
      logo: Backend
    },
    {
      category: "Frontend",
      skills: ["Angular", "JavaScript", "TypeScript", "ReactJS"],
      logo: Frontend
    },
    {
      category: "Software",
      skills: ["GitHub", "JIRA", "SQL Yog", "Linux OS", "Eclipse", "Microsoft Visual Studio Code"],
      logo: Software
    },
    {
      category: "Cross Functional Collaboration",
      skills: ["JIRA", "GitHub", "AWS", "Azure", "Agile", "Scrum", "Software Development Lifecycle"],
      logo: CroosFunctionalCollaboration
    },
    {
      category: "Database",
      skills: ["MySQL", "MSSQL"],
      logo: Database
    }
  ]

  return (
    <section id="skills" className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            {/* Circular logo */}
            <div className="flex justify-center mb-4">
              <img 
                src={category.logo} 
                alt={category.category} 
                className="w-16 h-16 rounded-full object-cover" 
              />
            </div>
            {/* Category heading */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{category.category}</h3>
            {/* Skills list */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
