import { Code, Database, Cloud, GitBranch } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Proficient',
      icon: Code,
      color: 'cyan',
      skills: ['Node.js', 'JavaScript', 'DSA', 'PostgreSQL', 'Blockchain', 'REST APIs'],
    },
    {
      title: 'Comfortable',
      icon: Database,
      color: 'purple',
      skills: ['Redis', 'C++', 'Java', 'HTML', 'jQuery', 'Go', 'Rust', 'Python', 'Django', 'Kotlin'],
    },
    {
      title: 'Multi-Language Specialist',
      icon: GitBranch,
      color: 'pink',
      skills: [
        'C', 'C++', 'Java', 'Python', 'Rust', 'Go', 'Swift', 'Kotlin', 'JavaScript', 'TypeScript',
        'Node.js', 'PHP', 'Ruby', 'Scala', 'R', 'MATLAB', 'SQL', 'Shell', 'Perl', 'Haskell',
        'Elixir', 'Dart', 'Julia', 'Assembly', 'Fortran', 'COBOL', 'C#', 'Objective-C', 'Lua',
        'F#', 'Visual Basic', 'Groovy'
      ],
    },
    {
      title: 'Specialization',
      icon: Cloud,
      color: 'blue',
      skills: [
        'Cloud & DevOps (AWS, Azure, GCP)',
        'Blockchain Architecture',
        'Full-Stack Systems',
        'AI/ML Engineering'
      ],
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
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} border backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gray-900/50 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full bg-gray-900/50 text-sm font-semibold ${iconColorClasses[category.color as keyof typeof iconColorClasses]} hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 cursor-pointer border border-current/20 hover:border-current`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technology Stack Highlights
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-cyan-400 mb-2">30+</p>
              <p className="text-gray-400">Programming Languages</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-purple-400 mb-2">3</p>
              <p className="text-gray-400">Cloud Platforms</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-pink-400 mb-2">10+</p>
              <p className="text-gray-400">Frameworks</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-400 mb-2">5+</p>
              <p className="text-gray-400">Databases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
