import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Grid lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-line left-1/4" />
        <div className="grid-line left-1/2" />
        <div className="grid-line left-3/4" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6 md:mb-8">
              AI-First Digital Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display mb-6 md:mb-8"
          >
            {t(
              'AI-агенты и цифровые продукты для бизнеса',
              'Biznes uchun AI-agentlar va raqamli mahsulotlar'
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-body-large max-w-3xl mb-10 md:mb-12"
          >
            {t(
              'Мы разрабатываем AI-агентов, которые автоматизируют процессы, заменяют рутину и усиливают команды. Сайты и боты — как часть единой системы.',
              "Biz jarayonlarni avtomatlashtiradigan, rutinalarni almashtiradigan va jamoalarni kuchaytiradigan AI-agentlar yaratamiz. Saytlar va botlar — yagona tizimning bir qismi sifatida."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contact" className="btn-primary">
              {t('Обсудить проект', 'Loyihani muhokama qilish')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
