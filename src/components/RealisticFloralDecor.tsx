import React from 'react';

// Import photorealistic burgundy rose images
import burgundyCornerImg from '../assets/images/burgundy_floral_corner_1786458580375.jpg';
import burgundyHeaderImg from '../assets/images/burgundy_floral_header_1786442440706.jpg';
import burgundyRoseImg from '../assets/images/burgundy_rose_single_1786458613892.jpg';
import burgundyPetalsImg from '../assets/images/burgundy_rose_petals_1786458626676.jpg';

export { burgundyCornerImg, burgundyHeaderImg as burgundyBannerImg, burgundyRoseImg, burgundyPetalsImg };

/**
 * Large Corner Floral Bouquet (Photorealistic Deep Burgundy Roses & Peonies)
 * Pure CSS hardware-accelerated for instant, stutter-free performance on all devices.
 */
export const CornerFloral: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: 'md' | 'lg' | 'xl';
}> = ({ position, className = '', size = 'lg' }) => {
  const sizeClasses = {
    md: 'w-32 xs:w-40 sm:w-56 md:w-64 h-32 xs:h-40 sm:h-56 md:h-64',
    lg: 'w-44 xs:w-56 sm:w-72 md:w-88 h-44 xs:h-56 sm:h-72 md:h-88',
    xl: 'w-56 xs:w-72 sm:w-88 md:w-[28rem] h-56 xs:h-72 sm:h-88 md:h-[28rem]',
  }[size];

  const positionClasses = {
    'top-left': '-top-8 -left-8 sm:-top-12 sm:-left-12 md:-top-16 md:-left-16 rotate-0',
    'top-right': '-top-8 -right-8 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16 scale-x-[-1]',
    'bottom-left': '-bottom-8 -left-8 sm:-bottom-12 sm:-left-12 md:-bottom-16 md:-left-16 scale-y-[-1]',
    'bottom-right': '-bottom-8 -right-8 sm:-bottom-12 sm:-right-12 md:-bottom-16 md:-right-16 rotate-180',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`absolute z-0 pointer-events-none select-none overflow-hidden ${positionClasses} ${sizeClasses} ${className}`}
      style={{
        contain: 'strict',
        transform: 'translateZ(0)',
      }}
    >
      <img
        src={burgundyCornerImg}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-60 pointer-events-none"
      />
    </div>
  );
};

/**
 * Floral Banner Crest for Section Headers or Invitation Card Tops
 */
export const FloralHeaderCrest: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full max-w-md mx-auto h-20 sm:h-28 pointer-events-none my-2 overflow-hidden ${className}`}
      style={{
        contain: 'layout paint',
        transform: 'translateZ(0)',
      }}
    >
      <img
        src={burgundyHeaderImg}
        alt=""
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain opacity-75"
      />
    </div>
  );
};

/**
 * Single Photorealistic Burgundy Rose Accent
 */
export const SingleRoseAccent: React.FC<{ className?: string; size?: string }> = ({
  className = '',
  size = 'w-14 h-14 sm:w-16 sm:h-16'
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none inline-block relative ${size} ${className}`}
      style={{
        contain: 'layout paint',
        transform: 'translateZ(0)',
      }}
    >
      <img
        src={burgundyRoseImg}
        alt=""
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain opacity-80"
      />
    </div>
  );
};
