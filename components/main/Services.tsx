"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Services = () => {
  return (
    <div id="Services" className="max-w-5xl mx-auto py-20">
      <div
        className="font-bold text-4xl pb-5 md:text-5xl text-center
//          bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 bg-opacity-50 mt-20"
      >
        <div className="text-center mx-auto Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Think Better With Us
          </h1>
        </div>
        Streamline your business with our services
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        From website design to social media management, We offer a wide range of
        services to help you grow your business.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
