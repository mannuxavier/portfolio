import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Mandeepkulshrestha6290',
      link: 'mailto:Mandeepkulshrestha6290@gmail.com',
      color: 'cyan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 62622 39088',
      link: 'tel:+916262239088',
      color: 'purple',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/mandeep-kulshrestha-ba34a933a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@mannuxavier',
      link: 'https://github.com/mannuxavier',
      color: 'pink',
    },
  ];

  const colorClasses = {
    cyan: 'from-cyan-500/20 to-cyan-900/20 border-cyan-500/30 hover:border-cyan-400 text-cyan-400',
    purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 hover:border-purple-400 text-purple-400',
    blue: 'from-blue-500/20 to-blue-900/20 border-blue-500/30 hover:border-blue-400 text-blue-400',
    pink: 'from-pink-500/20 to-pink-900/20 border-pink-500/30 hover:border-pink-400 text-pink-400',
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          Let's collaborate on your next big project
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colorClasses[contact.color as keyof typeof colorClasses]} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <contact.icon className={`w-8 h-8 mb-4 ${colorClasses[contact.color as keyof typeof colorClasses].split(' ').pop()}`} />
              <h3 className="text-lg font-bold mb-1">{contact.label}</h3>
              <p className="text-sm text-gray-400 break-all">{contact.value}</p>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Send className={`w-4 h-4 ${colorClasses[contact.color as keyof typeof colorClasses].split(' ').pop()}`} />
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Send a Message
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-gray-400">Available for freelance opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
