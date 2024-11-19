import React from 'react'

function Card({source,heading,text}) {
  return (
    <div className='max-w-[300px] max-h-[310px] bg-[#ffffff] py-[32px] px-[35px] rounded-lg flex flex-col items-center justify-center'>
        <img src={source} alt={heading} className='size:[130px] pb-[23px]'/>
        <h1 className='font-inter font-semibold text-[24px] pb-2.5'>{heading}</h1>
        <p className='text-black opacity-50'>{text}</p>
    </div>
  )
}

export default Card