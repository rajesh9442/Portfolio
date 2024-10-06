import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Saayam",
      location: "San Jose, California",
      period: "May 2024 - Present",
      responsibilities: [
        "Utilized React to build dynamic and responsive user interfaces, enhancing user experience and interaction.",
        "Implemented process improvements and automation solutions, resulting in 15% increase in productivity.",
        "Developed backend services using AWS, PostgreSQL and Java Spring Boot for scalable and secure cloud-based applications.",
        "Integrated Apache Kafka for real-time data processing and streaming.",
        "Implemented best practices for code quality including code reviews, unit testing, and continuous integration/deployment (CI/CD) pipelines."
      ]
    },
    {
      title: "Software Engineer",
      company: "Infosys",
      location: "Karnataka, IN",
      period: "Aug 2020 - Aug 2022",
      responsibilities: [
        "Engineered responsive interfaces with Angular, optimizing user interaction and engagement, leading to a 30% increase in average session duration and a 20% rise in conversion rates.",
        "Implemented end-to-end integration of frontend and backend systems using RESTful APIs with Java Spring Boot and utilizing MySQL database, optimizing data flow processes while achieving a 40% reduction in API response times.",
        "Spearheaded a groundbreaking project utilizing Big Data and predictive analytics to develop digitalized knowledge models, enabling forward-thinking decision-making and improved results."
      ]
    }
  ]

  return (
    <section id="experience" className="mt-16">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-blue-600 dark:text-blue-400">{exp.company} - {exp.location}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 mb-1">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience