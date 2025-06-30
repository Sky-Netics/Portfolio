"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import defaultImg from "../public/images/marquee-3.png"; 
import hoverImg from "../public/images/marquee-2.png"; 

type Project = {
  href: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  defaultImage: StaticImageData;
  hoverImage: StaticImageData;
  imageAlt: string;
};

const projectsLeft: Project[] = [
  {
    href: "/",
    title: "all in one",
    subtitle: "Android & iOS",
    description: (
      <>
        Your Personal <span className="text-white">AI Partner</span>. Comprehensive Health And Fitness Project
      </>
    ),
    defaultImage: defaultImg,
    hoverImage: hoverImg,
    imageAlt: "AI personal coach",
  },
  {
    href: "/habitomic",
    title: "Habitomic",
    subtitle: "Android & iOS",
    description: (
      <>
        <span className="text-white">Pushing Yourself</span> Out of The Comfort Zone Is The Best Way To Achieve Your Goals!
      </>
    ),
    defaultImage: defaultImg,
    hoverImage: hoverImg,
    imageAlt: "Adaptable habit tracker/builder",
  },
  {
    href: "/Dana",
    title: "Danaplus",
    subtitle: "Android, iOS & Web",
    description: (
      <>
        Comprehensive And Accessible <span className="text-white">E-Learning Platform</span> Worth Your Time And Effort.
      </>
    ),
    defaultImage: defaultImg,
    hoverImage: hoverImg,
    imageAlt: "Engaging e-learning platform",
  },
];

const projectsRight: Project[] = [
  {
    href: "/EasyFleet",
    title: "EasyFleet",
    subtitle: "Android, iOS & Web",
    description: (
      <>
        Data-Driven Decisions For <span className="text-white">Fleet Management</span> Through The Precision of Numbers.
      </>
    ),
    defaultImage: defaultImg,
    hoverImage: hoverImg,
    imageAlt: "Comprehensive fleet management",
  },
  {
    href: "/tasteIran",
    title: "TasteIran",
    subtitle: "Web",
    description: (
      <>
        Listen To Untold Stories of <span className="text-white">Persia</span>, Taste Unforgettable Experiences of <span className="text-white">Iran</span>.
      </>
    ),
    defaultImage: defaultImg,
    hoverImage: hoverImg,
    imageAlt: "Authentic travel memories",
  },
  {
    href: "/Petroidm",
    title: "Petroidm",
    subtitle: "Web",
    description: (
      <>
        An Intelligent <span className="text-white">Data Management</span> Platform to Enhance Operational Performance in Oil Industry.
      </>
    ),
    defaultImage: defaultImg,
    hoverImage: hoverImg,
    imageAlt: "Real-time oil drilling data management",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <a
    href={project.href}
    className="space-y-4 flex flex-col justify-center items-center group cursor-pointer rounded-lg"
  >
    <div className="relative rounded-lg w-full max-w-[500px] h-[300px] group shadow-xl shadow-blue-600/20 overflow-clip group-hover:shadow-xl hover:scale-105 transition-all duration-900">
      <Image
        src={project.defaultImage}
        alt={project.imageAlt}
        className="w-full h-full object-cover transition-opacity duration-900 group-hover:opacity-0"
        priority={false}
        width={500}
        height={300}
      />
      <Image
        src={project.hoverImage}
        alt={`${project.imageAlt} hover`}
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        priority={false}
        width={500}
        height={300}
      />
    </div>
    <div className="text-[#A1A1A6] space-y-2 w-full max-w-[390px]">
      <div className="flex items-center space-x-4">
        <h3 className="font-extrabold text-white text-2xl sm:text-xl md:text-3xl lg:text-2xl 2xl:text-4xl group-hover:text-blue-500/90 transition-all duration-300 cursor-pointer">
          {project.title}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="7"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="text-[#A1A1A6]"
        >
          <circle cx="4" cy="4" r="4" fill="#A1A1A6" />
        </svg>
        <h4 className="text-xs sm:text-xs md:text-base xl:text-xl">{project.subtitle}</h4>
      </div>
      <p className="font-medium text-xs sm:text-xs md:text-base xl:text-xl">{project.description}</p>
    </div>
  </a>
);

const OurProjects: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center px-6 xl:px-10 py-10 lg:py-14 bg-black mx-auto">
      <h2 className="text-5xl sm:text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white my-20 relative inline-block">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div className="flex flex-col space-y-14 sm:space-y-20 md:space-y-28 2xl:space-y-40 md:px-20 sm:px-16 mt-0 lg:mt-0 items-center">
          {projectsLeft.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}

          <div className="hidden lg:flex justify-center items-center w-full text-white font-bold xl:text-4xl lg:text-3xl 2xl:w-3/4 md:w-3/4 mt-10">
            <p>Need More Info? Take A Look At Our Projects.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-14 sm:space-y-20 md:space-y-28 2xl:space-y-40 mt-15 sm:mt-30 lg:mt-35 2xl:mt-55 items-center">
          {projectsRight.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}

          <div className="lg:hidden flex justify-center items-center text-white font-bold text-3xl md:text-4xl mt-14 sm:mt-10 w-full sm:w-4/5">
            <p>Need More Info? Take A Look At Our Projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
