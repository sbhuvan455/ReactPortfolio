import React from 'react'
import { HiOutlineCheckBadge } from "react-icons/hi2";


function Skills() {

    const FullStackSkills = [
        {
            id: 1,
            skill: "HTML",
            expertise: "Intermediate"
        },
        {
            id: 2,
            skill: "CSS",
            expertise: "Intermediate"
        },
        {
            id:3,
            skill: "Javascript",
            expertise: "Advanced"
        },
        {
            id:4,
            skill: "Tailwind",
            expertise: "Intermediate"
        },
        {
            id:5,
            skill: "React",
            expertise: "Intermediate"
        },
        {
            id:6,
            skill: "NodeJS",
            expertise: "Advanced"
        },
        {
            id: 7,
            skill: "Express",
            expertise: "Intermediate"
        },
        {
            id: 8,
            skill: "MongoDB",
            expertise: "Advanced"
        },
        {
            id: 9,
            skill: "GraphQL",
            expertise: "Intermediate"
        }
    ]

    const softwareSkills = [
        {
            id: 1,
            skill: "DSA",
            expertise: "Intermediate"
        },
        {
            id: 2,
            skill: "OOPS",
            expertise: "Advanced"
        },
        {
            id: 3,
            skill: "Python",
            expertise: "Intermediate"
        },
        {
            id: 4,
            skill: "ML",
            expertise: "Intermediate"
        },
        {
            id: 5,
            skill: "C++",
            expertise: "Advanced"
        },
    ]

  return (
    <div name='Skills' className='bg-gray-100 w-full md:h-screen py-4 dark:bg-zinc-800'>
      <div className='text-center py-4'>
        <h1 className='text-3xl font-bold font-sans text-purple-500'>Skills</h1>
        <h2 className='text-lg font-sans text-gray-700 py-1 font-thin dark:text-slate-200'>My Technical Level</h2>
      </div>
      <div className='flex flex-col justify-between items-center md:justify-center gap-6 w-full h-5/6 md:flex-row'>
        <div className='bg-white md:w-1/3 md:h-4/5 rounded-xl p-6 dark:bg-zinc-700'>
            <h1 className='font-sans text-xl text-slate-800 pb-5 text-center font-semibold dark:text-cyan-700'>Full Stack Development</h1>
            <div className='grid grid-cols-2 dark:text-slate-200'>

                {FullStackSkills.map(({ id, skill, expertise })=>{
                    return(
                        <div key={id} className='flex items-baseline gap-3 py-2 px-3'>
                            <div className='text-center'><HiOutlineCheckBadge /></div>
                            <div>
                                <h1 className='text-md font-bold font-sans'>{skill}</h1>
                                <p className='text-sm font-extralight'>{expertise}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className='bg-white md:w-1/3 md:h-4/5 rounded-xl p-6 dark:bg-zinc-700'>
            <h1 className='font-sans text-xl text-slate-800 pb-5 text-center font-semibold dark:text-cyan-700'>Software Skills</h1>
            <div className='grid grid-cols-2 dark:text-slate-200'>

                {softwareSkills.map(({ id, skill, expertise })=>{
                    return(
                        <div key={id} className='flex items-baseline gap-3 py-2 px-3 '>
                            <div className='text-center'><HiOutlineCheckBadge /></div>
                            <div>
                                <h1 className='text-md font-bold font-sans'>{skill}</h1>
                                <p className='text-sm font-extralight'>{expertise}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
