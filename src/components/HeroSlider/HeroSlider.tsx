import { useState, useEffect } from "react";

interface HeroImage {
  src: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  {
    src: "https://res.cloudinary.com/dijfs2fcy/image/upload/v1749390526/hero1_yvtxsy_h9sfdm.jpg",
    alt: "Valle de Uco - Montañas al atardecer",
  },
  {
    src: "https://res.cloudinary.com/dijfs2fcy/image/upload/v1749390526/hero2_vexvl5_o6e3sx.jpg",
    alt: "Valle de Uco - Viñedos y montañas",
  },
  {
    src: "https://res.cloudinary.com/dijfs2fcy/image/upload/v1749390526/hero3_ibzr1v_solitu.jpg",
    alt: "Valle de Uco - Paisaje andino",
  },
  {
    src: "https://res.cloudinary.com/dijfs2fcy/image/upload/v1749390781/her4_wt0r3x.jpg",
    alt: "Valle de Uco - Cielo dramático",
  },
   {
    src: "https://res.cloudinary.com/dijfs2fcy/image/upload/v1749390526/hero5_dkvtye_a1xzc5.jpg",
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
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Contenido del hero */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">

          <div>
      
           <img src="https://res.cloudinary.com/dijfs2fcy/image/upload/v1749688186/Logo-hero_rzcibi.svg" className="w-[283px] md:w-[557px]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
