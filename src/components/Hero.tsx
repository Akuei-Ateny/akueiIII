
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const codeSnippets = [
    'const code = () => magic;',
    'function innovate() { return awesome; }',
    'class Developer extends Human {}',
    'if (dream) { makeItReal(); }',
    'while (coding) { createMagic(); }',
    'const passion = new Innovation();',
    'return success.map(dream => reality);',
    'async function buildFuture() {}',
    'const skills = [...technologies];',
    'export default Excellence;'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Flying Code Background */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className={`absolute text-cyan-400/20 font-mono text-sm animate-float-${index % 3} whitespace-nowrap`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-yellow-400 animate-spin" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-scale-in">
              Akuei III
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2 animate-scale-in delay-300">
              Full Stack Innovator
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            Rising Senior at Princeton University | Computer Science & Statistics/ML | 
            Building the Future with Code
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-700">
            Transforming innovative ideas into scalable solutions that make a real impact. 
            Passionate about creating technology that bridges the gap between possibility and reality.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-1000">
            <a
              href="https://www.linkedin.com/in/akuei-johnson-ateny/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 animate-glow"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a
              href="mailto:akuei@princeton.edu"
              className="p-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 animate-glow"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://github.com/Akuei-Ateny"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 animate-glow"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 animate-fade-in delay-1200"
          >
            <span>Explore My Universe</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
