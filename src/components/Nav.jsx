import React from 'react'
import { motion, useAnimation, useAnimate, stagger, } from "framer-motion";
import { useEffect, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Nav() {

  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ["About", "Skills", "Projects"];

  const staggerList = stagger(0.1, {
    startDelay: 0.25
  });

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 120 : 0,
        height: open ? 125 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    );
    animate(
      "li", 
      open ? { opacity: 1, scale: 1, x: 0} : {opacity: 0, scale: 0.3, x: -50},
      {
        duration: 0.2,
        delay: open ? staggerList : 0
      }
    );
  }, [open]);

  return (
    <nav className='sticky top-0 z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg firefox:bg-opacity-90'>
        <div className='mx-w-5xl mx-auto px-4 ' ref={scope}>
            <div className='flex items-center justify-between h-16'>
              <motion.button onClick={() => setOpen(!open)} whileTap={{scale: 0.70, opacity: 0.75}}>
                {open ?  <RxCross1 size={35} color='white'/> : <RxHamburgerMenu size={35} color='white'/>}
              </motion.button>
              <ul className='flex flex-col gap-y-3 justify-center items-center mt-52 rounded-3xl bg-slate-100 text-black p-2 mr-5 absolute'>
                {items.map((item, i) => (
                  <a key={`${i}-D`} href={`#${item.toLowerCase()}`} className='bg-slate-300 rounded-full w-3/4 flex justify-center cursor-pointer transition ease-in-out duration-300 hover:scale-105'>
                    <motion.li key={i} className='mx-4 font-inter font-bold text-sm'>{item}</motion.li>
                  </a>
                ))}           
              </ul>
            </div>
        </div>
    </nav>
  );
}
