import { useCallback } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#282627] text-white md:py-3">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <MobileNav />
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-4xl">
              {/* <span className="font-[100]">INSIDE</span> UCO */}
              <img
                src="https://res.cloudinary.com/dijfs2fcy/image/upload/v1749688278/logo-navbar-desk_ltji4x.svg"
                alt=""
                className="md:w-[205px]"
              />
            </span>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex gap-10 items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#proyecto"
                  onClick={(e) => handleNavClick(e, "proyecto")}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                >
                  Proyecto
                </a>
                <a
                  href="#bed-wine-desk"
                  onClick={(e) => handleNavClick(e, "bed-wine-desk")}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                >
                  Bed & Wine
                </a>
                <a
                  href="#casas-desk"
                  onClick={(e) => handleNavClick(e, "casas-desk")}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                >
                  Casas
                </a>
                <a
                  href="#fincas-desk"
                  onClick={(e) => handleNavClick(e, "fincas-desk")}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                >
                  Fincas
                </a>
                <a
                  href="#gualtallary"
                  onClick={(e) => handleNavClick(e, "gualtallary")}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                >
                  Gualtallary
                </a>
              </div>
            </div>
            <a
              href="#contacto"
              style={{ fontFamily: "NolanNextRegular" }}
              className="text-black transition-colors duration-200 text-base bg-white py-2 px-5 font-[400] cursor-pointer inline-block "
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
        </div>
      </div>
    </nav>
  );
}
