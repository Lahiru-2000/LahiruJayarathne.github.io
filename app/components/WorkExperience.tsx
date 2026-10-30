"use client";

import React from "react";
import Image from "next/image";

const WorkExperience = () => {
  const experiences = [
     {
      id: 1,
      company: "Techwire Lanka Pvt Ltd",
      position: "Software Engineer",
      duration: "January 2026 - Present",
      type: "Current",
      description: "Currently working as a Software Engineer, gaining hands-on experience in software development and contributing to real-world projects.",
      technologies: ["C#","JavaScript","TypeScript","ASP.NET","ASP.NET Core","EF Core","Dapper","Next.js", "React.js","MSSQL","MySQL", "Microservices"],
      logo: "/assets/Techwire_Logo.jpg",
    },
    {
      id: 2,
      company: "Navitsa Technologies Pvt Ltd",
      position: "Associate Software Engineer",
      duration: "April 2025 - December 2025",
      type: "Previous",
      description: "Worked as an Associate Software Engineer, gaining hands-on experience in software development and contributing to real-world projects.",
      technologies: ["C#","Java","JavaScript","TypeScript","ASP.NET","ASP.NET Core","EF Core","Razor Pages","Dapper","Spring Boot","Next.js", "React.js","Angular","MSSQL","MySQL","DevExpress", "Microservices"],
      logo: "/assets/navitsa-logo.webp",
    },
    {
      id: 3,
      company: "Navitsa Technologies Pvt Ltd",
      position: "Intern Software Engineer",
      duration: "October 2024 - April 2025",
      type: "Previous",
      description: "Worked as an Intern Software Engineer, developing skills in full-stack development and contributing to various software projects.",
      technologies: ["C#","Java","JavaScript","TypeScript","ASP.NET","ASP.NET Core","EF Core","Razor Pages","Dapper","Spring Boot","Next.js", "React.js","Angular","MSSQL","MySQL","HTML/CSS"],
      logo: "/assets/navitsa-logo.webp",
    },
    {
      id: 4,
      company: "Algoarts Pvt Ltd",
      position: "Intern Software Engineer",
      duration: "July 2024 - September 2024",
      type: "Previous",
      description: "Started my professional journey as an Intern Software Engineer, learning the fundamentals of software development and industry practices.",
      technologies: ["JavaScript", "HTML", "CSS", "Git", "Agile"],
      logo: "/assets/Algoarts_logo.jpg",
    },
  ];

  return (
    <div id="experience" className="pt-16 py-3">
      <div className="max-w-7xl mx-auto py-3 text-white">
        {/* Section Header */}
        <section className="w-full h-auto py-8 mb-8">
          <div className="max-w-full text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="tracking-wide text-blue-400">Work Experience</span>
            </h2>
            <p className="font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
              My professional journey in software engineering, from internships to my current role as a Software Engineer.
            </p>
            <p className="mt-2 font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
              Each experience has contributed to my growth as a developer, providing hands-on experience with modern technologies and industry best practices.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <div className="relative px-4 md:px-0">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-gray-600 to-gray-600"></div>
          
          <div className="space-y-8">
            {experiences.map((experience /*, index*/) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`relative z-10 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full border-2 ${
                  experience.type === "Current" 
                    ? "bg-blue-400 border-blue-400" 
                    : "bg-gray-800 border-gray-600"
                }`}>
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                    experience.type === "Current" ? "bg-white" : "bg-gray-400"
                  }`}></div>
                </div>

                {/* Experience Card */}
                <div className="ml-4 md:ml-8 flex-1">
                  <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                    {/* Company and Position */}
                    <div className="flex flex-col mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div className="flex items-start gap-3 mb-3 sm:mb-0">
                          {/* Company Logo - Hidden on mobile */}
                          {experience.logo && (
                            <div className="hidden md:block w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center flex-shrink-0">
                              <Image
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="text-base md:text-xl text-blue-400 font-bold leading-tight mb-2">
                              {experience.company}
                            </p>
                            <h3 className="text-sm md:text-base font-medium text-gray-300 leading-tight">
                              {experience.position}
                            </h3>
                          </div>
                        </div>
                        <div className="self-start sm:self-start mt-2 sm:mt-0">
                          <span className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium text-gray-400">
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-gray-700 text-xs text-gray-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
