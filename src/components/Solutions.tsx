
import React from 'react';
import { Monitor, MessageSquare, BarChart3, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Monitor,
      title: t('solutions.development.title'),
      description: t('solutions.development.description')
    },
    {
      icon: MessageSquare,
      title: t('solutions.chatbot.title'),
      description: t('solutions.chatbot.description')
    },
    {
      icon: BarChart3,
      title: t('solutions.business.title'),
      description: t('solutions.business.description')
    },
    {
      icon: Globe,
      title: t('solutions.scalability.title'),
      description: t('solutions.scalability.description')
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-primary-light to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {t('solutions.title')}
                <span className="text-gradient block">{t('solutions.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('solutions.subtitle')}
              </p>
            </div>

            {/* Feature Showcase */}
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <solution.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="relative">
            <div className="glass-effect p-8 rounded-2xl">
              {/* Mock Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{t('solutions.dashboard')}</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="h-px bg-white/20"></div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100 text-sm">{t('solutions.accuracy')}</span>
                    <span className="text-accent font-bold">98.7%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[98.7%] animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100 text-sm">{t('solutions.speed')}</span>
                    <span className="text-accent font-bold">2.3ms</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[85%] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100 text-sm">{t('solutions.uptime')}</span>
                    <span className="text-accent font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[99.9%] animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <div className="text-white text-sm font-medium mb-2">{t('solutions.analysis')}</div>
                  <div className="text-blue-100 text-xs">
                    {t('solutions.processing')}
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
                    <span className="text-accent text-xs">{t('solutions.active')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
