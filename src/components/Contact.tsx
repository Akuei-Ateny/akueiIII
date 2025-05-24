
import React from 'react';
import { Mail, Linkedin, Instagram, Facebook, MessageCircle, Heart, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "University Email",
      value: "akuei@princeton.edu",
      href: "mailto:akuei@princeton.edu",
      description: "Best for academic inquiries",
      gradient: "from-blue-600 to-blue-700",
      emoji: "🎓"
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: "akueiateny@gmail.com",
      href: "mailto:akueiateny@gmail.com",
      description: "For general correspondence",
      gradient: "from-red-600 to-red-700",
      emoji: "✉️"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "akuei-johnson-ateny",
      href: "https://www.linkedin.com/in/akuei-johnson-ateny/",
      description: "Professional networking",
      gradient: "from-blue-600 to-blue-800",
      emoji: "💼"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+1 609 255 6133",
      href: "https://wa.me/16092556133",
      description: "Quick messages",
      gradient: "from-green-600 to-green-700",
      emoji: "💬"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/hoskey211/",
      username: "@hoskey211",
      gradient: "from-pink-600 to-purple-600",
      emoji: "📸"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/akueioski.johnson/",
      username: "akueioski.johnson",
      gradient: "from-blue-600 to-blue-800",
      emoji: "👥"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Send className="h-12 w-12 text-pink-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <span>Contact Information</span>
              <span className="text-2xl">📞</span>
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {method.label}
                      </h4>
                      <span className="text-lg">{method.emoji}</span>
                    </div>
                    <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <span>Social Media</span>
              <span className="text-2xl">🌐</span>
            </h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {social.label}
                      </h4>
                      <span className="text-lg">{social.emoji}</span>
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-400 animate-pulse" />
                <h4 className="text-xl font-semibold text-white">Let's Connect!</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Whether you're interested in discussing potential opportunities, collaboration on projects, 
                or just want to chat about technology and innovation, I'd love to hear from you. 
                Don't hesitate to reach out through any of the channels above.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-gray-700/50">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Akuei Johnson Ateny Akuei. Built with passion and precision.</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
