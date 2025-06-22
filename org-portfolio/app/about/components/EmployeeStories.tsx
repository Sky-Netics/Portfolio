import Link from "next/link";
import Image from "next/image";
import pg from '../../../public/images/P_G.jpg';
import React from "react";

const EmployeeValueSection = () => {
  return (
    <section className=" md:w-3/4 mx-auto px-4 py-10 space-y-15 text-left text-gray-700">
      <div className="space-y-6 text-sm leading-tight mx-2">
        <p>
          There is no single equation for success at P&amp;G, because no two
          P&amp;G people or careers are alike. Just as we strive to deliver a
          superior consumer experience, we aim to deliver a superior employee
          value equation as well.
        </p>

        <p >
          We celebrate the uniqueness of each employee’s journey because we know
          that loyalty and success stem from the times when people feel{" "}
          <strong>inspired</strong> to make a difference, have equal opportunity
          and multiple ways to continue <strong>growing</strong>, feel pride in{" "}
          <strong>making an impact</strong> and know they’re being{" "}
          <strong>valued and rewarded</strong> for their contributions to their
          team’s and our company’s success.
        </p>

        <p >
          We believe when we support our employees’ wellbeing, they are better
          able to contribute to the success of the Company and achieve their
          personal goals. That is why{" "}
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-bold hover:text-blue-900 transition"
          >
            P&amp;G’s Total Rewards package
          </Link>{" "}
          is focused on supporting four key wellbeing areas: financial, mental,
          physical and work-life wellbeing.
        </p>
      </div>

      <div className="relative w-full h-auto aspect-video max-w-4xl mx-auto group cursor-pointer overflow-clip rounded-3xl shadow-lg">
        <Image
          src={pg}
          alt="Employee Value Video Thumbnail"
          width={1280}
          height={720}
          className="w-full h-full brightness-80 opacity-95 hover:brightness-100 hover:object-cover rounded-3xl shadow-lg  transition-all duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  );
};

export default EmployeeValueSection;
