import projects from '../data/projects.json';
import ProjectBox from './ProjectBox';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {

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
    <div className='flex flex-col justify-center items-center mt-16'>
      <div className='mb-16'>
        <p className='font-sans font-bold text-white text-2xl'>My Projects</p>
      </div>
      <motion.div 
        ref={ref} variants={appearing} initial="hidden" animate={ctrl} className='flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-4 gap-2 bg-slate-700 relative lg:w-144 sm:w-128 rounded-3xl mx-2 sm:mx-0'>
            {projects.map((project, i) => (
              <div className='m-1 sm:m-5'>
                  <ProjectBox key={`${i}-${project.name}`} project={project} />
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
