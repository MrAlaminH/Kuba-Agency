"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 fixed w-full z-50 top-0 px-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/walker.png"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="self-center text-xl font-bold text-gray-300">
            Hedar Agency
          </span>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-[#7042f861] bg-[#0300145e] rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#about-me"
                className="block py-2 px-3 rounded hover:bg-[#7042f861] text-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="block py-2 px-3 rounded hover:bg-[#7042f861] text-gray-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="block py-2 px-3 rounded hover:bg-[#7042f861] text-gray-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 rounded hover:bg-[#7042f861] text-gray-200"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
