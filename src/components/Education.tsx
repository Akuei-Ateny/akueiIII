
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

  const codeSnippets = [
    'tiger.knowledge++;',
    'while(learning) { grow(); }',
    'const princeton = "excellence";',
    'function study() { return A; }',
    'tiger.gpa = "dean\'s list";',
    'success.learn(everything);',
    'return "Go Tigers! 🐅";'
  ];

  // Generate random tiger emojis for background
  const tigers = Array.from({ length: 22 }, (_, i) => i);

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
              animationDelay: `${index * 2.5}s`,
              animationDuration: `${17 + Math.random() * 11}s`,
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
            className="absolute text-xl animate-tiger-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.9}s`,
              animationDuration: `${11 + Math.random() * 9}s`
            }}
          >
            🐅
          </div>
        ))}
      </div>

      {/* Princeton Orange Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 left-1/3 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/3 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Star className="h-12 w-12 text-orange-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 text-2xl animate-bounce">🐅</div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent mb-6 animate-neon-glow">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in computer science and machine learning at one of the world's 
            most prestigious institutions with <span className="text-orange-400 font-semibold">Tiger Pride</span> 🐅
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 glass-tiger">
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 animate-neon-glow">
                  Princeton University
                </h3>
                <p className="text-xl text-gray-300">Princeton, NJ 🐅</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Award className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse" />
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      Degree
                    </h4>
                    <p className="text-gray-300">Bachelor of Science in Engineering</p>
                    <p className="text-gray-300">Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <BookOpen className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse" />
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      Minor
                    </h4>
                    <p className="text-gray-300">Statistics and Machine Learning</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-center lg:text-right p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30 animate-tiger-pulse">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 animate-orange-glow">
                    2026
                  </div>
                  <div className="text-lg text-gray-300">Expected Graduation</div>
                  <div className="text-sm text-gray-400 mt-2">Aug 2022 - May 2026</div>
                  <div className="text-2xl mt-2">🐅</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                <span className="animate-orange-glow">Relevant Coursework</span>
                <span className="text-2xl">📚</span>
                <span className="text-2xl animate-bounce">🐅</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-4 border border-orange-500/50 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300 hover:scale-105 group animate-tiger-pulse"
                  >
                    <p className="text-sm text-gray-300 font-medium group-hover:text-orange-200 transition-colors duration-300">
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
