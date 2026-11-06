import React from 'react';

interface DividerProps {
  className?: string;
  variant?: 'gold' | 'burgundy' | 'ivory';
}

export const OrnamentalDivider: React.FC<DividerProps> = ({ 
  className = '', 
  variant = 'gold' 
}) => {
  const colorClass = 
    variant === 'burgundy' ? 'text-[#71323A]' :
    variant === 'ivory' ? 'text-[#FFFDF8]' :
    'text-[#C8A45D]';

  return (
    <div className={`flex items-center justify-center my-6 py-2 select-none ${className}`}>
      <div className={`h-[1px] flex-1 max-w-[120px] sm:max-w-[180px] bg-gradient-to-r from-transparent via-current to-transparent opacity-60 ${colorClass}`} />
      
      <div className={`mx-3 sm:mx-5 flex items-center gap-2 ${colorClass}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 opacity-90">
          <path d="M12 2C12 2 13.5 6.5 17 8C20.5 9.5 22 12 22 12C22 12 20.5 14.5 17 16C13.5 17.5 12 22 12 22C12 22 10.5 17.5 7 16C3.5 14.5 2 12 2 12C2 12 3.5 9.5 7 8C10.5 6.5 12 2 12 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
        </svg>
      </div>

      <div className={`h-[1px] flex-1 max-w-[120px] sm:max-w-[180px] bg-gradient-to-r from-transparent via-current to-transparent opacity-60 ${colorClass}`} />
    </div>
  );
};

export const CornerOrnament: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({ position, className = '' }) => {
  const positionClasses = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2 rotate-90',
    'bottom-left': 'bottom-2 left-2 -rotate-90',
    'bottom-right': 'bottom-2 right-2 rotate-180',
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none z-10 text-[#C8A45D]/70 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <path d="M2 2H22C22 2 12 4 8 8C4 12 2 22 2 22V2Z" fill="currentColor" fillOpacity="0.15"/>
        <path d="M2 2V38M2 2H38M8 8C10 12 12 18 12 28M8 8C12 10 18 12 28 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="5" cy="5" r="2" fill="currentColor"/>
      </svg>
    </div>
  );
};

export const LuxuryPaperCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  dark?: boolean;
}> = ({ children, className = '', dark = false }) => {
  return (
    <div className={`relative p-6 sm:p-10 rounded-2xl transition-all duration-300 ${
      dark 
        ? 'bg-gradient-to-br from-[#381B20] to-[#2D161A] text-[#FFFDF8] border border-[#C8A45D]/30 shadow-2xl' 
        : 'bg-[#FFFDF8] text-[#352528] border border-[#C8A45D]/30 shadow-stationery'
    } ${className}`}>
      {/* Inner fine double gold border */}
      <div className={`absolute inset-2 sm:inset-3 rounded-xl border pointer-events-none ${
        dark ? 'border-[#C8A45D]/20' : 'border-[#C8A45D]/30'
      }`} />
      
      {/* Corner Ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
