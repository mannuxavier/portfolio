import { GraduationCap, Code, Cloud, Users } from 'lucide-react';

function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <GraduationCap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>
            <p className="text-lg font-semibold mb-2">B.Tech in Computer Science</p>
            <p className="text-gray-400">Shriram College of Engineering and Management</p>
            <p className="text-gray-400">Banmore, Madhya Pradesh</p>
            <p className="text-purple-400 font-bold mt-2">CGPA: 8.4</p>
            <p className="text-gray-400">2024 - 2028</p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Code className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Passion</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about building full-stack applications, cloud-native systems, and mentoring peers.
              I thrive on creating innovative solutions that bridge the gap between cutting-edge technology
              and real-world problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-900/20 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Cloud className="w-10 h-10 text-cyan-400 mb-3" />
            <h4 className="text-lg font-bold mb-2">Cloud Architecture</h4>
            <p className="text-sm text-gray-400">Designing scalable systems on AWS, Azure, and GCP</p>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-900/20 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Code className="w-10 h-10 text-purple-400 mb-3" />
            <h4 className="text-lg font-bold mb-2">Full-Stack Development</h4>
            <p className="text-sm text-gray-400">Building end-to-end solutions with modern frameworks</p>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-900/20 border border-pink-500/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Users className="w-10 h-10 text-pink-400 mb-3" />
            <h4 className="text-lg font-bold mb-2">Mentorship</h4>
            <p className="text-sm text-gray-400">Leading workshops and guiding students in tech</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
