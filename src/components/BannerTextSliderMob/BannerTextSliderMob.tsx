"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MainTitle from "../MainTitle/Maintitle";

interface Props {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  images: string[];
}

export default function BannerTextSlider({
  id,
  title,
  subtitle,
  features,
  images,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div
      id={id}
      className="  flex flex-col  lg:flex-row scroll-mt-20 md:scroll-mt-0 md:hidden"
    >
      {/* Left Content Section  */}
      <div className="lg:w-1/2 bg-[#D7D5CC] md:flex md:items-center md:justify-center py-[52px] md:py-0 px-[51px] lg:p-16  ">
        <div className="max-w-md space-y-8">
          <div className="space-y-2">
            <MainTitle title={`${title}`} />
            <h2
              style={{ fontFamily: "NolanNextRegular" }}
              className="text-[28px] md:text-4xl  text-black  lg:text-[40px] "
            >
              {subtitle}
            </h2>
          </div>

          <ul className="pb-6 text-gray-800">
            {features.map((feature, index) => (
              <li className="flex items-center" key={features[index]}>
                <span className="mr-3 md:mt-2 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0"></span>
                <span
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="text-xl md:text-[25px] font-[400] text-black leading-tight"
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            style={{ fontFamily: "NolanNextRegular" }}
            className=" font-[400] px-8 py-3 text-xl md:text-[25px] border-gray-800 text-black hover:bg-[#292627] hover:text-white transition-colors border cursor-pointer"
          >
            Quiero más información
          </a>
        </div>
      </div>

      {/* Right Image Slider Section */}
     {/* Right Image Slider Section */}
{/* Right Image Slider Section */}
<div className="lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-screen overflow-hidden flex-shrink-0">
  <div className="relative w-full h-full">
    <img
      src={images[currentImage] || "/placeholder.svg"}
      alt={`Suite image ${currentImage + 1}`}
      className="w-full h-full object-cover"
    />

    {/* Navegación + dots */}
    <div className="absolute bottom-6 left-0 right-0 flex justify-around px-10 xl:px-40 z-10 items-center">
      <button
        onClick={prevImage}
        className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 cursor-pointer" />
      </button>

      <div className="flex space-x-2 z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImage
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={nextImage}
        className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 cursor-pointer" />
      </button>
    </div>
  </div>
</div>


    </div>
  );
}
