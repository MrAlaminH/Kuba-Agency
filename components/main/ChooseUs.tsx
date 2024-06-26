"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet2";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ChooseUs = () => {
  return (
    <div className="bg-transprent">
        <div className="max-w-5xl mx-auto">
          <div
            className="font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 bg-opacity-50 mt-20"
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

          <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-2 py-12">
            <h2 className="w-full mb-4 mt-4 text-center text-5xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 tracking-wider">
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
                    src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/carolo.png"
                    alt="logo"
                    height={120}
                    width={120}
                  />
                </li>
                <li>
                  <Image src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/masum.png" alt="logo" height={120} width={120} />
                </li>
                <li>
                  <Image src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/nazny.png" alt="logo" height={120} width={120} />
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
                  <Image src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/nazny.png" alt="logo" height={120} width={120} />
                </li>
                <li>
                  <Image
                    src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/carolo.png"
                    alt="logo"
                    height={120}
                    width={120}
                  />
                </li>
                <li>
                  <Image src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmTcYu6JBKtxJeZMgE2eEc7Ts9cwC1DcpPfLLwtRhZgM2K/masum.png" alt="logo" height={120} width={120} />
                </li>
              </ul>
            </div>
          </Marquee>
        </div>
      </div>
  )
}

export default ChooseUs