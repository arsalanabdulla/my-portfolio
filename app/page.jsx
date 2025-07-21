"use client";
import Photo from "@/components/photo";
import Socials from "@/components/socials";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full px-4 xl:px-20 ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-[48px] xl:text-[80px] font-semibold leading-[1.1] mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Arsalan Abdulla</span>
            </h1>
            <p className="max-w-[700px] mb-9 text-white/80">
              Software developer with a focus on building scalable,
              user-friendly applications. Experienced in modern web technologies
              and clean code practices.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/Arsalan-CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 cursor-pointer"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  cStyle="flex gap-6"
                  iStyle="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent tex text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
