"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

export default function Slider() {
  return (
    <section id="hero" className="relative w-full h-[400px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-screen overflow-hidden">
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="brightness-75  h-full shadow-lg sm:shadow-xl md:shadow-2xl absolute inset-0"
        speed={800}
        touchRatio={1.5}
        threshold={10}
      >
        <SwiperSlide>
          <Image
            fill
            alt="Modern Shopping Experience"
            src="/images/slider/img1.jpg"
            className=" object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt="Fresh Shopping Cart"
            src="/images/slider/img2.jpg"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt="Safe Shopping"
            src="/images/slider/img3.jpg"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            fill
            alt="Safe Shopping"
            src="/images/slider/img4.jpg"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            fill
            alt="Safe Shopping"
            src="/images/slider/img5.jpg"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </SwiperSlide>
      </Swiper>

      <Card />
    </section>
  );
}
