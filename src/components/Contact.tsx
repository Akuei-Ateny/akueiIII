
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
      gradient: "from-orange-600 to-red-600",
      emoji: "🎓"
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: "akueiateny@gmail.com",
      href: "mailto:akueiateny@gmail.com",
      description: "For general correspondence",
      gradient: "from-orange-500 to-orange-700",
      emoji: "✉️"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "akuei-johnson-ateny",
      href: "https://www.linkedin.com/in/akuei-johnson-ateny/",
      description: "Professional networking",
      gradient: "from-orange-400 to-orange-600",
      emoji: "💼"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+1 609 255 6133",
      href: "https://wa.me/16092556133",
      description: "Quick messages",
      gradient: "from-orange-600 to-red-700",
      emoji: "💬"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/hoskey211/",
      username: "@hoskey211",
      gradient: "from-orange-500 to-red-600",
      emoji: "📸"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/akueioski.johnson/",
      username: "akueioski.johnson",
      gradient: "from-orange-600 to-red-700",
      emoji: "👥"
    }
  ];

  const codeSnippets = [
    'tiger.connect();',
    'while(networking) { grow(); }',
    'const contact = "easy";',
    'function reachOut() {}',
    'tiger.email = "ready";',
    'success.message(tiger);',
    'return "Let\'s chat! 🐅";'
  ];

  // Generate random tiger emojis for background
  const tigers = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
              animationDelay: `${index * 3}s`,
              animationDuration: `${19 + Math.random() * 13}s`,
              color: index % 3 === 0 ? '#ea580c' : 
                     index % 3 === 1 ? '#f97316' : '#fb923c',
              opacity: 0.35
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
            className="absolute text-2xl animate-tiger-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 1.1}s`,
              animationDuration: `${13 + Math.random() * 7}s`
            }}
          >
            🐅
          </div>
        ))}
      </div>

      {/* Princeton Orange Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Send className="h-12 w-12 text-orange-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 text-2xl animate-bounce">🐅</div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent mb-6 animate-neon-glow">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology with 
            <span className="text-orange-400 font-semibold"> Princeton Tiger spirit</span>! 🐅
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <span className="animate-orange-glow">Contact Information</span>
              <span className="text-2xl">📞</span>
              <span className="text-2xl animate-bounce">🐅</span>
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 glass-tiger"
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        {method.label}
                      </h4>
                      <span className="text-lg">{method.emoji}</span>
                    </div>
                    <p className="text-gray-300 mb-2 group-hover:text-orange-200 transition-colors duration-300">
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
              <span className="animate-orange-glow">Social Media</span>
              <span className="text-2xl">🌐</span>
              <span className="text-2xl animate-bounce">🐅</span>
            </h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 glass-tiger"
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-tiger-pulse`}>
                    <social.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        {social.label}
                      </h4>
                      <span className="text-lg">{social.emoji}</span>
                    </div>
                    <p className="text-gray-300 group-hover:text-orange-200 transition-colors duration-300">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-xl border border-orange-500/30 glass-tiger">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-orange-400 animate-pulse" />
                <h4 className="text-xl font-semibold text-white animate-orange-glow">Let's Connect Tiger to Tiger! 🐅</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Whether you're interested in discussing potential opportunities, collaboration on projects, 
                or just want to chat about technology and innovation with Princeton spirit, I'd love to hear from you. 
                Don't hesitate to reach out through any of the channels above. <span className="text-orange-400 font-semibold">Go Tigers!</span> 🐅
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-orange-500/30">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Akuei Johnson Ateny Akuei. Built with passion, precision, and Princeton Tiger Pride.</span>
            <Heart className="h-4 w-4 text-orange-400 animate-pulse" />
            <span className="text-lg animate-bounce">🐅</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
