import React from "react";
import CardData from "./utilities/Data.js";
import Card from "./Common/Card";
import CmButton from "./Common/Button.jsx";

function Presentation() {
  return (
      <section className="bg-[#f9f9f9] sm:mt-[161px] mt-[130px] px-5">
        <div className="container flex lg:flex-row flex-col lg:items-start items-center sm:py-[136px] py-20  gap-[110px] mx-w-[1400px] mx-auto">
          {/* left part */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {CardData.map(({ source, heading, text }, index) => (
              <Card source={source} heading={heading} text={text} key={index} />
            ))}
          </div>

          {/* right part */}
          <div className="sm:px-0 px-3">
            {/* first part start*/}
            <div>
              <h1 className="font-inter font-semibold xl:text-[55px] xl:leading-[60px] sm:text-5xl text-xl max-w-[463px] max-h-[180px]">
                The quickest way to create modern presentation
              </h1>
              <p className="font-inter xl:text-[18px] xl:leading-[30px] sm:text-base text-[12px] max-w-[448px] max-h-[90px] opacity-50 pt-4">
                Best software platform for running an internet business. We
                build the most powerful and flexible tools for internet
                commerce.
              </p>
              <CmButton
                className="flex gap-2.5 bg-[#5F62E226] opacity-50 text-[#5F62E2] mt-[29px] 
             transition-colors duration-200 hover:bg-[#5F62E226] hover:opacity-75 "
              >
                Explore All <img src="/arrow.png" alt="arrow" />
              </CmButton>
            </div>
            {/* first part end*/}

            {/*second part start */}

            <div className="lg:pt-[180px] sm:pt-32 pt-14 ">
              <p className="font-inter opacity-50">Follow us</p>

              <div className="flex items-center gap-[13px] lg:pt-[21px] pt-4">
                <img src="/fb.png" alt="fb" />
                <img src="/ins.png" alt="ins" />
                <img src="/x.png" alt="x" />
              </div>
            </div>

            {/*second part end */}
          </div>
        </div>
      </section>
  );
}

export default Presentation;
