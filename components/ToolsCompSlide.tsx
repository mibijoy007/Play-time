'use client'
import React from "react";
import ToolsUsed from "./ToolsUsed";
import CompaniesWorked from "./CompaniesWorked";

const ToolsCompSlide = () => {
  return (
    
    // #f6e7ec
    <div className="relative about h-screen w-full bg-[#f4edd3] flex items-center justify-center overflow-hidden">
      {/* Text container */}
      <div className="text-center max-w-6xl px-4   w-full pt-10">
         <ToolsUsed/>
         <div className="w-[80%] h-[1.5px] bg-gray-400 flex items-center justify-center text-center mx-auto mb-3"/>
         <CompaniesWorked/>

      </div>
    </div>
  );
};

export default ToolsCompSlide;