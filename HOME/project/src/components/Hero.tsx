import { Code2, Globe, Link2, Cloud, Users, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    { icon: Code2, text: 'Full-Stack Master & Multi-Language Specialist', languages: 'Rust, Swift, Python, Go' },
    { icon: Globe, text: 'GDG Lead & Core Contributor', highlight: true },
    { icon: Link2, text: 'Blockchain Architect' },
    { icon: Cloud, text: 'Cloud & DevOps Expert', platforms: 'AWS/Azure/GCP' },
    { icon: Users, text: 'Tech Ambassador' },
  ];

  const languages = [
    'Rust', 'Python', 'Go', 'Swift', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#',
    'Kotlin', 'PHP', 'Ruby', 'Scala', 'R', 'Node.js', 'SQL', 'Shell', 'Dart'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-5xl font-bold shadow-2xl">
              MK
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
          Mandeep Kulshrestha
        </h1>

        <div className="flex justify-center items-center gap-4 mb-8">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-8 animate-pulse"
          />
          <div className="flex flex-col items-start">
            <span className="text-yellow-400 font-bold text-sm flex items-center gap-2">
              <Sparkles size={16} className="animate-spin-slow" />
              Google Cloud Arcade Legendary
            </span>
            <span className="text-cyan-400 font-semibold text-sm">
              Google Student Ambassador
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                role.highlight ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' : 'border-cyan-500/30 hover:border-cyan-400'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <role.icon className={`w-8 h-8 mb-3 ${role.highlight ? 'text-yellow-400' : 'text-cyan-400'}`} />
              <h3 className="text-lg font-bold mb-1">{role.text}</h3>
              {role.languages && <p className="text-sm text-gray-400">{role.languages}</p>}
              {role.platforms && <p className="text-sm text-gray-400">{role.platforms}</p>}
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Multi-Language Specialist</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-sm font-semibold hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer hover:scale-110"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-110"
        >
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
