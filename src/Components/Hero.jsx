import React from 'react';
import CmButton from './Common/Button';

function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between mt-28 mx-auto px-5 sm:px-20 lg:px-24 2xl:px-40">
      {/* Text Content Section */}
      <div className="pt-16 lg:pt-14">
        <h1 className="font-inter font-semibold text-xl sm:text-4xl lg:text-5xl 2xl:text-[72px] leading-tight lg:leading-[60px] 2xl:leading-tight mb-4 lg:mb-6 2xl:mb-8">
          Simply explained with illustrations
        </h1>
        <p className="font-inter text-sm sm:text-lg lg:text-xl 2xl:text-[21px] text-black opacity-70 mb-6 lg:mb-10 max-w-xl">
          There are a lot of different components that will help you create the perfect look for your project.
        </p>

        <div className="space-x-3">
          <CmButton>Get Started</CmButton>
          <CmButton className="bg-[#5F62E226] opacity-70 transition-colors duration-200 hover:bg-[#5F62E226] hover:opacity-50  text-[#5F62E2]">Learn More</CmButton>
        </div>
      </div>

      {/* Hero Image Section */}
      <div>
        <img src="/hero.png" alt="hero" className="w-full object-contain" />
      </div>
    </section>
  );
}

export default Hero;
