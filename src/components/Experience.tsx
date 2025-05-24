
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
      gradient: "from-blue-600 to-purple-600",
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
      gradient: "from-orange-600 to-red-600",
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
      gradient: "from-green-600 to-emerald-600",
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
      gradient: "from-yellow-600 to-orange-600",
      icon: "📱"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Briefcase className="h-12 w-12 text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey spans across innovative startups, research institutions, and global companies, 
            where I've contributed to impactful projects and cutting-edge technology solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <div className="flex items-center space-x-2 text-gray-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3 group/item">
                    <div className="flex-shrink-0 mt-1">
                      <TrendingUp className="h-5 w-5 text-purple-400 group-hover/item:text-pink-400 transition-colors duration-300" />
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
