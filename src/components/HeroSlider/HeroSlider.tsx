

import { useState, useEffect } from "react";

interface HeroImage {
    src: string;
    alt: string;
}


const heroImages: HeroImage[] = [
  {
    src: "https://picsum.photos/seed/picsum/1200/1000",
    alt: "Valle de Uco - Montañas al atardecer",
  },
  {
    src: "https://picsum.photos/seed/foot/1200/1000",
    alt: "Valle de Uco - Viñedos y montañas",
  },
  {
    src: "https://picsum.photos/seed/uno/1200/1000",
    alt: "Valle de Uco - Paisaje andino",
  },
  {
    src: "https://picsum.photos/seed/dos/1200/1000",
    alt: "Valle de Uco - Cielo dramático",
  },
];

export default function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider de imágenes */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image?.src || "/placeholder.svg"}
              alt={image?.alt || ""}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido del hero */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          {/* Logo/Icono circular */}
          <div className="mb-8 flex justify-center">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-white/80 flex items-center justify-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.2em] mb-4 sm:mb-6">
            INSIDE UCO
          </h1>

          {/* Línea decorativa */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-px bg-white/60 w-16 sm:w-24" />
            <div className="mx-4 sm:mx-6 h-2 w-2 rounded-full bg-white/60" />
            <div className="h-px bg-white/60 w-16 sm:w-24" />
          </div>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] text-white/90">
            VALLE DE UCO
          </p>
        </div>
      </div>

      {/* Indicadores del slider */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div> */}

      {/* Botones de navegación opcionales */}
      {/* <button
        onClick={() =>
          setCurrentImage(
            (prev) => (prev - 1 + heroImages.length) % heroImages.length
          )
        }
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Imagen anterior"
      >
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button> */}

      {/* <button
        onClick={() =>
          setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Imagen siguiente"
      >
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}
    </section>
  );
}
