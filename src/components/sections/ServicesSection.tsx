import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import { Bot, Globe, MessageSquare, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      titleRu: 'AI-агенты',
      titleUz: 'AI-agentlar',
      items: [
        { ru: 'Автоматизация продаж и поддержки', uz: 'Savdo va qo\'llab-quvvatlashni avtomatlashtirish' },
        { ru: 'Интеграции с CRM и мессенджерами', uz: 'CRM va messenjerlar bilan integratsiya' },
        { ru: 'Кастомные решения под задачи', uz: 'Vazifalar uchun maxsus yechimlar' },
      ],
    },
    {
      icon: Globe,
      titleRu: 'Сайты и платформы',
      titleUz: 'Saytlar va platformalar',
      items: [
        { ru: 'Корпоративные сайты и лендинги', uz: 'Korporativ saytlar va lendinglar' },
        { ru: 'Веб-сервисы и админ-панели', uz: 'Web-servislar va admin-panellar' },
        { ru: 'UI/UX дизайн', uz: 'UI/UX dizayn' },
      ],
    },
    {
      icon: Smartphone,
      titleRu: 'Приложения',
      titleUz: 'Ilovalar',
      items: [
        { ru: 'iOS и Android', uz: 'iOS va Android' },
        { ru: 'Кроссплатформенные решения', uz: 'Kross-platforma yechimlari' },
        { ru: 'Поддержка и развитие', uz: "Qo'llab-quvvatlash va rivojlantirish" },
      ],
    },
    {
      icon: MessageSquare,
      titleRu: 'Telegram-боты',
      titleUz: 'Telegram-botlar',
      items: [
        { ru: 'Боты для бизнес-процессов', uz: 'Biznes jarayonlari uchun botlar' },
        { ru: 'Интеграции с внешними сервисами', uz: 'Tashqi xizmatlar bilan integratsiya' },
        { ru: 'Миниаппы', uz: 'Mini ilovalar' },
        { ru: 'Уведомления и автоматизация', uz: 'Bildirishnomalar va avtomatlashtirish' },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="up">
          <div className="mb-16 lg:mb-20 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t('Что мы делаем', 'Biz nima qilamiz')}
            </span>
            <h2 className="heading-section">
              {t('Наши услуги', 'Bizning xizmatlarimiz')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
              delay={index * 0.15}
            >
              <div className="group h-full p-8 lg:p-10 border border-border bg-card transition-all duration-500 hover:border-muted-foreground">
                <service.icon className="w-10 h-10 mb-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-6">
                  {t(service.titleRu, service.titleUz)}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-muted-foreground mt-2 flex-shrink-0" />
                      {t(item.ru, item.uz)}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
