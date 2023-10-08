'use client'
import React from 'react'
import Image from 'next/image'


const ProjectSection = () => {
    const projectsList = [
        {
            id: 1,
            imageSrc: "/help.png",
            description: "A discord bot that track one's expenses",
            gitUrl: "https://github.com/haftraanf/Thriftier",
        },
        {
            id: 2,
            imageSrc: "/4.png",
            description: "Connect Four with GUI added",
            gitUrl: "https://github.com/haftraanf/ConnectFour",
        },
    ]

  return (
    <div className="md:h-screen">
        <h2 className="text-4xl font-semibold m-16 md:mb-10">
            My Projects
        </h2>
        <div>
            {projectsList.map(({id, imageSrc, description, gitUrl}) => (
                <div key={id} className='max-w-screen-md mx-auto shadow-lg shadow-gray-600 rounded-xl m-20'>
                    <Image 
                        src={imageSrc} 
                        alt={description}  
                        width={1000}
                        height={1000}
                        style={{ display: 'block', margin: '0 auto', borderRadius: '10px'}} 
                        className="duration-200 hover:scale-105"
                    />
                    <button className='text-2xl px-2 m-4 duration-200 hover:scale-105'
                            onClick={() => window.open(gitUrl, '_blank')}
                    >
                        Code
                    </button>
                </div>
                ))
            }    
        </div>
    
    </div>
  )
}

export default ProjectSection