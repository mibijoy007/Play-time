import React from "react";
import Footer from "./Footer";

const LastPage = () => {
  return (
    // <div className=" w-full bg-black flex flex-col items-center justify-center overflow-hidden">
    <div className="relative h-screen w-full bg-red-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Text container */}
      <div className="text-center max-w-6xl px-6  z-10 ">
        <h1 className=" text-5xl text-slate-600 font-semibold mb-40 pb-40 ">Want to see more? <br />Check out our <a className="text-blue-500 underline" href="/work">Work!</a> 


        </h1>
        
      </div>

      <div className="absolute bottom-0 left-0 w-full ">
        <Footer/>
      </div>

    </div>
  );
};

export default LastPage;