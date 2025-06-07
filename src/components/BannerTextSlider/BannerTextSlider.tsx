"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div id={id} className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Content Section */}
      <div className="lg:w-1/2 bg-[#D7D5CC] flex items-center justify-center py-28 px-8 lg:p-16 ">
        <div className="max-w-md space-y-8">
          <div className="space-y-2">
            <h1 style={{ fontFamily: "NolanNextBold2" }} className="text-4xl  text-black font-bold lg:text-[40px] ">
              {title}
            </h1>
            <h2 style={{ fontFamily: "NolanNextRegular" }} className="text-4xl  text-black  lg:text-[40px] ">
              {subtitle}
            </h2>
          </div>

          <ul className="space-y-3 text-gray-800">
            {features.map((feature, index) => (
              <li className="flex items-center" key={features[index]}>
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0"></span>
                <span style={{ fontFamily: "NolanNextRegular" }}  className="text-[25px] font-[400] text-black leading-tight">{feature}</span>
              </li>
            ))}
          </ul>

          <button style={{ fontFamily: "NolanNextRegular" }} className=" font-[400] px-8 py-3 text-[25px] border-gray-800 text-black hover:bg-gray-800 hover:text-white transition-colors border cursor-pointer">
            Quiero más información
          </button>
        </div>
      </div>

      {/* Right Image Slider Section */}
      <div className="lg:w-1/2 relative h-[100vh] lg:h-screen">
        <div className="relative w-full h-full overflow-hidden flex flex-col items-end justify-end">
          <img
            src={images[currentImage] || "/placeholder.svg"}
            alt={`Suite image ${currentImage + 1}`}
            className="object-cover w-full h-full"
          />

          {/* Navigation Arrows (moved to bottom) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-around px-6 z-10">
            <button
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
            </button>

            <button
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 cursor-pointer" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImage
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
