import React from 'react'
import CmButton from '../Common/Button'

function FirstSection() {
  return (
    <section className='max-w-[1400px] mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[146px] items-center'>
            <img src="/Time1.png" alt="Time1" className='w-full h-auto max-w-lg' />
 
            <div className='font-inter space-y-6  px-5'>
                <h2 className='font-medium max-w-[463px] max-h-[120px] text-3xl xl:text-[55px] sm:text-[43px]  sm:leading-[60px]'>Make more time for the work</h2>

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

                <CmButton className='flex gap-[2.5px] items-center '>Learn more <img src="/arrow1.png" alt="" /></CmButton>

            </div>
        </div>
    </section>
  )
}

export default FirstSection