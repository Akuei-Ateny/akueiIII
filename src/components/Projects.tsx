
import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Icon",
      subtitle: "Competitive Coding Platform",
      duration: "Feb. 2025 -- Present",
      technologies: ["TypeScript", "Next.js", "PostgreSQL", "WebSockets"],
      description: "A competitive coding platform designed for developers to engage in real-time coding battles, team competitions, and skill-building challenges.",
      features: [
        "Designed and built a competitive coding platform for developers to engage in real-time coding battles, team competitions, and skill-building challenges",
        "Implemented WebSocket-based live match spectating and real-time collaborative coding environments for an interactive experience",
        "Engineered a challenge archive and analytics dashboard to track user performance, providing detailed insights into coding proficiency",
        "Integrated integrity tools to detect AI-generated solutions and ensure fair competition among participants"
      ]
    },
    {
      title: "FlexiGo",
      subtitle: "Ride-sharing & Logistics Platform",
      duration: "Aug. 2023 -- Present",
      technologies: ["Swift", "PostgreSQL", "Azure", "Firebase"],
      description: "A high-performance, full-stack ride-sharing and logistics platform leveraging MVVM architecture for seamless user experience.",
      features: [
        "Developed a high-performance, full-stack ride-sharing and logistics platform leveraging MVVM architecture, efficiently managing 1000+ concurrent users in testing",
        "Integrated real-time location tracking using Firebase and Google Maps API, achieving sub-second update latency for enhanced user experience",
        "Optimized PostgreSQL database with materialized views and strategic indexing, improving query performance by 75% and ensuring scalability",
        "Automated deployment with a CI/CD pipeline using GitHub Actions, cutting release cycles by 60% while maintaining 99% test coverage"
      ]
    },
    {
      title: "Me&Union",
      subtitle: "Princeton Alumni & Student Dating App",
      duration: "May 2024 -- Present",
      technologies: ["React Native", "Node.js", "MongoDB", "WebSocket"],
      description: "A social connection platform designed specifically for Princeton Alumni and students during Reunions weekend.",
      features: [
        "Developed a sophisticated social networking platform for Princeton Alumni and students to connect during the prestigious Reunions weekend",
        "Implemented intelligent matching algorithms and real-time messaging to facilitate meaningful connections for various social activities",
        "Built geolocation-based features to help users find companions for events, parties, fireworks viewing, and potential long-term relationships",
        "Integrated event synchronization with Reunions schedule and Princeton-specific features to enhance the orange-and-black weekend experience"
      ]
    },
    {
      title: "IvyTV",
      subtitle: "Ivy League Video Chat Platform",
      duration: "Jan. 2024 -- Apr. 2024",
      technologies: ["React", "WebRTC", "Node.js", "Socket.io"],
      description: "A video chat platform exclusively for Ivy League students, providing secure and verified connections for academic and social networking.",
      features: [
        "Created an exclusive video chat platform for Ivy League students, implementing secure peer-to-peer connections using WebRTC technology",
        "Developed a robust verification system to ensure authenticity of Ivy League student status and maintain platform exclusivity",
        "Built real-time matching algorithms that connect students based on academic interests, institutions, and conversation preferences",
        "Implemented advanced moderation tools and safety features to create a secure environment for academic and social networking"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative projects that demonstrate my passion for creating impactful 
            technology solutions across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
                      <Github className="h-5 w-5 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
                      <ExternalLink className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-gray-700 mb-2">{project.subtitle}</p>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Code className="h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
