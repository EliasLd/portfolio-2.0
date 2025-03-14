import React from 'react';
import '../index.css';

export default function Desc() {
  return (
    <div className='p-3 flex flex-col justify-center items-center mt-20'>
      <div className='flex justify-center'>
        <h1 className='font-sans font-bold text-white text-2xl text-focus-in'>Trying to build useful things.</h1>
      </div>
      <div className='p-4 flex  mt-5'>
          <p className='font-inter font-semibold text-md text-slate-400'>Currently following an engineering <br/> program at 
          <a href='https://www.esilv.fr' className='px-1 mx-2 bg-sky-700 rounded-full text-white'>  ESILV  </a>in Paris. 
          <br/><br/>I'm also an apprentice software engineer at 
          <a href='https://www.edf.fr/en/the-edf-group/inventing-the-future-of-energy/r-d-global-expertise' className='px-2 mx-1 bg-sky-700 rounded-full text-white'>EDF R&D</a>. 
          <br />Passionate about development, I'd like to specialize in it. </p>
      </div>
    </div>
  )
}
