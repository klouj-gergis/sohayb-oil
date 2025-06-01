import React from 'react';
import olivetree from '../../assets/olive.jpeg';

export default function About() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center p-4 md:p-8 w-full min-h-screen gap-6"
      data-aos="fade-right"
    >
      {/* Image Container */}
      <div className="w-full lg:w-6/12 flex items-center justify-center">
        <div className="relative w-[80vw] h-[40vh] sm:w-[70vw] md:w-[60vw] lg:w-[60vh] lg:h-[40vh] bg-olive">
          <img
            src={olivetree}
            alt="olive tree"
            className="absolute w-full -top-3 -left-3 object-cover h-full rounded-xl"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-6/12 p-2 sm:p-4 flex flex-col gap-4 text-center lg:text-left">
        <h3 className="text-olive text-3xl sm:text-4xl font-semibold">About Us</h3>
        <p className="text-warmbrown text-base sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, accusantium. Voluptate nulla
          incidunt voluptates ad repellat similique ipsum saepe impedit.
        </p>
      </div>
    </section>
  );
}
