import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      numRu: '01',
      titleRu: 'Анализ бизнес-задачи',
      titleUz: 'Biznes muammosini tahlil qilish',
    },
    {
      numRu: '02',
      titleRu: 'Проектирование AI-решения',
      titleUz: 'AI-yechimni loyihalash',
    },
    {
      numRu: '03',
      titleRu: 'Разработка и интеграция',
      titleUz: 'Ishlab chiqish va integratsiya',
    },
    {
      numRu: '04',
      titleRu: 'Запуск и сопровождение',
      titleUz: "Ishga tushirish va qo'llab-quvvatlash",
    },
  ];

  return (
    <section id="process" className="section-padding bg-card border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="left">
          <div className="mb-16 lg:mb-20">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t('Процесс', 'Jarayon')}
            </span>
            <h2 className="heading-section">
              {t('Как мы работаем', 'Qanday ishlaymiz')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.15}
            >
              <div className="relative">
                <span className="block text-7xl lg:text-8xl font-bold text-muted-foreground/20 mb-4">
                  {step.numRu}
                </span>
                <h3 className="heading-subsection">
                  {t(step.titleRu, step.titleUz)}
                </h3>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-full h-px bg-border -mr-6" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
