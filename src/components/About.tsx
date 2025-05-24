
import React from 'react';
import { Code, Database, Globe, Smartphone, Zap, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, TypeScript, and Java Spring Boot',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Database & Backend',
      description: 'Experience with PostgreSQL, MongoDB, microservices architecture, and cloud platforms',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS development with Swift, real-time applications, and cross-platform solutions',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'PyTorch, CNN implementations, computer vision, and AI-powered applications',
      gradient: 'from-pink-500 to-rose-500'
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

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Zap className="h-12 w-12 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and computer science student at Princeton University, 
            dedicated to creating innovative solutions that bridge technology and human needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                My Journey
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                As a rising senior at Princeton University pursuing a B.S.E in Computer Science with a minor in 
                Statistics and Machine Learning, I've had the privilege of working on cutting-edge projects that 
                span from payment processing systems to AI-powered educational platforms.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience ranges from developing high-performance mobile applications to implementing machine 
                learning models for medical image classification. I'm passionate about creating technology that 
                makes a meaningful impact on people's lives.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">Princeton University Computer Science</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">Statistics & Machine Learning Minor</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">AI/ML Research Experience</span>
              </div>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <h4 className="text-2xl font-semibold text-center text-white mb-8">Technology Stack</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-700/50 px-4 py-2 rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">{tech.name}</span>
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
