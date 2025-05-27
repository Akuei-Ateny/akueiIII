
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
      gradient: "from-orange-600 to-red-600",
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
      gradient: "from-orange-500 to-orange-700",
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
      gradient: "from-orange-400 to-orange-600",
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
      gradient: "from-orange-600 to-red-700",
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

  const codeSnippets = [
    'tiger.projects.push(awesome);',
    'while(building) { innovate(); }',
    'const innovation = true;',
    'function createMagic() {}',
    'tiger.code = "Princeton";',
    'success.map(project => reality);',
    'return "Orange & Black!";'
  ];

  // Generate random tiger emojis for background
  const tigers = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-orange-900/10"></div>
      
      {/* Flying Code Background */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className={`absolute font-mono text-sm animate-float-${index % 3} whitespace-nowrap`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 3.5}s`,
              animationDuration: `${16 + Math.random() * 14}s`,
              color: index % 3 === 0 ? '#ea580c' : 
                     index % 3 === 1 ? '#f97316' : '#fb923c',
              opacity: 0.35
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Flying Tiger Heads */}
      <div className="absolute inset-0 overflow-hidden">
        {tigers.map((_, index) => (
          <div
            key={index}
            className="absolute text-2xl animate-tiger-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 1.2}s`,
              animationDuration: `${14 + Math.random() * 8}s`
            }}
          >
            🐅
          </div>
        ))}
      </div>

      {/* Princeton Orange Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Rocket className="h-12 w-12 text-orange-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 text-2xl animate-bounce">🐅</div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent mb-6 animate-neon-glow">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative projects that demonstrate my passion for creating impactful 
            technology solutions with <span className="text-orange-400 font-semibold">Princeton Tiger spirit</span> 🐅
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 glass-tiger"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 animate-orange-glow">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-orange-600/20 hover:bg-orange-600/30 rounded-full transition-all duration-300 hover:scale-110 border border-orange-500/50 hover:border-orange-400">
                      <Github className="h-5 w-5 text-orange-300 hover:text-white transition-colors duration-300" />
                    </button>
                    <button className="p-2 bg-orange-600/20 hover:bg-orange-600/30 rounded-full transition-all duration-300 hover:scale-110 border border-orange-500/50 hover:border-orange-400">
                      <ExternalLink className="h-5 w-5 text-orange-300 hover:text-white transition-colors duration-300" />
                    </button>
                  </div>
                </div>
                
                <p className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {project.subtitle}
                </p>
                
                <div className="flex items-center space-x-2 text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">{project.duration}</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 text-orange-300 text-sm rounded-full hover:from-orange-600/30 hover:to-red-600/30 transition-all duration-300 animate-tiger-pulse"
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
                      <Code className="h-4 w-4 text-orange-400 group-hover/item:text-orange-300 transition-colors duration-300 animate-tiger-pulse" />
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
