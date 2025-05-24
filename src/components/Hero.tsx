
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Akuei Johnson</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-600 mt-2">
              Ateny Akuei
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rising Senior at Princeton University | Full Stack Developer | 
            Computer Science & Statistics/ML Enthusiast
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Building innovative solutions at the intersection of technology and human experience. 
            Passionate about creating impactful software that solves real-world problems.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/akuei-johnson-ateny/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-gray-700" />
            </a>
            <a
              href="mailto:akuei@princeton.edu"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-gray-700" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Github className="h-6 w-6 text-gray-700" />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <span>Explore My Work</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
