'use client';

import SectionScrollerWrapper from "@/components/SectionScrollerWrapper";
import Intro from "@/components/Intro";
import SliderOne from "@/components/SliderOne";
import { JSX } from "react";
// import SliderTwo from "@/components/SliderTwo";
// import SliderThree from "@/components/SliderThree";
// import SliderFour from "@/components/SliderFour";
// import SliderFive from "@/components/SliderFive";
// import SliderSix from "@/components/HowWeWork";
// import SliderSeven from "@/components/SliderSeven";
// import SliderEight from "@/components/SliderEight";
import SliderNine from "@/components/SliderNine";
import LastPage from "@/components/LastPage";
import HowWeWork from "@/components/HowWeWork";
import Faq from "@/components/Faq";
import SliderEightcopy from "@/components/SliderEightcopy";



export default function Home(): JSX.Element {
  return (
    <>
    <SectionScrollerWrapper
       showNavigationDots={false}
      transitionDuration={0.8}
      transitionEase="easeInOut"
    >

      <SliderOne />
      <Intro />

      <HowWeWork/>
      {/* <SliderSeven/> */}
       {/* Philosophy */}
       {/* <SliderEight/> */}
       <SliderEightcopy/>
      {/* here is problem form Philosophy */}
      <SliderNine/>{/* <What we do/> */}
    
      <Faq/>
      <LastPage/>
    </SectionScrollerWrapper>
      
      </>
  );
}


// <SliderTwo />{/* exterior */}
//       <SliderThree />{/* interior */}
//       {/* <SliderFour /> */} {/* video section */}
//       <SliderFive />{/* landscape */}