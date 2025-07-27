// "use client";

// import React, { useState, useEffect } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image"; // For optimized images in Next.js
// import { motion, AnimatePresence, Variants } from 'framer-motion'; // Added Variants import

// // Define the structure for a single review
// interface Review {
//   id: number;
//   name: string;
//   title: string;
//   reviewText: string;
//   image: string; // URL to the customer's image
//   rating: number; // 1-5 stars
// }

// // Dummy data for customer reviews
// const customerReviews: Review[] = [
//   {
//     id: 1,
//     name: "Alice Wonderland",
//     title: "Enchanted Experience",
//     reviewText:
//       "Absolutely magical! The attention to detail is astonishing, and the service was beyond compare. Every interaction felt like a dream. Highly recommend for anyone seeking wonder!",
//     image: "https://placehold.co/100x100/A78BFA/ffffff?text=AW", // Purple placeholder
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Bob The Builder",
//     title: "Solid Foundation",
//     reviewText:
//       "Built to last! Their solutions are robust and reliable. I appreciate the clear communication and the sturdy results. A truly dependable partner for any project.",
//     image: "https://placehold.co/100x100/4ADE80/ffffff?text=BB", // Green placeholder
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Charlie Chaplin",
//     title: "Silent Perfection",
//     reviewText:
//       "Though words fail to capture the essence, the experience spoke volumes. Graceful, impactful, and left a lasting impression. A masterpiece of service!",
//     image: "https://placehold.co/100x100/FACC15/ffffff?text=CC", // Yellow placeholder
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Diana Prince",
//     title: "Heroic Support",
//     reviewText:
//       "Empowering and strong! Their support team is truly heroic, tackling challenges with incredible speed and precision. Felt like I had a true champion by my side.",
//     image: "https://placehold.co/100x100/FB7185/ffffff?text=DP", // Pink placeholder
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: "Eve Harrington",
//     title: "Spotlight Stealer",
//     reviewText:
//       "They truly understand how to make you shine! From concept to execution, everything was flawless. My expectations were not just met, but spectacularly exceeded.",
//     image: "https://placehold.co/100x100/60A5FA/ffffff?text=EH", // Blue placeholder
//     rating: 4,
//   },
// ];

// // Helper component for star rating display
// const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
//   return (
//     <div className="flex items-center mt-2">
//       {[...Array(5)].map((_, i) => (
//         <svg
//           key={i}
//           className={`w-5 h-5 ${
//             i < rating ? "text-yellow-400" : "text-gray-300"
//           }`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//         </svg>
//       ))}
//     </div>
//   );
// };

// // Temporary SwipeHint Component
// function SwipeHint({ duration = 5000 }: { duration?: number }) {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, duration);
//     return () => clearTimeout(timer);
//   }, [duration]);

//   // Explicitly type panelVariants as Variants
//   const panelVariants: Variants = {
//     hidden: { opacity: 0, y: 50, scale: 0.8 },
//     visible: { opacity: 1, y: 0, scale: 1,
//       transition: {
//         type: "spring",
//         damping: 10,
//         stiffness: 100,
//       }
//     },
//     exit: { opacity: 0, y: -50, scale: 0.8,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//   };

//   // Explicitly type arrowVariants as Variants
//   const arrowVariants: Variants = {
//     animate: { x: [-10, 10, -10] },
//     transition: {
//       repeat: Infinity,
//       duration: 1.5,
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-lg text-white font-inter mx-auto mb-8 w-fit"
//           variants={panelVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <motion.div
//             className="text-5xl"
//             variants={arrowVariants}
//             initial="animate"
//             animate="animate"
//           >
//             &#8592; {/* Unicode for Left Arrow */}
//           </motion.div>
//           <p className="mt-2 text-lg md:text-xl font-semibold text-shadow-md">
//             Swipe Left
//           </p>
//           <p className="text-sm md:text-base text-gray-200">
//             (or drag the cards)
//           </p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // Main CustomerReviews component
// export default function CustomerReviews() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   // Configure keen-slider
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     initial: 0,
//     loop: true, // Infinite loop for reviews
//     slides: {
//       perView: 1, // Default to 1 review per view
//       spacing: 20, // Spacing between reviews
//     },
//     breakpoints: {
//       // Show 2 reviews on medium screens and up
//       "(min-width: 768px)": {
//         slides: {
//           perView: 2,
//           spacing: 30, // More spacing for larger screens
//         },
//       },
//       // Show 3 reviews on large screens and up
//       "(min-width: 1024px)": {
//         slides: {
//           perView: 3,
//           spacing: 40, // Even more spacing
//         },
//       },
//     },
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//   });

