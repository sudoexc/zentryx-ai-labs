import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="left">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {t('О нас', 'Biz haqimizda')}
              </span>
              <h2 className="heading-section">
                {t('Что мы делаем', 'Biz nima qilamiz')}
              </h2>
            </div>

            <div>
              <p className="text-body-large">
                {t(
                  'Zentryx — продуктовая IT-команда с фокусом на AI. Мы проектируем и внедряем AI-агентов под конкретные бизнес-задачи: продажи, поддержка, аналитика, операционные процессы.',
                  "Zentryx — AI'ga yo'naltirilgan mahsulot jamoasi. Biz savdo, qo'llab-quvvatlash, tahlil va operatsion jarayonlar uchun AI-agentlarni loyihalab, joriy qilamiz."
                )}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
