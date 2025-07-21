"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+964 0751 021 3038",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arsalanabdulla5@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Qaladza, Iraq",
  },
];


const Contact = () => {
  const [result, setResult] = useState("");
const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f62eae03-86a8-4064-9fe3-1b0a30c5b9ba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully.");
      (event.target).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-4 xl:px-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-16 ">
            <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 rounded-xl bg-[#27272c]" onSubmit={onSubmit}>
                    <h3 className="text-4xl text-accent">Let's work together</h3>
                    <p className="text-white/60">Have a project in mind or just want to say hi? Feel free to reach out—I'd love to connect.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input name='firstname' type="Firstname" placeholder="Firstname" />
                        <Input name='lastname' type="Lastname" placeholder="Lastname" />
                        <Input name='email' type="email" placeholder="Email Address" />
                        <Input name='phone' type="Phone" placeholder="Phone Number" />
                    </div>
                    <Select name='service'>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder='Select a service'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a service</SelectLabel>
                                <SelectItem value='Web Development'>Web Development</SelectItem>
                                <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                                <SelectItem value='Logo Design'>Logo Design</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Textarea name='message' className='h-[200px]' placeholder='Type your message here.'/>
                    <Button className='max-w-40' size='md'>Send Meassage</Button>
                    <span className=" text-accent">{result}</span>
                </form>
            </div>
            <div className="flex flex-1 items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                    {info.map((item,index)=>{
                    return <li className="flex items-center gap-6" key={index}>
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center bg-[#27272c] ">
                            <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="text-xl">{item.description}</h3>
                        </div>
                    </li>
                })}
                </ul>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
