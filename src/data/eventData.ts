import { ProgramItem } from '../types';

export const EVENT_DETAILS = {
  familyNames: "Gypsy & Grégoire",
  eventTitle: "20 Ans de Mariage • 50 Ans de Gypsy • Bénédiction des Enfants",
  tagline: "Une Soirée Unique d'Amour et d'Action de Grâces",
  subTagline: "Rejoignez-nous pour célébrer deux décennies d'union sacrée et les grâces accordées à notre foyer.",
  eventDate: "Samedi 28 Novembre 2026",
  eventIsoDate: "2026-11-28T18:00:00",
  churchName: "Église Saint-Luc de Yénadjro",
  churchAddress: "Yénadjro, Womey",
  churchMapUrl: "https://maps.app.goo.gl/8j1Vub3s1qmb5gku6",
  churchTime: "18:00 précises",
  venueName: "True Paradise",
  venueAddress: "En quittant le Stade de l’Amitié en direction du cimetière PK14, voie en face de la station Ewell (juste après le cimetière).",
  venueMapUrl: "https://www.google.com/maps/place/True+Paradise+B%C3%A9nin+%C3%89v%C3%A9nement/@6.3856265,2.3260419,17z/data=!3m1!4b1!4m6!3m5!1s0x102357daf4aa1251:0xda31c08512bd7f65!8m2!3d6.3856265!4d2.3260419!16s%2Fg%2F11fl415pfg!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  venueTime: "Dès 20:00",
  venueTimeFull: "Dès 20:00 (Grande Réception Festive)",
  dressCode: "Blanc et Chic (Tenue Blanche Recommandée)",
  contactEmail: "contact@famille-gypsy-gregoire.com",
  music: {
    youtubeId: "Q4vjJd-LaNo",
    youtubeUrl: "https://youtu.be/Q4vjJd-LaNo?si=AIcCsx_zcirB4Exl",
    title: "Chant d'Adoration & Action de Grâces"
  },
  images: {
    heroBackground: "",
    heroSecondary: "",
    couple: "",
    papa: "",
    papaSecondary: "",
    maman: "",
    mamanSecondary: "",
    waxSeal: "",
  }
};

export const PILLARS_DATA = [
  {
    id: "mariage",
    title: "Noces de Porcelaine",
    subtitle: "20 Ans d'Union",
    quote: "Deux décennies d'amour, de complicité et de foi partagée.",
    highlight: "Noces de Porcelaine",
    bgAccent: "from-[#5A0F1B]/10 to-[#C8A45D]/10",
    badge: "12 Juillet 2006 — 2026",
    details: "Célébration de vingt années de fidélité et de bonheur conjugal."
  },
  {
    id: "gypsy",
    title: "Jubilé de Gypsy",
    subtitle: "50 Ans de Grâce",
    quote: "Un demi-siècle de bonté, de dévouement et de rayonnement.",
    highlight: "50 Ans de Grâce",
    bgAccent: "from-[#C8A45D]/15 to-[#F5EFE4]",
    badge: "Jubilé d'Or",
    details: "Hommage à l'épouse et mère aimante qui illumine chaque jour les siens."
  },
  {
    id: "enfants",
    title: "Honneur aux Enfants",
    subtitle: "La Joie du Foyer",
    quote: "Le plus bel héritage de notre union et notre plus grande fierté.",
    highlight: "La Relève & La Joie",
    bgAccent: "from-[#7A1F2B]/10 to-[#FFFDF8]",
    badge: "Bénédiction Familiale",
    details: "Remerciements pour les trésors de notre maison et leurs anniversaires célébrés ensemble."
  }
];

export const PROGRAM_SCHEDULE: ProgramItem[] = [
  {
    time: "18:00",
    title: "Messe d'Action de Grâces",
    subtitle: "Bénédiction Solennelle",
    description: "Célébration eucharistique solennelle pour rendre grâce pour l'union de Gypsy & Grégoire et leur famille.",
    location: "Église Saint-Luc de Yénadjro",
    iconName: "Church"
  },
  {
    time: "Dès 20:00",
    title: "Grande Réception Festive",
    subtitle: "Dîner d'Honneur, Toasts & Soirée Dansante",
    description: "Accueil royal des invités, repas festif raffiné, découpe du gâteau d'honneur et animation dansante ininterrompue.",
    location: "True Paradise",
    iconName: "Wine"
  }
];
