

import { useState } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-[#282627] text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-light tracking-wide">INSIDE UCO</span>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex gap-10 items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Proyecto
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Bed & Wine
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Casas
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Fincas
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Guatallary
                </a>
              </div>
            </div>
            <a
              href="#"
              className="bg-white text-gray-900 px-6 py-2 font-light hover:bg-gray-100 transition-colors duration-200"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
          <a
            href="#"
            className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 font-light"
          >
            Proyecto
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 font-light"
          >
            Bed & Wine
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 font-light"
          >
            Casas
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 font-light"
          >
            Fincas
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200 font-light"
          >
            Guatallary
          </a>
          <a
            href="#"
            className="block mx-3 my-2 bg-white text-gray-900 px-6 py-2 text-center font-light hover:bg-gray-100 transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}
