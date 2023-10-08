import React from 'react'

const ProjectSection = () => {

    const projectsList = [
        {
            id: 1,
            imageSrc: "/help.png",
            description: "A discord bot that track one's expenses",
        },
        {
            id: 2,
            imageSrc: "/4.png",
            description: "Connect Four with GUI added",
        },
    ]

  return (
    <div className="md:h-screen bg-[#111111]">
        <h2 className="text-4xl font-semibold m-16 md:mb-10">
            My Projects
        </h2>

        {projectsList.map(({id, imageSrc, description}) => (
            <div key={id} className='max-w-screen-md mx-auto shadow-lg shadow-gray-600 rounded-xl m-20 mb-20'>
                <img 
                    src={imageSrc} 
                    alt={description}  
                    style={{ width: '100%', height: '80%', display: 'block', margin: '0 auto', borderRadius: '10px'}} 
                    className="duration-200 hover:scale-105"
                />
                <button className='text-2xl px-2 m-4 duration-200 hover:scale-105'>
                Code
                </button>
            </div>
            ))
        }    
    </div>
  )
}

export default ProjectSection