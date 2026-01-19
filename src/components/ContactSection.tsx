import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Have questions? We're here to help!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 rounded-2xl border border-border/50 backdrop-blur-xl text-center"
            style={{ background: 'rgba(15, 15, 15, 0.6)' }}
          >
            <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: '#D500F9' }} />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a href="mailto:ieeesbjain@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              ieeesbjain@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl border border-border/50 backdrop-blur-xl text-center"
            style={{ background: 'rgba(15, 15, 15, 0.6)' }}
          >
            <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: '#651FFF' }} />
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <a href="tel:+918281526141" className="text-muted-foreground hover:text-foreground transition-colors">
              +91 82815 26141
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-8 rounded-2xl border border-border/50 backdrop-blur-xl text-center"
            style={{ background: 'rgba(15, 15, 15, 0.6)' }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: '#D500F9' }} />
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground">
              Jain University Kochi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
