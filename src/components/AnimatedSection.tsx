import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const getVariants = (direction: string): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    y: direction === 'up' ? 60 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
});

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={getVariants(direction)}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
