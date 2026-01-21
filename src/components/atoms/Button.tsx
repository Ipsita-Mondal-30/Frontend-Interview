import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'purple' | 'grey';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-gray-200 text-black hover:bg-gray-300',
    purple: 'bg-gray-200 text-black hover:bg-gray-300',
    grey: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-black',
    ghost: 'hover:bg-gray-100 text-black',
  };
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
