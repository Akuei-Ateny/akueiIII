
import React from 'react';
import { GraduationCap, BookOpen, Award, Star } from 'lucide-react';

const Education = () => {
  const courses = [
    "Data Structures & Algorithms (COS226)",
    "Reasoning About Computation (COS240)",
    "Programming Systems (COS217)",
    "Machine Learning (COS324)",
    "Economics and Computation (COS445)",
    "Theory of Algorithms (COS423)",
    "Advanced Programming (COS333)",
    "System Design (COS316)",
    "Cryptography (COS433)",
    "Human-Computer Interaction (COS436)",
    "Ethics of Computing (COS350)",
    "Innovating Across Technology, Business, and Marketplaces (COS448)",
    "Independent Work (COS 397)"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Star className="h-12 w-12 text-orange-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in computer science and machine learning at one of the world's 
            most prestigious institutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  Princeton University
                </h3>
                <p className="text-xl text-gray-300">Princeton, NJ 🐅</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Award className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      Degree
                    </h4>
                    <p className="text-gray-300">Bachelor of Science in Engineering</p>
                    <p className="text-gray-300">Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <BookOpen className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      Minor
                    </h4>
                    <p className="text-gray-300">Statistics and Machine Learning</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-center lg:text-right p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    2026
                  </div>
                  <div className="text-lg text-gray-300">Expected Graduation</div>
                  <div className="text-sm text-gray-400 mt-2">Aug 2022 - May 2026</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                <span>Relevant Coursework</span>
                <span className="text-2xl">📚</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg p-4 border border-gray-600/50 hover:border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-900/20 hover:to-red-900/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
