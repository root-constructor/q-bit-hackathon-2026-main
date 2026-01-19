import { motion } from 'framer-motion';
import { Bot, Leaf, Radio } from 'lucide-react';
import TrackCard from './TrackCard';

const tracks = [
  {
    title: 'Intelligent Automation & AI Agents',
    description: 'Build autonomous software agents that can reason and diagnose complex operational problems.',
    icon: Bot,
  },
  {
    title: 'Green Computing & Sustainability',
    description: 'Software-based solutions for environmental efficiency and resource conservation.',
    icon: Leaf,
  },
  {
    title: 'IoT Systems & Real-Time Sensor Analytics',
    description: 'Processing and visualizing high-frequency data streams from simulated or public sensor datasets.',
    icon: Radio,
  },
];

const TracksSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: '#D500F9' }}>
            Choose Your Path
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Hackathon Tracks
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <TrackCard
              key={track.title}
              title={track.title}
              description={track.description}
              icon={track.icon}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;