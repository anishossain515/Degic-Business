import React from 'react'
import CmButton from './Common/Button'

function Bomb() {
  return (
    <section className='mt-[166px] bg-[#5f62e2]'>

        <div className='max-w-[1400px] mx-auto flex md:flex-row flex-col-reverse items-center justify-between px-4'>

            <div className='pb-8 pt-16'>
                <h1 className='text-white xl:text-[55px] lg:text-5xl text-3xl lg:leading-[60px] font-semibold max-w-[700px] max-h-[174px]'>The quickest way to create awesome presentation</h1>

               <div className='md:pt-10 pt-5 space-x-3'> 
                  <CmButton className='bg-[#2ab691]'>Get Started</CmButton>
                  <CmButton className='bg-[#777ae6]'>Learn More</CmButton>
                </div>
            </div>

            <div className='pt-5'>
                <img src="/bomb.png" alt="bomb" className='w-full h-auto max-w-md' />
          </div> 

        </div>

    </section>
  )
}

export default Bomb