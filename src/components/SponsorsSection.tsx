import { motion } from 'framer-motion';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'Future Summit',
      logo: '/images/future-summit.svg',
    },
    {
      name: 'IEEE JAIN Emblem',
      logo: '/images/ieee-jain-emblem.png',
    },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-2">Powered By</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-20 md:h-24 object-contain hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
