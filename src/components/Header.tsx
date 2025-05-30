
import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-aos="fade-right" data-aos-delay="100">
            <div className="relative">
              <Brain className="h-8 w-8 text-accent animate-pulse-slow" />
              <div className="absolute inset-0 h-8 w-8 bg-accent rounded-full blur-md opacity-30 animate-glow"></div>
            </div>
            <span className="text-xl font-bold text-white">NeuralTech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-aos="fade-down" data-aos-delay="200">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-accent transition-colors duration-300 relative group"
                data-aos="fade-down"
                data-aos-delay={300 + index * 100}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block" data-aos="fade-left" data-aos-delay="300">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/90 rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
