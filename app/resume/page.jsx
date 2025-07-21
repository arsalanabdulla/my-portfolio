"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs,SiFirebase ,SiSupabase ,SiMongodb,SiAdobephotoshop ,SiAppwrite,SiFlutter} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandOffice } from "react-icons/tb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I build responsive, high-performance websites using modern technologies.focus on clean code, accessibility, and seamless user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Arsalan Abdulla",
    },
    {
      fieldName: "Phone",
      fieldValue: "+964 0751 021 3038",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Facebook",
      fieldValue: "arsalan.abdolla",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kurdish",
    },
    {
      fieldName: "Email",
      fieldValue: "arsalanabdulla5@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Kurdish, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Skilled in web, mobile, and desktop app development with strong UI/UX design experience. Proficient in data entry and retail sales, delivering accuracy and excellent customer service.",
  items: [
    {
      company: "E-commerce startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Software Development",
      position: "Junior Developer",
      duration: "2019 - 2021",
    },
    {
      company: "Shad Supermarket",
      position: "Retail Sales Manager & IT Assistant",
      duration: "2012 - 2018",
    },
    {
      company: "POS & Inventory Database System for Retail Shops",
      position: "Freelance Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Dost Refinery",
      position: "Data Entry & Accounting Assistant",
      duration: "2024 - 2025",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Completed formal education in computer science, gaining foundational knowledge and practical skills in software development, design, and related technologies. Committed to continuous learning and growth in the tech industry.",
  items: [
    {
      institution: "Soran University",
      degree: "Bachelor’s Degree in Computer Science",
      duration: "2015 - 2019",
    },
    {
      institution: "Soran University",
      degree: "Certification of English language course",
      duration: "2016 - 2017",
    },
    {
      institution: "Academind",
      degree: "Completing a Web design and development course",
      duration: "2020",
    },
        {
      institution: "Dr. Angela Yu",
      degree: "Completing a Flutter programming course",
      duration: "2022",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in web, mobile, and desktop development using React, Next.js, Flutter, and .NET. Skilled in UI/UX design with Figma and Adobe XD. Strong data entry accuracy and customer service experience.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
        {
      icon: <FaGitAlt />,
      name: "Git",
    },
        {
      icon: <SiFirebase />,
      name: "Firebase",
    },
        {
      icon: <SiSupabase />,
      name: "Supabase",
    },
        {
      icon: <SiMongodb />,
      name: "Mongo DB",
    },
            {
      icon: <SiAppwrite />,
      name: "Appwrite",
    },
        {
      icon: <SiFlutter />,
      name: "Flutter",
    },
        {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
        {
      icon: <DiMsqlServer />,
      name: "SQL Server",
    },
        {
      icon: <TbBrandOffice />,
      name: "MS Office",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-start justify-center py-12 px-4 xl:px-20"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger className="cursor-pointer" value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="about">
              About me
            </TabsTrigger>
          </TabsList>
          <div className="w-full min-h-[70vh]">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="font-bold text-4xl">{experience.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] text-xl min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="rounded-full bg-accent w-1.5 h-1.5"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="font-bold text-4xl">{education.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[280px] text-xl min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="rounded-full bg-accent w-1.5 h-1.5"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="font-bold text-4xl">{skills.title}</h3>
                  <p className=" text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 lg:px-0">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="font-bold text-4xl">{about.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
