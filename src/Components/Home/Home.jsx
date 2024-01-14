import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <div
      name="Home"
      className="w-full bg-gray-100 flex flex-col-reverse h-screen md:flex-row mx-auto my-auto items-center justify-center md:justify-around dark:bg-zinc-800"
    >
      <div className="flex flex-col justify-center items-center md:items-start w-3/6 dark:text-gray-50 ">
        <h1 className="text-xl mt-5 md:text-xl font-bold">
          It's me <span>Bhuvan 👋</span>
        </h1>
        <h2 className="text-xl md:text-4xl italic font-semibold text-violet-900 md:tracking-tight md:font-bold dark:text-cyan-700">
          Software Developer
        </h2>
        <p className="flex text-xl mt-5 italic">
          Enthusiastic software developer passionate about Building websites.
          Eager fresher with a year of web-building expertise, seeking new
          opportunities.
        </p>
        <div className="flex justify-start my-5 gap-3">
          <a
            href="https://github.com/sbhuvan455"
            target="_blank"
            className="cursor-pointer rounded-md p-2  hover:bg-slate-300 bg-black text-slate-200 dark:hover:bg-black dark:hover:text-white duration-200 dark:bg-white dark:text-gray-950"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/s-bhuvan-878376291/"
            className="cursor-pointer rounded-md p-2 hover:bg-slate-300 bg-black text-slate-200 dark:hover:bg-black dark:hover:text-white duration-200 dark:bg-white dark:text-gray-950"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/bhuvan3_s"
            target="_blank"
            className="cursor-pointer rounded-md p-2 bg-black text-slate-200  hover:bg-slate-300 dark:hover:bg-black dark:hover:text-white duration-200 dark:bg-white dark:text-gray-950"
          >
            <FaXTwitter size={30} />
          </a>
        </div>
        <a
          href="Resume.pdf"
          download={true}
          className="bg-gray-800 font-sans dark:bg-blue-500 text-center p-3 duration-200 rounded-md font-semibold text-white hover:shadow-slate-600 shadow-xl dark:shadow-none dark:hover:bg-sky-950 "
        >
          Download Resume
        </a>
      </div>
<<<<<<< HEAD
      <div className="profile md:h-3/5 md:w-1/4 overflow-hidden">
        <img src="./Profile.png" alt=" profile" />
=======
      <div className="profile md:h-3/5 md:w-1/4 bg-[url('./Profile.png')]">
        
>>>>>>> fba20355cf9bc193caa4e1d7e5321780e8a145a2
      </div>
    </div>
  );
}

export default Home;
