import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <div className="w-full flex flex-col-reverse h-screen md:flex-row mx-auto my-auto items-center justify-center md:justify-around">
      <div className="flex flex-col justify-center items-center md:items-start w-3/6">
        <h1 className="text-3xl mt-5 md:text-5xl font-bold">S Bhuvan</h1>
        <h2 className="text-xl md:text-4xl font-semibold leading-relaxed">Software Developer</h2>
        <p className="hidden md:flex text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos,
          earum ab voluptate nostrum accusantium nam dolor delectus sed
          perspiciatis sit exercitationem distinctio fugit alias quibusdam,
          cumque ex eum facere!
        </p>
        <div className="flex justify-start my-5 gap-3">
          <a href="https://github.com/sbhuvan455" target="_blank" className="cursor-pointer rounded-md p-2 hover:shadow-2xl hover:bg-slate-300">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/s-bhuvan-878376291/" className="cursor-pointer rounded-md p-2 hover:bg-slate-300 shadow-gray-950">
            <FaLinkedin size={40} />
          </a>
          <a href="https://twitter.com/bhuvan3_s" target="_blank" className="cursor-pointer rounded-md p-2 hover:shadow-2xl hover:bg-slate-300">
            <FaXTwitter size={40} />
          </a>
        </div>
        <a href="Resume.pdf" download={true} className="bg-teal-300 text-center p-3 duration-200 rounded-md font-semibold text-white hover:shadow-slate-600 shadow-sm">
          Download Resume
        </a>
      </div>
      <div className="w-1/4 rounded-full overflow-hidden shadow-2xl mt-28">
        <img src="Profile.png" alt="profile"/>
      </div>
    </div>
  );
}

export default Home;
