import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Brain } from 'lucide-react';
import heroImage from '@/assets/hero-ai-hunter.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Hunter Platform"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-dark"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-ai-purple/20 rounded-full flex items-center justify-center shadow-glow">
          <Brain className="w-8 h-8 text-ai-purple" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-ai-blue/20 rounded-full flex items-center justify-center shadow-glow">
          <Target className="w-6 h-6 text-ai-blue" />
        </div>
      </div>

      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-14 bg-ai-purple/20 rounded-full flex items-center justify-center shadow-glow">
          <Zap className="w-7 h-7 text-ai-purple" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-secondary rounded-full border border-ai-purple/30">
            <Zap className="w-4 h-4 text-ai-purple mr-2" />
            <span className="text-sm font-medium text-ai-light">AI-Powered Lead Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-ai-light leading-tight">
            Discover High-Quality
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Leads</span>
            <br />
            In Seconds
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-ai-light/80 max-w-3xl mx-auto leading-relaxed">
            AI Hunter transforms your B2B prospecting with intelligent contact discovery, 
            real-time verification, and enriched lead data. Stop wasting time on bad leads.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-ai-purple/20">
              <div className="text-3xl font-bold text-ai-purple">2x</div>
              <div className="text-sm text-ai-light/70">Faster Prospecting</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-ai-blue/20">
              <div className="text-3xl font-bold text-ai-blue">95%</div>
              <div className="text-sm text-ai-light/70">Data Accuracy</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-ai-purple/20">
              <div className="text-3xl font-bold text-ai-purple">50M+</div>
              <div className="text-sm text-ai-light/70">Verified Contacts</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://salescentri.com/trial" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </a>
            <a href="https://salescentri.com/demo" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary" size="xl">
                Book Demo
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center space-x-2 text-ai-light/60">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-ai-light/60">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2 text-ai-light/60">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ai-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ai-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;