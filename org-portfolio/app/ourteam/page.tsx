"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Right from "./components/Right";
import Left from "./components/Left";
import Now from "./components/Now";
import p1 from "../../public/images/slider/img1.jpg";

const GrowthTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nowRef = useRef<HTMLDivElement>(null);
  const [circlePositions, setCirclePositions] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [dottedLineTop, setDottedLineTop] = useState(0);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const leftContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll<HTMLDivElement>(
      ".timeline-item"
    );

    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const positions = Array.from(items).map((item) => {
      const itemTop = item.getBoundingClientRect().top + window.scrollY;
      return itemTop - containerTop + item.offsetHeight / 2;
    });
    setCirclePositions(positions);

    if (nowRef.current) {
      const nowTop = nowRef.current.getBoundingClientRect().top + window.scrollY;
      const solidLineH = nowTop - containerTop;
      setLineHeight(solidLineH);

      setDottedLineTop(solidLineH + nowRef.current.offsetHeight);
    }

    // Animation setup
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const animateSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.remove("opacity-0");
          target.classList.remove("translate-x-10");
          target.classList.remove("-translate-x-10");
          target.classList.add("opacity-100");
          target.classList.add("translate-x-0");
        }
      });
    };

    const observer = new IntersectionObserver(animateSection, observerOptions);

    if (rightContainerRef.current) observer.observe(rightContainerRef.current);
    if (leftContainerRef.current) observer.observe(leftContainerRef.current);

    return () => {
      if (rightContainerRef.current) observer.unobserve(rightContainerRef.current);
      if (leftContainerRef.current) observer.unobserve(leftContainerRef.current);
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-white">
      <section
        ref={containerRef}
        className="md:w-5/6 mx-auto px-4 py-10 my-10 space-y-15 relative md:pl-[2rem]"
      >
        <div
          aria-hidden="true"
          className="hidden md:block absolute rounded-sm -left-22 bg-gradient-to-b from-blue-500 to-purple-600"
          style={{ width: "2px", height: lineHeight, top: 0 }}
        />

        <div
          aria-hidden="true"
          className="hidden md:block absolute -left-22 border-l border-dotted border-blue-500"
          style={{
            width: "64px",
            height: `calc(100% - ${dottedLineTop}px)`,
            top: dottedLineTop,
          }}
        />

        {circlePositions.length > 0 &&
          circlePositions.map((pos, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="hidden md:block absolute -left-22 bg-white border-4 border-blue-500 rounded-full"
              style={{
                width: 20,
                height: 20,
                top: pos - 220,
                transform: "translateX(-50%)",
              }}
            />
          ))}

        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <h1 className="text-center mx-auto text-3xl md:text-6xl font-bold leading-relaxed bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Growth Timeline
          </h1>
        </div>

        <div className="relative z-10 space-y-20">
          <div className="timeline-item relative">
            <div 
              ref={rightContainerRef}
              className="transition-all duration-700 ease-out opacity-0 translate-x-10"
            >
              <Right />
            </div>
          </div>

          <div className="timeline-item relative">
            <div 
              ref={leftContainerRef}
              className="transition-all duration-700 ease-out opacity-0 -translate-x-10"
            >
              <Left />
            </div>
          </div>

          <div className="timeline-item relative">
            <div className="w-full md:-translate-x-1/15">
              <div className="grid md:grid-cols-2 gap-10 my-10 pt-30 pb-30">
                <div className="space-y-5 border-l-2 border-gray-700/20 pl-5 relative">
                  <h1 className="text-5xl font-extrabold md:text-8xl">
                    2<span className="text-gray-300">0</span>21
                  </h1>
                  <p className="text-sm max-w-5/6 my-5 text-end md:text-lg text-gray-700/90 leading-tight">
                    Lorem ipsum dolor sit amet consectetur, atem adipisci inventore
                    temporibus! Ad sed , ! , dicta voluptates?
                  </p>
                </div>
                <div className="overflow-clip group shadow-2xl rounded-xl">
                  <Image
                    src={p1}
                    alt="vh"
                    className="hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item relative">
            <div className="w-full md:translate-x-1/15">
              <div className="grid md:grid-cols-2 gap-10 my-10 pt-30 pb-30">
                <div className="overflow-clip group shadow-2xl rounded-xl">
                  <Image
                    src={p1}
                    alt="vh"
                    className="hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="space-y-5 border-r-2 border-gray-700/20 pl-5 relative">
                  <h1 className="text-5xl font-extrabold md:text-8xl">
                    2<span className="text-gray-300">0</span>24
                  </h1>
                  <p className="text-sm my-5 text-start max-w-5/6 md:text-lg text-gray-700/90 leading-tight">
                    Lorem ipsum dolor sit amet consectetur, atem adipisci inventore
                    temporibus! Ad sed , ! , dicta voluptates?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={nowRef} />
      </section>

      <Now />
    </main>
  );
};

export default GrowthTimeline;