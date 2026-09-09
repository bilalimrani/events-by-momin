// Hand-crafted flat-style SVG illustrations in the site's maroon & gold palette.
// Used in place of stock photography across the Gallery and Hero sections.

export function WeddingIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Wedding stage decor illustration">
      <rect width="200" height="200" fill="#3a0c1e" />
      <ellipse cx="100" cy="185" rx="95" ry="12" fill="#250712" />
      <path d="M40 180V70a60 60 0 01120 0v110" fill="none" stroke="#c9a227" strokeWidth="6" />
      <circle cx="40" cy="60" r="9" fill="#ecc754" />
      <circle cx="160" cy="60" r="9" fill="#ecc754" />
      <circle cx="70" cy="42" r="7" fill="#e3b12e" />
      <circle cx="130" cy="42" r="7" fill="#e3b12e" />
      <circle cx="100" cy="30" r="9" fill="#f3dd8e" />
      <path d="M20 180h160" stroke="#c9a227" strokeWidth="3" opacity="0.6" />
      <circle cx="100" cy="120" r="26" fill="#7a1b3d" stroke="#ecc754" strokeWidth="3" />
      <path d="M100 100v40M84 120h32" stroke="#ecc754" strokeWidth="3" strokeLinecap="round" />
      {[...Array(10)].map((_, i) => (
        <circle key={i} cx={20 + i * 18} cy={170 - (i % 2) * 6} r="3" fill="#ecc754" opacity="0.7" />
      ))}
    </svg>
  );
}

export function MehndiIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Mehndi and dholki decor illustration">
      <rect width="200" height="200" fill="#a4335c" />
      <circle cx="150" cy="40" r="46" fill="#c9a227" opacity="0.25" />
      <ellipse cx="100" cy="150" rx="70" ry="18" fill="#7a1b3d" />
      <path d="M60 150c0-30 15-60 40-60s40 30 40 60" fill="#ecc754" opacity="0.9" />
      <circle cx="100" cy="90" r="14" fill="#fbeedb" />
      <path d="M100 30c30 20 20 45 0 60-20-15-30-40 0-60z" fill="#7a1b3d" />
      <g fill="#fbeedb">
        <circle cx="55" cy="70" r="10" />
        <circle cx="145" cy="70" r="10" />
        <circle cx="45" cy="55" r="6" />
        <circle cx="155" cy="55" r="6" />
      </g>
      <path
        d="M30 170q10-8 20 0t20 0 20 0 20 0 20 0 20 0"
        fill="none"
        stroke="#3a0c1e"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BaratIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Barat decoration illustration">
      <rect width="200" height="200" fill="#7a1b3d" />
      <ellipse cx="100" cy="170" rx="90" ry="10" fill="#3a0c1e" />
      <rect x="30" y="110" width="140" height="45" rx="14" fill="#ecc754" />
      <rect x="45" y="90" width="80" height="35" rx="10" fill="#f3dd8e" />
      <circle cx="60" cy="158" r="16" fill="#3a0c1e" />
      <circle cx="140" cy="158" r="16" fill="#3a0c1e" />
      <circle cx="60" cy="158" r="6" fill="#c9a227" />
      <circle cx="140" cy="158" r="6" fill="#c9a227" />
      <path
        d="M30 105q14-14 28 0t28 0 28 0 28 0 28 0"
        fill="none"
        stroke="#fbeedb"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[...Array(6)].map((_, i) => (
        <circle key={i} cx={40 + i * 24} cy={105} r="5" fill="#e3b12e" />
      ))}
      <path d="M170 130l20-10v20z" fill="#3a0c1e" />
    </svg>
  );
}

export function WalimaIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Walima reception decor illustration">
      <rect width="200" height="200" fill="#3a0c1e" />
      <path d="M100 15l3 40h-6z" fill="#c9a227" />
      <path d="M60 55h80l10 15H50z" fill="#a4335c" />
      {[...Array(5)].map((_, i) => (
        <line key={i} x1={70 + i * 15} y1="70" x2={70 + i * 15} y2="95" stroke="#ecc754" strokeWidth="2" />
      ))}
      {[...Array(5)].map((_, i) => (
        <circle key={i} cx={70 + i * 15} cy="97" r="3" fill="#f3dd8e" />
      ))}
      <ellipse cx="100" cy="150" rx="65" ry="14" fill="#7a1b3d" />
      <rect x="45" y="130" width="110" height="20" rx="4" fill="#fbeedb" />
      <circle cx="100" cy="128" r="12" fill="#ecc754" />
      <path d="M100 108v20" stroke="#e3b12e" strokeWidth="3" />
      <path d="M96 108h8v6h-8z" fill="#f3dd8e" />
    </svg>
  );
}

