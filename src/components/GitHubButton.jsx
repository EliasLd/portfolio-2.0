import React from 'react'
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";

export default function GitHubButton({link}) {

  const [color, setColor] = useState('black');

  return (
    <a href={link} className='flex items-center justify-center p-3 rounded-xl border border-black text-black bg-white 
    transition ease-in-out duration-300 hover:bg-sky-950 hover:text-white ' 
    onMouseEnter={() => setColor('white')} onMouseLeave={() => setColor('black')}>
        <div className='flex flex-row gap-x-3'>
            <p className='font-inter font-semibold text-sm xs:text-md'>Github</p>
            <FaGithub size={20} color={color === 'white' ? 'white' : 'black'} className='transition ease-in-out duration-300'/>
        </div>
    </a>
  )
}
