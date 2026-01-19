import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TrackCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const TrackCard = ({ title, description, icon: Icon, delay = 0 }: TrackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div 
        className="relative p-8 h-full rounded-2xl transition-all duration-300 border border-border/50 backdrop-blur-xl"
        style={{ 
          background: 'rgba(15, 15, 15, 0.6)',
        }}
      >
        {/* Hover border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
          style={{
            background: 'linear-gradient(135deg, rgba(213,0,249,0.3) 0%, rgba(101,31,255,0.3) 100%)',
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />
        <div 
          className="mb-6 inline-flex p-3 rounded-xl border"
          style={{
            background: 'linear-gradient(135deg, rgba(213,0,249,0.15) 0%, rgba(101,31,255,0.15) 100%)',
            borderColor: 'rgba(213,0,249,0.25)'
          }}
        >
          <Icon className="w-8 h-8" style={{ color: '#D500F9' }} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TrackCard;