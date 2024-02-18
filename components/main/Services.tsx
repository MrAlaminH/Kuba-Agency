import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import "tailwindcss";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <section id="Services" className="bg-transparent text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <div className="animate-bounce Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto ">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Think better with Us</h1>
          </div>
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
            Services we can help you with
          </h2>
          <p className="mt-4 text-purple-300">
            Corporate strategy collaborative value proposition.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <a className="transition-all ease-in-out delay-150 bg-orange-400 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 block rounded-xl border-4 border-indigo-500/100 p-8 hover:shadow-xl hover:border-indigo-500  hover:border-opacity-40 hover:shadow-indigo-500 hover:shadow-opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-500 "
            >
              <path
                fillRule="evenodd"
                d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black ">
              Web Development
            </h2>

            <p className="mt-1 text-sm text-black ">
              Harness the power of cutting-edge web technologies as we craft
              visually stunning and highly functional websites. From responsive
              design to seamless navigation, our web development services ensure
              a compelling online presence for your brand.
            </p>
          </a>

          <a className="transition-all ease-in-out delay-150 bg-sky-300 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300 block rounded-xl border-4 border-indigo-500/100 p-8 hover:shadow-xl hover:border-indigo-500 hover:border-opacity-40 hover:shadow-indigo-500 hover:shadow-opacity-40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-500 "
            >
              <path
                fillRule="evenodd"
                d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black ">
              Social Media Marketing
            </h2>

            <p className="mt-1 text-sm text-black ">
              Amplify your brand reach and engagement through strategic social
              media marketing. We leverage platforms to create compelling
              content, engage with your audience, and build a robust online
              community that drives results and fosters brand loyalty.
            </p>
          </a>

          <a className="transition-all ease-in-out delay-150 bg-orange-400 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 block rounded-xl border-4  border-indigo-500/100 p-8 hover:shadow-xl hover:border-indigo-500 hover:border-opacity-40 hover:shadow-indigo-500 hover:shadow-opacity-40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-500 "
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black ">
              Graphics Design
            </h2>

            <p className="mt-1 text-sm text-black ">
              Elevate your brand aesthetics with our top-notch graphics design
              services. Our creative team transforms ideas into visually
              captivating designs, ensuring your brand communicates effectively
              and leaves a lasting impression.
            </p>
          </a>

          <a className="transition-all ease-in-out delay-150 bg-orange-400 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 block rounded-xl border-4 border-indigo-500/100 p-8 hover:shadow-xl hover:border-indigo-500 hover:border-opacity-40 hover:shadow-indigo-500 hover:shadow-opacity-40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-500 "
            >
              <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black ">SEO</h2>

            <p className="mt-1 text-sm text-black ">
              Boost your online visibility and rankings with our SEO services.
              We optimize your website structure and content to align with
              search engine algorithms, ensuring your business is easily
              discoverable by your target audience, driving organic traffic and
              maximizing your online potential.
            </p>
          </a>

          <a className="transition-all ease-in-out delay-150 bg-sky-300 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300  duration-300 block rounded-xl border-4 border-indigo-500/100 p-8 hover:shadow-xl hover:border-indigo-500 hover:border-opacity-40 hover:shadow-indigo-500 hover:shadow-opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-500 "
            >
              <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black ">
              Video Editing
            </h2>

            <p className="mt-1 text-sm text-black ">
              Bring your ideas to life through expert video editing services.
              From promotional videos to tutorials, our skilled editors ensure
              your content is polished, dynamic, and resonates effectively with
              your target audience.
            </p>
          </a>

          <a className="transition-all ease-in-out delay-150 bg-orange-400 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 block rounded-xl border-4 border-indigo-500/100 p-8 hover:shadow-xl hover:border-indigo-500 hover:border-opacity-40 hover:shadow-indigo-500 hover:shadow-opacity-40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-indigo-500  "
            >
              <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
              <path
                fillRule="evenodd"
                d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-black ">
              Content Marketing
            </h2>

            <p className="mt-1 text-sm text-black ">
              Engage and educate your audience with compelling content tailored
              to your brand. Our content marketing strategies encompass a mix of
              informative articles, engaging visuals, and captivating
              storytelling to enhance brand authority and customer trust.
            </p>
          </a>
        </div>
      </div>

      {/* Companys who worked with us */}

      <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
        <h2 className="w-full mb-4 -mt-4 text-center text-3xl  font-semibold text-yellow-400 tracking-wider">
          Trusted by the best
        </h2>
        <p className="text-center">
          Elevate your digital journey with our professional services
        </p>
      </div>

      <Marquee
        direction="left"
        speed={50}
        loop={0}
        pauseOnClick={true}
        gradient={true}
        gradientColor="#000000"
        gradientWidth={200}
        autoFill={true}
      >
        <div>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none anima mask-section">
            
            <li>
              <Image src="/carolo.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/masum.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/kuba.png" alt="logo" height={120} width={120} />
            </li>
            
            <li>
              <Image src="/nazny.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/rekto.png" alt="logo" height={120} width={120} />
            </li>
          </ul>
        </div>
      </Marquee>
      <Marquee
        direction="right"
        speed={50}
        loop={0}
        pauseOnClick={true}
        gradient={true}
        gradientColor="#000000"
        gradientWidth={200}
        autoFill={true}
      >
        <div>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none anima mask-section">
            
            <li>
              <Image src="/kuba.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/nazny.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/rekto.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/carolo.png" alt="logo" height={120} width={120} />
            </li>
            <li>
              <Image src="/masum.png" alt="logo" height={120} width={120} />
            </li>
          </ul>
        </div>
      </Marquee>
    </section>
  );
};

export default Services;
