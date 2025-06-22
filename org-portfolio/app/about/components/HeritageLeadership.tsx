import React from "react";
import Image from "next/image";
import p1 from "../../../public/images/slider/about/heritage/1880s_Bartlett_Store__1___1_.jpg";
import p2 from "../../../public/images/slider/about/heritage/Jon_Moeller.webp";


const HeritageLeadership = () => {
  return (
    <section className="py-10">
      <div className="flex flex-wrap py-5 justify-center items-center gap-10 px-4">
        <Image
          src={p1}
          alt="Heritage"
          className="md:w-64 md:h-64 rounded-full object-cover"
        />
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl font-bold text-blue-700">Heritage</h3>
          <p className="text-gray-600 mt-2">
            For more than 185 years, we’ve challenged the norm...
          </p>
          <button className="mt-10 border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-24 mt-10 bg-blue-50 py-10 px-4">
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl font-bold text-blue-700">Leadership</h3>
          <p className="text-gray-600 mt-2">
            Our leadership approach is distinctly sky netics...
          </p>
          <button className="mt-10 border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300">
            See more
          </button>
        </div>
        <Image
          src={p2}
          alt="Leader"
          className="md:w-64 md:h-64 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeritageLeadership;
