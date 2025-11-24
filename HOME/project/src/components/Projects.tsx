import { ExternalLink, Github, TrendingUp, Smartphone, Bot, MessageSquare, Cloud, Eye } from 'lucide-react';

interface ProjectsProps {
  layoutMode: 'default' | 'grid' | 'stack' | 'spotlight' | 'neon';
}

function Projects({ layoutMode }: ProjectsProps) {
  const projects = [
    {
      title: 'Warren — Stock Price Predictor',
      description: 'AI-powered stock price prediction using Prophet algorithm',
      tech: ['Python', 'HTML', 'CSS', 'Prophet', 'Machine Learning'],
      icon: TrendingUp,
      color: 'cyan',
    },
    {
      title: 'Student & Teacher Attendance Manager',
      description: 'Android app for tracking attendance with SQLite database',
      tech: ['Java', 'XML', 'SQLite', 'Android'],
      icon: Smartphone,
      color: 'purple',
    },
    {
      title: 'LunaBot Autonomous Robotics',
      description: 'AI-powered robot using ROS2, Webots, and computer vision',
      tech: ['ROS2', 'Webots', 'Computer Vision', 'AI', 'Robotics'],
      icon: Bot,
      color: 'pink',
    },
    {
      title: 'AI Chat Assistant',
      description: 'Human-like conversational AI with NLP for mentoring support',
      tech: ['Python', 'NLP', 'TensorFlow', 'Natural Language Processing'],
      icon: MessageSquare,
      color: 'blue',
    },
    {
      title: 'Cloud AI Pipeline',
      description: 'Automated ML model deployment on GCP/AWS with CI/CD',
      tech: ['GCP', 'AWS', 'CI/CD', 'Docker', 'Kubernetes', 'ML Ops'],
      icon: Cloud,
      color: 'green',
    },
    {
      title: 'Vision AI Project',
      description: 'Object detection and tracking system using deep learning',
      tech: ['TensorFlow', 'OpenCV', 'Python', 'Computer Vision', 'YOLO'],
      icon: Eye,
      color: 'orange',
    },
  ];

  const colorClasses = {
    cyan: 'from-cyan-500/20 to-cyan-900/20 border-cyan-500/30 hover:border-cyan-400 shadow-cyan-500/20',
    purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 hover:border-purple-400 shadow-purple-500/20',
    pink: 'from-pink-500/20 to-pink-900/20 border-pink-500/30 hover:border-pink-400 shadow-pink-500/20',
    blue: 'from-blue-500/20 to-blue-900/20 border-blue-500/30 hover:border-blue-400 shadow-blue-500/20',
    green: 'from-green-500/20 to-green-900/20 border-green-500/30 hover:border-green-400 shadow-green-500/20',
    orange: 'from-orange-500/20 to-orange-900/20 border-orange-500/30 hover:border-orange-400 shadow-orange-500/20',
  };

  const iconColorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
  };

  const getLayoutClass = () => {
    switch (layoutMode) {
      case 'grid':
        return 'grid md:grid-cols-3 gap-6';
      case 'stack':
        return 'flex flex-col space-y-6';
      case 'spotlight':
        return 'grid md:grid-cols-2 gap-8';
      case 'neon':
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';
      default:
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';
    }
  };

  const getCardClass = (color: string) => {
    const baseClass = `group relative p-6 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border backdrop-blur-sm transition-all duration-300`;

    switch (layoutMode) {
      case 'spotlight':
        return `${baseClass} hover:scale-105 hover:z-10 hover:shadow-2xl`;
      case 'neon':
        return `${baseClass} hover:scale-105 hover:shadow-2xl border-2`;
      case 'stack':
        return `${baseClass} hover:translate-x-4`;
      default:
        return `${baseClass} hover:scale-105`;
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className={`absolute inset-0 ${layoutMode === 'neon' ? 'bg-gradient-to-b from-black via-purple-900/20 to-black' : 'bg-gradient-to-b from-transparent via-pink-500/5 to-transparent'}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent ${layoutMode === 'neon' ? 'animate-pulse' : ''}`}>
          Projects
        </h2>

        <div className={getLayoutClass()}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={getCardClass(project.color)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${layoutMode === 'neon' ? 'animate-pulse' : ''}`}></div>

              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gray-900/50 ${iconColorClasses[project.color as keyof typeof iconColorClasses]}`}>
                  <project.icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/50 ${iconColorClasses[project.color as keyof typeof iconColorClasses]} ${layoutMode === 'neon' ? 'border border-current' : ''}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 ${iconColorClasses[project.color as keyof typeof iconColorClasses]} hover:bg-gray-800/50 transition-colors text-sm font-semibold`}>
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 ${iconColorClasses[project.color as keyof typeof iconColorClasses]} hover:bg-gray-800/50 transition-colors text-sm font-semibold`}>
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button>
              </div>

              {layoutMode === 'neon' && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses]} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity -z-10`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
