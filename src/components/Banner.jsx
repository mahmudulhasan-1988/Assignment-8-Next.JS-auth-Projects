"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      image: "/Banner-01.jpg",
      title: "Modern Ceramic Tiles",
    },
    {
      id: 2,
      image: "/Banner-02.jpg",
      title: "Premium Ceramic Wall Tiles",
    },
    {
      id: 3,
      image: "/Banner-03.jpg",
      title: "Stylish Marble Floor Tiles",
    },
    {
      id: 4,
      image: "/Banner-04.jpeg",
      title: "White Seamless Texture Wall Tiles",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  // Fixed Prev Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <div className=" relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-2xl mt-10">

      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4">
              {banner.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/70 p-2 rounded-full text-3xl z-20"
      >
        <RiArrowLeftSLine />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/70 p-2 rounded-full text-3xl z-20"
      >
        <RiArrowRightSLine />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;