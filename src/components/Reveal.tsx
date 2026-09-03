'use client';

import { motion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';

/** Animación de aparición al hacer scroll. Respeta prefers-reduced-motion vía Framer. */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'li' | 'section';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
