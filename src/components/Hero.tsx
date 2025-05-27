
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const codeSnippets = [
    'const princeton = () => "Tiger Pride";',
    'function excellence() { return "Orange & Black"; }',
    'class Tiger extends Developer {}',
    'if (princeton) { makeItHappen(); }',
    'while (coding) { createMagic(); }',
    'const passion = new Innovation();',
    'return success.map(dream => reality);',
    'async function buildFuture() {}',
    'const skills = [...technologies];',
    'export default Excellence;',
    'console.log("Go Tigers! 🐅");',
    'const akuei = new FullStackDev();',
    'princeton.students.includes(akuei);',
    'while(true) { innovate(); }',
    'const success = await hardwork();'
  ];

  // Generate random tiger emojis for background
  const tigers = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Flying Code Background */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className={`absolute font-mono text-sm animate-float-${index % 3} whitespace-nowrap`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              color: index % 4 === 0 ? '#ea580c' : 
                     index % 4 === 1 ? '#f97316' : 
                     index % 4 === 2 ? '#fb923c' : '#fdba74',
              opacity: 0.3
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
            className="absolute text-lg animate-tiger-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            🐅
          </div>
        ))}
      </div>

      {/* Princeton Orange Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Orange Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-float"
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
            <div className="relative">
              <Sparkles className="h-12 w-12 text-orange-400 animate-spin" />
              <div className="absolute -top-1 -right-1 text-2xl animate-bounce">🐅</div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-scale-in">
              Akuei III
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mt-2 animate-scale-in delay-300 animate-neon-glow">
              Princeton Tiger 🐅 | Full Stack Innovator
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            Rising Senior at Princeton University | Computer Science & Statistics/ML | 
            Building the Future with Orange & Black Excellence
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-700">
            Transforming innovative ideas into scalable solutions with Princeton Tiger spirit. 
            Creating technology that bridges possibility and reality, one line of code at a time.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-1000">
            <a
              href="https://www.linkedin.com/in/akuei-johnson-ateny/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 animate-tiger-pulse"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a
              href="mailto:akuei@princeton.edu"
              className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 animate-tiger-pulse"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://github.com/Akuei-Ateny"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-orange-800 to-black hover:from-orange-700 hover:to-gray-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 animate-tiger-pulse"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 animate-fade-in delay-1200 animate-tiger-pulse"
          >
            <span>Explore My Tiger Universe 🐅</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-orange-500" />
      </div>
    </section>
  );
};

export default Hero;
