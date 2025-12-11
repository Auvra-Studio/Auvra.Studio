import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-100",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
    outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:border-white hover:text-white",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  // Glow effect for primary buttons
  const Glow = () => (
    variant === 'primary' && (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "linear",
          delay: 0.5 
        }}
      />
    )
  );

  // Pulse effect for the container
  const buttonMotion = variant === 'primary' ? {
    boxShadow: [
      "0 0 0px rgba(255,255,255,0)",
      "0 0 10px rgba(255,255,255,0.2)",
      "0 0 0px rgba(255,255,255,0)"
    ]
  } : {};

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={buttonMotion}
      transition={{ 
        boxShadow: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      {...props}
    >
      <Glow />
      <span className="relative z-10 flex items-center">
        {children}
        {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </motion.button>
  );
};