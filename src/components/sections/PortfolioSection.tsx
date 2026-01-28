import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleRu: 'Проект #1',
      titleUz: 'Loyiha #1',
      descRu: 'AI-агент для автоматизации бизнеса',
      descUz: 'Biznes jarayonlarini avtomatlashtirish uchun AI-agent',
      tags: ['AI', 'Automation', 'Integration'],
    },
    {
      titleRu: 'Проект #2',
      titleUz: 'Loyiha #2',
      descRu: 'Корпоративная платформа с AI-аналитикой',
      descUz: 'AI-tahlil bilan korporativ platforma',
      tags: ['Platform', 'Analytics', 'AI'],
    },
    {
      titleRu: 'Проект #3',
      titleUz: 'Loyiha #3',
      descRu: 'Telegram-бот для клиентской поддержки',
      descUz: "Mijozlarni qo'llab-quvvatlash uchun Telegram-bot",
      tags: ['Bot', 'Support', 'Telegram'],
    },
    {
      titleRu: 'Проект #4',
      titleUz: 'Loyiha #4',
      descRu: 'CRM-интеграция с AI-обработкой заявок',
      descUz: "AI-so'rovlarni qayta ishlash bilan CRM-integratsiya",
      tags: ['CRM', 'AI', 'Automation'],
    },
    {
      titleRu: 'Проект #5',
      titleUz: 'Loyiha #5',
      descRu: 'Интеллектуальная админ-панель',
      descUz: 'Aqlli admin-panel',
      tags: ['Dashboard', 'AI', 'Analytics'],
    },
    {
      titleRu: 'Проект #6',
      titleUz: 'Loyiha #6',
      descRu: 'AI-ассистент для продаж',
      descUz: 'Savdo uchun AI-assistent',
      tags: ['Sales', 'AI', 'Assistant'],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-card border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="up">
          <div className="mb-16 lg:mb-20">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {t('Портфолио', 'Portfolio')}
            </span>
            <h2 className="heading-section">
              {t('Наши проекты', 'Bizning loyihalarimiz')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              delay={index * 0.08}
            >
              <div className="card-project group cursor-pointer">
                <div className="aspect-video bg-secondary mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-muted-foreground/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="heading-subsection mb-2">
                  {t(project.titleRu, project.titleUz)}
                </h3>
                <p className="text-body mb-4">
                  {t(project.descRu, project.descUz)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
