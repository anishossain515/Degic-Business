import React, { useState } from "react";
import SliderLeftPart from "./SliderLeftPart";
import { SliderData } from "../utilities/Data";
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const PreIndex = () => {
    setCurrentIndex((PreIndex) =>
      PreIndex === 0 ? SliderData.length - 1 : PreIndex - 1
    );
  };

  const NextIndex = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === SliderData.length - 1 ? 0 : nextIndex + 1
    );
  };

  const { heading, des, SlideImg } = SliderData[currentIndex];

  return (
    <>
      <section className="bg-[#ffffff] mt-[94px]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* left part start*/}
          <SliderLeftPart
            PreIndex={PreIndex}
            NextIndex={NextIndex}
            heading={heading}
            des={des}
          />
          {/* left part end*/}

          <div className="w-full lg:w-1/2">
            <img
              src={SlideImg}
              alt="slide"
              className="w-full h-auto object-cover md:px-0 px-5"
            />
          </div>
        </div>

      <marquee behavior="scroll" direction="left" className='mt-[69px]'>
        <div className="flex gap-[78.22px]">
          <img src="/google.png" alt="google" />
          <img src="/stripe.png" alt="stripe" />
          <img src="/uber.png" alt="uber" />
          <img src="/stripe.png" alt="stripe" />
          <img src="/nike.png" alt="nike" />
          <img src="/airbnb.png" alt="airbnb" />
          <img src="/mastercara.png" alt="mastercara" />
        </div>
      </marquee>
      </section>
    </>
  );
}

export default Slider;
