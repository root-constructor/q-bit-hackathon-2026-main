import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const rules = [
  {
    title: 'Team Composition',
    description: 'Teams can have a maximum of 4 members. Open to all.',
  },
  {
    title: 'Registration',
    description: 'Register on the official hackathon portal before the deadline. Late registrations may not be accepted.',
  },
  {
    title: 'Originality',
    description: 'All code and submissions must be original work created during the hackathon. Pre-built projects are not allowed.',
  },
  {
    title: 'Intellectual Property',
    description: 'Your project must be your own intellectual property. Plagiarism will result in immediate disqualification.',
  },
  {
    title: 'Code Sharing',
    description: 'All code must be made available in a public GitHub repository. Teams must also deploy a production-ready version of the application and host it during the final evaluation.',
  },
  {
    title: 'Presentation',
    description: 'Teams must present their projects within the allocated time. Presentations are mandatory for prize eligibility.',
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Rules & Guidelines</h2>
          <p className="text-muted-foreground text-lg">Read and adhere to all rules to ensure fair competition</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl border border-border/50 backdrop-blur-xl"
              style={{ background: 'rgba(15, 15, 15, 0.6)' }}
            >
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#D500F9' }} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground text-sm">{rule.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