export function GalaIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Gala night event illustration">
      <rect width="200" height="200" fill="#250712" />
      <path d="M100 10v170" stroke="#7a1b3d" strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="45" r="22" fill="#ecc754" />
      <g stroke="#3a0c1e" strokeWidth="1.5" opacity="0.6">
        <line x1="78" y1="45" x2="122" y2="45" />
        <line x1="100" y1="23" x2="100" y2="67" />
        <line x1="84" y1="29" x2="116" y2="61" />
        <line x1="116" y1="29" x2="84" y2="61" />
      </g>
      <path d="M40 190l60-110 60 110z" fill="#a4335c" opacity="0.35" />
      {[
        [50, 160], [70, 130], [90, 175], [110, 120], [130, 165], [150, 140], [65, 100], [135, 95],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4 + (i % 3)} fill={i % 2 ? "#ecc754" : "#e3b12e"} />
      ))}
      <rect x="70" y="180" width="60" height="10" rx="3" fill="#c9a227" />
    </svg>
  );
}

export function BirthdayIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Birthday party decoration illustration">
      <rect width="200" height="200" fill="#c9a227" />
      <circle cx="45" cy="45" r="18" fill="#7a1b3d" />
      <circle cx="155" cy="50" r="14" fill="#a4335c" />
      <circle cx="165" cy="90" r="10" fill="#3a0c1e" />
      <path d="M45 63v20M155 64v18M165 100v14" stroke="#3a0c1e" strokeWidth="2" />
      <rect x="55" y="140" width="90" height="35" rx="6" fill="#fbeedb" />
      <rect x="60" y="115" width="80" height="30" rx="4" fill="#a4335c" />
      <rect x="65" y="95" width="70" height="25" rx="4" fill="#7a1b3d" />
      {[75, 100, 125].map((x, i) => (
        <g key={i}>
          <rect x={x - 2} y={78} width="4" height="18" fill="#ecc754" />
          <path d={`M${x} 70c4 4 4 8 0 12-4-4-4-8 0-12z`} fill="#e3b12e" />
        </g>
      ))}
    </svg>
  );
}

export function MangoPartyIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Mango party theme illustration">
      <rect width="200" height="200" fill="#e3b12e" />
      <circle cx="100" cy="100" r="70" fill="#f3dd8e" opacity="0.5" />
      <g transform="translate(70,80) rotate(-10)">
        <path d="M0 40C0 10 20-10 35 0c15 10 15 45-5 60C10 68 0 58 0 40z" fill="#a4335c" />
        <path d="M8 44C8 20 22 4 32 6c10 8 10 34-6 46-8 6-18-2-18-8z" fill="#ecc754" />
      </g>
      <g transform="translate(105,95) rotate(15)">
        <path d="M0 34C0 8 16-8 28 0c12 8 12 38-4 50C8 56 0 48 0 34z" fill="#7a1b3d" />
        <path d="M6 36C6 16 18 2 26 4c8 6 8 28-5 38-6 5-15-1-15-6z" fill="#f3dd8e" />
      </g>
      <path d="M55 60c-6-14-2-28 8-34" fill="none" stroke="#3a0c1e" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 168c25-30 55-30 90-16" fill="none" stroke="#7a1b3d" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function OfficePartyIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Office and corporate party illustration">
      <rect width="200" height="200" fill="#7a1b3d" />
      <rect x="50" y="110" width="100" height="60" rx="6" fill="#3a0c1e" />
      <rect x="60" y="120" width="80" height="42" rx="3" fill="#ecc754" opacity="0.9" />
      <rect x="40" y="170" width="120" height="8" rx="3" fill="#250712" />
      <circle cx="60" cy="55" r="12" fill="#ecc754" />
      <circle cx="100" cy="40" r="14" fill="#e3b12e" />
      <circle cx="140" cy="55" r="12" fill="#f3dd8e" />
      <path d="M60 67v20M100 54v25M140 67v20" stroke="#fbeedb" strokeWidth="2" opacity="0.7" />
      {[...Array(10)].map((_, i) => (
        <rect
          key={i}
          x={20 + i * 17}
          y={20 + (i % 3) * 15}
          width="5"
          height="5"
          fill={i % 2 ? "#ecc754" : "#fbeedb"}
          transform={`rotate(${i * 20} ${22 + i * 17} ${22 + (i % 3) * 15})`}
        />
      ))}
    </svg>
  );
}

export function ChandelierIllustration({ className }) {
  return (
    <svg viewBox="0 0 200 120" className={className} role="img" aria-hidden="true">
      <path d="M100 0v14" stroke="#ecc754" strokeWidth="2" />
      <path d="M40 14h120l-14 20H54z" fill="none" stroke="#ecc754" strokeWidth="2" />
      <path d="M55 34c-10 20-10 40 5 55M145 34c10 20 10 40-5 55M85 34c-4 22 0 44 15 60M115 34c4 22 0 44-15 60" fill="none" stroke="#e3b12e" strokeWidth="1.5" opacity="0.8" />
      {[
        [55, 88], [145, 88], [85, 96], [115, 96], [100, 100], [70, 60], [130, 60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#f3dd8e" />
      ))}
    </svg>
  );
}
