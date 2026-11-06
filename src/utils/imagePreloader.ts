import luxuryEnvelopeImg from '../assets/images/luxury_tassel_envelope_1787917930376.jpg';
import burgundyCornerImg from '../assets/images/burgundy_floral_corner_1786458580375.jpg';
import burgundyHeaderImg from '../assets/images/burgundy_floral_header_1786442440706.jpg';

const ALL_DECOR_URLS = [
  luxuryEnvelopeImg,
  burgundyCornerImg,
  burgundyHeaderImg,
];

/**
 * Preloads and decodes decor images in background for instant, lag-free display
 */
export function preloadAllImages(): void {
  if (typeof window === 'undefined') return;

  const runPreload = () => {
    ALL_DECOR_URLS.forEach((url) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = url;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });
  };

  if ('requestIdleCallback' in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(runPreload);
  } else {
    setTimeout(runPreload, 50);
  }
}
