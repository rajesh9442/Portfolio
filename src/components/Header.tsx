import React from 'react'
import { User, Briefcase, Code, BookOpen, Mail } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rajesh Mahendran</h1>
          <nav>
            <ul className="flex space-x-6">
              <NavItem href="#about" icon={<User size={18} />} text="About" />
              <NavItem href="#experience" icon={<Briefcase size={18} />} text="Experience" />
              <NavItem href="#projects" icon={<Code size={18} />} text="Projects" />
              <NavItem href="#skills" icon={<BookOpen size={18} />} text="Skills" />
              <NavItem href="#contact" icon={<Mail size={18} />} text="Contact" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

const NavItem = ({ href, icon, text }) => (
  <li>
    <a href={href} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
      {icon}
      <span className="ml-1">{text}</span>
    </a>
  </li>
)

export default Header