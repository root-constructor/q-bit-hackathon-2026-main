import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pulse-glow"
          style={{ 
            background: 'radial-gradient(circle, rgba(213,0,249,0.3) 0%, rgba(101,31,255,0.15) 50%, transparent 70%)' 
          }}
        />
        <div 
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-float opacity-60"
          style={{ background: 'rgba(101,31,255,0.2)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] animate-float opacity-60"
          style={{ background: 'rgba(213,0,249,0.2)', animationDelay: '-3s' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div 
            className="absolute inset-0 blur-[80px] opacity-50 scale-150"
            style={{ background: 'linear-gradient(135deg, #D500F9 0%, #651FFF 100%)' }}
          />
          <h1 className="relative text-7xl md:text-9xl font-black tracking-tight gradient-text drop-shadow-2xl">
            Q-BIT
          </h1>
        </motion.div>

        {/* Headlines */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          Code the Future. Optimize the World.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 font-mono"
        >
          A 24-Hour Hackathon for IT Professionals <br />
          31<sup>st</sup> jan - 1<sup>st</sup> feb
        </motion.p> 

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://snaptiqz.com/event/qbit2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full border-2 border-foreground/60 bg-transparent hover:border-transparent transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D500F9] to-[#651FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-foreground group-hover:text-white transition-colors duration-300">
              Register Now
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 rounded-full bg-[#D500F9]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;