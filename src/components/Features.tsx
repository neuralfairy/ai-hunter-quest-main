import { Button } from '@/components/ui/button';
import { Search, CheckCircle, Users, Zap, Target, Database, Shield, TrendingUp } from 'lucide-react';
import featuresImage from '@/assets/ai-features.jpg';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Discovery",
      description: "Find prospects across 50+ million contacts using advanced AI algorithms that understand your ideal customer profile.",
      gradient: "from-ai-purple to-ai-blue"
    },
    {
      icon: CheckCircle,
      title: "Real-Time Verification",
      description: "Verify contact information instantly with 95% accuracy. No more bounced emails or wasted outreach efforts.",
      gradient: "from-ai-blue to-ai-purple"
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Enrich contact profiles with social media, company data, and behavioral insights for personalized outreach.",
      gradient: "from-ai-purple to-ai-blue"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share prospects, coordinate outreach, and track team performance with built-in collaboration tools.",
      gradient: "from-ai-blue to-ai-purple"
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Built with privacy-first principles. All data processing meets GDPR, SOC 2, and ISO 27001 standards.",
      gradient: "from-ai-purple to-ai-blue"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Track prospecting ROI, conversion rates, and team performance with comprehensive analytics dashboard.",
      gradient: "from-ai-blue to-ai-purple"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Define Your ICP",
      description: "Input your ideal customer profile and let AI understand your target market.",
      icon: Target
    },
    {
      step: "02", 
      title: "AI Discovery",
      description: "Our AI searches across millions of contacts to find your perfect prospects.",
      icon: Search
    },
    {
      step: "03",
      title: "Verify & Enrich",
      description: "Automatically verify contact details and enrich with behavioral insights.",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Export & Engage",
      description: "Export verified leads to your CRM and start personalized outreach campaigns.",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ai-light mb-6">
            AI Hunter
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-ai-light/80 max-w-3xl mx-auto">
            Transform your prospecting workflow with AI-powered intelligence that finds, verifies, and enriches your ideal prospects.
          </p>
        </div>

        {/* AI Hunter Workflow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-ai-light text-center mb-12">How AI Hunter Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth hover:shadow-glow">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-black">{item.step}</span>
                    </div>
                    <item.icon className="w-6 h-6 text-ai-purple" />
                  </div>
                  <h4 className="text-lg font-semibold text-ai-light mb-2">{item.title}</h4>
                  <p className="text-ai-light/70 text-sm">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth hover:shadow-glow h-full">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-ai-light mb-4">{feature.title}</h3>
                <p className="text-ai-light/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Image & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={featuresImage} 
              alt="AI Hunter Interface"
              className="rounded-xl shadow-card w-full hover:scale-105 transition-smooth"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-ai-light">
              See AI Hunter in Action
            </h3>
            <p className="text-lg text-ai-light/80">
              Experience the power of AI-driven prospecting with our interactive demo. 
              See how Fortune 500 companies use AI Hunter to accelerate their sales pipeline.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-ai-light">Real-time contact verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-ai-light">Advanced search filters</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-ai-light">CRM integrations</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://salescentri.com/demo" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg">Interactive Demo</Button>
              </a>
              <a href="https://salescentri.com/aggregator" target="_blank" rel="noopener noreferrer">
                <Button variant="ctaSecondary" size="lg">AI Aggregator</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;