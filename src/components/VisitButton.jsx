import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

export default function VisitButton({link}) {
  return (
    <div>
        <a href={link} className='flex flex-row items-center-center p-3 rounded-xl bg-sky-950 transition ease-in-out duration-200 hover:scale-105'>
            <div className='flex flex-row items-center gap-x-3'>
                <p className='font-inter font-semibold text-sm xs:text-md text-white'>Visit site</p>
                <FiArrowUpRight size={20} color='white' />
            </div>
        </a>
    </div>
  )
}
