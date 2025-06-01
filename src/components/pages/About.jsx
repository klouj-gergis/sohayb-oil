import React from 'react';
import olivetree from '../../assets/olive.jpeg';

export default function About() {
  return (
    <section className="flex items-center p-5 w-full h-[100vh]" data-aos="fade-right">
      <div className="w-6/12 flex items-center justify-center">
        <div className="relative w-[60vh] h-[40vh] bg-olive">
          <img src={olivetree} alt="olive tree image" className="absolute w-full -top-3 -left-3" />
        </div>
      </div>
      <div className="w-6/12 p-5 flex flex-col gap-5">
        <h3 className="text-olive text-4xl font-semibold">About Us</h3>
        <p className="text-warmbrown text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
    </section>
  );
}