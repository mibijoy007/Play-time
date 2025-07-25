'use client'
import React from "react";
// components/FaqSection.tsx
import { useState } from 'react';
// import {  MessageCircle, Smartphone, Bitcoin } from 'lucide-react';
import { BiSolidTimer } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { TbMoodPuzzled } from "react-icons/tb";

// --- TypeScript Type Definition for FAQ items ---
type FaqItem = {
  question: string;
  answer: string;
  icon: React.ElementType;
};

// --- FAQ Data ---
const faqData: FaqItem[] = [
  {
    question: 'Whats your turnaround time?',
    answer:
      'Depending on the project complexity, mostly 6 to 10 days',
    icon: BiSolidTimer,
  },
  {
    question: `I don't have a sketch or CAD plan/blueprints .  
                Where do we start?`,
    answer:
      'No problem at all, just send your thoughts and existing photos if applicable, we’ll handle the rest',
    icon: TbMoodPuzzled,
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer:
      'Frist of all, there is no chance. But if in case, I assure 80% refund of the project',
    icon: RiRefund2Fill,
  },
];



// --- Accordion Item Component ---
// This is a reusable component for each individual FAQ item.
const FaqItem = ({ item, isOpen, onClick }: { item: FaqItem, isOpen: boolean, onClick: () => void }) => {
  const Icon = item.icon;

  return (
    <div className="mb-3 overflow-hidden  rounded-xl hover:scale-105 hover:bg-[#4862c1] hover:duration-500 bg-blue-800 border border-blue-300 shadow-lg transition-all duration-300 ">
      {/* Question Button */}
      <button
        onClick={onClick}
        className="w-full flex items-center p-3 md:p-4 focus:outline-none "
        aria-expanded={isOpen}
      >
        <div className="flex items-center w-full text-left ">
          <div className="flex-shrink-0 mr-4 p-1 md:p-2 rounded-full ">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <span className="flex-1 text-base md:text-lg font-medium text-slate-100">
            {item.question}
          </span>
          <FaChevronDown
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
              } h-6 w-6 text-slate-400`}
          />
        </div>
      </button>

      {/* Answer Panel with Animation */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden bg-[#4862c1] text-center md:text-left">
          <p className="px-6 pb-4 pt-0 text-slate-100  leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};



const Faq = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    // #f6e7ec
    // <div className="relative about h-screen w-full bg-[#f4edd3] flex items-center justify-center overflow-hidden">
    //   {/* Text container */}
    //   <div className="text-center max-w-6xl px-4 z-10 font-serif font-light w-full">

    //   </div>
    // </div>
    <div id="faq" className=" min-h-screen font-sans text-white bg-[linear-gradient(135deg,_#1b398f,_#1b3ba2,_#0e49af,_#004d9d,_#006987,_#007672)]">
      <div className="container mx-auto px-4 pt-20 sm:pt-6 lg:pt-14 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">


          {/* Left Column:Header in a White Box  */}
          {/* <div className="md:order-2 order-2"> */}
          <div className="bg-blue-100 rounded-2xl px-8 py-4 lg:px-10 lg:py-6 shadow-2xl ">
            {/* <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                FAQ
              </p> */}
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className=" mt-2 md:mt-6 text-base md:text-lg  text-slate-600">
              We&apos;re here to help with all of your questions and answers in one place.
              <br />
              {/* Can&apos;t find what you&apos;re looking for? */}
              <br />
            </p>

            {/* <div className="flex justify-center items-center ">
              <button className="  mt-2 md:mt-3 hover:cursor-pointer bg-blue-700 hover:bg-blue-500  text-white font-semibold py-3 px-6 rounded-full transition-all duration-300  hover:scale-105  hover:duration-500  border border-blue-300 shadow-lg ">
                Contact Us Now!
              </button>
            </div> */}
            
          </div>
          {/* </div> */}


          {/* Right Column:  Accordion List*/}
          {/* <div className="order-1 md:order-2 "> */}
          <div className="order-1 md:order-2 ">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>
      </div>


      {/* Contact Section */}
      {/* bg-[#ededed] */}

      <div className="p-2 text-slate-900 flex flex-col items-center justify-center mt-2 ">
        <div className="bg-white flex-col rounded-2xl px-8 py-4 lg:px-10 shadow-2xl ">
          <h2 className="text-4xl font-bold text-center mb-5 ">
            Don&apos;t let your ideas go to waste.
            <br />
            <span className="text-2xl text-slate-600">Let&apos;s turn them into reality.</span>
          </h2>
          <p className="text-center text-slate-600">
            A quick discussion helps us fully understand your goals, timeline, and
            expectations <br /> — ensuring you get the best possible results,
            tailored to your needs.
          </p>
          <div className="flex justify-center items-center ">
              <button className="  mt-2 md:mt-3 hover:cursor-pointer bg-blue-700 hover:bg-blue-500  text-white font-semibold py-3 px-6 rounded-full transition-all duration-300  hover:scale-105  hover:duration-500  border border-blue-300 shadow-lg ">
                Contact Us Now!
              </button>
            </div>
        </div>
      </div>

    </div>

  );
};

export default Faq;