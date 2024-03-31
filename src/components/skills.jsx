import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Slider from './Slider';

export default function Skills() {

  const languages = ["C", "C++", "C#", "Python", "Javascript", "MySQL", "HTML", "CSS", "React", "Tailwind", "Node", "Express", "MongoDB"]

  const appearing = {
    visible: { opacity: 1, y:0,  transition: { duration: 0.5} },
    hidden: { opacity: 0 , y:100},
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
    <div className='flex justify-center items-center'>
        <div className='grid grid-rows-2 lg:grid-cols-2  gap-x-5 justify-center   my-8 p-4 lg:w-144 sm:w-128  mx-4 sm:mx-0'>
            <div className='flex flex-col gap-y-3 p-3 '>
                <div className='flex justify-center items-center'>
                    <h2 className='font-sans font-semibold text-2xl text-white'>Languages & Frameworks</h2>
                </div>
                <div className='flex items-center p-3 rounded-2xl border b-slate-200'>
                    <ul className='flex flex-row gap-2 justify-start flex-wrap mt-2'>
                        {languages.map((language, index) => (
                             <li key={index} className='text-md text-black font-inter font-semibold rounded-full bg-white px-2'>{language}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-2 rounded-2xl bg-slate-500'>
                <div className='flex justify-center items-center'>
                    <h2 className='font-sans font-semibold text-2xl text-white'>Techs I use</h2>
                </div>
                {/* Ajoutez une classe pour définir la taille du conteneur du Slider */}
                <div className='slider-container'>
                    <Slider />
                </div>
            </div>
        </div>
    </div>
  )
}
