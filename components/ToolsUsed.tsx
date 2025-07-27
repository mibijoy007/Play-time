"use client";
import React from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "/tools/autocad.webp", alt: "Next.js" },
  { src: "/tools/sketchup.webp", alt: "React" },
  { src: "/tools/lumion.webp", alt: "Tailwind CSS" },
  { src: "/tools/vray.webp", alt: "TypeScript" },
  { src: "/tools/d5.webp", alt: "Next.js" },
  { src: "/tools/twinmotion.webp", alt: "React" },
  { src: "/tools/ps.webp", alt: "Node.js" },
  { src: "/tools/pr.webp", alt: "Git" },
  { src: "/tools/indesign.webp", alt: "Tailwind CSS" },

];

const ToolsUsed: React.FC = () => {
  return (

     <div className="py-6">
        <h2 className="text-center pb-2.5 text-3xl sm:text-4xl md:text-5xl  font-semibold text-gray-900">
            Tools We Use
          </h2>
          <p className="text-center mb-2 text-gray-600 max-w-2xl mx-auto px-4">
            From idea to reality, we shape dreams with trusted <span className="font-bold text-black">softwares </span> <br /> —Elevating visuals to stunning heights.
          </p>


      
    <section className="py-0 pt-4 sm:pt-2 ">
      <div className=" md:max-w-5xl mx-auto px-4 text-center">
        {/* <h2 className="text-3xl font-bold mb-6">Tools & Technologies I Use</h2> */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12  items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="h-16  md:h-20 w-auto   hover:scale-110 duration-300 transition-all"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ToolsUsed;
