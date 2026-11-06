import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';
import { OrnamentalDivider } from './OrnamentalDivider';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#381B20] via-[#2D161A] to-[#241114] text-[#FFFDF8] pt-12 sm:pt-16 pb-8 sm:pb-12 px-3 sm:px-6 border-t-2 border-[#C8A45D]/60 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Monogram Crest */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#71323A] border-2 border-[#E3C77A] flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
          <span className="font-serif-cormorant font-semibold text-[#E3C77A] text-lg sm:text-xl">G&amp;G</span>
        </div>

        <h3 className="font-serif-cormorant text-xl sm:text-3xl font-semibold text-[#FFFDF8] mb-1">
          {EVENT_DETAILS.familyNames}
        </h3>

        <p className="font-script text-2xl sm:text-4xl text-[#E3C77A] mb-3 sm:mb-4">
          Une Famille, Trois Raisons de Célébrer
        </p>

        <OrnamentalDivider variant="gold" className="my-4 sm:my-6 max-w-sm mx-auto" />

        {/* Rappel Visuel des Deux Lieux */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-[#200B0F]/90 border border-[#C8A45D]/60 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 mb-6 sm:mb-8 text-xs sm:text-sm font-sans text-center">
          <div>
            <span className="text-[#E3C77A] font-bold uppercase text-[10px] tracking-wider block">18h00 • Messe</span>
            <span className="font-serif-cormorant font-bold uppercase tracking-wide text-[#FFFDF8]">{EVENT_DETAILS.churchName}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
          <div>
            <span className="text-[#E3C77A] font-bold uppercase text-[10px] tracking-wider block">Dès 20h00 • Réception</span>
            <span className="font-serif-cormorant font-bold uppercase tracking-wide text-[#FFE8A3]">{EVENT_DETAILS.venueName}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#F7F2EA]/75 font-sans max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Merci du fond du cœur pour votre présence, votre amour et vos prières à nos côtés pour cette journée gravée à jamais.
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#71323A] text-[#E3C77A] border border-[#C8A45D]/60 text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#7A3038] hover:scale-105 active:scale-95 transition-all shadow-lg mb-6 sm:mb-8 min-h-[44px] cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#E3C77A]" />
          <span>Haut de Page</span>
        </button>

        <div className="pt-4 sm:pt-6 border-t border-[#C8A45D]/20 text-[10px] sm:text-xs text-[#F7F2EA]/60 font-sans tracking-wide">
          © 2026 Célébration Familiale Gypsy &amp; Grégoire — Tous droits réservés.
        </div>

      </div>
    </footer>
  );
};
