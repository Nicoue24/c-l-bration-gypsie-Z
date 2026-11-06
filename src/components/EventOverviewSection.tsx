import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';
import { OrnamentalDivider } from './OrnamentalDivider';
import { CornerFloral } from './RealisticFloralDecor';

export const EventOverviewSection: React.FC = () => {
  return (
    <section id="evenement" className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 px-3 sm:px-6 bg-[#FFFDF8] text-[#352528] overflow-hidden scroll-mt-16 sm:scroll-mt-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FFFDF8 0%, #F7F2EA 100%)' }}>
      
      {/* 1 Single Photorealistic Corner Floral Accent - Top Left */}
      <CornerFloral position="top-left" size="md" className="opacity-35 sm:opacity-50 z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Digital Invitation Paper Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-10 md:p-14 border-[0.5px] border-[#C8A45D] shadow-2xl relative z-20 overflow-hidden text-center"
          style={{ boxShadow: '0 10px 40px rgba(113, 50, 58, 0.06)' }}
        >
          {/* Fine Inner Double Gold Line */}
          <div className="absolute inset-2 sm:inset-4 md:inset-5 rounded-xl sm:rounded-2xl border-[1.5px] border-[#C8A45D]/40 pointer-events-none" />

          {/* Top Label */}
          <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C8A45D] font-sans font-semibold mb-2 sm:mb-3">
            Au Cœur de la Journée
          </p>

          <h2 className="font-serif-cormorant text-2xl xs:text-3xl sm:text-5xl font-normal italic text-[#71323A] leading-tight mb-2 break-words">
            Trois Heureux Événements Réunis
          </h2>

          <p className="font-serif-cormorant text-sm sm:text-lg text-[#352528]/80 italic max-w-xl mx-auto mb-4 sm:mb-6 px-2">
            Un triple motif d'action de grâces célébré dans la foi, la tendresse et la fête.
          </p>

          <div className="flex items-center justify-center gap-3 my-3 sm:my-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#C8A45D]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
            <span className="h-[1px] w-8 sm:w-12 bg-[#C8A45D]" />
          </div>

          {/* 3 Celebrations Grid / Cards sans répétitions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-6 sm:my-8 text-center">
            
            {/* 1. Noces de Porcelaine */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#FFFDF8] border-2 border-[#C8A45D] shadow-md flex flex-col justify-between overflow-hidden hover:border-[#71323A] transition-all duration-300 group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#71323A] text-[#E3C77A] flex items-center justify-center mx-auto mb-3 border border-[#C8A45D] shadow-sm group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 fill-[#E3C77A]" />
                </div>
                <h3 className="font-serif-cormorant text-xl sm:text-2xl font-semibold uppercase tracking-wider text-[#71323A] mb-1">
                  20 Ans d'Union
                </h3>
                <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#9E6E1A] block mb-2.5">
                  Noces de Porcelaine
                </span>
                <p className="text-xs sm:text-sm font-sans text-[#352528]/75 leading-relaxed font-light">
                  Deux décennies d'amour, de complicité et de foi partagée main dans la main.
                </p>
              </div>
            </div>

            {/* 2. 50 Ans Gypsy */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#F7F2EA]/90 border-2 border-[#C8A45D] shadow-md flex flex-col justify-between overflow-hidden hover:border-[#71323A] transition-all duration-300 group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#71323A] text-[#E3C77A] flex items-center justify-center mx-auto mb-3 border border-[#C8A45D] shadow-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#E3C77A]" />
                </div>
                <h3 className="font-serif-cormorant text-xl sm:text-2xl font-semibold uppercase tracking-wider text-[#71323A] mb-1">
                  Jubilé d'Or
                </h3>
                <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#C8A45D] block mb-2.5">
                  50 Ans de Gypsy
                </span>
                <p className="text-xs sm:text-sm font-sans text-[#352528]/75 leading-relaxed font-light">
                  Un demi-siècle illuminé par la bonté, le dévouement et la force maternelle.
                </p>
              </div>
            </div>

            {/* 3. Les Enfants */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#FFFDF8] border-2 border-[#C8A45D] shadow-md flex flex-col justify-between overflow-hidden hover:border-[#71323A] transition-all duration-300 group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#71323A] text-[#E3C77A] flex items-center justify-center mx-auto mb-3 border border-[#C8A45D] shadow-sm group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif-cormorant text-xl sm:text-2xl font-semibold uppercase tracking-wider text-[#71323A] mb-1">
                  Honneur aux Enfants
                </h3>
                <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#C8A45D] block mb-2.5">
                  La Joie du Foyer
                </span>
                <p className="text-xs sm:text-sm font-sans text-[#352528]/75 leading-relaxed font-light">
                  Célébration des précieux trésors de la maison et de leurs anniversaires réunis.
                </p>
              </div>
            </div>

          </div>

          <OrnamentalDivider variant="gold" className="my-4 sm:my-6 max-w-xs mx-auto" />

          {/* Date, Messe & Réception Banner avec grands caractères très lisibles */}
          <div className="bg-gradient-to-r from-[#250B10] via-[#3D171F] to-[#250B10] text-[#FFFDF8] p-5 sm:p-7 md:p-8 rounded-2xl border-2 border-[#C8A45D] grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-center md:text-left shadow-xl font-sans">
            
            {/* 1. Date */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-11 h-11 rounded-full bg-[#71323A] border border-[#E3C77A] flex items-center justify-center shrink-0 shadow-sm">
                <Calendar className="w-5 h-5 text-[#E3C77A]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#E3C77A] block font-semibold">Date Officielle</span>
                <span className="font-serif-cormorant text-lg sm:text-xl font-bold uppercase text-[#FFFDF8]">{EVENT_DETAILS.eventDate}</span>
              </div>
            </div>

            {/* 2. Lieu de la Messe */}
            <div className="flex items-center gap-3 justify-center md:justify-start pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-[#C8A45D]/30 md:pl-5">
              <div className="w-11 h-11 rounded-full bg-[#71323A] border border-[#E3C77A] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#E3C77A]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#E3C77A] block font-semibold">1. Messe à 18h00</span>
                <span className="font-serif-cormorant text-lg sm:text-xl font-bold uppercase text-[#FFFDF8]">{EVENT_DETAILS.churchName}</span>
              </div>
            </div>

            {/* 3. Lieu de la Réception */}
            <div className="flex items-center gap-3 justify-center md:justify-start pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-[#C8A45D]/30 md:pl-5">
              <div className="w-11 h-11 rounded-full bg-[#71323A] border border-[#E3C77A] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#FFE8A3]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#E3C77A] block font-semibold">2. Réception dès 20h00</span>
                <span className="font-serif-cormorant text-lg sm:text-xl font-bold uppercase text-[#FFE8A3]">{EVENT_DETAILS.venueName}</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
