"use client"
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Skilled in building responsive, scalable websites using modern frameworks.Focused on performance, accessibility, and clean, maintainable code.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Passionate about crafting user-centered interfaces with a focus on usability.Blends design and function to create seamless digital experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "Experienced in creating cross-platform mobile apps with smooth user experiences.Delivers fast, reliable, and intuitive apps for iOS and Android.",
    href: "",
  },
  {
    num: "04",
    title: "Desktop Application",
    description:
      "Proficient in building efficient desktop applications for Windows and macOS.Combines powerful functionality with user-friendly interfaces.",
    href: "",
  },
];

const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6 px-4 xl:px-20">
    <div className="container mx-auto">
        <motion.div
        className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:1.8,duration:0.4,ease:"easeIn"}}}>
            {services.map((service,index)=>{
                return <div className="flex flex-col flex-1 justify-center gap-6 group" key={index}>
                    <div className="flex w-full justify-between items-center">                        
                        <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover ">
                            {service.num}
                        </div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45">
                        <BsArrowDownRight className="text-primary text-3xl"/>
                        </Link>
                    </div>
                    <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-400">{service.title}</h2>
                    <p className="text-white/60">{service.description}</p>
                    <div className="w-full border-b border-white/20"></div>
                </div>
            })}
        </motion.div>
    </div>
  </section>;
};

export default Services;
