import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const conductItems = [
  {
    title: 'Respectful Behavior',
    description: 'Treat all participants, organizers, and mentors with respect. Harassment or discrimination of any kind will not be tolerated.',
  },
  {
    title: 'Professional Communication',
    description: 'Maintain professional and courteous communication at all times. No offensive language or personal attacks.',
  },
  {
    title: 'Collaboration',
    description: 'Foster a collaborative environment. Help fellow participants when possible and share knowledge constructively.',
  },
  {
    title: 'Safety & Security',
    description: 'Do not attempt to hack, exploit vulnerabilities in event systems, or engage in any unauthorized access.',
  },
  {
    title: 'Health & Safety',
    description: 'Follow all venue safety rules and health guidelines. Report any safety concerns immediately to organizers.',
  },
  {
    title: 'Sustainability',
    description: 'Be mindful of the environment. Properly dispose of waste and minimize resource consumption during the event.',
  },
  {
    title: 'Inclusivity',
    description: 'Welcome and support participants from all backgrounds. Create an inclusive environment for everyone.',
  },
  {
    title: 'Fair Play',
    description: 'Compete fairly and ethically. No cheating, collusion, or rule violations. Violations will result in disqualification.',
  },
];

const CodeOfConductSection = () => {
  return (
    <section id="codeOfConduct" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Code of Conduct</h2>
          <p className="text-muted-foreground text-lg">Our commitment to a safe and inclusive hackathon</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conductItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl border border-border/50 backdrop-blur-xl"
              style={{ background: 'rgba(15, 15, 15, 0.6)' }}
            >
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#651FFF' }} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeOfConductSection;
