import { motion } from 'framer-motion';
import { Trophy, Ticket } from 'lucide-react';

const PrizesSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px] opacity-50"
          style={{ background: 'linear-gradient(90deg, rgba(213,0,249,0.2) 0%, rgba(101,31,255,0.2) 50%, rgba(213,0,249,0.2) 100%)' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex mb-8"
          >
            <div 
              className="p-4 rounded-2xl border"
              style={{
                background: 'linear-gradient(135deg, rgba(213,0,249,0.2) 0%, rgba(101,31,255,0.2) 100%)',
                borderColor: 'rgba(213,0,249,0.3)'
              }}
            >
              <Trophy className="w-12 h-12" style={{ color: '#D500F9' }} />
            </div>
          </motion.div>

          <h2 className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: '#651FFF' }}>
            Grand Prize
          </h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-6 gradient-text"
          >
            ₹1 Lakh
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 backdrop-blur-xl"
            style={{ background: 'rgba(15, 15, 15, 0.6)' }}
          >
            <Ticket className="w-5 h-5" style={{ color: '#D500F9' }} />
            <span className="text-muted-foreground font-medium">
              + Future Summit Ticket for all winning team members
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;