import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MailOpen, Sparkles, Church, Clock, CheckCircle, Shirt } from 'lucide-react';

interface HeaderNavProps {
  onReopenInvite: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onReopenInvite }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('evenement');
  const tickingRef = useRef(false);

  const isScrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          if (scrolled !== isScrolledRef.current) {
            isScrolledRef.current = scrolled;
            setIsScrolled(scrolled);
          }
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // High-performance section tracking
  useEffect(() => {
    const sections = ['hero', 'rsvp', 'evenement', 'dress-code', 'lieux', 'programme'];
    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topId = visibleEntries[0].target.id;
          if (topId === 'hero') {
            setActiveSection('evenement');
          } else {
            setActiveSection(topId);
          }
        }
      },
      {
        rootMargin: '-70px 0px -40% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'RSVP', href: '#rsvp', id: 'rsvp', icon: CheckCircle },
    { name: 'Événement', href: '#evenement', id: 'evenement', icon: Sparkles },
    { name: 'Dress Code', href: '#dress-code', id: 'dress-code', icon: Shirt },
    { name: 'Lieux & Messe', href: '#lieux', id: 'lieux', icon: Church },
    { name: 'Programme', href: '#programme', id: 'programme', icon: Clock },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#381B20]/95 text-[#FFFDF8] border-b border-[#C8A45D]/40 shadow-xl backdrop-blur-md py-2 sm:py-2.5' 
        : 'bg-gradient-to-b from-[#381B20]/95 via-[#381B20]/80 to-transparent text-[#FFFDF8] py-2.5 sm:py-3.5'
    }`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2">
        {/* Monogram Logo */}
        <a href="#hero" className="flex items-center gap-2 group min-h-[44px] shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#71323A] border border-[#C8A45D] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-sm">
            <span className="font-serif-cormorant font-bold text-[#E3C77A] text-xs">G&amp;G</span>
          </div>
          <span className="font-serif-cormorant text-sm sm:text-base tracking-wider text-[#FFFDF8] font-semibold truncate max-w-[110px] xs:max-w-none">
            Gypsy &amp; Grégoire
          </span>
        </a>

        {/* Onglets Fixes de Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-xs font-sans tracking-wider uppercase font-medium bg-[#2B1418]/70 p-1 rounded-full border border-[#C8A45D]/30 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 lg:px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer min-h-[34px] flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#642931] to-[#76363D] text-[#E3C77A] border border-[#C8A45D] font-semibold shadow-md'
                    : 'text-[#FFFDF8]/85 hover:text-[#E3C77A] hover:bg-white/10'
                }`}
              >
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions & Bouton Faire-Part */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onReopenInvite}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#71323A] text-[#E3C77A] border border-[#C8A45D]/70 text-[10px] sm:text-xs font-sans tracking-wider uppercase hover:bg-[#7A3038] active:scale-95 transition-all shadow-md cursor-pointer min-h-[38px]"
            title="Rouvrir l'invitation royale"
          >
            <MailOpen className="w-3.5 h-3.5 text-[#E3C77A] shrink-0" />
            <span className="font-semibold">Invitation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#E3C77A] hover:text-[#FFFDF8] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg active:bg-[#71323A]/50 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Onglets de Navigation Mobile / Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#381B20] border-b border-[#C8A45D]/40 px-4 py-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="grid grid-cols-2 gap-2 font-sans text-xs tracking-wider uppercase text-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-3 rounded-xl border transition-all min-h-[44px] flex items-center justify-center gap-2 font-medium ${
                    isActive
                      ? 'bg-[#71323A] text-[#E3C77A] border-[#C8A45D]'
                      : 'text-[#FFFDF8] border-[#C8A45D]/30 hover:border-[#C8A45D]/60 bg-[#2B1418]/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#E3C77A] shrink-0" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
