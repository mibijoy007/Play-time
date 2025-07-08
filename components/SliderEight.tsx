"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";

export default function SliderEight() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    // slides: {
    //   perView: 1,
    //   spacing: 0,
    // },
    slides: {
      origin: 'center', // Centers slides for better focus
      perView: 1,    // Shows 1 full slide + peek of next
      spacing: 0,      // Adjust this value for gap control
    },
    // breakpoints: {
    //   '(min-width: 768px)': {
    //     slides: {
    //       perView: 1,
    //       spacing: 0,
    //     },
    //   },
    // }
  });

  // Auto-play configuration
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     instanceRef.current?.next();
  //   }, 40000);

  //   return () => clearInterval(interval);
  // }, [instanceRef]);

  // Slide text content
  const slideTexts = ["Water Tower",  "TITAN","Tengbom"];
  const slidePara = ["ON-A", "Sketch"];

  return (
    <div className="relative h-screen bg-[#e5d7b4]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full relative">



      {/* Slider Container */}
     <div className="w-full flex flex-col justify-center pl-4 pt-12 md:pl-16 md:pt-16">
    {/* <div className="navigation-wrapper"> */}

    
      <div
        ref={sliderRef}
        className="keen-slider  w-full  max-w-xs md:max-w-sm lg:max-w-xl "
      >
        {/* Slide 1 */}
        <div className="keen-slider__slide p-2">
          <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/BannerThree/2.jpg"
              alt="Play image 1"
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 746px) 100vw, 700px"
            />
            <div className="absolute flex flex-col bottom-8 left-8 max-w-xs sm:max-w-sm md:max-w-md text-white drop-shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {slideTexts[0]}
              </h2>
              <p className="text-sm sm:text-base mt-2">
                {slidePara[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="keen-slider__slide p-2">
          <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/BannerThree/1.jpg"
              alt="Play image 2"
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="absolute flex flex-col bottom-8 left-8 max-w-xs sm:max-w-sm md:max-w-md text-white drop-shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {slideTexts[1]}
              </h2>
              <p className="text-sm sm:text-base mt-2">
                {slidePara[1]}
              </p>
            </div>
          </div>
        </div>
</div>



{/* Navigation Dots - Positioned at bottom right */}
      {loaded && instanceRef.current && (
        <div className=" flex justify-center pr-10 space-x-2 ">
        {/* // <div className=" dots bg-red-600"> */}
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === idx
                  ? "bg-blue-400 scale-150  "
                  : "bg-gray-400 bg-opacity-40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      </div>
    {/* </div> */}

        

        

      


      {/* texts */}
      <div className="h-full px-4 flex  flex-col items-center justify-start md:items-center md:justify-center bg-[#e5d7b4]">
              <h1 className="text-lg lg:text-2xl md:mb-4  mt-5">
               Our Philosophy
              </h1>
              <h2 className="text-sm md:text-lg lg:text-xl   mr-6  text-justify  font-thin">
                Being an architect with a deep passion for both architecture and photography has helped me and team to see architectural visualization from a unique perspective. <br /> We find stories in birds flying across a blue sky, Observe nature and weave its essence into our work. That’s why we say we tell stories through visuals.
                <br /> <br />
                Archviz is all about emotion—the feeling an image evokes. And we consider ourselves creators of these emotions.



              </h2>
        </div>

              </div>
    </div>
  );
}




//  <div ref={sliderRef} className="keen-slider h-full   mt-20 ml-10 container border-[#e5d7b4]">

//         {/* Slide 1 */}
//         <div className="keen-slider__slide p-0 m-0">
//           <div className=" relative w-[80%]  aspect-square overflow-hidden rounded-3xl">
//             <Image
//               src="/BannerThree/2.jpg"
//               alt="Play image 1"
//               fill
//               className="object-contain "
//               sizes="100vw"
//             />
//             {/* Text at bottom left */}
//             <div className="absolute flex bottom-8 left-8 max-w-2xl">
//               <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
//                 {slideTexts[0]}
//               </h2>
//               <p className="text-lg  mt-3 ml-4 text-white drop-shadow-lg">
//                 {slidePara[0]}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="keen-slider__slide">
//           <div className="  relative w-[80%]  aspect-square overflow-hidden bg-black rounded-3xl">
//             <Image
//               src="/BannerThree/1.jpg"
//               alt="Play image 1"
//               fill
//               className="object-contain rounded-3xl"
//               sizes="100vw"
//             />
//             {/* Text at bottom left */}
//             <div className="absolute flex bottom-8 left-8 max-w-2xl">
//               <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
//                 {slideTexts[1]}
//               </h2>
//               <p className=" text-lg mt-3 ml-4  text-white drop-shadow-lg">
//                 {slidePara[1]}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>






















//  {/* Slide 1 */}
//         <div className="keen-slider__slide">
//           <div className="grid grid-cols-2 h-full relative">
//             <Image
//               src="/BannerThree/2.jpg"
//               alt="Play image 3"
//               width={400}
//               height={400}
//               className="object-cover mx-auto my-auto "
//               priority
//             />
            
//             {/* Text at bottom left */}
//             <div className="absolute flex bottom-8 left-8 max-w-2xl">
//               <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg">
//                 {slideTexts[0]}
//               </h2>
//               <p className=" text-MD mt-4 ml-4 font-bold text-inherit drop-shadow-lg">
//                 {slidePara[0]}
//               </p>
//             </div>
//           </div>
//         </div>