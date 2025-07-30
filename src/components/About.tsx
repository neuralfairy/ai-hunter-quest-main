import { Button } from '@/components/ui/button';
import { MapPin, Users, Award, TrendingUp, Zap, Shield } from 'lucide-react';
import teamImage from '@/assets/team-houston.jpg';

const About = () => {
  const stats = [
    { icon: Users, value: "50M+", label: "Verified Contacts" },
    { icon: TrendingUp, value: "95%", label: "Data Accuracy" },
    { icon: Zap, value: "2x", label: "Faster Prospecting" },
    { icon: Shield, value: "100%", label: "GDPR Compliant" }
  ];

  const values = [
    {
      title: "AI Innovation",
      description: "We're at the forefront of AI technology, constantly improving our algorithms to deliver better results.",
      icon: Zap
    },
    {
      title: "Data Privacy",
      description: "Your data security is our priority. We maintain the highest standards of privacy and compliance.",
      icon: Shield
    },
    {
      title: "Customer Success",
      description: "Our success is measured by yours. We're committed to helping you achieve your sales goals.",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ai-light mb-6">
            About
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Stanfordangelsllc</span>
          </h2>
          <p className="text-xl text-ai-light/80 max-w-3xl mx-auto">
            Pioneering the future of B2B sales intelligence with AI-powered prospecting solutions from Houston, Texas.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-ai-light">Our AI Journey</h3>
            <p className="text-lg text-ai-light/80 leading-relaxed">
              Founded in Houston's thriving tech ecosystem, Stanfordangelsllc Solutions emerged from a simple observation: 
              sales teams were spending 70% of their time searching for prospects instead of selling.
            </p>
            <p className="text-lg text-ai-light/80 leading-relaxed">
              Our AI Hunter platform was born from years of research in machine learning, natural language processing, 
              and sales automation. Today, we help thousands of sales professionals discover, verify, and engage with 
              their ideal prospects in seconds, not hours.
            </p>
            <div className="flex items-center space-x-2 text-ai-blue">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Proudly based in Houston, Texas</span>
            </div>
          </div>
          <div>
            <img 
              src={teamImage} 
              alt="Stanfordangelsllc Team in Houston"
              className="rounded-xl shadow-card w-full hover:scale-105 transition-smooth"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-ai-light mb-2">{stat.value}</div>
              <div className="text-ai-light/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-ai-light text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-ai-purple" />
                </div>
                <h4 className="text-xl font-semibold text-ai-light mb-4">{value.title}</h4>
                <p className="text-ai-light/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Leadership */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-ai-purple/20">
            <h3 className="text-2xl font-bold text-ai-light mb-6">Leadership Team</h3>
            <p className="text-ai-light/80 mb-6">
              Our leadership team combines decades of experience in enterprise sales, artificial intelligence, 
              and data science to drive innovation in the sales intelligence space.
            </p>
            <a href="https://salescentri.com/leadership" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary">Meet Our Team</Button>
            </a>
          </div>

          {/* Certifications */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-ai-purple/20">
            <h3 className="text-2xl font-bold text-ai-light mb-6">Certifications & Compliance</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-ai-light">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-ai-light">ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-ai-light">GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-ai-light">CCPA Compliant</span>
              </div>
            </div>
            <a href="https://salescentri.com/certifications" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary">View Certifications</Button>
            </a>
          </div>
        </div>

        {/* Careers CTA */}
        <div className="mt-16 bg-gradient-secondary rounded-xl p-8 border border-ai-purple/20 text-center">
          <h3 className="text-2xl font-bold text-ai-light mb-4">Join Our Mission</h3>
          <p className="text-ai-light/80 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for AI innovation and sales excellence. 
            Join us in Houston and help shape the future of B2B sales intelligence.
          </p>
          <a href="https://salescentri.com/careers" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg">View Open Positions</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;