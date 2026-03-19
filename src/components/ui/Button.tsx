import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-colors duration-300';
  
  const variants = {
    primary: 'bg-accent-green text-background hover:bg-accent-green/90',
    secondary: 'bg-transparent border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-background',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
