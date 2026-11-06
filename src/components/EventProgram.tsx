import React from 'react';
import { Clock, MapPin, Navigation } from 'lucide-react';
import { EVENT_DETAILS, PROGRAM_SCHEDULE } from '../data/eventData';
import { OrnamentalDivider } from './OrnamentalDivider';

export const EventProgram: React.FC = () => {
  return (
    <section id="programme" className="relative py-14 sm:py-20 md:py-28 px-3 sm:px-6 bg-[#FFFDF8] text-[#352528] overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      
      {/* Background radial soft gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A45D_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
          <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#C8A45D] font-sans font-semibold mb-2">
            Déroulement de la Journée
          </p>

          <h2 className="font-serif-cormorant text-2xl xs:text-3xl sm:text-5xl font-normal italic text-[#71323A] mb-2 sm:mb-3 leading-tight">
            Le Programme Festif
          </h2>

          <p className="font-serif-cormorant text-sm sm:text-lg text-[#352528]/70 italic">
            {EVENT_DETAILS.eventDate} • {EVENT_DETAILS.churchName} &amp; {EVENT_DETAILS.venueName}
          </p>

          <OrnamentalDivider variant="gold" className="mt-3 sm:mt-4 max-w-xs mx-auto" />
        </div>

        {/* Timeline Container with Central Fine Gold Line */}
        <div className="relative border-l-2 border-[#C8A45D]/40 pl-5 xs:pl-8 sm:pl-12 space-y-6 sm:space-y-12 ml-1 xs:ml-2 sm:ml-6">
          {PROGRAM_SCHEDULE.map((item) => (
            <div
              key={item.time}
              className="relative group"
            >
              {/* Gold Node Dot on Timeline */}
              <div className="absolute -left-5 xs:-left-8 sm:-left-12 top-6 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FFFDF8] border-2 border-[#C8A45D] group-hover:bg-[#71323A] group-hover:border-[#E3C77A] group-hover:scale-125 transition-all shadow-sm" />

              <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-2xl border-[0.5px] border-[#C8A45D]/60 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Time & Subtitle */}
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-lg bg-[#71323A] text-[#E3C77A] border border-[#C8A45D] shadow-sm">
                    <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#E3C77A]" />
                    <span className="font-serif-cormorant text-base sm:text-xl font-semibold tracking-wider leading-none">
                      {item.time}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-sans text-[#9E6E1A] font-semibold uppercase tracking-wider bg-[#F7F2EA] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#C8A45D]/30 whitespace-nowrap">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-cormorant text-xl sm:text-2xl font-semibold text-[#71323A] mb-1.5 sm:mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-[#352528]/75 font-light leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                <div className="pt-2.5 sm:pt-3 border-t border-[#C8A45D]/20 flex items-center gap-1.5 text-xs font-sans text-[#76363D]">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                  <span>{item.location}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Practical Info Card: Venues Quick Access & Dress Code */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-br from-[#381B20] via-[#48242A] to-[#381B20] text-[#FFFDF8] p-5 xs:p-7 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#C8A45D] shadow-xl text-center sm:text-left grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C8A45D]/30 font-sans">
          <div>
            <span className="text-[9px] xs:text-[10px] font-sans tracking-[0.25em] text-[#E3C77A] uppercase block mb-1 font-semibold">
              Les Deux Lieux de la Célébration
            </span>
            <h4 className="font-serif-cormorant text-xl sm:text-2xl font-semibold text-[#FFFDF8] mb-1">
              Messe &amp; Réception de Gala
            </h4>
            <p className="text-xs font-sans text-[#F7F2EA]/80 mb-4">
              {EVENT_DETAILS.churchTime} à l'{EVENT_DETAILS.churchName} • {EVENT_DETAILS.venueTime}
            </p>
            <a
              href="#lieux"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#71323A] text-[#E3C77A] border border-[#C8A45D]/50 text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#7A3038] transition-all min-h-[44px] cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E3C77A]" />
              <span>Consulter les Lieux &amp; Itinéraires</span>
            </a>
          </div>

          <div className="pt-6 md:pt-0 pl-0 md:pl-8">
            <span className="text-[9px] xs:text-[10px] font-sans tracking-[0.25em] text-[#E3C77A] uppercase block mb-1 font-semibold">
              Tenue Exigée
            </span>
            <h4 className="font-serif-cormorant text-xl sm:text-2xl font-semibold text-[#FFFDF8] mb-1">
              Élégance Céleste : Blanc &amp; Chic
            </h4>
            <p className="text-xs font-sans text-[#F7F2EA]/80 mb-4">
              {EVENT_DETAILS.dressCode}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-sans text-[#E3C77A] flex-wrap">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#E3C77A] shadow-sm shrink-0" />
              <span className="font-semibold text-[#FFFDF8]">Blanc &amp; Chic</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#C8A45D] border border-[#E3C77A] ml-2 shrink-0" />
              <span>Touches Dorées</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFFDF8] border border-[#C8A45D] ml-2 shrink-0" />
              <span>Blanc Soie</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
