
import React from 'react';
import { Brain, Code, Database, Shield, Cpu, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms to transform your data into actionable insights and automated decision-making systems."
    },
    {
      icon: Code,
      title: "Custom AI Development", 
      description: "Tailored artificial intelligence solutions designed specifically for your business needs and objectives."
    },
    {
      icon: Database,
      title: "Data Analytics Platform",
      description: "Comprehensive data processing and analysis tools to unlock the hidden potential in your business data."
    },
    {
      icon: Shield,
      title: "AI Security & Ethics",
      description: "Robust security frameworks and ethical AI practices to ensure responsible technology deployment."
    },
    {
      icon: Cpu,
      title: "Neural Networks",
      description: "Deep learning architectures that can recognize patterns, make predictions, and automate complex tasks."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations and increase efficiency across your organization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive AI solutions that drive innovation and transform businesses 
            across industries with cutting-edge technology.
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
