import { Trophy, Award, Star, Sparkles } from 'lucide-react';

function Achievements() {
  const achievements = [
    {
      title: 'Naukri Campus Trunks',
      score: '98.68',
      description: 'Top scorer in campus recruitment test',
      icon: Trophy,
      color: 'yellow',
      special: true,
    },
    {
      title: 'Google Cloud Arcade Legendary',
      description: 'Achieved legendary status in Google Cloud Arcade program',
      icon: Sparkles,
      color: 'cyan',
      special: true,
    },
    {
      title: 'Hacktoberfest 2025',
      description: 'Lead Runner-up in open source contribution challenge',
      icon: Award,
      color: 'purple',
      special: false,
    },
    {
      title: 'Google Student Ambassador',
      description: 'Leading campus workshops on Cloud & AI/ML technologies',
      icon: Star,
      color: 'pink',
      special: true,
    },
  ];

  const colorClasses = {
    yellow: 'from-yellow-500/20 to-yellow-900/20 border-yellow-500/30',
    cyan: 'from-cyan-500/20 to-cyan-900/20 border-cyan-500/30',
    purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30',
    pink: 'from-pink-500/20 to-pink-900/20 border-pink-500/30',
  };

  const iconColorClasses = {
    yellow: 'text-yellow-400',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
  };

  const glowClasses = {
    yellow: 'shadow-yellow-500/50',
    cyan: 'shadow-cyan-500/50',
    purple: 'shadow-purple-500/50',
    pink: 'shadow-pink-500/50',
  };

  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            <Sparkles className="w-8 h-8 text-cyan-400 animate-spin-slow" />
          </div>
          <p className="text-gray-400 text-lg">Recognition and milestones in my journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${colorClasses[achievement.color as keyof typeof colorClasses]} border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                achievement.special ? `hover:shadow-2xl ${glowClasses[achievement.color as keyof typeof glowClasses]}` : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {achievement.special && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <div className={`absolute -inset-1 bg-gradient-to-r ${colorClasses[achievement.color as keyof typeof colorClasses]} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity -z-10`}></div>
                </>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`p-4 rounded-xl bg-gray-900/50 ${iconColorClasses[achievement.color as keyof typeof iconColorClasses]} ${achievement.special ? 'animate-pulse' : ''}`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {achievement.title}
                    {achievement.special && (
                      <Sparkles className={`w-5 h-5 ${iconColorClasses[achievement.color as keyof typeof iconColorClasses]} animate-pulse`} />
                    )}
                  </h3>
                  {achievement.score && (
                    <div className="inline-block px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400 text-yellow-400 font-bold text-xl mb-2">
                      Score: {achievement.score}
                    </div>
                  )}
                  <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                </div>
              </div>

              {achievement.special && (
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${iconColorClasses[achievement.color as keyof typeof iconColorClasses]} animate-ping`}></div>
                  <div className={`w-3 h-3 rounded-full ${iconColorClasses[achievement.color as keyof typeof iconColorClasses]} absolute top-0`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
