import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
            We Are Fullstack Marketing Agency From South Asia
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Party"
              src="https://media.giphy.com/media/oAQccnVG9eTr19lxb3/giphy.gif"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <h2 className=" text-center text-2xl text-amber-300 font-bold sm:text-3xl ">
            Professional Fullstack Marketing Agency to provide solutions
            </h2>
            <br />
            <div className="block rounded-xl bg-emerald-500 p-8 m-2 border-4 border-indigo-500/100 hover:shadow-xl hover:border-pink-500  hover:border-opacity-40 hover:shadow-pink-500 hover:shadow-opacity-40 ">
              <p className="text-white">
              Welcome to Kuba Agency, where innovation meets impact in the
              digital realm. As a Full-stack Marketing Agency, we transcend
              conventional boundaries, sculpting unique narratives that
              captivate audiences. Our fusion of strategic prowess and
              technological finesse ensures your brand not only stands out but
              excels in the ever-evolving digital landscape. At Kuba Agency,
              we are not just trend-followers; we are trendsetters, reshaping the
              marketing landscape with a commitment to unparalleled creativity
              and measurable results. Join us on a journey where your brands
              story becomes an immersive experience, leaving an indelible mark
              on the digital canvas. Welcome to Kuba Agency, where your success
              is not just a goal but our driving force.
            </p>
            <a
            href="#form"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Learn More!
          </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
