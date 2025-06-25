"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import p1 from "../../../public/images/slider/img2.jpg";

const Right: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full md:-translate-x-1/15">
      <div className="grid md:grid-cols-2 gap-10 my-10 pt-30 pb-30">
        <div
          className={`space-y-5 border-l-2 border-gray-700/20 pl-5 transition-all duration-400 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-5xl font-extrabold md:text-8xl">
            2<span className="text-gray-300">0</span>22
          </h1>

          <p
            className={`text-sm my-10 text-start max-w-5/6 md:text-lg text-gray-700/90 leading-tight transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0 delay-[300ms]" : "opacity-0 translate-y-5 delay-0"
            }`}
          >
            2022 was a pivotal year — challenges tested our resilience, but they also ignited our growth. We evolved, restructured, and set the foundation for a stronger, smarter team culture.
          </p>
        </div>

        <div
          className={`overflow-hidden group shadow-2xl rounded-xl transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isVisible ? "opacity-100 translate-x-0 delay-[400ms]" : "opacity-0 translate-x-10 delay-0"
          }`}
        >
          <Image
            src={p1}
            alt="Milestone 2022"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="hover:scale-105 transition-all duration-500"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Right;
