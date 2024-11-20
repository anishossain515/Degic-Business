import React from 'react'
import CmButton from './Common/Button'

function Bomb() {
  return (
    <section className='mt-[166px] bg-[#5f62e2]'>

        <div className='max-w-[1400px] mx-auto flex justify-between px-4'>

            <div className='pb-8 pt-16'>
                <h1 className='text-white text-[55px] leading-[60px] font-semibold max-w-[700px] max-h-[174px]'>The quickest way to create awesome presentation</h1>

               <div className='pt-10 space-x-3'> 
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