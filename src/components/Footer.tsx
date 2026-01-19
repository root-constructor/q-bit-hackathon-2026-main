import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'Rules', href: '#rules' },
  { label: 'Code of Conduct', href: '#codeOfConduct' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="text-2xl font-black">
            <span className="gradient-text">Q-BIT</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 Q-BIT Hackathon
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;