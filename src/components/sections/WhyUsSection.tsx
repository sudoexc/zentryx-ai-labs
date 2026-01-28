import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      titleRu: 'Фокус на AI и результат',
      titleUz: "AI va natijaga yo'naltirilgan yondashuv",
    },
    {
      titleRu: 'Продуктовый подход',
      titleUz: 'Mahsulot fikrlashi',
    },
    {
      titleRu: 'Чёткая логика и архитектура',
      titleUz: 'Aniq arxitektura va mantiq',
    },
    {
      titleRu: 'Понимание бизнеса',
      titleUz: 'Biznesni tushunish',
    },
    {
      titleRu: 'Минимум слов — максимум смысла',
      titleUz: "Kam so'z, ko'p mazmun",
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
              {t('Почему выбирают ZENTRYX', 'Nega ZENTRYX tanlanadi')}
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
