"use client";

import Image from "next/image";
import { useState } from "react";
import { ImPause } from "react-icons/im";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    const videoElement = document.getElementById(
      "hero-video"
    ) as HTMLVideoElement | null;
    if (videoElement) {
      if (isVideoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <main>
      <section id="about" className="relative overflow-hidden min-h-screen">
        <div className="w-full ">
          <video
            id="hero-video"
            className="w-full object-cover h-[60vh] md:h-dvh bg-black"
            autoPlay
            muted
            playsInline
            loop
            aria-label="Background video"
          >
            <source
              src="https://videos.ctfassets.net/oggad6svuzkv/3qRw7mV5YheBEgoCbNdjTU/04353ee9040c709b533ccb39ae8666d6/who-we-are-flip-compressed.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#002d62]/80 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-auto bg-gradient-to-l from-[#002d62]/80 to-transparent"></div>

          <div className="absolute bottom-8 right-2">
            <button
              onClick={toggleVideo}
              aria-label="Toggle Video"
              className="my-2 mx-2 bg-white rounded-full shadow-md"
            >
              <span className="relative mx-auto my-auto">
                <ImPause size={25} />
              </span>
            </button>
          </div>

          <div className="hidden md:block absolute bottom-10 md:top-1/4 p-8 md:w-1/2 md:left-10 text-left space-y-4 text-white">
            <div className="flex justify-left items-start">
              <Image
                src="//images.ctfassets.net/oggad6svuzkv/2WMNPzf7IPR1Vov5ZxVHtc/2952309fc5776587200c1c4b67d99daa/Read_Light_Blue.svg"
                alt="Icon"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold">
              Who we are<span className="text-[#02a1e2]">.</span>
            </h1>
            <p className="text-xl">Making every day more than ordinary</p>
            <p className="text-white/80 text-base">
              Our brands are trusted in millions of living rooms, kitchens,
              laundry rooms, and bathrooms—and have been passed down from
              generation to generation.
            </p>
          </div>
        </div>

        <div
          className="block md:hidden relative z-10 bg-[#002d62] w-full text-white text-left px-6 py-8 space-y-4
          before:absolute before:-top-8 before:left-0 before:w-full before:h-8 before:bg-gradient-to-b before:from-transparent before:to-[#002d62]"
        >
          <div className="flex justify-start">
            <Image
              src="//images.ctfassets.net/oggad6svuzkv/2WMNPzf7IPR1Vov5ZxVHtc/2952309fc5776587200c1c4b67d99daa/Read_Light_Blue.svg"
              alt="Icon"
              width={64}
              height={64}
            />
          </div>
          <h1 className="text-3xl font-bold">
            Who we are<span className="text-[#02a1e2]">.</span>
          </h1>
          <p className="text-sm font-semibold">
            Making every day more than ordinary
          </p>
          <p className="text-white/80 text-sm pb-5">
            Our brands are trusted in millions of living rooms, kitchens,
            laundry rooms, and bathrooms—and have been passed down from
            generation to generation.
          </p>
        </div>

        <div className="w-full h-16 relative overflow-visible z-20">
          <div className="absolute bottom-6 w-full h-[100px] rounded-t-[70%] bg-gray-50"></div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
