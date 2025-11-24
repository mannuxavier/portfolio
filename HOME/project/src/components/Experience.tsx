import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Web Development Intern',
      company: 'Prodigy InfoTech',
      period: 'May 2025',
      color: 'cyan',
    },
    {
      title: 'C++ Programming Intern',
      company: 'CipherByte Technologies',
      period: 'Jan - May 2025',
      color: 'purple',
    },
    {
      title: 'Web Design & Development Intern',
      company: 'TechnoHacks Solutions',
      period: 'June 2025',
      color: 'pink',
    },
    {
      title: 'Java Development Intern',
      company: 'OctaNet',
      period: 'July - Aug 2025',
      color: 'blue',
    },
  ];

  const colorClasses = {
    cyan: 'from-cyan-500/20 to-cyan-900/20 border-cyan-500/30 hover:border-cyan-400',
    purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 hover:border-purple-400',
    pink: 'from-pink-500/20 to-pink-900/20 border-pink-500/30 hover:border-pink-400',
    blue: 'from-blue-500/20 to-blue-900/20 border-blue-500/30 hover:border-blue-400',
  };

  const iconColorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    blue: 'text-blue-400',
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${colorClasses[exp.color as keyof typeof colorClasses]} border backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gray-900/50 ${iconColorClasses[exp.color as keyof typeof iconColorClasses]}`}>
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-gray-400 font-semibold">{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
