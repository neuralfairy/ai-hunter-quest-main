import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ai-dark">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <Contact />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
