import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleRu: 'Eminel LaserLab — AI-продавец в Instagram',
      titleUz: 'Eminel LaserLab — Instagramdagi AI-sotuvchi',
      descRu:
        'ИИ берёт на себя первичное общение с клиентами и увеличивает количество записей без администратора/чат оператора.',
      descUz:
        "AI mijozlar bilan birlamchi muloqotni o'z zimmasiga oladi va administrator/чат operatorisiz yozilishlar sonini oshiradi.",
      tags: ['AI', 'SALES', 'BEAUTY'],
    },
    {
      titleRu: 'GPT-Fitness — AI-фитнес трекер',
      titleUz: 'GPT-Fitness — AI-fitnes treker',
      descRu:
        'Telegram-бот, который по фото еды считает калории и ведёт дневник питания пользователя.',
      descUz:
        'Telegram-bot: ovqat suratidan kaloriyani hisoblaydi va foydalanuvchi ovqatlanish kundaligini yuritadi.',
      tags: ['AI', 'FITNESS', 'TELEGRAM', 'CALORIES'],
    },
    {
      titleRu: 'MultiPay — платёжная платформа',
      titleUz: "MultiPay — to'lov platformasi",
      descRu:
        'Центральный бот для приёма оплат (крипта, Stars, Payme, РФ) и управления подписками в других ботах.',
      descUz:
        "To'lovlarni qabul qilish (kripto, Stars, Payme, RF) va boshqa botlarda obunalarni boshqarish uchun markaziy bot.",
      tags: ['PAYMENTS', 'SUBSCRIPTIONS', 'TELEGRAM', 'PLATFORM'],
    },
    {
      titleRu: 'Vohas — сайт ресторана с админкой',
      titleUz: 'Vohas — adminli restoran sayti',
      descRu:
        'Сайт ресторана с онлайн-меню, галереей и админ-панелью для управления блюдами и разделами.',
      descUz:
        "Restoran sayti: onlayn menyu, galereya va taomlar/bo'limlarni boshqarish uchun admin-panel.",
      tags: ['WEBSITE', 'RESTAURANT', 'ADMIN', 'CMS'],
    },
    {
      titleRu: 'ECOAXL — сервис вывоза мусора',
      titleUz: 'ECOAXL — chiqindi olib ketish xizmati',
      descRu:
        'Telegram-бот и сайт-визитка для оформления подписки и вызова курьера с геолокацией.',
      descUz:
        "Obuna rasmiylashtirish va geolokatsiya bilan kuryerni chaqirish uchun Telegram-bot va sayt-vizitka.",
      tags: ['TELEGRAM', 'SERVICE', 'SUBSCRIPTION', 'MAPS'],
    },
    {
      titleRu: 'VideoSaver — мини-приложение для скачивания видео',
      titleUz: 'VideoSaver — video yuklab olish mini-ilovasi',
      descRu:
        'Mini App для загрузки видео из TikTok и Instagram без водяных знаков с историей скачиваний.',
      descUz:
        "TikTok va Instagramdan videolarni suv belgisisiz yuklash uchun Mini App, yuklab olishlar tarixi bilan.",
      tags: ['MINI APP', 'VIDEO', 'DOWNLOAD'],
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
                <div className="card-project-cover mb-6">
                  <span className="relative z-10 text-3xl font-bold text-muted-foreground/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="heading-subsection mb-2">
                  {t(project.titleRu, project.titleUz)}
                </h3>
                <p className="text-body mb-4">
                  {t(project.descRu, project.descUz)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
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
