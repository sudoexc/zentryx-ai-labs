import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight">
            ZENTRYX
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('Услуги', 'Xizmatlar')}
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('Проекты', 'Loyihalar')}
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('Процесс', 'Jarayon')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('Контакт', 'Aloqa')}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                  language === 'ru'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('uz')}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                  language === 'uz'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                UZ
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
