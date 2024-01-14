import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Contact() {

    const Contacts = [
        {
            id: 1,
            icons: <RiMailSendLine size={30}/>,
            link: 'mailto:example@domain.com',
            heading: 'Email',
            info: 'sbhuvan455@gmail.com'
        },
        {
            id: 2,
            icons: <FaWhatsapp size={30}/>,
            link: 'https://wa.me/919354545394',
            heading: 'Whatsapp',
            info: '9354545394'
        },
        {
            id: 3,
            icons: <FaTwitter size={30}/>,
            link: 'https://twitter.com/bhuvan3_s',
            heading: 'Twitter',
            info: '@bhuvan3_s'
        },
    ]

  return (
    <div name='Contact' className='w-full min-h-screen dark:bg-zinc-800 pb-8'>
      <div className='text-center p-5'>
        <h1 className='font-sans font-bold text-2xl text-purple-500'>Contact Me</h1>
        <p className='font-sans font-light dark:text-slate-200'>Get in Touch</p>
      </div>
      <div className='flex items-center justify-center flex-col md:flex-row gap-9 w-full'>
        <div className='w-3/6 h-full'>
            <h1 className='text-center font-sans font-semibold text-xl dark:text-white'>Talk to me</h1>
            <div className='flex flex-col gap-4 justify-center items-center'>

                {Contacts.map(({id, icons, link, heading, info}) => {
                    return (
                        <div key={id} className='bg-slate-200 text-center w-96 h-44 mt-5 py-7 px-28 rounded-xl dark:bg-zinc-700 dark:text-slate-100'>
                            <div className='text-center flex justify-center py-1'>{icons}</div>
                            <h1 className='font-semibold'>{heading}</h1>
                            <p className='font-sans mb-5'>{info}</p>
                            <a href={link} target='_blank' className='text-purple-600 font-sans font-semibold'>Write Me</a>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className='w-3/6'>

            <h1 className='text-center font-sans font-semibold text-xl my-5 dark:text-white'>Write Me your Message</h1>
            <form action="https://getform.io/f/dd3330dd-33a1-48ea-ba84-922c91f56fae" method='POST'>
                <div className='flex flex-col my-7'>
                    <label htmlFor="" className='font-sans font-semibold text-gray-500 relative left-3 top-3 bg-white w-fit px-1 dark:bg-zinc-800'>Name</label>
                    <input type="text" name="name" id="" placeholder='Enter Name'  className='border-gray-400 rounded-md w-full md:w-10/12 border-2  dark:bg-zinc-800 p-3'/>
                </div>
                <div className='flex flex-col my-7'>
                    <label htmlFor="" className='font-sans font-semibold text-gray-500 relative left-3 top-3 bg-white w-fit px-1 dark:bg-zinc-800'>Mail</label>
                    <input type="email" name="mail" id="" placeholder='Enter Mail'  className='border-gray-400 rounded-md w-full md:w-10/12 border-2 dark:bg-zinc-800  p-3'/>
                </div>
                <div className='flex flex-col my-7'>
                    <label htmlFor="" className='font-sans font-semibold text-gray-500 relative left-3 top-3 bg-white w-fit px-1 dark:bg-zinc-800'>Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Write your Message' className='border-gray-400 rounded-md w-full dark:bg-zinc-800  md:w-10/12 border-2 p-3'></textarea>
                </div>
                <button className='bg-purple-500 p-3 rounded-md font-semibold font-sans hover:bg-purple-800'>Send Message</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
