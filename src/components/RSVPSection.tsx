import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, User, Phone, Users, Plus, Minus, MessageSquare, Edit3, Baby, AlertCircle, HeartHandshake, UserPlus, RotateCcw } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { CornerFloral } from './RealisticFloralDecor';

export const RSVPSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [contact, setContact] = useState('');
  
  // Choix de présence : null au départ, cliquable pour confirmer la présence
  const [attending, setAttending] = useState<'yes' | null>(null);

  // Modalité de venue adulte : null au départ, l'invité choisit explicitement 'solo' ou 'couple'
  const [attendanceType, setAttendanceType] = useState<'solo' | 'couple' | null>(null);
  const [companionName, setCompanionName] = useState('');

  // Enfants
  const [hasChildren, setHasChildren] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);

  // Message & État
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formKey, setFormKey] = useState(0);

  // Accompagnateurs (Conjoint + Enfants sans limite)
  const accompanyingAdults = attendanceType === 'couple' ? 1 : 0;
  const accompanyingChildren = hasChildren ? childrenCount : 0;
  const totalAccompanying = accompanyingAdults + accompanyingChildren;
  const totalGuests = 1 + totalAccompanying; // Invité principal + accompagnateurs

  // Fonction pour réinitialiser complètement le formulaire à l'état neutre (nouveau convive)
  const handleResetForNewGuest = () => {
    setGuestName('');
    setContact('');
    setAttending(null);
    setAttendanceType(null);
    setCompanionName('');
    setHasChildren(false);
    setChildrenCount(0);
    setNote('');
    setErrorMessage('');
    setSubmitted(false);
    setFormKey((prev) => prev + 1); // Force le re-montage propre et vierge du DOM
  };

  useEffect(() => {
    // Si la page est restaurée depuis l'historique ou le cache (bfcache), garantir un formulaire neutre
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        handleResetForNewGuest();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestName.trim()) {
      setErrorMessage("Veuillez renseigner votre nom et prénom (invité principal ayant reçu la carte).");
      return;
    }

    if (!attending) {
      setErrorMessage("Veuillez cliquer sur « Oui, avec joie ! » pour confirmer votre présence.");
      return;
    }

    if (!attendanceType) {
      setErrorMessage("Veuillez préciser si vous venez seul(e) ou en couple.");
      return;
    }

    if (attendanceType === 'couple' && !companionName.trim()) {
      setErrorMessage("Puisque vous venez en couple, veuillez inscrire le nom et prénom de la personne avec qui vous venez.");
      return;
    }

    setErrorMessage('');

    const rsvpEntry = {
      guestName: guestName.trim(),
      contact: contact.trim(),
      attending: 'yes' as const,
      attendanceType: attendanceType || 'solo',
      companionName: attendanceType === 'couple' ? companionName.trim() : undefined,
      hasChildren,
      childrenCount: hasChildren ? childrenCount : 0,
      totalAccompanying,
      totalGuests,
      note: note.trim(),
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('digital_invitation_rsvp') || '[]');
      existing.push(rsvpEntry);
      localStorage.setItem('digital_invitation_rsvp', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-14 sm:py-20 md:py-28 px-3 sm:px-6 bg-[#FFFDF8] text-[#352528] overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      
      {/* Subtle Corner Floral Accent */}
      <CornerFloral position="bottom-left" size="md" className="opacity-25 sm:opacity-35 z-0 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* En-tête */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 px-2 relative z-10">
          <span className="inline-block text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#C8A45D] font-sans font-semibold mb-2 bg-[#F7F2EA] px-3.5 py-1 rounded-full border border-[#C8A45D]/30">
            Réponse Souhaitée Avant le 15 Octobre 2026
          </span>

          <h2 className="font-serif-cormorant text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-normal italic text-[#71323A] mb-2 sm:mb-3 leading-tight tracking-tight">
            Confirmation de Présence
          </h2>

          <p className="font-serif-cormorant text-base sm:text-lg md:text-xl text-[#352528]/80 italic">
            Enregistrez votre réponse pour nous permettre de préparer au mieux votre accueil.
          </p>

          <OrnamentalDivider variant="gold" className="mt-3 sm:mt-4 max-w-xs mx-auto" />
        </div>

        {/* Carte RSVP */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-10 border-[0.5px] border-[#C8A45D] shadow-2xl relative z-20 overflow-hidden"
          style={{ boxShadow: '0 15px 50px rgba(113, 50, 58, 0.08)' }}
        >
          {/* Fine Inner Double Gold Line */}
          <div className="absolute inset-2.5 sm:inset-4 rounded-xl sm:rounded-2xl border-[1.5px] border-[#C8A45D]/40 pointer-events-none" />

          {submitted ? (
            /* RÉSUMÉ DÉTAILLÉ DE LA CONFIRMATION */
            <div className="py-4 sm:py-6 px-1 sm:px-4 relative z-10 text-left">
              
              <div className="text-center mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#71323A] text-[#E3C77A] flex items-center justify-center mx-auto mb-3 border border-[#C8A45D] shadow-md">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <span className="inline-block px-3 py-0.5 rounded-full bg-[#F7F2EA] text-[#71323A] border border-[#C8A45D]/40 font-serif-cormorant text-xs uppercase tracking-widest font-bold mb-1">
                  Enregistrement Confirmé
                </span>

                <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#71323A]">
                  Résumé de votre Réservation
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#352528]/70 font-light mt-1">
                  Merci {guestName}, votre réponse a bien été enregistrée pour Gypsy &amp; Grégoire.
                </p>
              </div>

              {/* Fiche récapitulative structurée */}
              <div className="rounded-2xl bg-[#FFFDF8] border border-[#C8A45D]/50 p-4 sm:p-6 shadow-sm space-y-4 font-sans text-xs sm:text-sm">
                
                {/* Statut & Nombre de places */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#C8A45D]/20 gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block">Statut de Présence</span>
                    <span className="font-serif-cormorant text-base sm:text-lg font-bold text-[#71323A]">
                      Présence Confirmée avec Joie
                    </span>
                  </div>
                  <div className="sm:text-right flex flex-col sm:items-end gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block">Total Convives Prévus</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#352528] bg-[#F7F2EA] px-2.5 py-1 rounded-lg border border-[#C8A45D]/30">
                      <Users className="w-3.5 h-3.5 text-[#71323A]" />
                      {totalGuests} personne{totalGuests > 1 ? 's' : ''}
                    </span>
                    <span className="text-[11px] text-[#71323A]/80">
                      (Vous + {totalAccompanying} accompagnateur{totalAccompanying > 1 ? 's' : ''})
                    </span>
                  </div>
                </div>

                {/* Coordonnées */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#C8A45D]/20">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block">Invité Principal</span>
                    <span className="font-medium text-[#352528]">{guestName}</span>
                  </div>
                  {contact && (
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block">Contact</span>
                      <span className="font-medium text-[#352528]">{contact}</span>
                    </div>
                  )}
                </div>

                {/* Accompagnateurs */}
                {attending === 'yes' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#C8A45D]/20">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block">Formule Adultes</span>
                      <span className="font-medium text-[#352528]">
                        {attendanceType === 'couple' ? (
                          <>En couple avec <strong className="text-[#71323A]">{companionName}</strong></>
                        ) : (
                          'Seul(e) (Sans conjoint accompagnateur)'
                        )}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block">Enfants Accompagnants</span>
                      <span className="font-medium text-[#352528]">
                        {hasChildren && childrenCount > 0 ? (
                          `${childrenCount} enfant${childrenCount > 1 ? 's' : ''}`
                        ) : (
                          'Aucun enfant'
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {/* Message */}
                {note && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] block mb-1">
                      Votre Message pour Gypsy &amp; Grégoire
                    </span>
                    <p className="text-xs text-[#352528] italic bg-[#F7F2EA]/80 p-2.5 rounded-lg border border-[#C8A45D]/20">
                      « {note} »
                    </p>
                  </div>
                )}

              </div>

              {/* Actions post-enregistrement : Enregistrer un autre invité ou Modifier */}
              <div className="pt-6 border-t border-[#C8A45D]/30 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetForNewGuest}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#71323A] via-[#853C46] to-[#71323A] text-[#E3C77A] border-2 border-[#C8A45D] text-xs sm:text-sm font-sans uppercase tracking-wider font-bold hover:brightness-110 transition-all cursor-pointer min-h-[48px] shadow-lg"
                >
                  <UserPlus className="w-4 h-4 text-[#E3C77A]" />
                  <span>Enregistrer un autre invité</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F7F2EA] text-[#71323A] border border-[#C8A45D]/50 text-xs font-sans uppercase tracking-wider font-semibold hover:bg-white transition-colors cursor-pointer min-h-[44px]"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#71323A]" />
                  <span>Modifier cette réponse</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-[#352528]/60 font-sans">
                Pour inscrire une autre personne, cliquez sur « Enregistrer un autre invité » pour obtenir un formulaire vierge et neutre.
              </p>

            </div>
          ) : (
            /* FORMULAIRE DE SAISIE INTERACTIF ET GUIDÉ */
            <form
              key={formKey}
              onSubmit={handleSubmit}
              autoComplete="off"
              className="space-y-5 sm:space-y-6 relative z-10"
            >
              
              {/* Message d'erreur */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. ÉTAPE 1 : NOM DE L'INVITÉ & CONTACT */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#71323A] text-[#E3C77A] text-[11px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span className="text-xs font-sans uppercase tracking-wider font-bold text-[#71323A]">
                      Votre Identité (Invité ayant reçu la carte)
                    </span>
                  </div>

                  {(guestName || contact || attending !== null) && (
                    <button
                      type="button"
                      onClick={handleResetForNewGuest}
                      className="inline-flex items-center gap-1 text-[11px] text-[#71323A] hover:text-[#7A3038] underline underline-offset-2 transition-colors cursor-pointer font-medium bg-white/80 px-2 py-0.5 rounded border border-[#C8A45D]/30 shadow-2xs"
                      title="Effacer et réinitialiser vers un formulaire neutre"
                    >
                      <RotateCcw className="w-3 h-3 text-[#C8A45D]" />
                      <span>Formulaire neutre</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 font-sans">
                  <div>
                    <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#71323A] mb-1.5">
                      Nom &amp; Prénom(s) *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name={`guest_fullname_${formKey}`}
                        required
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck={false}
                        placeholder="Ex: Jean-Baptiste Agossa"
                        value={guestName}
                        onChange={(e) => {
                          setGuestName(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F2EA]/70 border border-[#C8A45D]/40 text-[#352528] focus:outline-none focus:border-[#71323A] text-base sm:text-sm min-h-[48px] font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#71323A] mb-1.5">
                      Téléphone ou E-mail (facultatif)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name={`guest_contact_${formKey}`}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck={false}
                        placeholder="Pour vous joindre si besoin"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F2EA]/70 border border-[#C8A45D]/40 text-[#352528] focus:outline-none focus:border-[#71323A] text-base sm:text-sm min-h-[48px] font-sans"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. ÉTAPE 2 : CONFIRMATION DE PRÉSENCE */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#71323A] text-[#E3C77A] text-[11px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="text-xs font-sans uppercase tracking-wider font-bold text-[#71323A]">
                    Confirmez votre présence pour célébrer ce triple jubilé *
                  </span>
                </div>

                <div>
                  {/* Bouton OUI AVEC JOIE */}
                  <button
                    type="button"
                    onClick={() => {
                      setAttending('yes');
                      setErrorMessage('');
                    }}
                    className={`w-full p-4 rounded-xl border text-center transition-all cursor-pointer min-h-[54px] flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider ${
                      attending === 'yes'
                        ? 'bg-[#71323A] text-[#E3C77A] border-[#C8A45D] shadow-lg ring-2 ring-[#C8A45D]/40 scale-[1.005]'
                        : 'bg-[#F7F2EA]/80 text-[#71323A] border-[#C8A45D]/50 hover:border-[#C8A45D] hover:bg-[#F7F2EA]'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 ${attending === 'yes' ? 'text-[#E3C77A]' : 'text-[#71323A]'}`} />
                    <span>Oui, avec joie !</span>
                  </button>
                </div>
              </div>

              {/* 3. ÉTAPE 3 : SI OUI, AVEC JOIE -> PRÉCISER SI VENUE SEUL(E) OU EN COUPLE, ET SI EN COUPLE INSCRIRE LE NOM */}
              <AnimatePresence>
                {attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-4 pt-3 overflow-hidden"
                  >
                    {/* Bannière de transition invitant à continuer */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#FAF7F0] via-[#FFFDF8] to-[#FAF7F0] border border-[#C8A45D]/60 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 font-sans shadow-xs">
                      <div className="flex items-center gap-2 text-xs text-[#71323A]">
                        <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#FFFDF8] text-[11px] font-bold flex items-center justify-center shrink-0">
                          3
                        </span>
                        <span>
                          <strong className="font-semibold text-[#71323A]">Précisez votre venue :</strong> Indiquez si vous venez seul(e) ou en couple, et mentionnez vos enfants (sans limite de nombre).
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#71323A] bg-white px-2.5 py-1 rounded-lg border border-[#C8A45D]/40 shrink-0">
                        {totalGuests} convive{totalGuests > 1 ? 's' : ''} au total
                      </span>
                    </div>

                    {/* Grille : ADULTES (Seul ou en couple) & ENFANTS À CÔTÉ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      
                      {/* COLONNE 1 : ADULTE / ACCOMPAGNATEUR : SEUL OU EN COUPLE */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F2EA]/80 border-2 border-[#C8A45D]/50 flex flex-col justify-between space-y-4 font-sans shadow-sm">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <label className="block text-xs font-sans tracking-wider uppercase font-bold text-[#71323A]">
                              Venez-vous seul(e) ou en couple ? *
                            </label>
                            <span className="text-[10px] text-[#71323A] font-semibold bg-white px-2 py-0.5 rounded border border-[#C8A45D]/30">
                              Adulte
                            </span>
                          </div>

                          <p className="text-[11px] text-[#352528]/70 mb-3">
                            Cliquez sur l'option de votre choix ci-dessous :
                          </p>
                          
                          {/* Boutons Seul(e) ou En couple */}
                          <div className="grid grid-cols-2 gap-2.5">
                            <button
                              type="button"
                              onClick={() => {
                                setAttendanceType('solo');
                                setCompanionName('');
                                setErrorMessage('');
                              }}
                              className={`p-3 sm:p-3.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 min-h-[64px] ${
                                attendanceType === 'solo'
                                  ? 'bg-[#71323A] text-[#E3C77A] border-[#C8A45D] shadow-md ring-2 ring-[#C8A45D]/40 scale-[1.01]'
                                  : 'bg-white text-[#352528] border-[#C8A45D]/40 hover:border-[#C8A45D]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 text-xs font-bold uppercase">
                                <User className="w-4 h-4" />
                                <span>Seul(e)</span>
                              </div>
                              <span className={`text-[10px] ${attendanceType === 'solo' ? 'text-[#E3C77A]/80' : 'text-[#352528]/60'}`}>
                                Sans conjoint
                              </span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setAttendanceType('couple');
                                setErrorMessage('');
                              }}
                              className={`p-3 sm:p-3.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 min-h-[64px] ${
                                attendanceType === 'couple'
                                  ? 'bg-[#71323A] text-[#E3C77A] border-[#C8A45D] shadow-md ring-2 ring-[#C8A45D]/40 scale-[1.01]'
                                  : 'bg-white text-[#352528] border-[#C8A45D]/40 hover:border-[#C8A45D]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 text-xs font-bold uppercase">
                                <HeartHandshake className="w-4 h-4" />
                                <span>En couple</span>
                              </div>
                              <span className={`text-[10px] ${attendanceType === 'couple' ? 'text-[#E3C77A]/80' : 'text-[#352528]/60'}`}>
                                Avec accompagnateur
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* SI EN COUPLE : DEMANDER D'INSCRIRE LE NOM DE LA PERSONNE AVEC QUI IL VIENT */}
                        {attendanceType === 'couple' && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="pt-3 border-t border-[#C8A45D]/30"
                          >
                            <label className="block text-[11px] font-sans tracking-wider uppercase font-bold text-[#71323A] mb-1.5">
                              Inscrivez le nom de la personne qui vous accompagne *
                            </label>
                            <div className="relative">
                              <User className="w-3.5 h-3.5 text-[#C8A45D] absolute left-3 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                name={`companion_fullname_${formKey}`}
                                required
                                autoFocus
                                autoComplete="off"
                                autoCorrect="off"
                                spellCheck={false}
                                placeholder="Nom et Prénom de votre conjoint(e)"
                                value={companionName}
                                onChange={(e) => {
                                  setCompanionName(e.target.value);
                                  if (errorMessage) setErrorMessage('');
                                }}
                                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border-2 border-[#C8A45D]/60 text-[#352528] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#71323A] min-h-[44px] shadow-inner"
                              />
                            </div>
                            <span className="text-[10px] text-[#71323A] font-medium mt-1.5 block">
                              Ce nom figurera sur le plan de table et la liste d'accueil.
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* COLONNE 2 : ENFANTS À CÔTÉ */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F2EA]/80 border-2 border-[#C8A45D]/50 flex flex-col justify-between space-y-4 font-sans shadow-sm">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <label className="block text-xs font-sans tracking-wider uppercase font-bold text-[#71323A]">
                              Venez-vous avec des enfants ?
                            </label>
                            <span className="text-[10px] text-[#71323A] font-semibold bg-white px-2 py-0.5 rounded border border-[#C8A45D]/30">
                              Enfants
                            </span>
                          </div>

                          <p className="text-[11px] text-[#352528]/70 mb-3">
                            Précisez si vous êtes accompagné(e) d'enfants :
                          </p>

                          {/* Choix Oui / Non pour les enfants */}
                          <div className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-[#C8A45D]/40 min-h-[64px]">
                            <div className="flex items-center gap-2">
                              <Baby className="w-4 h-4 text-[#71323A]" />
                              <span className="text-xs text-[#352528] font-semibold">Présence d'enfant(s) ?</span>
                            </div>

                            <div className="flex items-center gap-1 bg-[#F7F2EA] p-1 rounded-lg border border-[#C8A45D]/30 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setHasChildren(false);
                                  setChildrenCount(0);
                                }}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all cursor-pointer ${
                                  !hasChildren ? 'bg-[#71323A] text-[#E3C77A]' : 'text-[#352528]/70 hover:text-[#71323A]'
                                }`}
                              >
                                Non
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setHasChildren(true);
                                  if (childrenCount === 0) setChildrenCount(1);
                                }}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all cursor-pointer ${
                                  hasChildren ? 'bg-[#71323A] text-[#E3C77A]' : 'text-[#352528]/70 hover:text-[#71323A]'
                                }`}
                              >
                                Oui
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Compteur d'enfants si activé */}
                        {hasChildren && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="pt-3 border-t border-[#C8A45D]/30"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs text-[#71323A] font-bold">
                                Nombre d'enfants :
                              </span>

                              <div className="flex items-center rounded-xl bg-white border border-[#C8A45D]/50 p-1 shadow-xs">
                                <button
                                  type="button"
                                  onClick={() => setChildrenCount(Math.max(1, childrenCount - 1))}
                                  className="w-8 h-8 rounded-lg bg-[#71323A] text-[#E3C77A] flex items-center justify-center hover:bg-[#7A3038] active:scale-95 transition-all cursor-pointer"
                                  aria-label="Diminuer le nombre d'enfants"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <div className="flex items-center justify-center px-3 font-sans font-bold text-sm text-[#71323A] min-w-[2.5rem]">
                                  {childrenCount}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setChildrenCount(childrenCount + 1)}
                                  className="w-8 h-8 rounded-lg bg-[#71323A] text-[#E3C77A] hover:bg-[#7A3038] active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                                  aria-label="Augmenter le nombre d'enfants"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <span className="text-[10px] text-[#71323A] font-medium mt-1.5 block">
                              Aucune limite pour les enfants. Toute la famille est chaleureusement bienvenue !
                            </span>
                          </motion.div>
                        )}
                      </div>

                    </div>

                    {/* Récapitulatif instantané des places */}
                    {attendanceType && (
                      <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#C8A45D]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#71323A]">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                          <span>
                            <strong>Votre réservation :</strong> {guestName || "Invité principal"} {attendanceType === 'couple' ? (companionName ? `+ ${companionName}` : '+ Conjoint') : '(seul)'} {hasChildren && childrenCount > 0 ? `+ ${childrenCount} enfant${childrenCount > 1 ? 's' : ''}` : ''}
                          </span>
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-[#71323A] bg-white px-3 py-1 rounded-lg border border-[#C8A45D]/40 self-start sm:self-auto shadow-xs">
                          {totalGuests} place{totalGuests > 1 ? 's' : ''} au total
                        </span>
                      </div>
                    )}

                  </motion.div>
                )}
              </AnimatePresence>

              {/* 4. ÉTAPE 4 : MESSAGE / MOT D'AFFECTION */}
              <div className="pt-2">
                <label className="block text-xs font-sans tracking-wider uppercase font-semibold text-[#71323A] mb-1.5 sm:mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>Votre mot pour Gypsy, Grégoire &amp; la Famille</span>
                </label>
                <textarea
                  rows={3}
                  name={`guest_note_${formKey}`}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder="Laissez un message affectueux, une bénédiction ou vos vœux pour ce triple jubilé..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#F7F2EA]/70 border border-[#C8A45D]/40 text-[#352528] text-base sm:text-sm font-sans focus:outline-none focus:border-[#71323A] transition-colors resize-none"
                />
              </div>

              {/* BOUTON DE VALIDATION */}
              <div className="pt-2 text-center">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto px-6 xs:px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#642931] via-[#76363D] to-[#642931] text-[#FFFDF8] border-2 border-[#E3C77A] font-sans text-xs xs:text-sm sm:text-base uppercase font-semibold tracking-wider shadow-xl hover:shadow-[0_20px_35px_-8px_rgba(113,50,58,0.35)] hover:border-[#FFFDF8] hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mx-auto gold-sweep-effect relative overflow-hidden cursor-pointer min-h-[48px]"
                >
                  <Sparkles className="w-4 h-4 text-[#E3C77A] relative z-10 transition-transform duration-300 group-hover:rotate-12 shrink-0" />
                  <span className="text-[#E3C77A] relative z-10 text-center font-semibold">
                    CONFIRMER MA PRÉSENCE
                  </span>
                </motion.button>
              </div>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};
