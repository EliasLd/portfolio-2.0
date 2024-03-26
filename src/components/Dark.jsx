import React from 'react'
import { useState } from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Dark() {

    const [isDark, setIsDark] = useState(false);

    const darkModeHandling = () => {
        setIsDark(!isDark);
        document.body.classList.remove(isDark ? 'bg-black' : 'bg-white');
        document.body.classList.add(isDark ? 'bg-white' : 'bg-black');  
    }

  return (
    <div className='p-4 flex justify-end items-center'>
        <button onClick={() => darkModeHandling()}>
        {
            isDark ? <IoSunnySharp className='text-white' size={36}/> : <BsFillMoonStarsFill size={36}/>
        }
        </button>
    </div>
  )
}
