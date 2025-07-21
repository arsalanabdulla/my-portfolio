"use client";

import { motion } from "framer-motion";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WSlideBtn from "@/components/wSlideBtn";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "Designed and developed a fully responsive website for my portfolio. Focused on clean layout, smooth user experience, and mobile-friendly design.",
    stack: [{ name: "Next JS" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Mobile App",
    title: "Project 2",
    description:
      "Developed a cross-platform note-taking app using Flutter. Features include note creation, editing, search, and a clean, user-friendly interface optimized for both Android and iOS.",
    stack: [{ name: "Flutter" }, { name: "Provider" },{ name: "SQLite" }],
    image: "/assets/work/thumb3.jpg",
    live: "https://www.upload-apk.com/URXzetPAV8ZF2TV",
    github: "https://github.com/arsalanabdulla/node-todo-ui",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Project 3",
    description:
      "Developed a web app for booking appointments and managing schedules with ease. Built using Flutter, featuring real-time updates, smooth UI, and a user-friendly booking flow.",
    stack: [{ name: "Next JS" }, { name: "Tailwind CSS" }, { name: "Node JS" }, { name: "Appwrite" }],
    image: "/assets/work/thumb2.png",
    live: "https://bookit-nextjs.vercel.app/",
    github: "https://github.com/arsalanabdulla/bookit",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Project 4",
    description:
      "Created a clean, responsive blog website using MERN stack and Markdown. Supports dynamic content, SEO optimization, and a smooth reading experience across devices.",
    stack: [{ name: "MERN Stack" }],
    image: "/assets/work/thumb4.png",
    live: "https://blogi-post.vercel.app/",
    github: "https://github.com/arsalanabdulla/blog-mern",
  },
  {
    num: "05",
    category: "Desktop App",
    title: "Project 5",
    description:
      "Built a desktop point-of-sale application using .NET. Features include inventory management, sales tracking, and a user-friendly interface for retail environments.",
    stack: [{ name: "C#" },{ name: "SQL Server" }],
    image: "/assets/work/thumb5.jpg",
    live: "#",
    github: "#",
  },
  {
    num: "06",
    category: "Website",
    title: "Project 6",
    description:
      "Designed and developed a responsive recipe site featuring categorized dishes, step-by-step instructions, and a clean, user-friendly interface.",
    stack: [{ name: "HTML 5" },{ name: "CSS 3" },{ name: "Javascript" }],
    image: "/assets/work/thumb6.png",
    live: "https://forkify3.netlify.app/",
    github: "#",
  },
  {
    num: "07",
    category: "Website Clone",
    title: "Project 7",
    description:
      "Developed a responsive AI chat interface inspired by Google Gemini. Built with modern frontend tools, offering smooth user interaction, prompt handling, and a sleek, conversational UI.",
    stack: [{ name: "React JS" },{ name: "Javascript" }],
    image: "/assets/work/thumb7.png",
    live: "https://kurd-ai.netlify.app/",
    github: "https://github.com/arsalanabdulla/gemini",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const cIndex = swiper.activeIndex;
    setProject(projects[cIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition:{delay:1.8,duration:0.4,ease:'easeIn'} }}
      className="flex flex-col justify-center py-12 px-4 xl:px-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link target={project.live.length>1? "_blank" : ""} href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link target={project.github.length>1? "_blank" : ""}  href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projectt, index) => {
                return (
                  <SwiperSlide key={index} className="w-full mb-14">
                    <div className="relative group flex justify-center items-center bg-primary h-[460px]">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                        <Image src={project.image} alt="image" fill className="object-contain"/>
                    </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WSlideBtn 
              containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max justify-between xl:justify-none'
              btnStyles="bg-accent hover:bg-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
