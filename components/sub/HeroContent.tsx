"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom
} from "@/utils/motion";

import SliderOne from "@/components/main/slider";

const HeroContent = () => {
  return (
    <motion.div initial="hidden"
    animate="visible"
     className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 lg:py-24 bg-tresprent min-h-screen">
      <motion.a
        href=""
        variants={slideInFromTop}
        className= "border border-white-700 dark:border-gray-300 rounded-lg py-2 px-4 text-white-400 dark:text-gray-300 text-sm mb-3 sm:mb-5 mt-20 sm:mt-20 "
        
      >
        Fullstack Marketing Agency 🟢
      </motion.a>
      <motion.h1 variants={slideInFromLeft(0.6)} className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        <span className="inline-block">We&apos;re your secret weapon in the  
            <span className="relative whitespace-nowrap text-orange-600">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative"> digital arena</span></span>
        </span>
      </motion.h1>
      <motion.h2 variants={slideInFromRight(0.8)} className="mx-auto mt-6 max-w-xl text-base sm:text-lg lg:text-xl text-white leading-7">
        Elevate your brand to new heights through captivating websites and dynamic content that not only captivates but converts. Propel your business into the spotlight with our unique blend of creativity and strategic prowess.
      </motion.h2>
      <motion.a
        variants={slideInFromLeft(0.6)}
        className=" dark:bg-orange-600 rounded-xl border border-orange-600 text-white dark:text-white font-medium px-4 py-3 mt-6 sm:mt-8 hover:bg-gray-800 transition"
        href="https://cal.com/mralamin/30min"
        target="_blank"
      >
        Book A Call
      </motion.a>
      <motion.div variants={slideInFromBottom(0.8)} className="w-full pt-20">
        <SliderOne />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
