import React, { useEffect, useRef, useState } from 'react';

interface FadeInUpSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delayMs?: number;
  threshold?: number;
}

/**
 * Ultra-fast, zero-jank section container.
 * Pre-renders content immediately to avoid scroll pop-in and layout thrashing,
 * applying subtle GPU-accelerated transition once mounted.
 */
export const FadeInUpSection: React.FC<FadeInUpSectionProps> = ({
  children,
  className = '',
  id,
  delayMs = 0,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fast single-tick activation without heavy intersection observer polling
    const timer = setTimeout(() => {
      setMounted(true);
    }, delayMs || 10);
    return () => clearTimeout(timer);
  }, [delayMs]);

  return (
    <div
      id={id}
      className={`transition-opacity duration-300 ease-out will-change-[opacity] ${
        mounted ? 'opacity-100' : 'opacity-95'
      } ${className}`}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 600px',
      }}
    >
      {children}
    </div>
  );
};
