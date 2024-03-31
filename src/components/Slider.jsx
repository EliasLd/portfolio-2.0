import React from 'react'
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiArduino } from "react-icons/si";
import { SiArchlinux } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../index.css'

export default function Slider() {

    const techs =[<BiLogoVisualStudio size={30} color='white' />, <SiArduino size={30} color='white'/>, <SiArchlinux size={30} color='white'/>, <FaUbuntu size={30} color='white'/>, <FaGitAlt size={30} color='white'/>, <FaGithub size={30} color='white'/>]

    return (
        <div className=" flex items-center  justify-center">
          {/* 1. */}
          <div className="w-[200%] h-20  overflow-hidden relative">
            {/* 2. */}
            <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
              {/* 3 */}
              {techs.map((tech, i) => {
                return (
                  <div key={i} className="flex justify-center items-start w-[20rem]">
                    {tech}
                  </div>
                );
              })}
              {techs.map((tech, i) => {
                return (
                  <div key={`${i}-A`} className="flex justify-center items-start w-[20rem]">
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    );
}
