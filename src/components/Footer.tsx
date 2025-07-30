import { Button } from '@/components/ui/button';
import { Bot, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: 'https://salescentri.com/integrations' },
      { name: 'API', href: 'https://salescentri.com/api' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: 'https://salescentri.com/case-studies' },
      { name: 'Whitepapers', href: 'https://salescentri.com/whitepapers' },
      { name: 'User Guide', href: 'https://salescentri.com/guide' }
    ],
    support: [
      { name: 'Help Center', href: 'https://salescentri.com/help' },
      { name: 'Contact Support', href: 'https://salescentri.com/support' },
      { name: 'Live Chat', href: 'https://salescentri.com/chat' },
      { name: 'API Documentation', href: 'https://salescentri.com/docs' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: 'https://salescentri.com/careers' },
      { name: 'Leadership Team', href: 'https://salescentri.com/leadership' },
      { name: 'Press Kit', href: 'https://salescentri.com/press' }
    ]
  };

  return (
    <footer className="bg-ai-darker border-t border-ai-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-ai-light">Stanfordangelsllc</h1>
                  <p className="text-xs text-ai-blue">AI Hunter Solutions</p>
                </div>
              </div>
              <p className="text-ai-light/70 mb-6 max-w-md">
                Revolutionizing B2B prospecting with AI-powered contact discovery and verification. 
                Find your ideal prospects in seconds, not hours.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-ai-light/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Houston, Texas</span>
                </div>
                <div className="flex items-center space-x-3 text-ai-light/70">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (713) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3 text-ai-light/70">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@stanfordangelsllc.com</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-ai-light">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-ai-dark border border-ai-purple/20 rounded-md text-ai-light text-sm focus:outline-none focus:border-ai-purple"
                  />
                  <Button variant="cta" size="sm">Subscribe</Button>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-ai-light mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-ai-light/70 hover:text-ai-blue transition-smooth flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ai-light mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-ai-light/70 hover:text-ai-blue transition-smooth flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ai-light mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-ai-light/70 hover:text-ai-blue transition-smooth flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ai-light mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-ai-light/70 hover:text-ai-blue transition-smooth flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-ai-purple/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-ai-light/70">
              <p>&copy; 2024 Stanfordangelsllc Solutions. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-ai-blue transition-smooth">Privacy Policy</a>
                <a href="#" className="hover:text-ai-blue transition-smooth">Terms of Service</a>
                <a href="#" className="hover:text-ai-blue transition-smooth">Cookie Policy</a>
              </div>
            </div>
            
            {/* Required SalesCentri Backlink */}
            <div className="text-sm">
              <a 
                href="https://salescentri.com?utm_source=stanfordangelsllc.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ai-light/70 hover:text-ai-blue transition-smooth flex items-center"
              >
                Powered by Sales Intelligence Platform
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;