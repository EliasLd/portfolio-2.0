import React from 'react'

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='flex flex-row gap-x-8 items-center justify-center mb-10'>
        <p className='font-inter font-semibold text-slate-500 ytext-2xl'>Made by • Eliasld ! • ©</p>
        <a href='https://github.com/EliasLd'>
          <FaGithub size={20} color='white' className='hover:cursor-pointer'/>
        </a>
    </div>
  )
}
