import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX, Volume2, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface BackgroundMusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const BackgroundMusicPlayer: React.FC<BackgroundMusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const playerRef = useRef<any>(null);
  const pendingPlayRef = useRef<boolean>(false);
  const containerId = 'youtube-bg-audio-player';
  const isLoadedRef = useRef<boolean>(false);

  // Lazy loader for YouTube API
  const ensureYouTubeLoaded = () => {
    if (isLoadedRef.current || typeof window === 'undefined') return;
    isLoadedRef.current = true;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player || playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player(containerId, {
          height: '10',
          width: '10',
          videoId: EVENT_DETAILS.music?.youtubeId || 'Q4vjJd-LaNo',
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: EVENT_DETAILS.music?.youtubeId || 'Q4vjJd-LaNo',
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              event.target.setVolume(70);
              if (pendingPlayRef.current) {
                try {
                  event.target.playVideo();
                  setIsPlaying(true);
                } catch {
                  // Ignore
                }
              }
            },
            onStateChange: (event: any) => {
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
            onError: () => {
              // Ignore silent errors
            },
          },
        });
      } catch (e) {
        console.warn('YT player init skipped:', e);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };

      if (!document.getElementById('yt-iframe-script')) {
        const tag = document.createElement('script');
        tag.id = 'yt-iframe-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.head.appendChild(tag);
      }
    }
  };

  // Only load YouTube when envelope is opened, saving mobile CPU and initial render bandwidth
  useEffect(() => {
    if (autoPlayTrigger) {
      ensureYouTubeLoaded();
      pendingPlayRef.current = true;
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.playVideo();
          setIsPlaying(true);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4500);
        } catch {
          // Autoplay handled by browser interaction
        }
      }
    }
  }, [autoPlayTrigger, isReady]);

  const togglePlay = () => {
    ensureYouTubeLoaded();

    if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') {
      pendingPlayRef.current = !isPlaying;
      setIsPlaying(!isPlaying);
      return;
    }

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4500);
      }
    } catch {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <aside
      aria-label="Musique d'ambiance de l'événement"
      className="fixed bottom-4 left-4 z-40 flex items-center gap-2.5"
    >
      {/* Conteneur caché pour le lecteur IFrame YouTube */}
      <div 
        id={containerId} 
        className="fixed -bottom-96 -left-96 w-1 h-1 opacity-0 pointer-events-none overflow-hidden" 
        aria-hidden="true" 
      />

      {/* Bouton de contrôle flottant royal */}
      <button
        onClick={togglePlay}
        className={`group relative w-11 h-11 rounded-full flex items-center justify-center border shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer active:scale-95 ${
          isPlaying
            ? 'bg-gradient-to-r from-[#3D141C] via-[#5A1C27] to-[#3D141C] border-[#E3C77A] text-[#FFEBA8] shadow-[0_0_15px_rgba(227,199,122,0.4)]'
            : 'bg-[#220D11]/90 hover:bg-[#3D1A20] border-[#C8A45D]/60 text-[#C8A45D] hover:text-[#FFEBA8]'
        }`}
        title={isPlaying ? "Mettre la musique en pause" : "Lancer la chanson de célébration"}
        aria-label={isPlaying ? "Mettre la musique en pause" : "Lancer la chanson"}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Music className="w-4 h-4 text-[#FFE8A3] animate-[spin_8s_linear_infinite]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-[#14080B] animate-pulse" />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
        )}
      </button>

      {/* Notification discrète au lancement */}
      {showNotification && (
        <div className="animate-in fade-in slide-in-from-left-3 duration-300 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A1016]/95 border border-[#E3C77A]/70 text-[#FFE8A3] shadow-lg backdrop-blur-sm">
          <Volume2 className="w-3.5 h-3.5 text-[#E3C77A] shrink-0 animate-bounce" />
          <span className="font-serif-cormorant text-xs font-semibold tracking-wide whitespace-nowrap">
            Musique : Chant d'Action de Grâces
          </span>
          <Sparkles className="w-3 h-3 text-[#FFE8A3] shrink-0" />
        </div>
      )}
    </aside>
  );
};
