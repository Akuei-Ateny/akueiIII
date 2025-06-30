
import React from 'react';
import { Code, Database, Globe, Smartphone, Zap, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, TypeScript, and Java Spring Boot',
      gradient: 'from-orange-500 to-red-500',
      emoji: '☕'
    },
    {
      icon: Database,
      title: 'Database & Backend',
      description: 'Experience with PostgreSQL, MongoDB, microservices architecture, and cloud platforms',
      gradient: 'from-orange-600 to-orange-700',
      emoji: '🐘'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS development with Swift, real-time applications, and cross-platform solutions',
      gradient: 'from-orange-400 to-orange-600',
      emoji: '🍎'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'PyTorch, CNN implementations, computer vision, and AI-powered applications',
      gradient: 'from-orange-500 to-red-600',
      emoji: '🧠'
    }
  ];

  const techStack = [
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '💙' },
    { name: 'Swift', icon: '🍎' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' }
  ];

  const codeSnippets = [
    'tiger.code = "excellence";',
    'while(princeton) innovate();',
    'const orange = "#ea580c";',
    'class PrincetonTiger {}',
    'function buildFuture() {}',
    'tiger.skills++;',
    'return "Go Tigers! 🐅";'
  ];

  // Generate random tiger emojis for background
  const tigers = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
              animationDelay: `${index * 3}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
              color: index % 3 === 0 ? '#ea580c' : 
                     index % 3 === 1 ? '#f97316' : '#fb923c',
              opacity: 0.4
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
            className="absolute text-2xl animate-tiger-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          >
            🐅
          </div>
        ))}
      </div>

      {/* Princeton Orange Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Orange Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Zap className="h-12 w-12 text-orange-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 text-2xl animate-bounce">🐅</div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent mb-6 animate-neon-glow">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate full-stack developer and computer science student at Princeton University, 
          driven to build innovative, human-centered solutions that harness the power of technology 
          to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 animate-tiger-pulse"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                <skill.icon className="h-8 w-8 text-white" />
                <span className="absolute -top-1 -right-1 text-lg">{skill.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 animate-orange-glow">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-orange-500/30 glass-tiger">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6 animate-neon-glow">
                My Career Journey 🐅
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                As a BSE Computer Science major, my journey has been a deep dive into software engineering, 
                technology, and innovation. Through internships and hands-on experiences, I’ve built a strong 
                technical foundation while also developing problem-solving, teamwork, and project management 
                skills. My passion for AI and Machine Learning has driven me to explore both the theoretical 
                and practical sides of technology. With each opportunity, I’ve gained valuable insights into 
                software development and how to create impactful solutions. I’m excited to keep growing and 
                contributing to the ever-evolving world of computer science and software engineering.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience ranges from developing high-performance mobile applications to implementing machine 
                learning models for medical image classification. I'm passionate about creating technology that 
                makes a meaningful impact on people's lives!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-125 transition-transform duration-300 animate-tiger-pulse"></div>
                <span className="text-lg text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Princeton University Computer Science 🐅</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full group-hover:scale-125 transition-transform duration-300 animate-tiger-pulse"></div>
                <span className="text-lg text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Statistics & Machine Learning Minor 📊</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full group-hover:scale-125 transition-transform duration-300 animate-tiger-pulse"></div>
                <span className="text-lg text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Full Stack Development 💻</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full group-hover:scale-125 transition-transform duration-300 animate-tiger-pulse"></div>
                <span className="text-lg text-gray-300 group-hover:text-orange-300 transition-colors duration-300">AI/ML Research Experience 🧠</span>
              </div>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="mt-12 pt-8 border-t border-orange-500/30">
            <h4 className="text-2xl font-semibold text-center text-white mb-8 animate-orange-glow">Technology Stack 🛠️</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 px-4 py-2 rounded-full border border-orange-500/50 hover:border-orange-400 hover:bg-orange-900/20 transition-all duration-300 hover:scale-105 animate-tiger-pulse"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-gray-300 hover:text-orange-300 transition-colors duration-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
