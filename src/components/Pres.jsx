import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import flat from '../assets/personFlat.svg';

export default function Pres() {
  return (
    <div className='flex justify-center mt-10'>
        <div className='flex flex-col gap-y-6'>
            <div className='text-xl font-sans font-bold text-blue-300'>
                <TypeAnimation
                    sequence={[
                      "Bonjour, moi c'est Elias !",
                      500, 
                      "Hi, I'm Elias !",
                      1000,
                      '私はエリアスです !',
                      1000,
                      'Soy Elias !',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div className='flex justify-center'>
                <p className='font-inter font-semibold text-md text-slate-400'>Engineering student</p>
            </div>
            <div className='flex justify-center'>
                <div className='px-3 rounded-full bg-sky-900'>
                    <img src={flat} className='w-70 h-70'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
