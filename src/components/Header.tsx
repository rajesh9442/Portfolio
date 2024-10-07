import React, { useState } from 'react'
import { User, Briefcase, Code, BookOpen, Mail, Menu } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rajesh Mahendran</h1>
          
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 flex-wrap"> {/* Added flex-wrap to handle overflow */}
              <NavItem href="#about" icon={<User size={18} />} text="About" />
              <NavItem href="#experience" icon={<Briefcase size={18} />} text="Experience" />
              <NavItem href="#projects" icon={<Code size={18} />} text="Projects" />
              <NavItem href="#skills" icon={<BookOpen size={18} />} text="Skills" />
              <NavItem href="#contact" icon={<Mail size={18} />} text="Contact" />
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <NavItem href="#about" icon={<User size={18} />} text="About" />
              <NavItem href="#experience" icon={<Briefcase size={18} />} text="Experience" />
              <NavItem href="#projects" icon={<Code size={18} />} text="Projects" />
              <NavItem href="#skills" icon={<BookOpen size={18} />} text="Skills" />
              <NavItem href="#contact" icon={<Mail size={18} />} text="Contact" />
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

const NavItem = ({ href, icon, text }) => (
  <li>
    <a
      href={href}
      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    >
      {icon}
      <span className="ml-1">{text}</span>
    </a>
  </li>
)

export default Header
