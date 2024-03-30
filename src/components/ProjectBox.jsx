import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProjectsDetails({project}) {

  const appearing = {
    visible: { opacity: 1, scale: 1},
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

  return (
    <div className='flex flex-col p-3'>
        <motion.div ref={ref} variants={appearing} initial="hidden" animate={ctrl} >
          <div className='rounded-lg bg-slate-200 p-1 flex justify-center'>
            <p className='font-sans font-bold text-xl'>{project.name}</p>
          </div>
        </motion.div>
    </div>
  );
}
