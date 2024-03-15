"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="font-bold text-4xl pb-5 md:text-5xl text-center
//          bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 bg-opacity-50 mt-20"
      >
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
