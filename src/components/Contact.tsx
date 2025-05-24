
import React from 'react';
import { Mail, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "University Email",
      value: "akuei@princeton.edu",
      href: "mailto:akuei@princeton.edu",
      description: "Best for academic inquiries"
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: "akueiateny@gmail.com",
      href: "mailto:akueiateny@gmail.com",
      description: "For general correspondence"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "akuei-johnson-ateny",
      href: "https://www.linkedin.com/in/akuei-johnson-ateny/",
      description: "Professional networking"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+1 609 255 6133",
      href: "https://wa.me/16092556133",
      description: "Quick messages"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/hoskey211/",
      username: "@hoskey211"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/akueioski.johnson/",
      username: "akueioski.johnson"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 group-hover:bg-gray-600 rounded-full flex items-center justify-center">
                    <method.icon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{method.label}</h4>
                    <p className="text-gray-300 mb-2">{method.value}</p>
                    <p className="text-sm text-gray-400">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Social Media</h3>
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 group-hover:bg-gray-600 rounded-full flex items-center justify-center">
                    <social.icon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{social.label}</h4>
                    <p className="text-gray-300">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-800 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Let's Connect!</h4>
              <p className="text-gray-300 leading-relaxed">
                Whether you're interested in discussing potential opportunities, collaboration on projects, 
                or just want to chat about technology and innovation, I'd love to hear from you. 
                Don't hesitate to reach out through any of the channels above.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Akuei Johnson Ateny Akuei. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
