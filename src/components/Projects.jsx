import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Music Prism",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg?height=400&width=800",
      roles: ["Front-end", "Back-end"],
      timeline: "Sep - Nov 2024",
      frontendTech: "React Native, Expo",
      backendTech: "Django, Python",
      siteUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg?height=400&width=800",
      roles: ["Front-end"],
      timeline: "Jun - Aug 2024",
      frontendTech: "React, Next.js",
      backendTech: "Node.js, Express",
      siteUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg?height=400&width=800",
      roles: ["Full-stack"],
      timeline: "Mar - May 2024",
      frontendTech: "Vue.js",
      backendTech: "Firebase",
      siteUrl: "https://example.com",
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg?height=400&width=800",
      roles: ["Front-end"],
      timeline: "Jan - Feb 2024",
      frontendTech: "React, TypeScript",
      backendTech: "AWS Lambda",
      siteUrl: "https://example.com",
    },
    {
      id: 5,
      title: "Proyecto 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/placeholder.svg?height=400&width=800",
      roles: ["Back-end"],
      timeline: "Dec 2023",
      frontendTech: "Angular",
      backendTech: "Java Spring Boot",
      siteUrl: "https://example.com",
    },
  ];

  return (
    <section id="proyectos" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Nuestros proyectos
        </h2>
        <p className="text-white/90 mb-12 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer bg-white/10 rounded-lg overflow-hidden ${
                index === 0 ? "md:col-span-2" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver proyecto
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
