import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-display mb-6 md:mb-8">
              {t(
                'Готовы внедрить систему в ваш бизнес',
                "Biznesingizga tizimni joriy etishga tayyormiz"
              )}
            </h2>
            <p className="text-body-large mb-10 md:mb-12">
              {t(
                'Свяжитесь с нами — без лишних разговоров.',
                "Biz bilan bog'laning — aniq va qisqa."
              )}
            </p>
            <a
              href="https://t.me/tizimagency"
              target="_blank"
              rel="noreferrer"
              className="btn-primary group inline-flex items-center gap-3"
            >
              {t('Связаться', "Bog'lanish")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
