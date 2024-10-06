import React from "react";
import { SlBadge } from "react-icons/sl";
import { IoBagHandleSharp } from "react-icons/io5";

function About() {
  const cards = [
    {
      id: 1,
      topic: "Experience",
      number: "2 years",
      icon: <SlBadge size={30} />,
    },
    {
      id: 2,
      topic: "Projects",
      number: "8 projects",
      icon: <IoBagHandleSharp size={30} />,
    },
  ];

  return (
    <div name="About" className="md:w-full h-screen dark:bg-zinc-700">
      <div className="text-center font-semibold text-xl md:text-3xl md:font-bold text-purple-500 pt-5">
        About Me!
      </div>
      <div className="md:w-full h-3/4 flex flex-col md:flex-row items-center md:justify-around ">
        <div className="hidden w-1/2 h-full md:flex items-center justify-center">
          <div className="profile_about md:h-3/5 md:w-2/4 overflow-hidden">
              <img src="./Profile.png" alt="profile" />
          </div>
        </div>
        <div className="w-1/2 h-full md:px-24 font-serif">
          <div className="flex flex-col mt-8 md:flex-row gap-5 md:py-8 md:px-14">
            {cards.map(({ id, topic, number, icon }) => {
              return (
                <div
                  key={id}
                  className="bg-slate-200 px-3 py-4 md:w-36 md:h-32 rounded-md text-black flex flex-col items-center justify-center shadow-md"
                >
                  <div>{icon}</div>
                  <div className="font-bold text-sm">{topic}</div>
                  <div className="font-extralight">{number}</div>
                </div>
              );
            })}
          </div>
          <p className="text-left font-semibold font-sans my-6 dark:text-slate-200">
            I'm a budding full-stack web developer eager to expand my knowledge
            and contribute my skills. Seeking opportunities to learn and grow
            while making a meaningful impact with my expertise in web development
          </p>
          <div className="text-center md:text-left">
          <a
          href="mailto:sbhuvan455@gmail.com"
          download={true}
          className="bg-gray-800 m-auto font-sans dark:bg-blue-500 text-center p-3 duration-200 rounded-md font-semibold text-white hover:shadow-slate-600 shadow-xl dark:shadow-none dark:hover:bg-sky-950 "
        >
          Hire me ↗️
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
