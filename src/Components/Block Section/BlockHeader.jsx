import React from 'react'
import CmButton from '../Common/Button'

function BlockHeader() {
  return (
    <div className='flex md:flex-row flex-col gap-5 items-center justify-between'>

        <div className='font-inter flex flex-col gap-4'>
          <h2 className='font-medium md:text-[55px] sm:text-5xl text-4xl'>Get more from our blog</h2>
          <p className='opacity-50 md:text-lg max-w-[420px] max-h-[60px]  text-sm'>There are a lot of different components that will help you create the perfect look for your project</p>
        </div>

        <CmButton className='flex items-center gap-[2.5px] bg-[#e7e7fb]  text-[#5f62e2] hover:bg-opacity-30'>Explore All <img src="/arrow.png" alt="arrow" /></CmButton>

    </div>
  )
}

export default BlockHeader