import React, { useState } from 'react'

function Projects() {

  const [projects, showProjects] = useState(true);

    const Project = [
        {
            id: 1,
            title: "Portfolio Website",
            link: "https://github.com/sbhuvan455/ReactPortfolio",
            image: "Portfolio.png"
        },
        {
            id: 2,
            title: "YouTube Backend",
            link: "https://github.com/sbhuvan455/Backend-YouTube",
            image: "YouTube.png"
        },
        {
            id: 3,
            title: "Real Estate Website",
            link: "https://github.com/sbhuvan455",
            image: "RealEstate.png"
        },
        {
            id: 4,
            title: "Movie Ticket Booking",
            link: "https://github.com/sbhuvan455",
            image: "movieTicket.png"
        },
        {
            id: 5,
            title: "Random Password Generator",
            link: "https://github.com/sbhuvan455/Random-password-generator",
            image: "RPG.png"
        }
    ]

    const Contributions = [
      {
        id: 1,
        title: "Virtual Law",
        link: "https://lawbyai.vercel.app/",
        image: "virtuallaw.png"
      },
      {
        id: 2,
        title: "Virtual School",
        link: "https://virtuallearn.vercel.app/",
        image: "virtualSchool.png"
      },
    ]

  return (
    <div className='w-full min-h-screen dark:bg-zinc-700 text-white'>
      <div className='mx-auto text-center py-9'>
        <h1 className='text-3xl font-bold font-sans'>Projects</h1>
        <p className='font-thin font-sans py-2 dark:text-cyan-500'>My Recent Works</p>
      </div>
      <div className='text-center'>
        <span className={`font-thin px-5 select-none cursor-pointer ${(projects)?'text-red-700':''}`} onClick={() => showProjects(true)}>My Works</span>
        <span className={`font-thin px-5 select-none cursor-pointer ${(projects)?'':'text-red-700'}`} onClick={() => showProjects(false)}>My Contributions</span>
      </div>
      <div className='md:px-14 m-8 text-center mt-6 grid grid-cols-1 md:grid-cols-3 gap-7 py-9'>

        {(projects)&&(Project.map((project) => {
            return (
                <div key={project.id} className='w-80 h-60 bg-slate-100 rounded-xl shadow-md shadow-slate-700/40 dark:bg-zinc-800 dark:shadow-slate-300/40 dark:shadow-md'>
                    <div className='rounded-md p-2 overflow-hidden w-auto h-1/2'>
                        <img src={project.image} alt="thumbnail" className='rounded-md' />
                    </div>
                    <div>
                        <h1 className='font-bold p-4 font-sans select-none'>{project.title}</h1>
                        <a href={project.link} target='_blank' className='bg-blue-950 hover:bg-cyan-700 text-slate-50 font-sans font-semibold cursor-pointer rounded-md text-center text-sm mx-4 w-24 p-2 h-8 dark:bg-teal-500'>GitHub ↗</a>
                    </div>
                </div>
            )
        }))}

        {(!projects)&&(Contributions.map((Contribution) => {
            return (
                <div key={Contribution.id} className='w-80 h-60 bg-slate-100 rounded-xl shadow-md shadow-slate-700/40 dark:bg-zinc-800 dark:shadow-slate-300/40 dark:shadow-md'>
                    <div className='rounded-md p-2 overflow-hidden w-auto h-1/2'>
                        <img src={Contribution.image} alt="thumbnail" className='rounded-md' />
                    </div>
                    <div>
                        <h1 className='font-bold p-4 font-sans select-none'>{Contribution.title}</h1>
                        <a href={Contribution.link} target='_blank' className='bg-blue-950 hover:bg-cyan-700 text-slate-50 font-sans font-semibold cursor-pointer rounded-md text-center text-sm mx-4 w-24 p-2 h-8 dark:bg-teal-500'>Live Demo ↗</a>
                    </div>
                </div>
            )
        }))}
        
      </div>
    </div>
  )
}

export default Projects
