import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Calendar } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(EVENT_DETAILS.eventIsoDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isCompleted: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <div 
      className="w-full max-w-xl mx-auto my-4 sm:my-6" 
      aria-label="Compte à rebours jusqu'à l'événement"
    >
      {/* Bandeau supérieur de compte à rebours */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
        <Clock className="w-3.5 h-3.5 text-[#E3C77A]" />
        <span className="font-sans text-[10px] xs:text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#FFE8A3] drop-shadow-xs">
          {timeLeft.isCompleted ? "Le Grand Jour est Arrivé !" : "Compte à Rebours avant la Célébration"}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#E3C77A]" />
      </div>

      {/* Grille des 4 blocs de temps */}
      <div className="grid grid-cols-4 gap-1.5 xs:gap-2.5 sm:gap-3.5">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="relative flex flex-col items-center justify-center p-2 xs:p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#280F14]/95 via-[#1E0A0E]/95 to-[#280F14]/95 border border-[#C8A45D]/70 shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(227,199,122,0.3)] backdrop-blur-xs group hover:border-[#E3C77A] transition-all duration-300"
          >
            {/* Lueur dorée subtile en arrière-plan */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-[#C8A45D]/5 group-hover:bg-[#C8A45D]/10 pointer-events-none transition-colors" />

            {/* Chiffre */}
            <span className="font-serif-cormorant font-medium text-2xl xs:text-3xl sm:text-4xl text-[#FFFDF8] tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {String(unit.value).padStart(2, '0')}
            </span>

            {/* Séparateur miniature */}
            <div className="w-4 xs:w-6 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D]/60 to-transparent my-1 sm:my-1.5" />

            {/* Libellé */}
            <span className="font-sans text-[9px] xs:text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-[#FFE8A3]/90 leading-tight">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Date rappel solennelle sous le compteur */}
      <div className="mt-2.5 sm:mt-3 flex items-center justify-center gap-1.5 text-center">
        <Calendar className="w-3 h-3 text-[#C8A45D]/80" />
        <span className="font-sans text-[11px] sm:text-xs text-[#F5EFE4]/80">
          Rendez-vous le {EVENT_DETAILS.eventDate} à {EVENT_DETAILS.churchTime}
        </span>
      </div>
    </div>
  );
};
