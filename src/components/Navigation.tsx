import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Bot } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled ? 'bg-ai-dark/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-ai-light">Stanfordangelsllc</h1>
              <p className="text-xs text-ai-blue">AI Hunter Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-ai-light hover:text-ai-blue transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://salescentri.com/demo" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary" size="sm">Book Demo</Button>
            </a>
            <a href="https://salescentri.com/trial" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="sm">Start Free Trial</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ai-light hover:text-ai-blue transition-smooth"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-ai-dark/95 backdrop-blur-md border-t border-ai-purple/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-ai-light hover:text-ai-blue transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a href="https://salescentri.com/demo" target="_blank" rel="noopener noreferrer">
                  <Button variant="ctaSecondary" size="sm" className="w-full">Book Demo</Button>
                </a>
                <a href="https://salescentri.com/trial" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="sm" className="w-full">Start Free Trial</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;