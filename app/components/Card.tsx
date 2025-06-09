'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cards = [
  {
    id: 1,
    title: "Powering the Future",
    description: "Chevron's 2024 annual report highlights our continued commitment to building a resilient energy system that powers human progress.",
    cta: "Download the Report",
    link: "/newsroom/media/publications/annual-report"
  },
  {
    id: 2,
    title: "Sustainable Solutions",
    description: "Discover our innovative approaches to sustainable energy production and distribution that are shaping tomorrow's energy landscape.",
    cta: "Learn More",
    link: "/sustainability"
  },
  {
    id: 3,
    title: "Global Impact",
    description: "See how we're making a difference in communities worldwide through our energy initiatives and social responsibility programs.",
    cta: "Our Projects",
    link: "/projects"
  }
];

const Card = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[800px] px-4 md:bottom-24">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="brightness-100 rounded-2xl max-h-screen shadow-2xl"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-[rgba(113,27,0,0.5)] text-white backdrop-blur-[40px] p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10"
            >
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                  {card.title}
                </h2>
                <p className="text-base md:text-xl text-white/90 mb-6 max-w-[500px] mx-auto">
                  {card.description}
                </p>
                <a 
                  href={card.link}
                  className="inline-flex items-center text-base font-medium hover:underline group"
                >
                  <span className="mr-2">{card.cta}</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;