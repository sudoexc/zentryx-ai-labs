import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      titleRu: 'Системный подход к AI',
      titleUz: "AI'ga tizimli yondashuv",
    },
    {
      titleRu: 'Единая логика и архитектура',
      titleUz: 'Yagona mantiq va arxitektura',
    },
    {
      titleRu: 'Интеграции в единую систему',
      titleUz: 'Yagona tizimga integratsiyalar',
    },
    {
      titleRu: 'Прозрачные процессы и контроль',
      titleUz: 'Shaffof jarayonlar va nazorat',
    },
    {
      titleRu: 'Поддержка и развитие системы',
      titleUz: "tizimni qo'llab-quvvatlash va rivojlantirish",
    },
  ];

  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t('Преимущества', 'Afzalliklar')}
            </span>
            <h2 className="heading-section">
              {t('Почему выбирают Tizim Agency', 'Nega Tizim Agency tanlanadi')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.1}
            >
              <div className="text-center">
                <span className="inline-block text-5xl font-bold text-muted-foreground/30 mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-medium">
                  {t(reason.titleRu, reason.titleUz)}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
