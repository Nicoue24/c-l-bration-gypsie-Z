import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';
import luxuryEnvelopeImg from '../assets/images/luxury_tassel_envelope_1787917930376.jpg';
import { EVENT_DETAILS } from '../data/eventData';
import { AuthenticWaxSeal } from './AuthenticWaxSeal';

interface InvitationOpeningProps {
  isOpen: boolean;
  onOpened: () => void;
}

// Générateur de particules dorées pour l'effet d'éclatement
const PARTICLES = Array.from({ length: 18 }).map((_, i) => {
  const angle = (i * 360) / 18 + (Math.random() * 15 - 7.5);
  const distance = 70 + Math.random() * 85;
  const rad = (angle * Math.PI) / 180;
  return {
    id: i,
    x: Math.cos(rad) * distance,
    y: Math.sin(rad) * distance,
    scale: 0.6 + Math.random() * 0.7,
    duration: 0.55 + Math.random() * 0.3,
  };
});

// Générateur de fragments de cire brisée (shards)
const WAX_SHARDS = [
  { id: 1, x: -35, y: -25, rotate: -45, scale: 0.8, delay: 0.05 },
  { id: 2, x: 40, y: -30, rotate: 60, scale: 0.9, delay: 0.08 },
  { id: 3, x: -45, y: 20, rotate: -70, scale: 0.7, delay: 0.06 },
  { id: 4, x: 50, y: 25, rotate: 80, scale: 0.85, delay: 0.1 },
  { id: 5, x: -15, y: -45, rotate: -25, scale: 0.6, delay: 0.04 },
  { id: 6, x: 20, y: 45, rotate: 40, scale: 0.75, delay: 0.09 },
];

// Synthétiseur de son : Craquement physique de cire + Carillon doré
const playWaxCrackAndChime = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    // 1. Bruit blanc court filtré pour imiter le craquement sec du cachet de cire ("snap/crack")
    const bufferSize = Math.floor(ctx.sampleRate * 0.08);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(3.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.28, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    whiteNoise.start(now);

    // 2. Accord d'arpège doré cristallin
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.06 + i * 0.08);
      gain.gain.setValueAtTime(0.0001, now + 0.06 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.08, now + 0.06 + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06 + i * 0.08 + 0.85);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + 0.06 + i * 0.08);
      osc.stop(now + 0.06 + i * 0.08 + 0.9);
    });
  } catch {
    // Ignore
  }
};

