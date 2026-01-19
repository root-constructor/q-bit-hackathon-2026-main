import { motion } from 'framer-motion';
import { Zap, Users, Trophy, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Push the boundaries of technology and create innovative solutions to real-world problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Work with talented individuals, mentors, and industry experts in a collaborative environment.',
    },
    {
      icon: Trophy,
      title: 'Competitive Spirit',
      description: 'Compete for exciting prizes and recognition while showcasing your technical skills.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Build solutions that have the potential to make a positive impact on the world.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">About Q-BIT</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Q-BIT is a 24-hour hackathon designed for IT professionals and students to showcase their coding skills, 
            collaborate with peers, and build innovative solutions across multiple technology tracks.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">What is Q-BIT?</h3>
              <p className="text-muted-foreground">
                Q-BIT stands for "Quantum Bits" – representing the fundamental units of quantum computing and innovation. 
                This hackathon brings together the brightest minds to solve complex problems through code and creativity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To foster innovation, encourage collaboration, and provide a platform for developers to showcase their 
                skills while creating meaningful solutions for real-world challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Why Participate?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-[#D500F9]"></span> Learn from industry experts and mentors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D500F9]"></span> Network with talented developers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D500F9]"></span> Win exciting prizes and recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D500F9]"></span> Build a project for your portfolio
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-border/50 backdrop-blur-xl"
                  style={{ background: 'rgba(15, 15, 15, 0.6)' }}
                >
                  <Icon className="w-8 h-8 mb-3" style={{ color: '#D500F9' }} />
                  <h4 className="font-bold text-sm mb-2">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl border border-border/50 backdrop-blur-xl"
          style={{ background: 'rgba(15, 15, 15, 0.6)' }}
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black gradient-text mb-2">24</h3>
            <p className="text-muted-foreground text-sm">Hours of Innovation</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black gradient-text mb-2">3</h3>
            <p className="text-muted-foreground text-sm">Technology Tracks</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black gradient-text mb-2">₹1L</h3>
            <p className="text-muted-foreground text-sm">Grand Prize</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
