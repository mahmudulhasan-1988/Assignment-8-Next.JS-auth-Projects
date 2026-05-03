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


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 2
    );
  };

  return (
    <div className="relative w-full  h-[400px] overflow-hidden rounded-2xl mt-10">

   
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-opacity duration-00 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">
              {banner.title}
            </h2>
          </div>
        </div>
      ))}

    
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 px-3 py-2 rounded text-4xl"
      >
        <RiArrowLeftSLine />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 px-3 py-2 rounded text-4xl"
      >
        <RiArrowRightSLine />
      </button>

    
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-gray-400"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;