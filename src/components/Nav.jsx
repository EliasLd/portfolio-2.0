import React from 'react'

import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <nav className='sticky top-0 z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg firefox:bg-opacity-90"'>
        <div className='mx-w-5xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <RxHamburgerMenu size={30} color='white'/>
                <div className='flex space-x-4 text-gray-900'>
                    {/* Will add features */}
                </div>
            </div>
        </div>
    </nav>
  );
}
