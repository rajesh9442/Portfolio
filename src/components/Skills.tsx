import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      skills: ["Java", "Java Spring Boot", "C", "C++", "Python", "Pyspark", "REST API", "QA testing"]
    },
    {
      category: "Frontend",
      skills: ["Angular", "JavaScript", "TypeScript", "ReactJS"]
    },
    {
      category: "Software",
      skills: ["GitHub", "JIRA", "SQL Yog", "Linux OS", "Eclipse", "Microsoft Visual Studio code"]
    },
    {
      category: "Cross Functional Collaboration",
      skills: ["JIRA", "GitHub", "AWS", "Azure", "Agile", "Scrum", "Software Development Lifecycle"]
    },
    {
      category: "Database",
      skills: ["MySQL", "MSSQL"]
    }
  ]

  return (
    <section id="skills" className="mt-8">
      <h2 className="section-title">Skills</h2>
      <div className="card">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills