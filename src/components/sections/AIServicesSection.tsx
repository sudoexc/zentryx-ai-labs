import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import { Bot, Workflow, LayoutDashboard, Link2, Cpu } from 'lucide-react';

const AIServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      titleRu: 'AI-ассистенты для продаж и поддержки клиентов',
      titleUz: "Savdo va mijozlar bilan ishlash uchun AI-assistentlar",
    },
    {
      icon: Workflow,
      titleRu: 'Автоматизация внутренних процессов',
      titleUz: 'Ichki jarayonlarni avtomatlashtirish',
    },
    {
      icon: LayoutDashboard,
      titleRu: 'Интеллектуальные админ-панели',
      titleUz: 'Aqlli admin-panellar',
    },
    {
      icon: Link2,
      titleRu: 'AI-интеграции с CRM, Telegram, веб-сервисами',
      titleUz: 'CRM, Telegram va web-servislar bilan AI-integratsiyalar',
    },
    {
      icon: Cpu,
      titleRu: 'Кастомные агенты под задачи компании',
      titleUz: 'Kompaniya vazifalariga mos maxsus agentlar',
    },
  ];

  return (
    <section id="services" className="section-padding bg-card border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="up">
          <div className="mb-16 lg:mb-20">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t('Основная услуга', "Asosiy xizmat")}
            </span>
            <h2 className="heading-section max-w-3xl">
              {t('AI-агенты для бизнеса', 'Biznes uchun AI-agentlar')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <div className="group p-8 lg:p-10 border border-border bg-background transition-all duration-500 hover:border-muted-foreground">
                <service.icon className="w-8 h-8 mb-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="heading-subsection">
                  {t(service.titleRu, service.titleUz)}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
