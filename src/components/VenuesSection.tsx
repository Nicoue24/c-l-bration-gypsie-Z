import React from 'react';
import { Church, Wine, Navigation, Clock, MapPin, Sparkles, Shirt } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';
import { OrnamentalDivider } from './OrnamentalDivider';

export const VenuesSection: React.FC = () => {
  return (
    <section id="lieux" className="relative py-14 sm:py-20 md:py-24 px-3 sm:px-6 bg-[#F7F2EA]/70 text-[#352528] overflow-hidden border-y border-[#C8A45D]/30 scroll-mt-16 sm:scroll-mt-20">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* En-tête de Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
          <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C8A45D] font-sans font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#C8A45D]" />
            <span>Itinéraires &amp; Lieux de la Célébration</span>
            <Sparkles className="w-3 h-3 text-[#C8A45D]" />
          </p>

          <h2 className="font-serif-cormorant text-3xl xs:text-4xl sm:text-5xl font-normal italic text-[#71323A] mb-2 sm:mb-3 leading-tight">
            Les Deux Lieux Officiels
          </h2>

          <p className="font-serif-cormorant text-sm sm:text-lg text-[#352528]/75 italic">
            La messe d'action de grâces à l'église, suivie de la grande réception festive à True Paradise.
          </p>

          <OrnamentalDivider variant="gold" className="mt-3 sm:mt-4 max-w-xs mx-auto" />
        </div>

        {/* Grille des Deux Lieux : Église & True Paradise tous les deux en grands caractères */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* LIEU 1 : LA MESSE D'ACTION DE GRÂCES — EN GRANDS CARACTÈRES */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 border-2 border-[#C8A45D] shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            {/* Tag Étape 1 */}
            <div className="absolute -top-3.5 left-6 bg-[#71323A] text-[#FFEBA8] px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest border border-[#E3C77A] shadow-md flex items-center gap-1.5">
              <span>1ère Étape</span>
              <span>•</span>
              <span>Messe à 18h00</span>
            </div>

            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#71323A] text-[#E3C77A] border border-[#C8A45D] flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
                <Church className="w-6 h-6 text-[#E3C77A]" />
              </div>

              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#C8A45D] font-bold block mb-1">
                Lieu de la Messe d'Action de Grâces
              </span>

              {/* NOM DU LIEU DE LA MESSE EN GRAND */}
              <div className="mb-4">
                <h3 className="font-serif-cormorant text-3xl xs:text-4xl sm:text-5xl font-bold uppercase tracking-wide text-[#71323A] leading-tight mb-2 drop-shadow-xs">
                  {EVENT_DETAILS.churchName}
                </h3>
                <span className="inline-block px-3 py-1 rounded-md bg-[#F7F2EA] border border-[#C8A45D]/60 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#71323A]">
                  Début : 18:00 précises
                </span>
              </div>

              <div className="space-y-3 mb-5 text-xs sm:text-sm font-sans text-[#352528]/90">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#71323A] shrink-0 mt-1" />
                  <div className="p-3.5 rounded-xl bg-[#FAF6EE] border-2 border-[#C8A45D]/40 text-[#352528] text-sm sm:text-base leading-relaxed font-sans w-full shadow-xs">
                    <span className="font-bold text-[#71323A] block mb-1 uppercase tracking-wider text-xs">
                      Adresse Exacte de l'Église :
                    </span>
                    <strong className="text-[#352528] font-bold block">{EVENT_DETAILS.churchAddress}</strong>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#352528]/75 leading-relaxed font-light italic mb-6">
                Célébration eucharistique solennelle pour rendre grâce pour les 20 ans de mariage de Gypsy &amp; Grégoire, le jubilé de Gypsy et les enfants.
              </p>
            </div>

            <a
              href={EVENT_DETAILS.churchMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#71323A] hover:bg-[#83323C] text-[#FFEBA8] border-2 border-[#C8A45D] font-sans text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
            >
              <Navigation className="w-5 h-5 text-[#E3C77A]" />
              <span>Itinéraire GPS vers la Messe</span>
            </a>
          </div>

          {/* LIEU 2 : LE LIEU DE RÉCEPTION — EN GRANDS CARACTÈRES */}
          <div className="relative bg-gradient-to-br from-[#2D0F16] via-[#431B24] to-[#2D0F16] text-[#FFFDF8] rounded-2xl sm:rounded-3xl p-6 sm:p-9 border-2 border-[#E3C77A] shadow-2xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            {/* Tag Étape 2 */}
            <div className="absolute -top-3.5 left-6 bg-[#E3C77A] text-[#2D0F16] px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest border border-[#FFFDF8] shadow-lg flex items-center gap-1.5">
              <span>2ème Étape</span>
              <span>•</span>
              <span>Dès 20H00</span>
            </div>

            <div className="pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#71323A] text-[#E3C77A] border border-[#E3C77A]/60 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
                <Wine className="w-6 h-6 text-[#E3C77A]" />
              </div>

              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#E3C77A] font-bold block mb-1">
                Lieu Officiel de la Réception
              </span>

              {/* NOM DU LIEU DE RÉCEPTION EN GRAND */}
              <div className="mb-4">
                <h3 className="font-serif-cormorant text-3xl xs:text-4xl sm:text-5xl font-bold uppercase tracking-wide text-[#FFE8A3] leading-tight mb-2 drop-shadow-md">
                  {EVENT_DETAILS.venueName}
                </h3>
                <span className="inline-block px-3 py-1 rounded-md bg-[#240B10] border border-[#C8A45D]/60 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#FFFDF8]">
                  Ouverture des portes : Dès 20:00
                </span>
              </div>

              <div className="space-y-3 mb-5 text-xs sm:text-sm font-sans text-[#F7F2EA]/95">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#E3C77A] shrink-0 mt-1" />
                  <div className="p-3.5 rounded-xl bg-[#200A0E]/95 border-2 border-[#E3C77A]/50 text-[#F5EFE4] text-sm sm:text-base leading-relaxed font-sans w-full shadow-xs">
                    <span className="font-bold text-[#FFEBA8] block mb-1 uppercase tracking-wider text-xs">
                      Indication d'accès &amp; Repère :
                    </span>
                    <strong className="text-[#FFE8A3] font-bold block">{EVENT_DETAILS.venueAddress}</strong>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#F7F2EA]/85 leading-relaxed font-light italic mb-6">
                Cocktail d'honneur, dîner de fête raffiné, toasts et grande soirée dansante continue.
              </p>
            </div>

            <a
              href={EVENT_DETAILS.venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#7B2E37] via-[#8E3642] to-[#7B2E37] text-[#FFEBA8] border-2 border-[#E3C77A] font-sans text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
            >
              <Navigation className="w-5 h-5 text-[#E3C77A]" />
              <span>Itinéraire GPS vers {EVENT_DETAILS.venueName}</span>
            </a>
          </div>

        </div>

        {/* Note Complémentaire : Dress Code & Accès */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#C8A45D]/50 text-center max-w-2xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#F7F2EA] text-[#71323A] border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#76363D] font-bold block">
                Dress Code Conseillé
              </span>
              <p className="text-xs font-serif-cormorant font-semibold text-[#352528]">
                {EVENT_DETAILS.dressCode}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-serif-cormorant text-[#71323A]">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#C8A45D] shadow-sm shrink-0" />
            <span className="font-bold">Blanc &amp; Chic</span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#C8A45D] border border-[#E3C77A] ml-1 shrink-0" />
            <span>Touches Dorées</span>
          </div>
        </div>

      </div>
    </section>
  );
};
