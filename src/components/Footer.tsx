import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold tracking-tight">TIZIM</span>
          <p className="text-sm text-muted-foreground">
            © 2024 Tizim Agency. {t('Все права защищены.', 'Barcha huquqlar himoyalangan.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
