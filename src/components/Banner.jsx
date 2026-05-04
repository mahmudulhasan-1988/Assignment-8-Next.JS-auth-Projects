"use client";

import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  return (
    <div className="mt-10 rounded-2xl overflow-hidden">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full">

              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4">
                  {banner.title}
                </h2>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default BannerSlider;
