"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

// Predefined dot properties to avoid server-client mismatch
const floatingDots = [
  { width: 15, height: 15, top: 10, left: 20 },
  { width: 10, height: 10, top: 30, left: 50 },
  { width: 12, height: 12, top: 70, left: 80 },
  { width: 8, height: 8, top: 50, left: 30 },
  { width: 18, height: 18, top: 85, left: 15 },
  { width: 20, height: 20, top: 25, left: 70 },
  { width: 14, height: 14, top: 60, left: 10 },
  { width: 16, height: 16, top: 40, left: 90 },
  { width: 9, height: 9, top: 75, left: 55 },
  { width: 11, height: 11, top: 20, left: 40 },
];

export default function Hero() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex p-[5vw] sm:p-[10vw] mx-auto h-[92.3vh] xl:justify-between items-center text-white max-xl:flex-col mt-[-10px] scroll-mt-[80px] overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900 to-black opacity-80"></div>

      {/* Floating Dots Animation */}
      <div className="absolute inset-0 pointer-events-none ">
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-40"
            style={{
              width: `${dot.width}px`,
              height: `${dot.height}px`,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
            }}
            animate={{
              y: ["0px", "-30px", "0px"],
              x: ["0px", "20px", "-20px", "0px"],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left Section */}
      <div className="flex sm:flex-col max-sm:flex-col max-sm:justify-center space-y-6 max-xl:h-[92vh] max-xl:justify-center xl:max-w-[60%] max-md:mt-[-20px] relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-sm:hidden flex xl:flex-col max-sm:flex-wrap max-xl:items-baseline max-xl:gap-4 justify-center"
        >
          <span className="xl:text-[3.5vw] md:text-[40px] lg:text-[45px] text-[33px] font-semibold sm:bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hello! I&apos;m
          </span>
          <span className="xl:text-[4.9vw] font-times md:text-[50px] lg:text-[55px] text-[43px] font-bold text-white bg-clip-text text-transparent mt-[-20px]">
            Lahiru Jayarathne
          </span>
        </motion.div>
         <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="sm:hidden"
        >
          <div className=" font-semibold items-baseline gap-4 text-white sm:bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex flex-wrap text-center justify-center">
            <span className="text-[30px] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent max-xsm:text-[25px]">Hello! I&apos;m </span>
            <span className="text-[40px] font-times  max-xsm:text-[30px] mt-[-10px] leading-tight" >Lahiru Jayarathne</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap pt-7 max-xl:justify-center"
        >
          <span className="flex max-sm:flex-wrap max-sm:text-center font-futura xl:text-[24px] font-semibold max-sm:text-[18px] text-[20px] tracking-wide text-blue-500">
            Full-Stack Software Engineer · .NET Core
          </span>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap pt-1 max-xl:justify-center xl:max-w-[90%]"
        >
          <p className="flex text-lg leading-relaxed text-gray-300 max-xl:text-center">
            I&apos;m a passionate Software Engineer specializing in web and software development. With expertise in .NET Core, Spring Boot, Next.js, React.js and Angular, I craft high-performing, user-friendly digital solutions. Let’s build something amazing together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 flex flex-wrap max-xl:justify-center"
        >
          <a
            href="/Lahiru-Jayarathne-Software-Engineer-Intern-Resume.pdf"
            download
            className="flex items-center gap-4 font-futura text-[20px] px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transform transition-transform duration-300 ease-in-out"
          >
            Get Resume
            <Download size={20} />
          </a>
        </motion.div>
      </div>

      {/* Right Section - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative max-xl:px-5 max-xl:max-w-[450px] max-xl:pt-[50px] z-10"
      >
        <div className="rounded-[50%] overflow-hidden shadow-2xl border-4 border-gray-600 p-2 max-xl:hidden">
          <Image
            src="/assets/lahiru.webp"
            alt="Lahiru Jayarathne"
            width={300}
            height={300}
            className="xl:w-[28vw] rounded-full"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
