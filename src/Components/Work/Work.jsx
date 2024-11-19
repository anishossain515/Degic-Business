import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

function Work() {
  return (
    <section className='mt-20'>

        <div className='flex flex-col  space-y-[140px]'>
        <FirstSection/>
        <SecondSection/>
        </div>


    </section>
  )
}

export default Work;