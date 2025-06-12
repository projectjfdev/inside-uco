"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Proyecto", href: "#proyecto" },
    { label: "Bed & Wine ", href: "#bed-wine" },
    { label: "Casas", href: "#casas" },
    { label: "Fincas", href: "#fincas" },
    { label: "Gualtallary", href: "#gualtallary" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      {/* Header Bar bg-[#282627] */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black  backdrop-blur-md w-full">
        <div className="relative flex items-center justify-between px-6 py-4">
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="relative w-12 h-12 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-white duration-200 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-[#282627]"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 relative">
              {/* Top line */}
              <span
                className={`absolute left-0 top-1 w-6 h-0.5 bg-[#D7D5CC] transform transition-all duration-300 ease-in-out origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
                }`}
              />
              {/* Middle line */}
              <span
                className={`absolute left-0 top-2.5 w-6 h-0.5 bg-[#D7D5CC] transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              {/* Bottom line */}
              <span
                className={`absolute left-0 top-4 w-6 h-0.5 bg-[#D7D5CC] transform transition-all duration-300 ease-in-out origin-center ${
                  isOpen
                    ? "-rotate-45 -translate-y-2"
                    : "rotate-0 translate-y-0"
                }`}
              />
            </div>
          </button>

          {/* Logo centrado absolutamente */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="./logo-nav.png" alt="Logo" className="w-[175px]" />
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#282627]  backdrop-blur-lg pt-36 flex justify-center "
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación principal"
          >
            {/* Menu Content */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col justify-between items-center h-full w-full px-8 pb-10"
            >
              <nav className="w-full max-w-md ">
                <ul className="space-y-2 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.2 + index * 0.05,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-white text-3xl md:text-4xl font-light tracking-wide py-4 px-6 rounded-lg hover:bg-[#282627] transition-all duration-250 ease-in-out hover:translate-x-2 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/30"
                        style={{
                          fontFamily: "NolanNextRegular",
                          fontWeight: "200",
                        }}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                className="mb-20 flex space-x-8"
              >
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault(); // prevení el scroll automático
                    setIsOpen(false);

                    // Espera 300ms a que cierre la animación antes de hacer scroll
                    setTimeout(() => {
                      const target = document.getElementById("contacto");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 300);
                  }}
                  style={{
                    fontFamily: "NolanNextRegular",
                    fontWeight: "200",
                  }}
                  className="block w-full bg-white text-black text-3xl md:text-4xl font-light tracking-wide py-4 px-6 cursor-pointer transition-all duration-250 ease-in-out hover:translate-x-2 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/30"
                >
                  Contacto
                </a>
              </motion.div>
            </motion.div>

            {/* Close overlay on background click */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
