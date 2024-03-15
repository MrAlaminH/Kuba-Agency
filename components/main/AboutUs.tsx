"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet2";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="bg-transprent text-white py-16 px-8 md:px-20 "
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            We Are Fullstack Marketing Agency From South Asia
          </h1>
          <div>
            <video
              width="95%"
              height="auto"
              playsInline
              loop
              muted
              autoPlay
              controls
              src="/aboutvideo.mp4"
              preload="auto"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
            Professional Fullstack Marketing Agency to provide solutions
          </h2>
          <p className="mb-4">
            Welcome to Sodality Agency, where innovation meets impact in the
            digital realm. As a Full-stack Marketing Agency, we transcend
            conventional boundaries, sculpting unique narratives that captivate
            audiences
          </p>
          <p className="mb-4">
            Our fusion of strategic prowess and technological finesse ensures
            your brand not only stands out but excels in the ever-evolving
            digital landscape. At sodality Agency, we are not just
            trend-followers; we are trendsetters, reshaping the marketing
            landscape with a commitment to unparalleled creativity and
            measurable results.
          </p>
          <p className="mb-6">
            Join us on a journey where your brands story becomes an immersive
            experience, leaving an indelible mark on the digital canvas. Welcome
            to sodality Agency, where your success is not just a goal but our
            driving force.
          </p>
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Digital Creative Agency</span>
          </div>
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Professional Problem Solutions</span>
          </div>
          <div className="flex items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Web Design &amp; Development</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-orange-600 text-6xl font-bold">230+</div>
            <div>
              <a
                href="https://cal.com/mralamin/30min"
                target="_blank"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-orange-600 hover:bg-gray-800 h-10 px-4 py-2 bg-orange-600 text-white"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transprent">
        <div className="max-w-5xl mx-auto py-20">
          <div
            className="font-bold text-4xl pb-5 md:text-5xl text-center
//          bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 bg-opacity-50 mt-20"
          >
            Why Choose Us!
          </div>
          <p
            className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
          >
            We are innovative and passionate about the work we do. We listen to
            our clients objectives and aspirations and therefore provide
            customize solutions. We always come up with new ways to enrich your
            revenue to greater heights.
          </p>

          <CardHoverEffectDemo />

          {/* Companys who worked with us */}

          <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
            <h2 className="w-full mb-4 -mt-4 text-center text-4xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 tracking-wider">
              Trusted by the best
            </h2>
            <p className="text-center text-white ">
              From small businesses to large corporations,
              <br /> we have helped many brands elevate their business.
            </p>
          </div>

          <Marquee
            direction="left"
            speed={50}
            loop={0}
            pauseOnClick={true}
            // gradient={true}
            // gradientColor="$fff"
            // gradientWidth={100}
            autoFill={true}
          >
            <div>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none anima mask-section">
                <li>
                  <Image
                    src="/carolo.png"
                    alt="logo"
                    height={120}
                    width={120}
                  />
                </li>
                <li>
                  <Image src="/masum.png" alt="logo" height={120} width={120} />
                </li>
                <li>
                  <Image src="/nazny.png" alt="logo" height={120} width={120} />
                </li>
              </ul>
            </div>
          </Marquee>
          <Marquee
            direction="right"
            speed={50}
            loop={0}
            pauseOnClick={true}
            // gradient={true}
            // gradientColor="$fff"
            // gradientWidth={200}
            autoFill={true}
          >
            <div>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none anima mask-section">
                <li>
                  <Image src="/nazny.png" alt="logo" height={120} width={120} />
                </li>
                <li>
                  <Image
                    src="/carolo.png"
                    alt="logo"
                    height={120}
                    width={120}
                  />
                </li>
                <li>
                  <Image src="/masum.png" alt="logo" height={120} width={120} />
                </li>
              </ul>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
