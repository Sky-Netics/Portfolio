"use client";

import React from 'react';
import Image from 'next/image';
import Card from './Card';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <Image
          src="/images/hero-1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Card />
    </section>
  );
};

export default Hero; 