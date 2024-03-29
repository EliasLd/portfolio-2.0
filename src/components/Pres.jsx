import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import flat from '../assets/personFlat.svg';

export default function Pres() {

  const [hovered, setHovered] = useState(null);

  return (
    <div className='flex justify-center mt-10'>
        <div className='flex flex-col gap-y-8'>
            <div className='text-xl font-sans font-bold text-blue-300'>
                <TypeAnimation
                    sequence={[
                      "Hi, I'm Elias !",
                      500, 
                      "Moi c'est Elias !",
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
                    <img src={flat} alt='' className='w-70 h-70'></img>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-x-12 relative'>
                <div className='flex flex-col items-center'>
                    <a href='https://www.linkedin.com/in/elias-el-abd-5a1857292/' className='flex justify-center'>
                        <FaLinkedin 
                            size={30} color='white' className='cursor-pointer' 
                            onMouseEnter={() => setHovered('LinkedIn')} onMouseLeave={() => setHovered(null)} 
                        />
                        {hovered === 'LinkedIn' && (
                            <div className='absolute top-0 mt-16 text-white text-sm slide-top bg-sky-700 px-2 py-1 rounded-full'>
                                <p className='text-sm font-inter text-slate-100'>LinkedIn</p>
                            </div>
                        )}
                    </a>
                </div>
                <div className='flex flex-col items-center'>
                    <a href='https://github.com/EliasLd' className='flex justify-center'>
                        <FaGithub 
                            size={30} color='white' className='cursor-pointer' 
                            onMouseEnter={() => setHovered('GitHub')} onMouseLeave={() => setHovered(null)} 
                        />
                        {hovered === 'GitHub' && (
                            <div className='absolute top-0 mt-16 text-white text-sm slide-top bg-sky-700 px-2 py-1 rounded-full'>
                                <p className='text-sm font-inter text-slate-100'>GitHub</p>
                            </div>
                        )}
                    </a>
                </div>
                <div className='flex flex-col items-center'>
                    <a href={process.env.PUBLIC_URL + '/CV.pdf'} download className='flex justify-center'>
                        <MdOutlineFileDownload 
                            size={30} color='white' className='cursor-pointer'
                            onMouseEnter={() => setHovered('Download')} onMouseLeave={() => setHovered(null)} 
                        />
                        {hovered === 'Download' && (
                            <div className='absolute top-0 mt-16 text-white text-sm slide-top bg-sky-700 px-2 py-1 rounded-full'>
                                <p className='text-sm font-inter text-slate-100'>CV</p>
                            </div>
                         )}
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
