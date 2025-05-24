
import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, TypeScript, and Java Spring Boot'
    },
    {
      icon: Database,
      title: 'Database & Backend',
      description: 'Experience with PostgreSQL, MongoDB, microservices architecture, and cloud platforms'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS development with Swift, real-time applications, and cross-platform solutions'
    },
    {
      icon: Globe,
      title: 'Machine Learning',
      description: 'PyTorch, CNN implementations, computer vision, and AI-powered applications'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and computer science student at Princeton University, 
            dedicated to creating innovative solutions that bridge technology and human needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                <skill.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a rising senior at Princeton University pursuing a B.S.E in Computer Science with a minor in 
                Statistics and Machine Learning, I've had the privilege of working on cutting-edge projects that 
                span from payment processing systems to AI-powered educational platforms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience ranges from developing high-performance mobile applications to implementing machine 
                learning models for medical image classification. I'm passionate about creating technology that 
                makes a meaningful impact on people's lives.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <span className="text-lg text-gray-700">Princeton University Computer Science</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <span className="text-lg text-gray-700">Statistics & Machine Learning Minor</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <span className="text-lg text-gray-700">Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <span className="text-lg text-gray-700">AI/ML Research Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
