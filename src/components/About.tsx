import React from 'react';
import ProfileImage from '../images/dp.jpeg';

const About = () => {
  return (
    <section id="about" className="card">
      <h2 className="section-title">About Me</h2>
      <div className="flex items-center space-x-6">
        <img 
          src={ProfileImage} 
          alt="Rajesh Mahendran" 
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="text-lg">
          I'm a Full Stack Developer with a Master's degree in Computer Science from the University of Wisconsin – Milwaukee.
          With experience in both frontend and backend technologies, I focus on creating scalable and efficient applications.
          My passion lies in solving complex problems and building user-friendly interfaces.
        </p>
      </div>
    </section>
  )
}

export default About