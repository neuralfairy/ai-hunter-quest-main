import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individual sales professionals",
      icon: Zap,
      features: [
        "1,000 contact searches/month",
        "Basic email verification",
        "CRM export (CSV)",
        "Email support",
        "Basic analytics",
        "Chrome extension"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing sales teams",
      icon: Star,
      features: [
        "5,000 contact searches/month",
        "Advanced email & phone verification",
        "All CRM integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API access",
        "Custom enrichment fields"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with custom needs",
      icon: Crown,
      features: [
        "Unlimited contact searches",
        "Real-time verification API",
        "Custom integrations",
        "Dedicated account manager",
        "Custom analytics dashboard",
        "Advanced team management",
        "White-label options",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/enterprise",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ai-light mb-6">
            Simple, Transparent
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-ai-light/80 max-w-3xl mx-auto">
            Choose the perfect plan for your prospecting needs. All plans include our AI-powered search technology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-card/50 backdrop-blur-sm rounded-xl p-8 border transition-smooth h-full ${
                plan.popular 
                  ? 'border-ai-purple shadow-glow' 
                  : 'border-ai-purple/20 hover:border-ai-purple/40'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-black' : 'text-ai-purple'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-ai-light mb-2">{plan.name}</h3>
                  <p className="text-ai-light/70 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-ai-light">{plan.price}</span>
                    <span className="text-ai-light/70 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-ai-light/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    variant={plan.popular ? "cta" : "ctaSecondary"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-gradient-secondary rounded-xl p-8 border border-ai-purple/20 text-center">
          <h3 className="text-2xl font-bold text-ai-light mb-4">Calculate Your ROI</h3>
          <p className="text-ai-light/80 mb-6 max-w-2xl mx-auto">
            See how much time and money AI Hunter can save your sales team compared to traditional prospecting methods.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://salescentri.com/roi-calculator" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">ROI Calculator</Button>
            </a>
            <a href="https://salescentri.com/pricing" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary" size="lg">View All Plans</Button>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-ai-light mb-6">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-ai-light mb-2">Can I upgrade or downgrade anytime?</h4>
              <p className="text-ai-light/70">Yes, you can change your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-ai-light mb-2">Is there a free trial?</h4>
              <p className="text-ai-light/70">Yes, all plans include a 14-day free trial with full access to features.</p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-ai-light mb-2">What payment methods do you accept?</h4>
              <p className="text-ai-light/70">We accept all major credit cards and offer annual billing discounts.</p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-ai-light mb-2">Do you offer refunds?</h4>
              <p className="text-ai-light/70">Yes, we offer a 30-day money-back guarantee if you're not satisfied.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;