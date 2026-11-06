import React from 'react';

interface AuthenticWaxSealProps {
  className?: string;
  size?: number; // Taille discrète et raffinée (par ex. 62px à 72px)
  split?: 'full' | 'left' | 'right';
  showDualG?: boolean;
}

export const AuthenticWaxSeal: React.FC<AuthenticWaxSealProps> = ({
  className = '',
  size = 66,
  split = 'full',
  showDualG = true,
}) => {
  // Contour naturel et organique inspiré fidèlement de la forme de cire fondue réelle (forme à 6 lobes doux et asymétriques)
  const organicWaxBorder = `
    M 100,16
    C 126,14 148,24 165,42
    C 183,60 192,84 189,110
    C 186,134 174,156 156,172
    C 136,188 112,192 88,188
    C 62,183 40,168 28,144
    C 15,118 18,90 32,66
    C 46,42 72,18 100,16 Z
  `;

  // Fissure de brisure délicate et naturelle
  const clipLeft = 'polygon(0% 0%, 51% 0%, 48% 30%, 54% 52%, 47% 76%, 52% 100%, 0% 100%)';
  const clipRight = 'polygon(51% 0%, 100% 0%, 100% 100%, 52% 100%, 47% 76%, 54% 52%, 48% 30%)';

  const clipStyle = split === 'left' ? { clipPath: clipLeft } : split === 'right' ? { clipPath: clipRight } : undefined;

  return (
    <div 
      className={`relative select-none pointer-events-none ${className}`}
      style={{ 
        width: size, 
        height: size,
        ...clipStyle,
        filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.45)) drop-shadow(0 1px 3px rgba(45,20,5,0.6))',
      }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dégradé or antique chaleureux satiné (fidèle à la référence) */}
          <linearGradient id="antiqueGoldWax" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#E9C579" />
            <stop offset="30%" stopColor="#C99B45" />
            <stop offset="65%" stopColor="#A4742B" />
            <stop offset="100%" stopColor="#6C4815" />
          </linearGradient>

          {/* Reflet satiné doux sur la courbure supérieure */}
          <linearGradient id="satinGleam" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#FFF2BF" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#DFB45E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#55360A" stopOpacity="0.6" />
          </linearGradient>

          {/* Creuset intérieur biseauté (fond du cachet) */}
          <radialGradient id="recessedPlate" cx="44%" cy="40%" r="58%">
            <stop offset="0%" stopColor="#D9AB54" />
            <stop offset="60%" stopColor="#A8772C" />
            <stop offset="90%" stopColor="#7E5318" />
            <stop offset="100%" stopColor="#4A2F0B" />
          </radialGradient>

          {/* Ombre portée intérieure sur le pourtour du disque */}
          <radialGradient id="innerCrease" cx="50%" cy="50%" r="50%">
            <stop offset="78%" stopColor="#000000" stopOpacity="0" />
            <stop offset="93%" stopColor="#2E1805" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1E0D02" stopOpacity="0.75" />
          </radialGradient>

          {/* Relief métallique gravé pour le monogramme calligraphique */}
          <linearGradient id="embossBevel" x1="25%" y1="15%" x2="75%" y2="85%">
            <stop offset="0%" stopColor="#FFF5D1" />
            <stop offset="35%" stopColor="#E8C36F" />
            <stop offset="70%" stopColor="#AC7D30" />
            <stop offset="100%" stopColor="#5C390C" />
          </linearGradient>
        </defs>

        {/* 1. COULÉE DE CIRE EXTÉRIEURE (Bords fondus et arrondis naturels) */}
        <path
          d={organicWaxBorder}
          fill="url(#antiqueGoldWax)"
        />

        {/* Voile de lumière satiné */}
        <path
          d={organicWaxBorder}
          fill="url(#satinGleam)"
          opacity="0.6"
        />

        {/* 2. BOURRELET SURÉLEVÉ EXTÉRIEUR DU SCEAU */}
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="#FCE3A1"
          strokeWidth="2.8"
          opacity="0.8"
        />
        <circle
          cx="100"
          cy="100"
          r="69.5"
          fill="none"
          stroke="#422506"
          strokeWidth="1.6"
          opacity="0.65"
        />

        {/* 3. DISQUE CENTRAL DE MATRIÇAGE */}
        <circle
          cx="100"
          cy="100"
          r="63"
          fill="url(#recessedPlate)"
        />
        <circle
          cx="100"
          cy="100"
          r="63"
          fill="url(#innerCrease)"
        />

        {/* Filet gravé circulaire discret */}
        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke="#F3D182"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <circle
          cx="100"
          cy="100"
          r="56.8"
          fill="none"
          stroke="#3D2005"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* 4. MONOGRAMME CALLIGRAPHIQUE RAFFINÉ DES DEUX 'G' (Gypsy & Grégoire) */}
        {showDualG && (
          <g className="wax-letters" transform="translate(100, 100)">
            
            {/* --- PREMIER 'G' (Gypsy - Gauche / Cursive majestueuse) --- */}
            {/* Ombre de gravure en creux */}
            <text
              x="-18"
              y="12"
              fontFamily="'Playfair Display', 'Cinzel', 'Great Vibes', serif"
              fontSize="48"
              fontStyle="italic"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#261202"
              opacity="0.85"
              transform="translate(1.2, 1.8) rotate(-4)"
            >
              G
            </text>
            {/* Biseau sombre */}
            <text
              x="-18"
              y="12"
              fontFamily="'Playfair Display', 'Cinzel', 'Great Vibes', serif"
              fontSize="48"
              fontStyle="italic"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#633C08"
              transform="translate(0.6, 0.8) rotate(-4)"
            >
              G
            </text>
            {/* Relief doré supérieur */}
            <text
              x="-18"
              y="12"
              fontFamily="'Playfair Display', 'Cinzel', 'Great Vibes', serif"
              fontSize="48"
              fontStyle="italic"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#embossBevel)"
              stroke="#FFF5D6"
              strokeWidth="0.8"
              transform="rotate(-4)"
            >
              G
            </text>

            {/* --- SYMBOLE D'UNION (& DISCRET) --- */}
            <text
              x="0"
              y="5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="16"
              fontStyle="italic"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#261202"
              transform="translate(0.8, 1)"
            >
              &amp;
            </text>
            <text
              x="0"
              y="5"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="16"
              fontStyle="italic"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFE8A3"
              stroke="#734910"
              strokeWidth="0.4"
            >
              &amp;
            </text>

            {/* --- DEUXIÈME 'G' (Grégoire - Droite / Entrelacé avec grâce) --- */}
            {/* Ombre de gravure en creux */}
            <text
              x="18"
              y="11"
              fontFamily="'Playfair Display', 'Cinzel', 'Great Vibes', serif"
              fontSize="50"
              fontStyle="italic"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#261202"
              opacity="0.9"
              transform="translate(1.2, 1.8) rotate(4)"
            >
              G
            </text>
            {/* Biseau sombre */}
            <text
              x="18"
              y="11"
              fontFamily="'Playfair Display', 'Cinzel', 'Great Vibes', serif"
              fontSize="50"
              fontStyle="italic"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#633C08"
              transform="translate(0.6, 0.8) rotate(4)"
            >
              G
            </text>
            {/* Relief doré supérieur */}
            <text
              x="18"
              y="11"
              fontFamily="'Playfair Display', 'Cinzel', 'Great Vibes', serif"
              fontSize="50"
              fontStyle="italic"
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#embossBevel)"
              stroke="#FFF8E0"
              strokeWidth="0.9"
              transform="rotate(4)"
            >
              G
            </text>
          </g>
        )}

        {/* Reflet de lumière doux en croissant sur le quart haut-gauche */}
        <path
          d="M 52,50 C 66,38 88,34 115,36 C 85,40 68,52 56,70 Z"
          fill="#FFFFFF"
          opacity="0.35"
        />
      </svg>
    </div>
  );
};