export const InvitationOpening: React.FC<InvitationOpeningProps> = ({ isOpen, onOpened }) => {
  // Étapes de l'animation : 'idle' | 'unsealing' | 'opening' | 'emerging' | 'done'
  const [animStage, setAnimStage] = useState<'idle' | 'unsealing' | 'opening' | 'emerging' | 'done'>('idle');

  // Bloquer le scroll tant que l'invitation est fermée et réinitialiser l'état à chaque ouverture
  useEffect(() => {
    if (isOpen) {
      setAnimStage('idle');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpenEnvelope = () => {
    if (animStage !== 'idle' || !isOpen) return;

    // Déclenchement du retour haptique
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([40, 60, 40]);
      } catch {
        // Ignore
      }
    }

    playWaxCrackAndChime();

    // Étape 1 : Bris physique du sceau & étincelles (cracking & fracture)
    setAnimStage('unsealing');

    // Étape 2 : Ouverture du rabat après la brisure
    setTimeout(() => {
      setAnimStage('opening');
    }, 180);

    // Étape 3 : Émergence et mise en avant de la carte d'invitation
    setTimeout(() => {
      setAnimStage('emerging');
    }, 420);

    // Étape 4 : Fondu fluide et immédiat vers la page d'accueil
    setTimeout(() => {
      setAnimStage('done');
      onOpened();
    }, 780);
  };

  const handleFastSkip = () => {
    setAnimStage('done');
    onOpened();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="invitation-opening-overlay"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#14080B]/95 backdrop-blur-md text-[#352528] px-3 py-3 sm:py-6 overflow-y-auto overscroll-contain select-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #291218 0%, #0F0305 100%)',
          }}
        >
        {/* Bouton fermeture instantanée / passer en haut à droite */}
        <button
          onClick={handleFastSkip}
          className="fixed top-2.5 right-2.5 xs:top-3 xs:right-3 sm:top-4 sm:right-4 z-50 px-3 xs:px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/75 text-[#E3C77A] text-[11px] xs:text-xs font-serif-cormorant tracking-widest uppercase border border-[#E3C77A]/40 backdrop-blur-sm transition-all duration-150 cursor-pointer shadow-lg active:scale-95 flex items-center gap-1.5"
          title="Accéder directement au site"
        >
          <span>Passer</span>
          <span>✕</span>
        </button>

        <div className="w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px] mx-auto my-auto flex flex-col items-center justify-center relative py-2 sm:py-4">
          
          {/* PHRASE D'ACCUEIL AU-DESSUS DE L'ENVELOPPE (Subtile, fondue dans le décor et parfaitement lisible) */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: animStage === 'idle' ? 1 : 0, y: animStage === 'idle' ? 0 : -8 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-2.5 xs:mb-3 sm:mb-4 px-2 w-full flex flex-col items-center pointer-events-none"
          >
            <div className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3.5 xs:px-5 py-1 xs:py-1.5 rounded-full bg-[#180A0E]/70 backdrop-blur-md border border-[#E3C77A]/30 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#E3C77A]/90 shrink-0" />
              <span className="font-serif-cormorant font-semibold uppercase tracking-[0.2em] xs:tracking-[0.24em] text-[11px] xs:text-xs sm:text-[13px] text-[#FFE8A3] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
                Vous êtes attendu à la première
              </span>
              <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#E3C77A]/90 shrink-0" />
            </div>
          </motion.div>

          {/* CONTENEUR PRINCIPAL DE L'ENVELOPPE ET DE LA CARTE ÉMERGENTE */}
          <div className="relative z-20 w-full flex flex-col items-center justify-center">
            
            {/* CARTE D'INVITATION INTERNE QUI SORT DE L'ENVELOPPE */}
            <motion.div
              initial={{ y: 15, scale: 0.85, opacity: 0 }}
              animate={
                animStage === 'emerging' || animStage === 'done'
                  ? { y: -65, scale: 1.02, opacity: 1 }
                  : animStage === 'opening'
                  ? { y: -20, scale: 0.93, opacity: 0.95 }
                  : { y: 15, scale: 0.85, opacity: 0 }
              }
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="absolute z-30 w-[90%] xs:w-[92%] sm:w-[94%] max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(200,164,93,0.5)] border-2 border-[#C8A45D] bg-[#FFFDF8] pointer-events-none p-1 sm:p-1.5"
              style={{
                top: '2%',
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#2D161A] via-[#381B20] to-[#2D161A] text-[#FFFDF8] p-5 sm:p-7 border border-[#C8A45D]/60 text-center flex flex-col items-center justify-center min-h-[220px] xs:min-h-[260px] sm:min-h-[290px]">
                <div className="w-12 h-12 rounded-full bg-[#71323A] border-2 border-[#E3C77A] flex items-center justify-center mb-2 shadow-lg">
                  <span className="font-serif-cormorant font-bold text-[#E3C77A] text-lg">G&amp;G</span>
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E3C77A] font-semibold mb-1">
                  Invitation d'Honneur
                </span>
                <h3 className="font-serif-cormorant text-2xl xs:text-3xl font-light italic text-[#FFFDF8] mb-1">
                  Gypsy &amp; Grégoire
                </h3>
                <div className="w-16 h-px bg-[#C8A45D]/60 my-2" />
                <p className="font-serif-cormorant text-base sm:text-lg text-[#FFE8A3] font-bold uppercase tracking-wider mb-2">
                  {EVENT_DETAILS.eventDate}
                </p>
                
                {/* Lieux officiels de la messe et de la réception bien visibles */}
                <div className="w-full bg-[#1A070B]/90 border border-[#C8A45D]/70 rounded-xl p-2.5 sm:p-3 my-1 space-y-2 text-center shadow-md">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#E3C77A] font-semibold block font-sans">
                      18H00 • MESSE D'ACTION DE GRÂCES
                    </span>
                    <span className="text-xs sm:text-sm font-serif-cormorant font-bold uppercase tracking-wide text-[#FFFDF8] block">
                      {EVENT_DETAILS.churchName}
                    </span>
                  </div>
                  <div className="h-px bg-[#C8A45D]/40 w-2/3 mx-auto" />
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#E3C77A] font-semibold block font-sans">
                      DÈS 20H00 • GRANDE RÉCEPTION
                    </span>
                    <span className="text-xs sm:text-sm font-serif-cormorant font-bold uppercase tracking-wide text-[#FFEBA8] block">
                      {EVENT_DETAILS.venueName}
                    </span>
                  </div>
                </div>

                {/* Lueur d'or sur la carte émergente */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: animStage === 'emerging' ? [0, 0.7, 0] : 0 }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>

            {/* BOÎTIER PHYSIQUE DE L'ENVELOPPE (COUVRANT ROYALE ET GÉNÉREUSEMENT, PARFAITEMENT CENTRÉ MOBILE ET DESKTOP) */}
            <motion.div
              onClick={handleOpenEnvelope}
              animate={
                animStage === 'emerging' || animStage === 'done'
                  ? { scale: 0.96, y: 35, opacity: 0.75 }
                  : animStage === 'opening'
                  ? { scale: 0.98, y: 10, opacity: 0.95 }
                  : animStage === 'unsealing'
                  ? { scale: 1.02, y: 0, opacity: 1 }
                  : { scale: 1, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full aspect-[4/3] max-h-[58vh] xs:max-h-[62vh] sm:max-h-[66vh] md:max-h-[70vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(200,164,93,0.3)] border-2 border-[#C8A45D]/90 cursor-pointer group bg-[#180A0E] flex items-center justify-center touch-manipulation"
            >
              {/* Image haute fidélité de l'enveloppe de luxe couvrant 100% de la surface */}
              <img
                src={luxuryEnvelopeImg}
                alt="Enveloppe Royale de Luxe avec Ruban et Pompons"
                className={`relative z-0 w-full h-full object-cover block pointer-events-none transition-transform duration-700 select-none ${
                  animStage === 'opening' || animStage === 'emerging' ? 'brightness-90' : ''
                }`}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />

              {/* INSCRIPTION CALLIGRAPHIQUE NETTE ET TRÈS LISIBLE SUR LE RABAT IVOIRE */}
              <div
                className="absolute top-[28%] left-[29%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-center z-10"
                style={{
                  transform: 'translate(-50%, -50%) rotate(-32deg)',
                }}
              >
                <div className="flex flex-col items-center leading-none p-1 xs:p-1.5 rounded-lg bg-[#FAF6EE]/85 backdrop-blur-[2px] shadow-xs border border-[#C8A45D]/30">
                  <span
                    className="font-serif-cormorant font-bold uppercase tracking-[0.22em] text-[12px] xs:text-[14px] sm:text-[17px] text-[#4A0F17]"
                    style={{
                      textShadow: '0 1px 2px rgba(255,255,255,1), 0 0 2px rgba(200,164,93,0.4)',
                    }}
                  >
                    20 ANS
                  </span>
                  <span
                    className="font-script text-[18px] xs:text-[22px] sm:text-[26px] text-[#631823] font-normal leading-tight tracking-wider -mt-0.5 xs:-mt-1"
                    style={{
                      textShadow: '0 1px 2px rgba(255,255,255,1), 0 0 3px rgba(200,164,93,0.5)',
                    }}
                  >
                    de Grâce
                  </span>
                  <div className="w-8 xs:w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent mt-0.5" />
                </div>
              </div>



              {/* EFFET D'OUVERTURE DE RABAT 3D */}
              {animStage !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 1 }}
                  animate={{
                    opacity: animStage === 'unsealing' ? 0.3 : 1,
                    scaleY: animStage === 'opening' || animStage === 'emerging' ? 0 : 1,
                  }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#FAF6EE] to-[#EFE7D8] border-b-2 border-[#C8A45D]/80 pointer-events-none origin-top shadow-inner"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 80% 90%, 50% 100%, 20% 90%)',
                  }}
                />
              )}

              {/* ZONE DU SCEAU DE CIRE DISCRET & RAFFINÉ AVEC ANIMATION DE BRISURE RÉALISTE */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <div className="relative w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 flex items-center justify-center">
                  
                  {/* Halo subtil de pulsation dorée en attente */}
                  {animStage === 'idle' && (
                    <>
                      <motion.span
                        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.65, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        className="absolute inset-0 rounded-full border border-[#FFEBA8]/80 pointer-events-none shadow-[0_0_12px_rgba(227,199,122,0.6)]"
                      />
                    </>
                  )}

                  {/* 1. MOITIÉ GAUCHE DU SCEAU AUTHENTIQUE (Fracture & Séparation discrète) */}
                  <motion.div
                    initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
                    animate={
                      animStage === 'idle'
                        ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
                        : {
                            x: -22,
                            y: 6,
                            rotate: -20,
                            opacity: 0,
                            scale: 0.9,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <AuthenticWaxSeal 
                      size={64}
                      split="left"
                      showDualG={true}
                    />
                  </motion.div>

                  {/* 2. MOITIÉ DROITE DU SCEAU AUTHENTIQUE (Fracture & Séparation discrète) */}
                  <motion.div
                    initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
                    animate={
                      animStage === 'idle'
                        ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
                        : {
                            x: 22,
                            y: 5,
                            rotate: 18,
                            opacity: 0,
                            scale: 0.9,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <AuthenticWaxSeal 
                      size={64}
                      split="right"
                      showDualG={true}
                    />
                  </motion.div>

                  {/* 3. LIGNE D'ÉCLAIR DE FISSURE / CRAQUELURE CENTRALE */}
                  {animStage === 'unsealing' && (
                    <motion.svg
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1.05, 1.1] }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute w-12 h-12 pointer-events-none z-40"
                      viewBox="0 0 100 100"
                    >
                      {/* Trait de fissure éclairante */}
                      <path
                        d="M 52 2 L 48 30 L 56 50 L 46 74 L 53 98"
                        stroke="#FFFAD4"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        filter="drop-shadow(0px 0px 4px #FFEBA8)"
                      />
                    </motion.svg>
                  )}

                  {/* 4. ÉJECTION DE FRAGMENTS ET ÉCLATS DE CIRE */}
                  {animStage !== 'idle' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                      {WAX_SHARDS.map((shard) => (
                        <motion.div
                          key={shard.id}
                          initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0 }}
                          animate={{
                            x: shard.x * 1.2,
                            y: shard.y * 1.2,
                            rotate: shard.rotate * 1.5,
                            opacity: [0, 1, 0],
                            scale: shard.scale,
                          }}
                          transition={{ duration: 0.45, delay: shard.delay, ease: 'easeOut' }}
                          className="absolute w-3 h-3 bg-gradient-to-tr from-[#8C6418] via-[#DDB657] to-[#FFF3C2] rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                          style={{
                            clipPath: 'polygon(30% 0%, 100% 20%, 75% 100%, 0% 80%)',
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* 5. ÉCLATEMENT DE PARTICULES DORÉES & ONDE DE CHOC */}
                  {animStage !== 'idle' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      {PARTICLES.map((p) => (
                        <motion.div
                          key={p.id}
                          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                          animate={{
                            x: p.x,
                            y: p.y,
                            opacity: 0,
                            scale: p.scale,
                          }}
                          transition={{ duration: p.duration, ease: 'easeOut' }}
                          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FFEBA8] to-[#C8A45D] shadow-[0_0_8px_#FFEBA8]"
                        />
                      ))}
                      
                      {/* Onde de choc lumineuse centrale */}
                      <motion.div
                        initial={{ scale: 0.4, opacity: 1 }}
                        animate={{ scale: 2.6, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="absolute w-16 h-16 rounded-full bg-radial from-[#FFEBA8]/90 to-transparent shadow-[0_0_45px_#FFEBA8]"
                      />
                    </div>
                  )}

                  {/* Bouton d'indication d'accessibilité */}
                  <span className="sr-only">Cliquer sur le sceau pour ouvrir l'invitation</span>
                </div>
              </div>
            </motion.div>



          </div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};



