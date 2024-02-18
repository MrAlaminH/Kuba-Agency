"use client";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <section id="testimonies" className="py-20 bg-tranasprent">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="animate-bounce Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto ">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">Words from Others</h1>
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-yellow-400 text-center md:text-center md:text-5xl">
              It&apos;s not just us.
            </h1>
            <p className="text-xl text-gray-100 text-center md:text-center md:text-2xl">
              Heres what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/MdReanAhmed1"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      {" "}
                      <img
                        src="https://pbs.twimg.com/profile_images/1608505649662681088/Zj3txNWo_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="rean"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Dr Rean Ahmed 
                        </h3>
                        <p className="text-gray-500 text-md">
                          Doctor
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality has transformed our online presence with their exceptional Content Marketing services. Our brand now speaks volumes, thanks to their strategic approach and creative content!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/Bullback2025"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1721809225423454208/A8u6cEtT_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Shakil Khan"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Shakil Khan
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Rekto</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Web Development excellence at its best! Sodality delivered a website that not only looks stunning but also functions flawlessly. Their expertise in creating user-friendly interfaces is truly commendable.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Asibur Rahman
                        </h3>
                        <p className="text-gray-500 text-md">
                          Run a local business
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality&apos;s Graphic Design team turned our ideas into visually stunning realities. The creativity and professionalism they brought to our marketing collateral were beyond our expectations.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality&apos;s Web Development expertise is unparalleled. They not only built a website that reflects our brand identity but also ensured it is responsive and user-friendly. A top-notch service!
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Parag Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Choosing Sodality for Content Marketing was a game-changer for our business. Their strategic approach and engaging content helped us build a strong online presence and connect with our target audience effectively
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodalitys Graphic Design team has the Midas touch! Our marketing materials now have a modern and polished look, thanks to their creativity and attention to detail. Highly recommended!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Parag Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality&apos;s Video Editing added dynamism to our campaigns, creating compelling stories that resonated with our audience.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Mr Cook
                        </h3>
                        <p className="text-gray-500 text-md">Real Estate Agent</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality&apos;s Web Development team built us a top-notch website - modern, responsive, and user-friendly.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Satya Nadella
                        </h3>
                        <p className="text-gray-500 text-md">
                          CEO of Microsoft
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                     Awsome works
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Dan Schulman
                        </h3>
                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality&apos;s Graphic Design team turned our ideas into visually stunning realities. The creativity and professionalism they brought to our marketing collateral were beyond our expectations.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Satya Nadella
                        </h3>
                        <p className="text-gray-500 text-md">
                          CEO of Microsoft
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Sodality&apos;s Content Marketing services - strategic, engaging, and effective. Our online presence has never been stronger.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Dan Schulman
                        </h3>
                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    super work I&apos;m satisfied with their work
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
