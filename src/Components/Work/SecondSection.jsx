import React from 'react'
import CmButton from '../Common/Button'

function SecondSection() {
  return (
    <section className='max-w-[1400px] mx-auto'>
        <div className='flex sm:flex-col flex-col-reverse lg:flex-row gap-[146px] items-center '>
    
            <div className='font-inter space-y-6  px-5'>
                <h2 className='font-medium max-w-[463px] max-h-[120px] xl:text-[55px] sm:text-[43px] text-3xl sm:leading-[60px]'>Make more time for the work</h2>

                <div className='flex flex-col items-start gap-[9px]'>

                    <div className='flex gap-2.5 items-center'>
                        <img src="/Check.png" alt="Check" />
                        <p className='sm:text-lg text-base'>Many ways to use illustrations in design</p>
                    </div>
                    
                    <div className='flex gap-2.5 items-center'>
                        <img src="/Check.png" alt="Check" />
                        <p className='sm:text-lg text-base'>Simply explained with illustrations</p>
                    </div>


                    <div className='flex gap-2.5 items-center'>
                        <img src="/Check.png" alt="Check" />
                        <p className='sm:text-lg text-base'>Make more time for the work</p>
                    </div>

                </div>

                <CmButton className="bg-[#5F62E226] opacity-70 transition-colors duration-200 hover:bg-[#5F62E226] hover:opacity-50  text-[#5F62E2] flex gap-[2.5px] items-center ">Learn More <img src="/arrow.png" alt="arrow" /></CmButton>

            </div>

            <img src="/Time2.png" alt="Time1" />
 
        </div>
    </section>
  )
}

export default SecondSection