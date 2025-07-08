// 'use client'
import React from "react";


import { MdRequestQuote, MdScreenShare } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import {  TbTruckDelivery } from "react-icons/tb";

const HowWeWork = () => {
  return (
    // #f1d3c8
    // #f6e7ec
    <div className="relative about h-screen w-full bg-[#f6e7ec] flex items-center justify-center overflow-hidden">
      {/* Text container */}
      {/* <div className="text-center max-w-6xl px-4 z-10 font-serif font-light w-full"> */}
        {/* <h1 className=" text-4xl mb-6  font-light font">&quot;Bringing Stories to Life Through Visuals&quot;</h1> */}
        {/* <h1 className={` text-5xl mb-20  font-light dancing `}>&quot;Bringing Stories to Life Through Visual Narratives&quot;</h1> */}

     {/* start   */}
<div className="">
        <h2 className="text-center mb-6 pt-8 text-5xl font-semibold">
          How it <span className="text-blue-600 font-bold">works?</span>
        </h2>
        <p className="text-center mb-10  text-gray-600">
          At <span className="font-bold">Nouveau Visuals,</span>  we turn ideas into stunning visuals—whether you’re starting from scratch or have a developed concept.
        </p>
        <section className="py-2 px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl xl:max-w-7xl w-full">
            {/* Card 1 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-pink-600 flex items-center justify-center ">
                <MdScreenShare  />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                01. Share Your Vision
              </h3>
              <p className="text-gray-600 text-sm">
                Send us sketches, mood boards, CAD plans - or just a brief with site photos. 
                <br /> Don&apos;t forget to include your timeline.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-blue-600 flex items-center justify-center">
                <MdRequestQuote  />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                02. Get a Quote
              </h3>
              <p className="text-gray-600 text-sm">
                We&apos;ll review your materials and send a proposal. Need help? Book a free consultation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-pink-600 flex items-center justify-center">
                <RiDraftFill  />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                03. Draft & Refine
              </h3>
              <p className="text-gray-600 text-sm">
               Receive initial renders and request adjustments until it&apos;s perfect.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-blue-600 flex items-center justify-center">
                <TbTruckDelivery  />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                04. Final Delivery
              </h3>
              <p className="text-gray-600 text-sm">
               Get your polished visuals. Additional tweaks? We&apos;ve got you covered.
              </p>
            </div>


          </div>
        </section>
      </div>

      {/* </div> */}
    </div>
  );
};

export default HowWeWork;