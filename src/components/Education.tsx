
import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

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
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation in computer science and machine learning at one of the world's 
            most prestigious institutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Princeton University</h3>
                <p className="text-xl text-gray-600">Princeton, NJ</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Degree</h4>
                    <p className="text-gray-700">Bachelor of Science in Engineering</p>
                    <p className="text-gray-700">Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Minor</h4>
                    <p className="text-gray-700">Statistics and Machine Learning</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-bold text-gray-900 mb-2">2026</div>
                  <div className="text-lg text-gray-600">Expected Graduation</div>
                  <div className="text-sm text-gray-500 mt-2">Aug 2022 - May 2026</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Relevant Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <p className="text-sm text-gray-700 font-medium">{course}</p>
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
