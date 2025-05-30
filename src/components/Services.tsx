
import React from 'react';
import { Brain, Code, Database, Shield, Cpu, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t('services.ml.title'),
      description: t('services.ml.description')
    },
    {
      icon: Code,
      title: t('services.ai.title'), 
      description: t('services.ai.description')
    },
    {
      icon: Database,
      title: t('services.data.title'),
      description: t('services.data.description')
    },
    {
      icon: Shield,
      title: t('services.security.title'),
      description: t('services.security.description')
    },
    {
      icon: Cpu,
      title: t('services.neural.title'),
      description: t('services.neural.description')
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-accent/10 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
