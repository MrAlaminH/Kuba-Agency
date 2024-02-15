'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";

const AboutUs = () => {
  const videoId = 'XLqmL9cPN1E'; // Replace with your actual YouTube video ID
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playVideo = () => {
      if (playerRef.current) {
        playerRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? '1' : '0'}&enablejsapi=1`;
      }
    };

    playVideo();
  }, [videoId, isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    
    <section id='aboutus' className="bg-transprent text-white py-16 px-8 md:px-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            We Are Fullstack Marketing Agency From South Asia
          </h1>
          <div>
          <iframe
            ref={playerRef}
            width="95%"
            height="400"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={togglePlay} className="text-yellow-400 text-10 font-bold h-10 px-4 py-2 hover:bg-blue-500 bg-black border border-sky-100">
            {isPlaying ? 'Pause Video' : 'Play Video'}
          </button>
        </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-green-400 mr-2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Web Design &amp; Development</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-yellow-400 text-6xl font-bold">230+</div>
            <div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-400/90 h-10 px-4 py-2 bg-yellow-400 text-black">
              Book A Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transprent">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10 "
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-[40px] font-semibold text-transparent text-yellow-500 py-10">
              Why Choose Us!
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-white">
              We are innovative and passionate about the work we do. We listen
              to our clients objectives and aspirations and therefore provide
              customize solutions. We always come up with new ways to enrich
              your revenue to greater heights.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {/* First Feature */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-xl transition hover:border-pink-500/40 hover:shadow-pink-500/40">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-color-swatch"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-white">Commitment To Quality </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                We are committed to quality and concrete actions. That means we
                always deliver solutions in a professional and practical way.
              </p>
            </div>

            {/* Second Feature */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-xl transition hover:border-pink-500/40 hover:shadow-pink-500/40">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bolt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
              </div>
              <h3 className="mt-6 text-white"> CREATIVE SOLUTIONS</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                Our goal is to inspire you with new insights and creative
                solutions. where your business stands out and makes a lasting
                impact
              </p>
            </div>

            {/* Third Feature */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow-xl transition hover:border-pink-500/40 hover:shadow-pink-500/40">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-tools"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                  <polyline points="12 8 7 3 3 7 8 12"></polyline>
                  <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                  <polyline points="16 12 21 17 17 21 12 16"></polyline>
                  <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-white">Quick Support</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                we are committed to your success 24/7. Our dedicated support
                team is always ready to assist you, ensuring seamless operations
                and peace of mind.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
