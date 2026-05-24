// court-diagrams.jsx
// Stylized SVG court diagrams for each sport. Used as hero artwork.
// All courts drawn in a 600x400 viewBox so they swap into the same frame.

function CourtCricket({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* outer boundary (oval cricket field) */}
      <ellipse cx="300" cy="200" rx="270" ry="170" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      <ellipse cx="300" cy="200" rx="230" ry="140" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="2 4" />
      {/* inner circle (30 yard) */}
      <ellipse cx="300" cy="200" rx="120" ry="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* pitch */}
      <rect x="262" y="160" width="76" height="80" fill="none" stroke={accent} strokeWidth="2" />
      {/* creases */}
      <line x1="262" y1="180" x2="338" y2="180" stroke={accent} strokeWidth="1.2" />
      <line x1="262" y1="220" x2="338" y2="220" stroke={accent} strokeWidth="1.2" />
      {/* wickets */}
      <line x1="290" y1="172" x2="290" y2="188" stroke={accent} strokeWidth="3" />
      <line x1="300" y1="172" x2="300" y2="188" stroke={accent} strokeWidth="3" />
      <line x1="310" y1="172" x2="310" y2="188" stroke={accent} strokeWidth="3" />
      <line x1="290" y1="212" x2="290" y2="228" stroke={accent} strokeWidth="3" />
      <line x1="300" y1="212" x2="300" y2="228" stroke={accent} strokeWidth="3" />
      <line x1="310" y1="212" x2="310" y2="228" stroke={accent} strokeWidth="3" />
    </svg>
  );
}

function CourtFutsal({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="60" y="60" width="480" height="280" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* halfway */}
      <line x1="300" y1="60" x2="300" y2="340" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <circle cx="300" cy="200" r="48" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <circle cx="300" cy="200" r="2" fill="currentColor" opacity="0.6" />
      {/* penalty areas */}
      <path d="M 60 130 a 90 90 0 0 1 0 140" fill="none" stroke={accent} strokeWidth="1.6" />
      <path d="M 540 130 a 90 90 0 0 0 0 140" fill="none" stroke={accent} strokeWidth="1.6" />
      {/* goals */}
      <rect x="50" y="178" width="10" height="44" fill="none" stroke={accent} strokeWidth="2" />
      <rect x="540" y="178" width="10" height="44" fill="none" stroke={accent} strokeWidth="2" />
      {/* penalty spots */}
      <circle cx="120" cy="200" r="2.5" fill={accent} />
      <circle cx="480" cy="200" r="2.5" fill={accent} />
    </svg>
  );
}

function CourtPadel({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* court rectangle (cage) */}
      <rect x="90" y="80" width="420" height="240" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* glass back-wall indicators */}
      <rect x="90" y="80" width="420" height="240" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.3" />
      {/* net */}
      <line x1="300" y1="80" x2="300" y2="320" stroke={accent} strokeWidth="2" />
      <line x1="300" y1="80" x2="300" y2="320" stroke={accent} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" transform="translate(2 0)"/>
      {/* service lines */}
      <line x1="200" y1="80" x2="200" y2="320" stroke={accent} strokeWidth="1.2" />
      <line x1="400" y1="80" x2="400" y2="320" stroke={accent} strokeWidth="1.2" />
      {/* center service line */}
      <line x1="200" y1="200" x2="400" y2="200" stroke={accent} strokeWidth="1.2" />
    </svg>
  );
}

function CourtBadminton({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* doubles court */}
      <rect x="120" y="40" width="360" height="320" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* singles sidelines */}
      <line x1="142" y1="40" x2="142" y2="360" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="458" y1="40" x2="458" y2="360" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {/* net */}
      <line x1="120" y1="200" x2="480" y2="200" stroke={accent} strokeWidth="2.4" />
      <line x1="120" y1="200" x2="480" y2="200" stroke={accent} strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" transform="translate(0 3)"/>
      {/* short service lines */}
      <line x1="120" y1="138" x2="480" y2="138" stroke={accent} strokeWidth="1.2" />
      <line x1="120" y1="262" x2="480" y2="262" stroke={accent} strokeWidth="1.2" />
      {/* long service line doubles */}
      <line x1="120" y1="70" x2="480" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="120" y1="330" x2="480" y2="330" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {/* center */}
      <line x1="300" y1="40" x2="300" y2="138" stroke={accent} strokeWidth="1.2" />
      <line x1="300" y1="262" x2="300" y2="360" stroke={accent} strokeWidth="1.2" />
    </svg>
  );
}

