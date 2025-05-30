
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const translations = {
    pt: {
      // Header
      'nav.home': 'Início',
      'nav.services': 'Serviços',
      'nav.solutions': 'Soluções',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'nav.getStarted': 'Começar',
      
      // Hero
      'hero.title': 'Futuro da',
      'hero.titleHighlight': 'Inovação em IA',
      'hero.subtitle': 'Somos mais que parceiros tecnológicos. Somos seus aliados estratégicos em transformação digital e soluções de IA de ponta.',
      'hero.startJourney': 'Comece sua Jornada',
      'hero.learnMore': 'Saiba Mais',
      'hero.projects': 'Projetos Entregues',
      'hero.satisfaction': 'Satisfação do Cliente',
      'hero.support': 'Suporte Disponível',
      
      // Services
      'services.title': 'O que',
      'services.titleHighlight': 'Entregamos',
      'services.subtitle': 'Soluções abrangentes de IA que impulsionam a inovação e transformam negócios em todos os setores com tecnologia de ponta.',
      'services.ml.title': 'Soluções de Machine Learning',
      'services.ml.description': 'Algoritmos de ML avançados para transformar seus dados em insights acionáveis e sistemas de tomada de decisão automatizados.',
      'services.ai.title': 'Desenvolvimento de IA Personalizada',
      'services.ai.description': 'Soluções de inteligência artificial sob medida, projetadas especificamente para suas necessidades e objetivos de negócio.',
      'services.data.title': 'Plataforma de Análise de Dados',
      'services.data.description': 'Ferramentas abrangentes de processamento e análise de dados para desbloquear o potencial oculto nos dados do seu negócio.',
      'services.security.title': 'Segurança e Ética em IA',
      'services.security.description': 'Estruturas de segurança robustas e práticas éticas de IA para garantir implantação responsável da tecnologia.',
      'services.neural.title': 'Redes Neurais',
      'services.neural.description': 'Arquiteturas de deep learning que podem reconhecer padrões, fazer previsões e automatizar tarefas complexas.',
      'services.automation.title': 'Automação de Processos',
      'services.automation.description': 'Soluções de automação inteligente que otimizam operações e aumentam a eficiência em toda sua organização.',
      
      // Solutions
      'solutions.title': 'Inovação em',
      'solutions.titleHighlight': 'Cada Passo',
      'solutions.subtitle': 'Descubra soluções de IA de ponta que transformam como os negócios operam. Nossa abordagem inovadora combina tecnologia avançada com implementação prática para entregar resultados mensuráveis.',
      'solutions.development.title': 'Desenvolvimento End-to-End',
      'solutions.development.description': 'Gerenciamento completo do ciclo de vida do projeto, desde a concepção até a implantação, com suporte e manutenção contínuos.',
      'solutions.chatbot.title': 'Integração de Chatbot IA',
      'solutions.chatbot.description': 'IA conversacional inteligente que fornece suporte ao cliente 24/7 com processamento avançado de linguagem natural.',
      'solutions.business.title': 'Inteligência de Negócios',
      'solutions.business.description': 'Sistemas avançados de análise e relatórios que fornecem insights em tempo real para tomada de decisões baseadas em dados.',
      'solutions.scalability.title': 'Escalabilidade Global',
      'solutions.scalability.description': 'Soluções nativas da nuvem projetadas para escalar globalmente com segurança e desempenho de nível empresarial.',
      'solutions.dashboard': 'Painel de IA',
      'solutions.accuracy': 'Precisão do Modelo',
      'solutions.speed': 'Velocidade de Processamento',
      'solutions.uptime': 'Tempo de Atividade',
      'solutions.analysis': 'Análise em Tempo Real',
      'solutions.processing': 'Processando 1,2M pontos de dados por segundo...',
      'solutions.active': 'Ativo',
      
      // Stats
      'stats.title': 'Resultados que',
      'stats.titleHighlight': 'Importam',
      'stats.subtitle': 'Nosso compromisso com a excelência se reflete no impacto mensurável que entregamos para negócios em todo o mundo.',
      'stats.performance': 'Melhoria de Desempenho',
      'stats.performanceDesc': 'Ganho médio de eficiência',
      'stats.clients': 'Clientes Globais',
      'stats.clientsDesc': 'Confiança mundial',
      'stats.success': 'Taxa de Sucesso',
      'stats.successDesc': 'Conclusão de projetos',
      'stats.supportTitle': 'Suporte Disponível',
      'stats.supportDesc': 'Assistência 24 horas',
      'stats.cta.title': 'Pronto para Transformar seu Negócio?',
      'stats.cta.subtitle': 'Junte-se a centenas de empresas que já revolucionaram suas operações com nossas soluções de IA.',
      'stats.cta.button': 'Comece sua Jornada Hoje',
      
      // Contact
      'contact.title': 'Vamos',
      'contact.titleHighlight': 'Conversar',
      'contact.subtitle': 'Pronto para transformar seu negócio com IA? Entre em contato conosco e descubra como podemos ajudar.',
      'contact.name': 'Nome',
      'contact.email': 'Email',
      'contact.company': 'Empresa',
      'contact.message': 'Mensagem',
      'contact.send': 'Enviar Mensagem',
      'contact.info.title': 'Informações de Contato',
      'contact.info.subtitle': 'Nossa equipe está pronta para ajudar você a dar o próximo passo na transformação digital.',
      
      // Footer
      'footer.description': 'Pioneiros no futuro da inteligência artificial com soluções inovadoras que transformam negócios e impulsionam a evolução digital.',
      'footer.company': 'Empresa',
      'footer.aboutUs': 'Sobre Nós',
      'footer.team': 'Nossa Equipe',
      'footer.careers': 'Carreiras',
      'footer.services': 'Serviços',
      'footer.aiDevelopment': 'Desenvolvimento de IA',
      'footer.machineLearning': 'Machine Learning',
      'footer.dataAnalytics': 'Análise de Dados',
      'footer.consulting': 'Consultoria',
      'footer.resources': 'Recursos',
      'footer.documentation': 'Documentação',
      'footer.caseStudies': 'Casos de Estudo',
      'footer.blog': 'Blog',
      'footer.supportFooter': 'Suporte',
      'footer.copyright': 'NeuralTech. Todos os direitos reservados. Construindo o futuro com IA.'
    },
    en: {
      // Header
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.solutions': 'Solutions',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.getStarted': 'Get Started',
      
      // Hero
      'hero.title': 'Future of',
      'hero.titleHighlight': 'AI Innovation',
      'hero.subtitle': 'We are more than technology partners. We are your strategic allies in digital transformation and cutting-edge AI solutions.',
      'hero.startJourney': 'Start Your Journey',
      'hero.learnMore': 'Learn More',
      'hero.projects': 'Projects Delivered',
      'hero.satisfaction': 'Client Satisfaction',
      'hero.support': 'Support Available',
      
      // Services
      'services.title': 'What We',
      'services.titleHighlight': 'Deliver',
      'services.subtitle': 'Comprehensive AI solutions that drive innovation and transform businesses across industries with cutting-edge technology.',
      'services.ml.title': 'Machine Learning Solutions',
      'services.ml.description': 'Advanced ML algorithms to transform your data into actionable insights and automated decision-making systems.',
      'services.ai.title': 'Custom AI Development',
      'services.ai.description': 'Tailored artificial intelligence solutions designed specifically for your business needs and objectives.',
      'services.data.title': 'Data Analytics Platform',
      'services.data.description': 'Comprehensive data processing and analysis tools to unlock the hidden potential in your business data.',
      'services.security.title': 'AI Security & Ethics',
      'services.security.description': 'Robust security frameworks and ethical AI practices to ensure responsible technology deployment.',
      'services.neural.title': 'Neural Networks',
      'services.neural.description': 'Deep learning architectures that can recognize patterns, make predictions, and automate complex tasks.',
      'services.automation.title': 'Process Automation',
      'services.automation.description': 'Intelligent automation solutions that streamline operations and increase efficiency across your organization.',
      
      // Solutions
      'solutions.title': 'Innovation at',
      'solutions.titleHighlight': 'Every Step',
      'solutions.subtitle': 'Discover cutting-edge AI solutions that transform how businesses operate. Our innovative approach combines advanced technology with practical implementation to deliver measurable results.',
      'solutions.development.title': 'End-to-End Development',
      'solutions.development.description': 'Complete project lifecycle management from conception to deployment with ongoing support and maintenance.',
      'solutions.chatbot.title': 'AI Chatbot Integration',
      'solutions.chatbot.description': 'Intelligent conversational AI that provides 24/7 customer support with advanced natural language processing.',
      'solutions.business.title': 'Business Intelligence',
      'solutions.business.description': 'Advanced analytics and reporting systems that provide real-time insights for data-driven decision making.',
      'solutions.scalability.title': 'Global Scalability',
      'solutions.scalability.description': 'Cloud-native solutions designed to scale globally with enterprise-grade security and performance.',
      'solutions.dashboard': 'AI Dashboard',
      'solutions.accuracy': 'Model Accuracy',
      'solutions.speed': 'Processing Speed',
      'solutions.uptime': 'Uptime',
      'solutions.analysis': 'Real-time Analysis',
      'solutions.processing': 'Processing 1.2M data points per second...',
      'solutions.active': 'Active',
      
      // Stats
      'stats.title': 'Results That',
      'stats.titleHighlight': 'Matter',
      'stats.subtitle': 'Our commitment to excellence is reflected in the measurable impact we deliver to businesses across the globe.',
      'stats.performance': 'Performance Improvement',
      'stats.performanceDesc': 'Average efficiency gain',
      'stats.clients': 'Global Clients',
      'stats.clientsDesc': 'Trusted worldwide',
      'stats.success': 'Success Rate',
      'stats.successDesc': 'Project completion',
      'stats.supportTitle': 'Support Available',
      'stats.supportDesc': 'Round-the-clock assistance',
      'stats.cta.title': 'Ready to Transform Your Business?',
      'stats.cta.subtitle': 'Join hundreds of companies that have already revolutionized their operations with our AI solutions.',
      'stats.cta.button': 'Start Your Journey Today',
      
      // Contact
      'contact.title': "Let's",
      'contact.titleHighlight': 'Talk',
      'contact.subtitle': 'Ready to transform your business with AI? Get in touch with us and discover how we can help.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.company': 'Company',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.info.title': 'Contact Information',
      'contact.info.subtitle': 'Our team is ready to help you take the next step in digital transformation.',
      
      // Footer
      'footer.description': 'Pioneering the future of artificial intelligence with innovative solutions that transform businesses and drive digital evolution.',
      'footer.company': 'Company',
      'footer.aboutUs': 'About Us',
      'footer.team': 'Our Team',
      'footer.careers': 'Careers',
      'footer.services': 'Services',
      'footer.aiDevelopment': 'AI Development',
      'footer.machineLearning': 'Machine Learning',
      'footer.dataAnalytics': 'Data Analytics',
      'footer.consulting': 'Consulting',
      'footer.resources': 'Resources',
      'footer.documentation': 'Documentation',
      'footer.caseStudies': 'Case Studies',
      'footer.blog': 'Blog',
      'footer.supportFooter': 'Support',
      'footer.copyright': 'NeuralTech. All rights reserved. Building the future with AI.'
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
