import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProjectsDetails({project}) {

  const appearing = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1} },
    hidden: { opacity: 0, sclae: 0},
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

  const IMG = (imageName) => {
    return require(`../assets/${imageName}`);
  }
 
  return (
    <div className='flex flex-col'>
        <motion.div ref={ref} variants={appearing} initial="hidden" animate={ctrl} >
          <div className='rounded-3xl bg-slate-200 py-6 px-6 w-9/10 flex flex-col shadow-xl'>
            <div className='flex justify-center my-4'>
              <p className='font-sans font-bold text-3xl'>{project.name}</p>
            </div>
            <div className='flex justify-center'>
              {project.imageName !== "" && <img src={IMG(project.imageName)} alt='' className=' object-contain  border-2 border-slate-300 rounded-xl mb-3'/>}
            </div>
            <ul className='flex flex-row gap-1 justify-start flex-wrap mt-2'>
              {project.Techs.map((tech, i) => (
                <li key={i} className='text-sm text-slate-500 font-inter font-semibold rounded-full bg-slate-300 px-2'>{tech}</li>
              ))}
            </ul>
            <div className='mt-3'>
              <p className='font-inter font-semibold'>{project.Desc}</p>
            </div>
            <div>
              
            </div>
          </div>
        </motion.div>
    </div>
  );
}
