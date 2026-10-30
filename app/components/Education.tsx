"use client";

import React from "react";
import Image from "next/image";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "BSc (Hons) Software Engineering",
      university: "NSBM Green University",
      duration: "June 2021 - July 2025",
      status: "Completed",
      description: "Comprehensive undergraduate program covering software development, system design, database management, and modern programming paradigms.",
      keySubjects: [
        "Software Engineering",
        "Database Management",
        "Web Development",
        "Mobile App Development",
        "System Analysis & Design",
        "Data Structures & Algorithms",
        "Software Testing",
        "Project Management"
      ],
      logo: "", // Add /assets/nsbm-logo.png to public/assets and set it here
    },
  ];

  return (
    <div id="education" className="pt-16 py-3">
      <div className="max-w-7xl mx-auto py-3 text-white">
        {/* Section Header */}
        <section className="w-full h-auto py-8 mb-8">
          <div className="max-w-full text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="tracking-wide text-blue-400">Education</span>
            </h2>
            <p className="font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
              My academic foundation in software engineering, providing the theoretical knowledge and practical skills that complement my professional experience.
            </p>
            <p className="mt-2 font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
              The comprehensive curriculum has equipped me with strong fundamentals in software development, system design, and modern programming practices.
            </p>
          </div>
        </section>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 px-4 md:px-0">
          {education.map((edu) => (
            <div key={edu.id} className="relative">
              <div className="bg-gray-800 rounded-lg p-4 md:p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                {/* University and Degree */}
                <div className="flex flex-col mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      {/* University Logo - Hidden on mobile */}
                      {edu.logo && (
                        <div className="hidden md:block w-16 h-16 rounded-lg bg-white p-3 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={edu.logo}
                            alt={`${edu.university} logo`}
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-lg md:text-2xl text-blue-400 font-bold leading-tight mb-2">
                          {edu.university}
                        </p>
                        <h3 className="text-sm md:text-lg font-medium text-gray-300 leading-tight">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <div className="self-start sm:self-start mt-2 sm:mt-0">
                      <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-gray-400">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
