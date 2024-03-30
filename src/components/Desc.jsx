import React from 'react'

export default function Desc() {
  return (
    <div className='p-3 flex flex-col justify-center items-center mt-20'>
      <div className='flex justify-center'>
        <h1 className='font-sans font-bold text-white text-2xl'>Trying to build useful things.</h1>
      </div>
      <div className='p-4 flex  mt-5'>
          <p className='font-inter font-semibold text-md text-slate-400'>Currently following an engineering program at 
          <a href='https://www.esilv.fr' className='px-1 mx-2 bg-sky-700 rounded-full text-white'>  ESILV  </a>in Paris. <br/> 
          Passionate about development, I'd like to specialize in it. </p>
      </div>
    </div>
  )
}
