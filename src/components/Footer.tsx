
import React from 'react';
import { Brain, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    company: [
      { name: t('footer.aboutUs'), href: '#about' },
      { name: t('footer.team'), href: '#team' },
      { name: t('footer.careers'), href: '#careers' },
      { name: t('nav.contact'), href: '#contact' }
    ],
    services: [
      { name: t('footer.aiDevelopment'), href: '#services' },
      { name: t('footer.machineLearning'), href: '#services' },
      { name: t('footer.dataAnalytics'), href: '#services' },
      { name: t('footer.consulting'), href: '#services' }
    ],
    resources: [
      { name: t('footer.documentation'), href: '#docs' },
      { name: t('footer.caseStudies'), href: '#cases' },
      { name: t('footer.blog'), href: '#blog' },
      { name: t('footer.supportFooter'), href: '#support' }
    ]
  };

  return (
    <footer className="bg-primary-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-accent/10"></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-accent animate-pulse-slow" />
                <div className="absolute inset-0 h-8 w-8 bg-accent rounded-full blur-md opacity-30 animate-glow"></div>
              </div>
              <span className="text-xl font-bold text-white">NeuralTech</span>
            </div>
            
            <p className="text-blue-100 leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">hello@neuraltech.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-blue-100 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-white font-semibold mb-4">{t('nav.services')}</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-blue-100 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-blue-100 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm">
              © {currentYear} {t('footer.copyright')}
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-blue-100 hover:text-accent transition-colors"
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={600 + index * 100}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
