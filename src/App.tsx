import React, { useState, useEffect } from 'react';
import { InvitationOpening } from './components/InvitationOpening';
import { HeaderNav } from './components/HeaderNav';
import { EventOverviewSection } from './components/EventOverviewSection';
import { VenuesSection } from './components/VenuesSection';
import { DressCodeSection } from './components/DressCodeSection';
import { CountdownTimer } from './components/CountdownTimer';
import { EventProgram } from './components/EventProgram';
import { RSVPSection } from './components/RSVPSection';
import { Footer } from './components/Footer';
import { BackgroundMusicPlayer } from './components/BackgroundMusicPlayer';
import { FadeInUpSection } from './components/FadeInUpSection';
import { CornerFloral } from './components/RealisticFloralDecor';
import { Calendar, MapPin, Clock, Church, Wine, Navigation } from 'lucide-react';
import { EVENT_DETAILS } from './data/eventData';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);

  // Force scroll = 0 au chargement initial de l'application
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleEnvelopeOpened = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#352528] font-sans relative antialiased selection:bg-[#71323A] selection:text-[#E3C77A] scroll-smooth overflow-x-hidden">
      
      {/* 1. COUVERTURE & OUVERTURE IMMERSIVE: Enveloppe Royale Fermée avec Sceau Rouge */}
      <InvitationOpening
        isOpen={isEnvelopeOpen}
        onOpened={handleEnvelopeOpened}
      />

      {/* Header Bar avec Onglets Fixes */}
      <HeaderNav onReopenInvite={() => setIsEnvelopeOpen(true)} />

      {/* 2. HERO: Premier Écran - Date, Messe & Réception Parfaitement Visibles en Grands Caractères */}
      <div id="hero" className="relative pt-20 xs:pt-24 sm:pt-32 pb-14 xs:pb-18 sm:pb-24 px-3 sm:px-6 bg-gradient-to-b from-[#2E1217] via-[#431D24] to-[#2E1217] text-[#FFFDF8] overflow-hidden text-center border-b-2 border-[#C8A45D]">
        
        {/* Lueur d'ambiance dorée d'arrière-plan */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-[#C8A45D]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E1217]/90 via-[#431D24]/85 to-[#2E1217]/95" />
        </div>

        {/* Signature Corner Floral Accent */}
        <CornerFloral position="top-left" size="lg" className="opacity-60 sm:opacity-85 z-10" />

        <div className="max-w-5xl mx-auto py-7 xs:py-9 sm:py-14 px-4 xs:px-6 sm:px-10 relative z-20 rounded-2xl sm:rounded-3xl bg-[#36151B]/95 border-2 border-[#C8A45D] shadow-2xl">
          
          {/* Fine Inner Frame Line */}
          <div className="absolute inset-2.5 sm:inset-4 rounded-xl sm:rounded-2xl border-[1.5px] border-[#C8A45D]/40 pointer-events-none" />

          {/* En-tête officiel */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200A0E]/90 border border-[#E3C77A]/80 shadow-md mb-3 sm:mb-4">
            <span className="text-[#FFE8A3] text-xs">✦</span>
            <span className="text-[10px] xs:text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#FFEBA8] font-sans font-semibold whitespace-nowrap">
              INVITATION OFFICIELLE
            </span>
            <span className="text-[#FFE8A3] text-xs">✦</span>
          </div>

          {/* Noms des Hôtes */}
          <h1 className="font-serif-cormorant text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-normal italic text-[#FFFDF8] tracking-tight mb-2 leading-tight break-words">
            Gypsy &amp; Grégoire
          </h1>

          <p className="font-serif-cormorant text-base xs:text-lg sm:text-2xl text-[#E3C77A] max-w-2xl mx-auto mb-6 sm:mb-8 font-light italic leading-snug">
            20 Ans de Mariage • 50 Ans de Gypsy • Bénédiction des Enfants
          </p>

          {/* 1. LA DATE EN CARACTÈRES MAJESTUEUX */}
          <div className="my-5 sm:my-7 p-4 sm:p-6 rounded-2xl bg-[#220B10]/90 border border-[#C8A45D]/70 shadow-lg text-center">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E3C77A] font-sans font-semibold mb-1">
              <Calendar className="w-4 h-4 text-[#E3C77A]" />
              DATE OFFICIELLE DE LA CÉLÉBRATION
            </span>
            <div className="font-serif-cormorant text-3xl xs:text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#FFFDF8] drop-shadow-md">
              {EVENT_DETAILS.eventDate}
            </div>
          </div>

          {/* 2. LES DEUX LIEUX DE LA JOURNÉE : MESSE & RÉCEPTION MIS EN ÉVIDENCE EN GRAND */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 text-left">
            
            {/* CARTE 1 : LIEU DE LA MESSE (18:00) */}
            <div className="relative rounded-2xl p-5 sm:p-7 bg-gradient-to-b from-[#2B0E14] via-[#38141C] to-[#2B0E14] border-2 border-[#C8A45D] shadow-xl flex flex-col justify-between group hover:border-[#E3C77A] transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#71323A] text-[#FFEBA8] text-xs sm:text-sm font-sans font-bold uppercase tracking-wider border border-[#E3C77A]/70 shadow-sm">
                    <Church className="w-4 h-4 text-[#E3C77A]" />
                    <span>1. Messe à 18h00</span>
                  </span>
                  <span className="text-[11px] font-sans text-[#E3C77A] uppercase tracking-widest font-bold bg-[#1D080C] px-2.5 py-0.5 rounded-full border border-[#C8A45D]/40">
                    1ère Étape
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-[#E3C77A] font-sans block mb-1 font-semibold">
                  Célébration Religieuse d'Action de Grâces
                </span>

                {/* NOM DU LIEU DE LA MESSE EN TRÈS GRAND CARACTÈRE */}
                <h3 className="font-serif-cormorant text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#FFFDF8] mb-3 leading-tight drop-shadow-sm">
                  {EVENT_DETAILS.churchName}
                </h3>

                <div className="p-3 rounded-xl bg-[#200A0E]/90 border border-[#C8A45D]/40 mb-4">
                  <p className="text-xs sm:text-sm text-[#F7F2EA] font-sans flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#E3C77A] shrink-0 mt-0.5" />
                    <span><strong className="text-[#E3C77A]">Lieu :</strong> {EVENT_DETAILS.churchAddress}</span>
                  </p>
                </div>
              </div>

              <a
                href={EVENT_DETAILS.churchMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#71323A] hover:bg-[#83323C] text-[#FFEBA8] border border-[#E3C77A] font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all min-h-[44px] cursor-pointer shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#E3C77A]" />
                <span>Itinéraire GPS vers la Messe</span>
              </a>
            </div>

            {/* CARTE 2 : LIEU DE LA RÉCEPTION (DÈS 20:00) */}
            <div className="relative rounded-2xl p-5 sm:p-7 bg-gradient-to-b from-[#24090F] via-[#330F17] to-[#24090F] border-2 border-[#E3C77A] shadow-xl flex flex-col justify-between group hover:scale-[1.01] transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3C77A] text-[#24090F] text-xs sm:text-sm font-sans font-bold uppercase tracking-wider shadow-sm">
                    <Wine className="w-4 h-4 text-[#24090F]" />
                    <span>2. Réception dès 20h00</span>
                  </span>
                  <span className="text-[11px] font-sans text-[#E3C77A] uppercase tracking-widest font-bold bg-[#1D080C] px-2.5 py-0.5 rounded-full border border-[#E3C77A]/40">
                    2ème Étape
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-[#E3C77A] font-sans block mb-1 font-semibold">
                  Banquet, Toasts &amp; Soirée Festive
                </span>

                {/* NOM DU LIEU DE RÉCEPTION EN TRÈS GRAND CARACTÈRE */}
                <h3 className="font-serif-cormorant text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#FFE8A3] mb-3 leading-tight drop-shadow-md">
                  {EVENT_DETAILS.venueName}
                </h3>

                <div className="p-3 rounded-xl bg-[#1A060A]/90 border border-[#E3C77A]/40 mb-4">
                  <p className="text-xs sm:text-sm text-[#F7F2EA] font-sans flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#E3C77A] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FFE8A3]">Accès :</strong> {EVENT_DETAILS.venueAddress}</span>
                  </p>
                </div>
              </div>

              <a
                href={EVENT_DETAILS.venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#7B2E37] to-[#8E3642] hover:brightness-110 text-[#FFEBA8] border border-[#E3C77A] font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all min-h-[44px] cursor-pointer shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#E3C77A]" />
                <span>Itinéraire GPS vers {EVENT_DETAILS.venueName}</span>
              </a>
            </div>

          </div>

          {/* Compteur de jours restant en direct */}
          <div className="my-5">
            <CountdownTimer />
          </div>

          {/* Actions directes rapides */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none flex-wrap font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold">
            <a
              href="#rsvp"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7B2E37] via-[#8B343F] to-[#7B2E37] text-[#FFEBA8] border-2 border-[#E3C77A] shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer min-h-[46px] flex items-center justify-center text-center font-bold"
            >
              Confirmer Ma Présence (RSVP)
            </a>
            <a
              href="#lieux"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-[#200A0E] text-[#FFFDF8] border border-[#C8A45D] hover:border-[#E3C77A] hover:text-[#FFE8A3] hover:scale-105 active:scale-95 transition-all cursor-pointer min-h-[46px] flex items-center justify-center text-center shadow-md"
            >
              Voir le Détail des Lieux
            </a>
            <a
              href="#dress-code"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-full bg-[#FAF7F0] text-[#3E1017] border border-[#C8A45D] hover:bg-[#FFFFFF] hover:scale-105 active:scale-95 transition-all cursor-pointer min-h-[46px] flex items-center justify-center text-center shadow-md"
            >
              Dress Code : Blanc &amp; Chic
            </a>
          </div>

        </div>
      </div>

      {/* 3. CONFIRMER SA PRÉSENCE (RSVP) */}
      <FadeInUpSection id="rsvp-wrapper">
        <RSVPSection />
      </FadeInUpSection>

      {/* 4. LES 3 CÉLÉBRATIONS */}
      <FadeInUpSection id="evenement-wrapper">
        <EventOverviewSection />
      </FadeInUpSection>

      {/* 5. CODE VESTIMENTAIRE : DRESS CODE BLANC & CHIC */}
      <FadeInUpSection id="dress-code-wrapper">
        <DressCodeSection />
      </FadeInUpSection>

      {/* 6. LIEUX DU JOUR : LA MESSE PUIS LE LIEU DE RÉCEPTION */}
      <FadeInUpSection id="lieux-wrapper">
        <VenuesSection />
      </FadeInUpSection>

      {/* 7. PROGRAMME DE LA SOIRÉE CONTINUE */}
      <FadeInUpSection id="programme-wrapper">
        <EventProgram />
      </FadeInUpSection>

      {/* 8. FOOTER */}
      <Footer />

      {/* 9. LECTEUR DE MUSIQUE FLOTTANT */}
      <BackgroundMusicPlayer autoPlayTrigger={!isEnvelopeOpen} />
    </div>
  );
}
