
import React from 'react';
import { Calendar, MapPin, TrendingUp, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Zahara Software",
      location: "Seattle, WA",
      position: "Software Engineering Intern",
      duration: "June 2024 -- Aug. 2024",
      achievements: [
        "Led development of a microservices-based payment processing system using Java Spring Boot, reducing transaction processing time by 25% and handling 10K+ daily transactions",
        "Implemented automated testing suite with JUnit and Mockito, achieving 90% code coverage and reducing bug detection time by 40%"
      ],
      gradient: "from-orange-600 to-red-600",
      icon: "💳"
    },
    {
      company: "Princeton University",
      location: "Princeton, NJ",
      position: "Machine Learning Research Assistant",
      duration: "Sept. 2023 -- Dec. 2023",
      achievements: [
        "Implemented a CNN-based image recognition system using PyTorch, achieving 92% accuracy on medical image classification tasks",
        "Optimized model architecture through hyperparameter tuning and transfer learning, reducing training time by 35% while maintaining accuracy"
      ],
      gradient: "from-orange-500 to-orange-700",
      icon: "🧠"
    },
    {
      company: "Melville Family Foundation",
      location: "Dallas, TX",
      position: "Technical Support Intern",
      duration: "June 2023 -- Aug. 2023",
      achievements: [
        "Architected and developed an interactive educational platform using React and Node.js, serving 500+ students with gamified learning modules",
        "Integrated OpenAI API for personalized learning assistance, resulting in 40% improvement in student engagement and 25% better assessment scores"
      ],
      gradient: "from-orange-400 to-orange-600",
      icon: "🎓"
    },
    {
      company: "MTN South Sudan",
      location: "Juba, South Sudan",
      position: "Software Engineering Intern",
      duration: "Jun. 2022 -- Aug. 2022",
      achievements: [
        "Developed 6 new features for the company's mobile money platform using Java and Spring Boot, processing over 100M SSP in daily transactions",
        "Implemented automated error tracking and logging system, improving uptime to 99.9%"
      ],
      gradient: "from-orange-600 to-red-700",
      icon: "📱"
    }
  ];

  const codeSnippets = [
    'tiger.experience++;',
    'while(coding) { innovate(); }',
    'const skills = [...new Set()];',
    'function buildCareer() {}',
    'success.push(hardwork);',
    'tiger.achievements.add();',
    'return "Princeton Power!";'
  ];

  // Generate random tiger emojis for background
  const tigers = Array.from({ length: 25 }, (_, i) => i);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
              animationDelay: `${index * 4}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
              color: index % 3 === 0 ? '#ea580c' : 
                     index % 3 === 1 ? '#f97316' : '#fb923c',
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
            className="absolute text-xl animate-tiger-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.6}s`,
              animationDuration: `${12 + Math.random() * 10}s`
            }}
          >
            🐅
          </div>
        ))}
      </div>

      {/* Princeton Orange Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-orange-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Briefcase className="h-12 w-12 text-orange-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 text-2xl animate-bounce">🐅</div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent mb-6 animate-neon-glow">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey spans across innovative startups, research institutions, and global companies, 
            where I've contributed to impactful projects with <span className="text-orange-400 font-semibold">Princeton Tiger excellence</span> 🐅
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30 hover:border-orange-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 glass-tiger"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 animate-orange-glow">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <div className="flex items-center space-x-2 text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 text-orange-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-orange-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3 group/item">
                    <div className="flex-shrink-0 mt-1">
                      <TrendingUp className="h-5 w-5 text-orange-400 group-hover/item:text-orange-300 transition-colors duration-300 animate-tiger-pulse" />
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                      {achievement}
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

export default Experience;
