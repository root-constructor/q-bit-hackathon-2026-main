import HeroSection from '@/components/HeroSection';
import TracksSection from '@/components/TracksSection';
import PrizesSection from '@/components/PrizesSection';
import RulesSection from '@/components/RulesSection';
import CodeOfConductSection from '@/components/CodeOfConductSection';
import AboutSection from '@/components/AboutSection';
import SponsorsSection from '@/components/SponsorsSection';
import ContactSection from '@/components/ContactSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <PrizesSection />
      <RulesSection />
      <CodeOfConductSection />
      <SponsorsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;