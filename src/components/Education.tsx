import React from 'react'

const Education = () => {
  const educations = [
    {
      degree: "Master's Degree, Computer Science",
      institution: "University of Wisconsin – Milwaukee",
      period: "September 2022 - May 2024"
    },
    {
      degree: "Bachelor's Degree, Electronics and Communication Engineering",
      institution: "Sona College of Technology",
      period: "Jun 2016 - Aug 2020"
    }
  ]

  return (
    <section id="education" className="mt-16">
      <h2 className="section-title">Education</h2>
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <div key={index} className="timeline-item">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
            <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education