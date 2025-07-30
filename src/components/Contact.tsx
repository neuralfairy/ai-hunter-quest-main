import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Headphones, Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Houston Office",
      details: ["1234 Innovation Drive", "Houston, TX 77002", "United States"],
      link: "https://salescentri.com/contact"
    },
    {
      icon: Phone,
      title: "Sales Inquiries",
      details: ["+1 (713) 555-0123", "Available 9 AM - 6 PM CST", "Monday - Friday"],
      link: "https://salescentri.com/sales"
    },
    {
      icon: Mail,
      title: "Support Email",
      details: ["support@stanfordangelsllc.com", "24/7 Response Time", "Enterprise Priority Support"],
      link: "https://salescentri.com/support"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'sales', label: 'Sales Demo', icon: Phone },
    { value: 'support', label: 'Technical Support', icon: Headphones },
    { value: 'partnership', label: 'Partnership', icon: Handshake }
  ];

  return (
    <section id="contact" className="py-20 bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ai-light mb-6">
            Get In
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-ai-light/80 max-w-3xl mx-auto">
            Ready to transform your prospecting with AI Hunter? Let's discuss how we can accelerate your sales pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-ai-purple/20">
            <h3 className="text-2xl font-bold text-ai-light mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-ai-light mb-3">Inquiry Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {inquiryTypes.map((type) => (
                    <label key={type.value} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type.value}
                        checked={formData.inquiryType === type.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-3 rounded-lg border transition-smooth text-center ${
                        formData.inquiryType === type.value 
                          ? 'border-ai-purple bg-gradient-secondary' 
                          : 'border-ai-purple/20 hover:border-ai-purple/40'
                      }`}>
                        <type.icon className="w-5 h-5 mx-auto mb-1 text-ai-purple" />
                        <span className="text-sm text-ai-light">{type.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ai-light mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-ai-darker border-ai-purple/20 text-ai-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ai-light mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-ai-darker border-ai-purple/20 text-ai-light"
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ai-light mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-ai-darker border-ai-purple/20 text-ai-light"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ai-light mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-ai-darker border-ai-purple/20 text-ai-light"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ai-light mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-ai-darker border-ai-purple/20 text-ai-light"
                  placeholder="Tell us about your prospecting challenges and how AI Hunter can help..."
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-ai-light mb-6">Contact Information</h3>
              <p className="text-ai-light/80 mb-8">
                Choose the best way to reach us. Our team is ready to help you discover the power of AI-driven prospecting.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ai-light mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-ai-light/70 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-secondary rounded-xl p-6 border border-ai-purple/20">
              <h4 className="text-lg font-semibold text-ai-light mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a href="https://salescentri.com/demo" target="_blank" rel="noopener noreferrer">
                  <Button variant="ctaSecondary" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Demo Call
                  </Button>
                </a>
                <a href="https://salescentri.com/support" target="_blank" rel="noopener noreferrer">
                  <Button variant="ctaSecondary" size="sm" className="w-full justify-start">
                    <Headphones className="w-4 h-4 mr-2" />
                    Technical Support
                  </Button>
                </a>
                <a href="https://salescentri.com/partnerships" target="_blank" rel="noopener noreferrer">
                  <Button variant="ctaSecondary" size="sm" className="w-full justify-start">
                    <Handshake className="w-4 h-4 mr-2" />
                    Partnership Inquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;