function CourtTennis({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="80" y="60" width="440" height="280" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* singles sidelines */}
      <line x1="120" y1="60" x2="120" y2="340" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="480" y1="60" x2="480" y2="340" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {/* net */}
      <line x1="300" y1="60" x2="300" y2="340" stroke={accent} strokeWidth="2.2" />
      {/* service lines */}
      <line x1="200" y1="60" x2="200" y2="340" stroke={accent} strokeWidth="1.2" />
      <line x1="400" y1="60" x2="400" y2="340" stroke={accent} strokeWidth="1.2" />
      {/* center service */}
      <line x1="200" y1="200" x2="400" y2="200" stroke={accent} strokeWidth="1.2" />
      {/* center marks */}
      <line x1="80" y1="200" x2="92" y2="200" stroke={accent} strokeWidth="1.5" />
      <line x1="508" y1="200" x2="520" y2="200" stroke={accent} strokeWidth="1.5" />
    </svg>
  );
}

function CourtSquash({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* front wall view */}
      <rect x="100" y="50" width="400" height="300" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* out line (top) */}
      <line x1="100" y1="90" x2="500" y2="90" stroke={accent} strokeWidth="2" />
      {/* service line */}
      <line x1="100" y1="180" x2="500" y2="180" stroke={accent} strokeWidth="1.4" />
      {/* tin (bottom) */}
      <line x1="100" y1="305" x2="500" y2="305" stroke={accent} strokeWidth="2" />
      <rect x="100" y="305" width="400" height="45" fill={accent} opacity="0.12" />
      {/* center vertical */}
      <line x1="300" y1="50" x2="300" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function CourtBasketball({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="60" y="60" width="480" height="280" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      {/* halfway */}
      <line x1="300" y1="60" x2="300" y2="340" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <circle cx="300" cy="200" r="36" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* keys */}
      <rect x="60" y="150" width="80" height="100" fill="none" stroke={accent} strokeWidth="1.4" />
      <rect x="460" y="150" width="80" height="100" fill="none" stroke={accent} strokeWidth="1.4" />
      {/* free throw circles */}
      <circle cx="140" cy="200" r="36" fill="none" stroke={accent} strokeWidth="1.2" strokeDasharray="2 3" />
      <circle cx="460" cy="200" r="36" fill="none" stroke={accent} strokeWidth="1.2" strokeDasharray="2 3" />
      {/* three-point arcs */}
      <path d="M 60 120 q 130 80 0 160" fill="none" stroke={accent} strokeWidth="1.4" />
      <path d="M 540 120 q -130 80 0 160" fill="none" stroke={accent} strokeWidth="1.4" />
      {/* hoops */}
      <circle cx="70" cy="200" r="4" fill={accent} />
      <circle cx="530" cy="200" r="4" fill={accent} />
    </svg>
  );
}

function CourtSnooker({ accent }) {
  return (
    <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* table (with cushions) */}
      <rect x="60" y="90" width="480" height="220" rx="14" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      <rect x="76" y="106" width="448" height="188" fill={accent} opacity="0.06" />
      {/* baulk line + D */}
      <line x1="160" y1="106" x2="160" y2="294" stroke={accent} strokeWidth="1.4" />
      <path d="M 160 156 a 44 44 0 0 0 0 88" fill="none" stroke={accent} strokeWidth="1.4" />
      {/* pockets */}
      {[[70,100],[300,90],[530,100],[70,300],[300,310],[530,300]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="9" fill="currentColor" opacity="0.7" />
      ))}
      {/* spots */}
      <circle cx="160" cy="200" r="2" fill={accent} />
      <circle cx="300" cy="200" r="2" fill={accent} />
      <circle cx="440" cy="200" r="2" fill={accent} />
    </svg>
  );
}

const COURTS = {
  cricket: CourtCricket,
  futsal: CourtFutsal,
  padel: CourtPadel,
  badminton: CourtBadminton,
  tennis: CourtTennis,
  squash: CourtSquash,
  basketball: CourtBasketball,
  snooker: CourtSnooker
};

function CourtDiagram({ sport, accent }) {
  const C = COURTS[sport] || COURTS.cricket;
  return <C accent={accent} />;
}

// Export to window for use in app-v3.jsx
Object.assign(window, { CourtDiagram });
