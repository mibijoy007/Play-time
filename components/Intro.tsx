'use client'
import React from "react";

const Intro = () => {
  return (
    
    // #f6e7ec
    <div className="relative about h-screen w-full bg-[#f4edd3] flex items-center justify-center overflow-hidden">
      {/* Text container */}
      <div className="text-center max-w-6xl px-4 z-10 font-serif font-light w-full">
        {/* <h1 className=" text-4xl mb-6  font-light font">&quot;Bringing Stories to Life Through Visuals&quot;</h1> */}
        <h1 className={` text-5xl mb-20  font-light dancing `}>&quot;Bringing Stories to Life Through Visual Narratives&quot;</h1>
        <h1 className=" text-3xl mb-6 text-start">
          {/* <span className="font-semibold">PLAY-TIME</span> 
          is a team of
          architects with broad experience in the photography, graphic design
          and audiovisual fields. */}
          {/* <span className="font-semibold">Nouveau Visuals</span>  – your global partner for Architectural Visualization. We specialize in high-end 3D modeling, rendering, and animation for exteriors, interiors, and landscapes, transforming concepts into breathtaking visual narratives. */}
          <span className="font-semibold">Nouveau Visuals</span>  – your global partner for Architectural Visualization.
          {/* <br /> Transforming concepts into breathtaking visual narratives. */}
        </h1>
        <h1 className="text-3xl  text-start">
          « Specialized in high-end 
          <span className="font-semibold mx-2">
           3D modeling, rendering, 
            <span className="font-normal mx-2">animation for</span>
           exteriors, interiors 
          <span className="font-normal mx-2">and</span>
           landscapes
          
          </span>
          , transforming concepts into breathtaking visuals. »
        </h1>
{/*         
With 200+ successful projects worldwide, we’ve collaborated with Architects, Interior Designers, Landscapers and Homeowners over the course of 5+ Years to craft immersive, photorealistic experiences that inspire and captivate.
Let’s turn your vision into reality. */}

      </div>
    </div>
  );
};

export default Intro;