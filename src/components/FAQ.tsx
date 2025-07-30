import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, FileText, Headphones } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "What is AI Hunter and how does it work?",
      answer: "AI Hunter is our flagship AI-powered contact discovery and verification platform. It uses advanced machine learning algorithms to search across 50+ million verified contacts, automatically verify email addresses and phone numbers with 95% accuracy, and enrich contact profiles with social media and company data. The AI understands your ideal customer profile and finds prospects that match your specific criteria."
    },
    {
      question: "How accurate is your contact verification?",
      answer: "Our real-time verification system achieves 95% accuracy for email addresses and 90% accuracy for phone numbers. We use multiple verification methods including SMTP checking, social media cross-referencing, and proprietary AI algorithms that detect patterns in contact behavior. All data is verified in real-time to ensure maximum deliverability."
    },
    {
      question: "What CRM systems does AI Hunter integrate with?",
      answer: "AI Hunter integrates with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and 20+ other systems. We also provide CSV export, API access, and custom integrations for enterprise clients. Our Chrome extension works seamlessly with LinkedIn and other social platforms."
    },
    {
      question: "Is AI Hunter GDPR and CCPA compliant?",
      answer: "Yes, we are fully compliant with GDPR, CCPA, SOC 2, and ISO 27001 standards. All our data sources are opt-in based, and we provide easy opt-out mechanisms. We maintain comprehensive audit logs, implement data minimization principles, and offer data deletion upon request. Our privacy-first approach ensures your prospecting activities meet all regulatory requirements."
    },
    {
      question: "How does pricing work and can I upgrade anytime?",
      answer: "We offer three main plans: Starter ($49/month), Professional ($99/month), and Enterprise (custom pricing). All plans include a 14-day free trial with full feature access. You can upgrade, downgrade, or cancel anytime with no long-term contracts. Enterprise plans include custom features, dedicated support, and volume discounts."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including 24/7 email support for all plans, priority support for Professional and Enterprise users, live chat during business hours, extensive documentation and tutorials, video onboarding sessions, and dedicated account managers for Enterprise clients. Our average response time is under 2 hours."
    },
    {
      question: "Can I try AI Hunter before purchasing?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features, no credit card required. You can search up to 500 contacts during the trial period and experience our verification and enrichment capabilities. We also provide live demos where our team can show you the platform and answer specific questions about your use case."
    },
    {
      question: "How does AI Hunter compare to other prospecting tools?",
      answer: "AI Hunter stands out with 95% data accuracy (industry average is 70%), real-time verification, advanced AI filtering, comprehensive data enrichment, and seamless CRM integrations. Unlike basic lead databases, our AI learns your preferences and improves recommendations over time. We also offer transparent pricing, extensive compliance features, and Houston-based customer support."
    }
  ];

  const supportOptions = [
    {
      title: "User Guide",
      description: "Comprehensive documentation and tutorials",
      icon: FileText,
      link: "https://salescentri.com/guide"
    },
    {
      title: "API Reference",
      description: "Technical documentation for developers",
      icon: HelpCircle,
      link: "https://salescentri.com/api-docs"
    },
    {
      title: "Submit Ticket",
      description: "Get help from our support team",
      icon: Headphones,
      link: "https://salescentri.com/support"
    },
    {
      title: "Live Chat",
      description: "Chat with our team in real-time",
      icon: MessageCircle,
      link: "https://salescentri.com/chat"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-ai-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ai-light mb-6">
            Frequently Asked
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-ai-light/80 max-w-3xl mx-auto">
            Get answers to common questions about AI Hunter, our features, pricing, and how we can help transform your prospecting.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-ai-light hover:text-ai-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ai-light/80 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-ai-light text-center mb-8">Need More Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth text-center hover:shadow-glow">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <option.icon className="w-6 h-6 text-ai-purple" />
                  </div>
                  <h4 className="text-lg font-semibold text-ai-light mb-2">{option.title}</h4>
                  <p className="text-sm text-ai-light/70">{option.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-secondary rounded-xl p-8 border border-ai-purple/20 text-center">
          <h3 className="text-2xl font-bold text-ai-light mb-4">Still Have Questions?</h3>
          <p className="text-ai-light/80 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Schedule a personalized demo or reach out to our support team for any questions about AI Hunter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://salescentri.com/demo" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">Schedule Demo</Button>
            </a>
            <a href="https://salescentri.com/support" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary" size="lg">Contact Support</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;