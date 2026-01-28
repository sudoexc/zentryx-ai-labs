import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const AdditionalServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleRu: 'Корпоративные сайты и лендинги',
      titleUz: 'Korporativ saytlar va lendinglar',
    },
    {
      titleRu: 'Веб-сервисы и платформы',
      titleUz: 'Web-servislar va platformalar',
    },
    {
      titleRu: 'Telegram-боты',
      titleUz: 'Telegram-botlar',
    },
    {
      titleRu: 'UI/UX дизайн',
      titleUz: 'UI/UX dizayn',
    },
    {
      titleRu: 'API и системные интеграции',
      titleUz: 'API va tizim integratsiyalari',
    },
  ];

  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <AnimatedSection direction="left">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t('Дополнительно', "Qo'shimcha")}
            </span>
            <h2 className="heading-section">
              {t('Дополнительные услуги', "Qo'shimcha xizmatlar")}
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  <span className="w-2 h-2 bg-foreground flex-shrink-0" />
                  {t(service.titleRu, service.titleUz)}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
