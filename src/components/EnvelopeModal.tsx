import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';
import { OrnamentalDivider } from './OrnamentalDivider';
import { AuthenticWaxSeal } from './AuthenticWaxSeal';

interface EnvelopeModalProps {
  onOpened: () => void;
  isOpen: boolean;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ onOpened, isOpen }) => {
  const [isUnsealing, setIsUnsealing] = useState(false);

  const handleOpen = () => {
    setIsUnsealing(true);
    setTimeout(() => {
      onOpened();
    }, 320);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        onClick={handleOpen}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#160205]/95 backdrop-blur-sm overflow-y-auto overscroll-contain cursor-pointer select-none"
      >
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full bg-[#E3C77A]/10 filter blur-2xl" />
        </div>

        {/* Royal Invitation Card */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={
            isUnsealing
              ? { scale: 1.02, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-30 w-full max-w-lg max-h-[94dvh] overflow-y-auto overscroll-contain bg-[#FFFDF8] text-[#420D15] rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#C8A45D] my-auto flex flex-col cursor-default"
        >
          {/* Top Banner Artwork avec blason royal d'honneur */}
          <div className="relative py-6 sm:py-8 px-4 shrink-0 overflow-hidden bg-gradient-to-b from-[#2D161A] via-[#3E1E23] to-[#2D161A] text-center flex flex-col items-center justify-center border-b border-[#C8A45D]/40">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#71323A] border-2 border-[#E3C77A] flex items-center justify-center shadow-lg mb-2">
              <span className="font-serif-cormorant font-bold text-[#E3C77A] text-lg sm:text-xl">G&amp;G</span>
            </div>

            {/* Badge officiel */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0E17]/90 text-[#E3C77A] text-[9.5px] sm:text-xs font-serif-cormorant tracking-[0.2em] uppercase border border-[#E3C77A] shadow-lg">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E3C77A]" />
              INVITATION OFFICIELLE
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E3C77A]" />
            </span>
          </div>

          {/* Invitation Content Area */}
          <div className="relative px-3.5 xs:px-5 sm:px-8 pb-3.5 sm:pb-5 pt-1 text-center bg-[#FFFDF8]">
            {/* Fine Inner Double Gold Rule */}
            <div className="absolute inset-1.5 sm:inset-3 rounded-xl sm:rounded-2xl border border-[#C8A45D]/40 pointer-events-none" />

            <div className="relative z-10 py-1">
              <h1 className="font-serif-cormorant text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light italic tracking-tight text-[#641724] mb-0.5 leading-tight break-words">
                {EVENT_DETAILS.familyNames}
              </h1>

              <OrnamentalDivider variant="gold" className="my-1 max-w-[180px] sm:max-w-xs mx-auto" />

              <h2 className="font-serif-cormorant text-xs xs:text-sm sm:text-base font-bold uppercase tracking-wider text-[#832232] max-w-md mx-auto mb-1.5 px-1 leading-snug">
                20 ANS DE MARIAGE • 50 ANS DE GYPSY • ENFANTS
              </h2>

              {/* 3 Pillars Summary Chips */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 my-1.5 sm:my-2 text-xs font-serif-cormorant max-w-sm mx-auto">
                <div className="p-1 sm:p-1.5 rounded-lg bg-[#F7F2EA] border border-[#C8A45D]/40 text-[#641724] shadow-sm flex flex-col justify-center">
                  <span className="font-bold block text-[10px] xs:text-xs sm:text-sm text-[#641724] leading-tight">20 ANS</span>
                  <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] tracking-wider uppercase text-[#832232] leading-tight">Mariage</span>
                </div>
                <div className="p-1 sm:p-1.5 rounded-lg bg-[#641724] text-[#FFFDF8] border border-[#C8A45D] shadow-md flex flex-col justify-center">
                  <span className="font-bold block text-[10px] xs:text-xs sm:text-sm text-[#E3C77A] leading-tight">50 ANS</span>
                  <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] tracking-wider uppercase text-[#E3C77A]/90 leading-tight">Gypsy</span>
                </div>
                <div className="p-1 sm:p-1.5 rounded-lg bg-[#F7F2EA] border border-[#C8A45D]/40 text-[#641724] shadow-sm flex flex-col justify-center">
                  <span className="font-bold block text-[10px] xs:text-xs sm:text-sm text-[#641724] leading-tight">ENFANTS</span>
                  <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] tracking-wider uppercase text-[#832232] leading-tight">Bénédiction</span>
                </div>
              </div>

              {/* Date & Location Brief */}
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] xs:text-xs sm:text-sm text-[#420D15] my-1.5 sm:my-2 py-1.5 border-y border-[#C8A45D]/30 font-medium">
                <div className="flex items-center gap-1 text-[#641724]">
                  <Calendar className="w-3 h-3 text-[#C8A45D] shrink-0" />
                  <span className="font-bold">{EVENT_DETAILS.eventDate}</span>
                </div>
                <span className="text-[#C8A45D]">•</span>
                <div className="flex items-center gap-1 text-[#641724]">
                  <MapPin className="w-3 h-3 text-[#C8A45D] shrink-0" />
                  <span className="font-bold">{EVENT_DETAILS.venueName} (20h)</span>
                </div>
              </div>

              {/* Interactive Wax Seal Button */}
              <div className="mt-2 sm:mt-3 flex flex-col items-center justify-center gap-1">
                <button
                  onClick={handleOpen}
                  className="group relative flex items-center justify-center gap-2 px-5 sm:px-8 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#641724] via-[#832232] to-[#641724] text-[#FFFDF8] border-2 border-[#E3C77A] shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer w-full sm:w-auto min-h-[42px]"
                >
                  <AuthenticWaxSeal 
                    size={28}
                    showDualG={true}
                    className="shrink-0 drop-shadow-md"
                  />
                  <span className="font-serif-cormorant font-bold tracking-widest text-xs xs:text-sm sm:text-base uppercase text-[#E3C77A] whitespace-nowrap">
                    Ouvrir l'Invitation
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E3C77A] shrink-0" />
                </button>
                <p className="text-[9.5px] sm:text-[11px] text-[#832232]/85 font-serif-cormorant italic">
                  Cliquez pour découvrir l'invitation officielle
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
