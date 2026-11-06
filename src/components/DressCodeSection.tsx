import React from 'react';
import { Shirt, Sparkles, Heart, Check, Info } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const DressCodeSection: React.FC = () => {
  return (
    <section 
      id="dress-code" 
      aria-label="Code vestimentaire de la célébration"
      className="py-12 sm:py-16 px-3 sm:px-6 bg-[#FAF7F0] relative overflow-hidden border-y border-[#C8A45D]/40"
      style={{
        backgroundImage: 'radial-gradient(#C8A45D 0.6px, transparent 0.6px), radial-gradient(#C8A45D 0.6px, #FAF7F0 0.6px)',
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px',
        backgroundOpacity: 0.04
      }}
    >
      {/* Halo lumineux subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8]/90 via-[#FAF7F0]/95 to-[#FFFDF8]/90 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* En-tête de la section */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C8A45D]/60 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span className="font-sans font-semibold uppercase tracking-[0.2em] text-[11px] xs:text-xs text-[#71323A]">
              Instruction aux Invités
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
          </div>

          <h2 className="font-serif-cormorant text-3xl xs:text-4xl sm:text-5xl font-semibold text-[#420D15] tracking-tight mb-1">
            Dress Code : Blanc &amp; Chic
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#71323A]">
            Pureté, Élégance &amp; Célébration Royale
          </p>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent mx-auto mt-4" />
        </div>

        {/* Carte Principale de Mise en Valeur */}
        <div className="bg-[#FFFFFF]/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-[#C8A45D] shadow-[0_10px_35px_rgba(113,50,58,0.08)] p-6 sm:p-10 relative overflow-hidden">
          
          {/* Ligne d'encadrement intérieure dorée */}
          <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border border-[#C8A45D]/30 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10">
            
            {/* Emblème visuel avec icône de vêtement élégant */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#FFFDF8] via-[#FFFFFF] to-[#F5EFE4] border-2 border-[#C8A45D] shadow-lg flex items-center justify-center group">
                {/* Anneau doré d'effet */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#C8A45D]/60 animate-[spin_20s_linear_infinite]" />
                <Shirt className="w-10 h-10 sm:w-12 sm:h-12 text-[#71323A] stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#71323A] text-[#FFE8A3] border border-[#E3C77A] shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
              <span className="font-sans font-semibold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-[#71323A] mt-2.5">
                Harmonie Visuelle
              </span>
            </div>

            {/* Texte et détails du Dress Code */}
            <div className="flex-1 text-center md:text-left space-y-3.5">
              <div className="inline-block px-3 py-1 rounded-md bg-[#FAF5E8] border border-[#C8A45D]/40 text-[#420D15] text-[11px] xs:text-xs font-sans uppercase tracking-wider font-semibold">
                Recommandation Solennelle
              </div>

              <h3 className="font-serif-cormorant text-xl sm:text-2xl font-semibold text-[#420D15] leading-snug">
                Une marée d'élégance blanche pour honorer ce triple jubilé
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#523238] leading-relaxed">
                Afin de créer un tableau harmonieux, éclatant et inoubliable, nous invitons chaleureusement l'ensemble de nos chers convives à adopter le dress code <strong className="text-[#420D15] font-semibold">Blanc et Chic</strong> (robes de soirée chics, costumes élégants, tenues traditionnelles ou modernes blanches et soignées).
              </p>

              {/* Nuances & Touches autorisées */}
              <div className="pt-2 border-t border-[#C8A45D]/20">
                <span className="text-xs uppercase tracking-wider font-sans font-semibold text-[#71323A] block mb-2">
                  Palette &amp; Nuances Recommandées :
                </span>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#C8A45D]/80 shadow-xs text-xs font-sans text-[#420D15] font-medium">
                    <span className="w-3 h-3 rounded-full bg-[#FFFFFF] border border-[#C8A45D] shadow-xs" />
                    <span>Blanc Chic</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCFBF8] border border-[#C8A45D]/60 shadow-xs text-xs font-sans text-[#420D15]">
                    <span className="w-3 h-3 rounded-full bg-[#FCFBF8] border border-[#C8A45D]/50" />
                    <span>Blanc Soie / Ivoire</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E8] border border-[#C8A45D]/60 shadow-xs text-xs font-sans text-[#71323A]">
                    <span className="w-3 h-3 rounded-full bg-[#C8A45D]" />
                    <span>Touches &amp; Bijoux Dorés</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Note d'accueil bienveillante en bas de carte */}
          <div className="mt-6 pt-4 border-t border-[#C8A45D]/30 flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-serif-cormorant italic text-[#71323A]">
            <Heart className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 fill-[#C8A45D]/20" />
            <span>Votre présence vêtue de blanc illuminera cette journée mémorable.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
