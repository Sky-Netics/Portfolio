"use client";

import Image from "next/image";
import { useState } from "react";
import { ImPause } from "react-icons/im";

const HeroSection: React.FC = () => {
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
    <main className="">
      <section id="about" className="relative overflow-hidden min-h-screen  ">
        <div className=" w-full  ">
          <video
            id="hero-video"
            className="  w-full object-cover h-dvh  bg-black   "
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
          <div className="absolute bottom-8 right-2 ">
            <button
              onClick={toggleVideo}
              aria-label="Toggle Video"
              className=" my-2 mx-2   bg-white rounded-full    shadow-md"
            >
              <span className="relative mx-auto my-auto">
                <ImPause size={25} />
              </span>
            </button>
          </div>
        </div>

        <div className="w-full absolute bottom-10 md:top-1/3 p-8 md:w-1/2 md:left-10 text-center  md:text-left  space-y-4 ">
          <div className="flex justify-center sm:justify-start md:justify-start">
            <Image
              src="//images.ctfassets.net/oggad6svuzkv/2WMNPzf7IPR1Vov5ZxVHtc/2952309fc5776587200c1c4b67d99daa/Read_Light_Blue.svg"
              alt="Icon"
              width={64}
              height={64}
              className="w-10 h-10 md:w-18 md:h-18"
            />
          </div>
          <h1 className=" text-3xl  md:text-6xl lg:text-7xl pb- font-bold text-white">
            Who we are<span className="text-[#02a1e2]">.</span>
          </h1>
          <p className="text-xs md:text-xl text-white ">
            Making every day more than ordinary
          </p>
          <span className=" text-gray-100/60 text-sm ">
            Our brands are trusted in millions of living rooms, kitchens,
            laundry
            
              rooms, and bathrooms—and have been passed down from generation to
              
              generation.
            
          </span>
        </div>
        <div className="w-full h-16  absolute -bottom-6  overflow-x-hidden overflow-y-hidden">
          <div className="absolute  w-full   h-[100px] rounded-[70%]   bg-gray-50"></div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
