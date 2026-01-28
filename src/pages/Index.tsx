import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import AdditionalServicesSection from '@/components/sections/AdditionalServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <AIServicesSection />
          <AdditionalServicesSection />
          <PortfolioSection />
          <WhyUsSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
