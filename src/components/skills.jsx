import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Slider from './Slider';

export default function Skills() {

  const languages = ["C", "C++", "C#", "Python", "Javascript", "MySQL", "HTML", "CSS", "React", "Tailwind", "Node", "Express", "MongoDB"]

  const appearing = {
    visible: { opacity: 1, y:0,  transition: { duration: 0.5} },
    hidden: { opacity: 0 , y: 100},
  };

  const ctrl = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView){
      ctrl.start("visible");
    } else {
      ctrl.start("hidden");
    }
  }, [ctrl, inView]);  


  return (
    <div className='flex justify-center items-center mt-10 sm:mt-20 flex-wrap'>
        <div className='grid  lg:grid-cols-2 gap-y-8 lg:gap-x-5 justify-center p-4 lg:w-144 sm:w-128  mx-4 sm:mx-10'>
            <div className='flex flex-col gap-y-8 p-3 rounded-2xl '>
                <div className='flex justify-center items-center'>
                    <h2 className='font-sans font-semibold text-2xl text-white'>Languages & Frameworks</h2>
                </div>
                <div className='flex items-center p-3 rounded-2xl '>
                    <ul className='flex flex-row gap-2 justify-start flex-wrap'>
                        {languages.map((language, index) => (
                             <li key={index} className='text-md text-slate-500 font-inter font-semibold rounded-full bg-slate-300 px-2'>{language}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-y-14 p-2 '>
                <div className='flex mt-1 justify-center items-center'>
                    <h2 className='font-sans font-semibold text-2xl text-white '>Techs I use</h2>
                </div>
                <div className='flex justify-center items-center mb-6'>
                    <div className='slider-container'>
                    <Slider />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
