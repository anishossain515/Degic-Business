import React from "react";
import { SliderData } from "../utilities/Data";
function SliderLeftPart({NextIndex,PreIndex,heading,des}) {
  return (
    <div className="px-3">

      <div className="flex items-center gap-[15px] pb-4">
        <img src="/Shape.png" alt="shape" />
        <p className="font-inter font-medium text-xl">Logo</p>
      </div>

      <h1 className="md:text-[55px] sm:text-5xl  text-[25px] font-medium sm:leading-[60px] max-w-[463px] max-h-[180px] ">
        <span className=" text-[#2ab691]">“</span>{heading} <span className="text-[#2ab691]">”</span>
      </h1>

      <p className="font-inter md:text-lg sm:text-base text-sm opacity-50 max-w-[322px] max-h-10 pt-[26px] ">
       {des}
      </p>

      <div className="flex items-center gap-2.5 pt-[51px]">
        <button onClick={PreIndex}><img src="/slideArrow1.png" alt="slideArrow1" /> </button>
        <button onClick={NextIndex}> <img src="/slideArrow2.png" alt="slideArrow2" /> </button>
      </div>


    </div>

    
  );
}

export default SliderLeftPart;
