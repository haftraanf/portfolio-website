'use client'
import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section>
      <div>
        <h1 className="text-5xl py-2 font-extrabold md:text-7xl">
          <span className="">
            Hi, I&apos;m {}
          </span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Ha Tran',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'A Software Developer',
              1000,
              'A Problem Solver',
              1000,
              'A Team Player',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-3xl pb-7 mt-6 mb-6 font-light md:text-5xl">
          CS Student @ McMaster
        </h2>
        <button className={'text-xl font-semibold px-20 py-3 rounded-full mr-3 mt-3 bg-gradient-to-br from-[#353437] via-[#1A1A1B] to-[#69686D]' + (isHovered ? 'hovered-button' : '')} 
                onClick={() => window.open('/resume.pdf', '_blank')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
        >
          Resume
        </button>
        <div className="text-5xl flex gap-16 justify-center py-10 mt-5">
          <a href="https://github.com/haftraanf" 
             target="_blank" 
             style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out',}}
             onMouseOver={(e) => {e.target.style.transform = 'scale(1.5)';}}
             onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}}
          >
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/hatran-cs/" 
             target="_blank" 
             style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out',}}
             onMouseOver={(e) => {e.target.style.transform = 'scale(1.5)';}}
             onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}}
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:khanhhatran.cs@gmail.com"
             target="_blank" 
             style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out',}}
             onMouseOver={(e) => {e.target.style.transform = 'scale(1.5)';}}
             onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}}
          >
          <AiOutlineMail />
          </a>
        </div>  
      </div>
    </section> 
  )
}

export default HeroSection