//   return (
//     <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 min-h-screen flex items-center justify-center font-inter overflow-hidden">
//       {/* Background blobs/shapes for "amusement" */}
//       <div className="absolute top-1/4 left-0 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob-one filter blur-3xl"></div>
//       <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob-two filter blur-3xl animation-delay-2000"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob-three filter blur-3xl animation-delay-4000"></div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
//         <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12 drop-shadow-lg leading-tight">
//           What Our <span className="text-yellow-300">Clients</span> Say
//         </h2>

//         {/* Integration of the SwipeHint component */}
//         <SwipeHint duration={5000} /> {/* Hint appears for 5 seconds */}

//         <div className="navigation-wrapper relative">
//           <div ref={sliderRef} className="keen-slider py-8">
//             {customerReviews.map((review) => (
//               <div key={review.id} className="keen-slider__slide p-4">
//                 <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col items-center text-gray-800 h-full">
//                   <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-purple-400 shadow-md">
//                     <Image
//                       src={review.image}
//                       alt={review.name}
//                       fill
//                       className="object-cover"
//                       sizes="100px" // Optimized for small profile images
//                     />
//                   </div>
//                   <StarRating rating={review.rating} />
//                   <p className="text-lg font-semibold mt-4 mb-2 text-purple-700">
//                     &ldquo;{review.reviewText}&rdquo;
//                   </p>
//                   <p className="text-sm italic text-gray-600">
//                     - {review.name}, <span className="font-medium">{review.title}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Arrows */}
//           {loaded && instanceRef.current && (
//             <>
//               <Arrow
//                 left
//                 onClick={(e: any) =>
//                   e.stopPropagation() || instanceRef.current?.prev()
//                 }
//                 disabled={currentSlide === 0 && !instanceRef.current?.options.loop}
//               />
//               <Arrow
//                 onClick={(e: any) =>
//                   e.stopPropagation() || instanceRef.current?.next()
//                 }
//                 disabled={
//                   currentSlide ===
//                     instanceRef.current.track.details.slides.length - 1 &&
//                   !instanceRef.current?.options.loop
//                 }
              
//               />
//             </>
//           )}
//         </div>

//         {/* Carousel Navigation Dots */}
//         {loaded && instanceRef.current && (
//           <div className="dots flex justify-center mt-8 space-x-3">
//             {[
//               ...Array(instanceRef.current.track.details.slides.length).keys(),
//             ].map((idx) => {
//               return (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     instanceRef.current?.moveToIdx(idx);
//                   }}
//                   className={`dot w-4 h-4 rounded-full transition-all duration-300 ${
//                     currentSlide === idx ? "bg-white scale-125 shadow-lg" : "bg-white bg-opacity-40 hover:bg-opacity-70"
//                   }`}
//                   aria-label={`Go to review ${idx + 1}`}
//                 ></button>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Tailwind CSS keyframes for blob animation (add to your global CSS or a <style> tag) */}
//       <style jsx>{`
//         @keyframes blob-one {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         @keyframes blob-two {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(-40px, 60px) scale(0.95); }
//           66% { transform: translate(10px, -30px) scale(1.05); }
//         }
//         @keyframes blob-three {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(50px, 10px) scale(1.02); }
//           66% { transform: translate(-30px, -40px) scale(0.98); }
//         }
//         .animate-blob-one { animation: blob-one 15s infinite alternate; }
//         .animate-blob-two { animation: blob-two 18s infinite alternate; }
//         .animate-blob-three { animation: blob-three 20s infinite alternate; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }
//       `}</style>
//     </section>
//   );
// }

// // Arrow component for navigation
// function Arrow(props: {
//   disabled: boolean;
//   left?: boolean;
//   onClick: (e: any) => void;
// }) {
//   const disabled = props.disabled ? "opacity-50 cursor-not-allowed" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 text-white cursor-pointer transition-colors duration-200 hover:text-yellow-300 ${
//         props.left ? "left-4" : "right-4"
//       } ${disabled}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
// }

// // // Main App component to render the demo
// // export default function App() {
// //   return (
// //     <CustomerReviews />
// //   );
// // }
