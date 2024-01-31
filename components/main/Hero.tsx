// import React from "react";
// import HeroContent from "../sub/HeroContent";

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col h-full w-full" id="about-me">
//       <video
//         autoPlay
//         muted
//         loop
//         className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
//       >
//         <source src="/blackhole.webm" type="video/webm" />
//       </video>
//       <HeroContent />
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <div className="relative z-10">
        <HeroContent />
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;

