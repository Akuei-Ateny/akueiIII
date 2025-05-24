
import React from 'react';
import { ExternalLink, Github, Calendar, Code, Rocket } from 'lucide-react';

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
      ],
      gradient: "from-purple-600 to-blue-600",
      icon: "⚔️"
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
      ],
      gradient: "from-green-600 to-teal-600",
      icon: "🚗"
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
      ],
      gradient: "from-orange-600 to-red-600",
      icon: "🧡"
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
      ],
      gradient: "from-blue-600 to-indigo-600",
      icon: "🎓"
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      'TypeScript': '💙',
      'Next.js': '⚡',
      'PostgreSQL': '🐘',
      'WebSockets': '🔌',
      'Swift': '🍎',
      'Azure': '☁️',
      'Firebase': '🔥',
      'React Native': '📱',
      'Node.js': '🟢',
      'MongoDB': '🍃',
      'React': '⚛️',
      'WebRTC': '📹',
      'Socket.io': '🔌'
    };
    return icons[tech] || '⚙️';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-blue-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Rocket className="h-12 w-12 text-green-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative projects that demonstrate my passion for creating impactful 
            technology solutions across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-full transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-gray-500">
                      <Github className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                    </button>
                    <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-full transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-gray-500">
                      <ExternalLink className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                    </button>
                  </div>
                </div>
                
                <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {project.subtitle}
                </p>
                
                <div className="flex items-center space-x-2 text-gray-400 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-sm rounded-full hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
                    >
                      <span>{getTechIcon(tech)}</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3 group/item">
                    <div className="flex-shrink-0 mt-1">
                      <Code className="h-4 w-4 text-purple-400 group-hover/item:text-pink-400 transition-colors duration-300" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                      {feature}
                    </p>
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
