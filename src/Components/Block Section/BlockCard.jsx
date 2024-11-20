import React from 'react'

function BlockCard({blockImg,blockHead,des,miniCard}) {
  return (
    <div className='max-w-[410px]'>

        <img src={blockImg} alt="BlockImg" className='bg-[#eeeef6] rounded-tr-lg rounded-tl-lg'/>

        <div className='space-y-[13px] font-inter px-2 pb-3'>
            <h1 className='font-medium sm:text-[28px] text-xl pt-3'>{blockHead}</h1>
            <p className='opacity-50 sm:text-base text-sm'>{des}</p>
            <button className='bg-[#e8f7f3] text-[#2ab691] sm:text-base text-sm px-[5px] py-1 rounded-md'>{miniCard}</button>
        </div>

    </div>
  )
}

export default BlockCard