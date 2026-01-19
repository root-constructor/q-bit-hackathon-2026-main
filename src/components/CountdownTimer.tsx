import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date('2026-01-31T10:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const rings = [
    { label: 'Days', value: timeLeft.days, max: 365, color: '#D500F9' },
    { label: 'Hours', value: timeLeft.hours, max: 24, color: '#651FFF' },
    { label: 'Minutes', value: timeLeft.minutes, max: 60, color: '#D500F9' },
    { label: 'Seconds', value: timeLeft.seconds, max: 60, color: '#651FFF' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {rings.map((ring, index) => {
        const circumference = 2 * Math.PI * 45;
        const progress = (ring.value / ring.max) * circumference;
        const offset = circumference - progress;

        return (
          <motion.div
            key={ring.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-20 h-20 md:w-28 md:h-28">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="4"
                  className="stroke-muted/30"
                />
                {/* Animated progress ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke={ring.color}
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset,
                    filter: `drop-shadow(0 0 8px ${ring.color})`,
                  }}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl md:text-3xl font-bold font-mono text-foreground">
                  {String(ring.value).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="mt-2 text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider">
              {ring.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CountdownTimer;