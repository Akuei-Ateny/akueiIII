
import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

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
      ]
    },
    {
      company: "Princeton University",
      location: "Princeton, NJ",
      position: "Machine Learning Research Assistant",
      duration: "Sept. 2023 -- Dec. 2023",
      achievements: [
        "Implemented a CNN-based image recognition system using PyTorch, achieving 92% accuracy on medical image classification tasks",
        "Optimized model architecture through hyperparameter tuning and transfer learning, reducing training time by 35% while maintaining accuracy"
      ]
    },
    {
      company: "Melville Family Foundation",
      location: "Dallas, TX",
      position: "Technical Support Intern",
      duration: "June 2023 -- Aug. 2023",
      achievements: [
        "Architected and developed an interactive educational platform using React and Node.js, serving 500+ students with gamified learning modules",
        "Integrated OpenAI API for personalized learning assistance, resulting in 40% improvement in student engagement and 25% better assessment scores"
      ]
    },
    {
      company: "MTN South Sudan",
      location: "Juba, South Sudan",
      position: "Software Engineering Intern",
      duration: "Jun. 2022 -- Aug. 2022",
      achievements: [
        "Developed 6 new features for the company's mobile money platform using Java and Spring Boot, processing over 100M SSP in daily transactions",
        "Implemented automated error tracking and logging system, improving uptime to 99.9%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey spans across innovative startups, research institutions, and global companies, 
            where I've contributed to impactful projects and cutting-edge technology solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                  <h4 className="text-xl font-semibold text-gray-700 mb-4">{exp.company}</h4>
                </div>
                <div className="lg:text-right">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <TrendingUp className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
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
