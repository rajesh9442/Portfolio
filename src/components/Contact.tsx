import React from 'react'
import { Phone, Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="mt-8">
      <h2 className="section-title">Contact</h2>
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactItem icon={<Phone size={20} />} text="+1-414-937-1232"/>
          <ContactItem icon={<Mail size={20} />} text="rajeshmahendran19991@gmail.com" href="mailto:rajeshmahendran19991@gmail.com" />
          <ContactItem icon={<Linkedin size={20} />} text="LinkedIn" href="https://www.linkedin.com/in/rajesh-mahendran-948391191/" />
          <ContactItem icon={<Github size={20} />} text="GitHub" href="https://github.com/rajesh9442" />
        </div>
      </div>
    </section>
  )
}

const ContactItem = ({ icon, text, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
    {icon}
    <span>{text}</span>
  </a>
)

export default Contact