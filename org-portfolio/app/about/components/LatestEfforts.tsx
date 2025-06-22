import React from "react";
import Image from "next/image";
import logo from '../../../public/images/logo-png.png';
import logo2 from '../../../public/images/logoPng.png';

const LatestEfforts = () => {
  const cards = [
    { img: logo, date: '6/5/2025', title: 'Fueling Growth and Value Creation through Productivity' },
    { img: logo2, date: '4/25/2025', title: 'P&G Announces Results for Q3 2025' },
    { img: logo, date: '4/5/2025', title: 'Key to Winning Sustainability Strategy' },
    { img: logo2, date: '3/21/2025', title: '3 Tips for Building an Innovative Culture' },
  ];

  return (
    <section className="py-10 my-6 px-4 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10">Learn about our latest efforts</h2>
      <div className="flex gap-4 justify-center flex-wrap overflow-clip  ">
        {cards.map((card, idx) => (
          <div key={idx} className=" w-64 h-72 bg-white rounded-lg shadow group">
            <Image src={card.img} alt="effort" width={72} height={72} className="rounded-full w-full h-auto mx-auto my-6 hover:object-cover group-hover:scale-120 transition-all duration-300" />
            <p className="text-xs text-gray-500 text-center">{card.date}</p>
            <p className="text-sm font-medium mx-6">{card.title}</p>
          </div>
        ))}
      </div>
      <button className="mt-10 border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300">View All</button>
    </section>
  );
};

export default LatestEfforts;
