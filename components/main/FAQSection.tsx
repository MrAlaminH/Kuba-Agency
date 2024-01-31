// components/FAQSection.js

import React from "react";

const FAQSection = () => {
  return (
    <section className="py-8">
      {/* Add your FAQ content here */}
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Ask us anything!
        </h2>
      </div>

      <div
        className="mx-auto flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between"
        style={{ maxWidth: "600px" }} // Adjust the value as per your requirement
      >
        <strong className="text-xl text-white sm:text-xl">
          {" "}
          Make Your Next Move With Us!{" "}
        </strong>

        <a
          className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
          href="/"
        >
          <span className="text-sm font-medium"> Lets Get Started </span>

          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
