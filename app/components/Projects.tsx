"use client";

import React, { useState } from "react";
import CategoryFilter from "@/app/components/CategoryFilterProps";
import ProjectCard from "@/app/components/ProjectCard";

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects = [
    {
      id: 1,
      title: "🚗 Vehicle Management System",
      description: "Comprehensive system for managing vehicle fleet operations and maintenance.",
      category: "Web",
      services: [
        { src: "/assets/react.webp", name: "Next.js" },
        { src: "/assets/net1.png", name: "Node.js" },
        { src: "/assets/sql-server.webp", name: "SSMS" },
        { src: "/assets/tail.png", name: "Tailwind CSS" },
      ],
      companyName: "Vehicle Management System",
      imageUrl: "/assets/vehicle-management.webp",
    },
    {
      id: 2,
      title: "🐾 Pet Clinic Management System",
      description: "Comprehensive system for managing pet clinic operations, appointments, and patient records.",
      category: "Web",
      services: [
        { src: "/assets/react.webp", name: "Vite" },
        { src: "/assets/php.jpg", name: "Laravel" },
        { src: "/assets/sql.png", name: "XAMPP" },
        { src: "/assets/tail.png", name: "Tailwind CSS" },
      ],
      companyName: "Pet Clinic Management System",
      imageUrl: "/assets/medical.webp",
    },
    {
      id: 3,
      title: "🌐 Inventory Management System",
      description: "Tracks stock levels, suppliers and orders, built on a Spring Boot microservices backend.",
      category: "Web",
      services: [
        { src: "/assets/react.webp", name: "React" },
        { src: "/assets/spring-boot.webp", name: "Spring Boot" },
        { src: "/assets/sql-server.webp", name: "SQL Server" },
        { src: "/assets/microservices.webp", name: "Microservices" },
        { src: "/assets/tail.png", name: "Tailwind CSS" },
      ],
      companyName: "Inventory Management System",
      imageUrl: "/assets/inventory.webp",
    },
    {
      id: 4,
      title: "📱 Tourly Website",
      description: "Travel website for exploring destinations and booking tour packages.",
      category: "Web",
      services: [
        { src: "/assets/react.webp", name: "React" },
        { src: "/assets/spring-boot.webp", name: "Spring Boot" },
        { src: "/assets/sql.png", name: "MySQL" },
        { src: "/assets/post.png", name: "Postman" },
        { src: "/assets/tail.png", name: "Tailwind CSS" },
      ],
      companyName: "Tourly Website",
      imageUrl: "/assets/tourly.webp",
    },
    {
      id: 5,
      title: "🌐 Auto Flash Service Center",
      description: "Manages orders, billing, branches & staff.",
      category: "Desktop Apps",
      services: [
        { src: "/assets/csharp.webp", name: "C#" },
        { src: "/assets/net1.png", name: ".NET" },
        { src: "/assets/vs.jpg", name: "Visual Studio" },
        { src: "/assets/microservices.webp", name: "Microservices" },
        { src: "/assets/sql-server.webp", name: "SQL Server" },
      ],
      companyName: "Auto Flash Service Center",
      imageUrl: "/assets/vehicle.webp",
    },
    {
      id: 6,
      title: "🤖 NPLAY Mobile App",
      description: "Analyzes foot images to identify diabetes levels.",
      category: "Mobile",
      services: [
        { src: "/assets/flutter.png", name: "Flutter" },
        { src: "/assets/dart.jpg", name: "Dart" },
        { src: "/assets/fire.png", name: "Firebase" },
      ],
      companyName: "NPLAY Mobile App",
      imageUrl: "/assets/nplay.webp",
    },
    {
      id: 7,
      title: "🌐 Medical Center Management System",
      description: "Handles appointments, billing & stock management.",
      category: "Desktop Apps",
      services: [
        { src: "/assets/csharp.webp", name: "C#" },
        { src: "/assets/net1.png", name: ".NET" },
        { src: "/assets/vs.jpg", name: "Visual Studio" },
        { src: "/assets/microservices.webp", name: "Microservices" },
        { src: "/assets/sql-server.webp", name: "SQL Server" },
      ],
      companyName: "Medical Center Management System",
      imageUrl: "/assets/medical.webp",
    },
    {
      id: 8,
      title: "📱 Medicare Website",
      description: "Connects patients & doctors for daily health monitoring.",
      category: "Web",
      services: [
        { src: "/assets/html.png", name: "HTML" },
        { src: "/assets/boot.png", name: "Bootstrap" },
      ],
      companyName: "Medicare Website",
      imageUrl: "/assets/medicare.webp",
    },
    {
      id: 9,
      title: "🌐 PHOENIX Airline Management System",
      description: "Handles flight schedules, seat bookings and passenger management for an airline.",
      category: "Web",
      services: [
        { src: "/assets/react.webp", name: "React" },
        { src: "/assets/php.jpg", name: "PHP" },
        { src: "/assets/boot.png", name: "Bootstrap" },
      ],
      companyName: "PHOENIX Airline Management System",
      imageUrl: "/assets/airline.webp",
    },
    
  ];

  // Filter projects based on selectedCategory
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="pt-16 py-3">
        <div className="max-w-7xl mx-auto py-3 text-white">
          {/* Section Header */}
          <section className="w-full h-auto py-8 mb-8">
            <div className="max-w-full text-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="tracking-wide text-blue-400">Projects</span>
              </h2>
              <p className="font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
                Here, you&apos;ll discover a diverse collection of the work I’ve built—ranging from dynamic web applications 
                to full-stack platforms designed for efficiency and scalability.
              </p>
              <p className="mt-2 font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
                Each project is a testament to my expertise in .NET Core, Spring Boot, JavaScript, TypeScript, React, Next.js and Angular, and various modern technologies. I take pride in writing clean, 
                maintainable, and performance-optimized code to craft seamless digital experiences.
              </p>
            </div>
          </section>

          {/* Filter Section */}
          <div className="mb-4">
            <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[-20px]">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default OurProjects;
