import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    {
      name: 'JAIN University',
      logo: '/images/jain-logo.png',
    },
    {
      name: 'IEEE MB Tag',
      logo: '/images/ieee-mb-tag-blue-pne.png',
    },
    {
      name: 'IEEE Sensors Council',
      logo: '/images/ieee-sensors-council-logo.png',
    },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-2">In Association With</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
