"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="Home">
      <div className="relative z-10">
        <HeroContent />
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover inset-0 z-[-3]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;

