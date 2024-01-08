import React, {useEffect, useState} from 'react'
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FcBusinessman } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { PiWechatLogo } from "react-icons/pi";




function NavBar() {

    const [nav, setNav] = useState(false);
    const [Theme, setTheme] = useState("light");

    const Links = [
        {
            id: 1,
            link: 'Home',
            icons: '🏠'
        },
        {
            id: 2,
            link: 'About',
            icons: <FcBusinessman size={30} />
        },
        {
            id: 3,
            link: 'Education',
            icons: '🎓'
        },
        {
            id: 4,
            link: 'Project',
            icons: '💼' 
        },
        {
            id: 5,
            link: 'Contact',
            icons: <PiWechatLogo />
        },
    ]

    useEffect(()=>{
        if(Theme==="dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [Theme])

    const handleThemeChange = () => {
        setTheme(Theme === "light" ? "dark" : "light");
    }

  return (
    <>
    <div className='bg-gray-50 w-full h-16 shadow-md flex items-center justify-between select-none fixed top-0 z-10 dark:bg-black dark:text-slate-100'>
        <div className='text-2xl text-gray-800 font-semibold mx-5 dark:text-slate-200'>
            Bhuvan.
        </div>

        <div className='hidden md:flex items-center gap-3 cursor-pointer mx-3 text-lg'>
            {Links.map(({ id, link }) => {
                return <a key={id}  href="/" className='font-medium duration-200 hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800'>{link}</a>
            })}
            
        </div>

        {(nav)?<RxCross1 size={30} onClick={()=>setNav(!nav)} className='mx-7 cursor-pointer z-10 md:hidden'/>:<FaBars size={30} onClick={()=>setNav(!nav)} className='mx-7 cursor-pointer z-10 md:hidden'/>}

        <div onClick={handleThemeChange} className='hidden md:block p-2 hover:bg-slate-300 cursor-pointer mx-2 rounded-md duration-200 text-3xl'>
                {(Theme === "light" ? "🌙" : "☀️")}
        </div>
    </div>

    {(nav)&&(<div className='flex flex-col items-center h-3/4 w-10 pt-7 rounded-2xl fixed top-28 right-6 bg-gray-200 md:hidden'>
            {Links.map(({ id, icons }) => {
                return <a key={id}  href="/" className='font-medium duration-200 p-2 rounded-md my-2 text-3xl'>{icons}</a>
            })}
            <div onClick={handleThemeChange} className='block p-2 cursor-pointer mx-2 rounded-md duration-200 text-3xl'>
                {(Theme === "light" ? "🌙" : "☀️")}
            </div>
    </div>)}
    </>
  )
}

export default NavBar
