// Khelgaah v3 — Sporty + Elegant
// Italic serif elegance × condensed athletic display × scoreboard data

const SPORTS = [
  { id: 'cricket',    name: 'Cricket',    meta: 'DHA · KARSAZ · BAHADURABAD', tag: 'On roadmap',
    img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1400&q=80' },
  { id: 'futsal',     name: 'Futsal',     meta: 'CITY-WIDE · 5 & 7-A-SIDE',   tag: 'On roadmap',
    img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1400&q=80' },
  { id: 'padel',      name: 'Padel',      meta: 'CLIFTON · DHA · KARSAZ',     tag: 'Active',
    img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1400&q=80' },
  { id: 'badminton',  name: 'Badminton',  meta: 'PECHS · GULSHAN · NAZIMABAD', tag: 'On roadmap',
    img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1400&q=80' },
  { id: 'tennis',     name: 'Tennis',     meta: 'CLAY & HARD COURTS',         tag: 'On roadmap',
    img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1400&q=80' },
  { id: 'squash',     name: 'Squash',     meta: 'GLASS-BACK COURTS',          tag: 'Soon',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1400&q=80' },
  { id: 'basketball', name: 'Basketball', meta: 'INDOOR & OUTDOOR',           tag: 'On roadmap',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1400&q=80' },
  { id: 'snooker',    name: 'Snooker',    meta: 'CLUB & PRIVATE TABLES',      tag: 'Soon',
    img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1400&q=80' }
];

const ACCENTS = ['#d63b1f', '#1f8a5b', '#1a6ad9', '#d4a017'];

const FONT_PAIRS = {
  classic: {
    label: 'Classic',
    serif: '"Instrument Serif"',
    sport: '"Big Shoulders Display"',
    body: '"Inter Tight"',
    google: 'family=Instrument+Serif:ital@0;1&family=Big+Shoulders+Display:wght@700;800;900&family=Inter+Tight:wght@400;500;600;700'
  },
  modern: {
    label: 'Modern',
    serif: '"Fraunces"',
    sport: '"Archivo"',
    body: '"Inter Tight"',
    google: 'family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&family=Archivo:wght@800;900&family=Inter+Tight:wght@400;500;600;700'
  },
  loud: {
    label: 'Loud',
    serif: '"Instrument Serif"',
    sport: '"Bebas Neue"',
    body: '"DM Sans"',
    google: 'family=Instrument+Serif:ital@0;1&family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700'
  }
};

const HEADLINES = {
  default: {
    parts: [
      { text: 'Booking a court', style: 'serif' },
      { text: 'in', style: 'serif' },
      { text: 'Karachi', style: 'sport' },
      { text: 'shouldn\u2019t take', style: 'serif-em' },
      { text: 'ten phone calls.', style: 'serif' }
    ]
  },
  simple: {
    parts: [
      { text: 'A simpler way', style: 'serif' },
      { text: 'to', style: 'serif' },
      { text: 'play', style: 'sport' },
      { text: 'in Karachi.', style: 'serif-em' }
    ]
  },
  direct: {
    parts: [
      { text: 'Every', style: 'serif' },
      { text: 'court.', style: 'sport' },
      { text: 'One', style: 'serif-em' },
      { text: 'app.', style: 'sport' }
    ]
  },
  builder: {
    parts: [
      { text: 'We are', style: 'serif' },
      { text: 'building', style: 'serif-em' },
      { text: 'Khelgaah.', style: 'sport' }
    ]
  }
};

function HeroHeadline({ data }) {
  return (
    <h1 className="hero-h1">
      {data.parts.map((p, i) => {
        const sep = i === 0 ? '' : ' ';
        if (p.style === 'sport') {
          return <React.Fragment key={i}>{sep}<span className="sport-word">{p.text}</span></React.Fragment>;
        }
        if (p.style === 'serif-em') {
          return <React.Fragment key={i}>{sep}<em>{p.text}</em></React.Fragment>;
        }
        return <React.Fragment key={i}>{sep}{p.text}</React.Fragment>;
      })}
    </h1>
  );
}

// ─── current Karachi-ish datetime for scoreboard ──────────
function useNowString() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const d = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const mon = months[now.getMonth()];
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return `${d} ${date} ${mon} \u00B7 ${hh}:${mm} PKT`;
}

// ─── waitlist form ────────────────────────────────────────
function WaitlistForm({ layout = 'inline', cta = 'Get founding access' }) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setDone(true);
  };
  if (done) {
    return (
      <div className="wl-success">
        <span className="wl-success-mark">✓</span>
        <span>You’re in. We’ll write to you the moment the beta opens.</span>
      </div>
    );
  }
  return (
    <form className={`wl-form ${layout}`} onSubmit={submit}>
      {layout === 'card' && (
        <div style={{ display: 'flex', justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)', fontSize: 10.5,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--ink-3)' }}>
          <span>Founding access</span>
          <span>Free · Email only</span>
        </div>
      )}
      <input className="wl-input" type="email" required placeholder="you@email.com"
             value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="wl-btn" type="submit">
        {cta}
        <Arrow />
      </button>
    </form>
  );
}

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 11.5L11.5 2.5M4 2.5h7.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── diamond separator strip ──────────────────────────────
function DiamondStrip({ items, accent = false }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className={`diamond-strip ${accent ? 'accent' : ''}`}>
      <div className="diamond-track">
        {repeated.map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            <span className="diamond">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ─── sports ticker ────────────────────────────────────────
function SportsTicker() {
  const items = [...SPORTS, ...SPORTS]; // duplicate for seamless loop
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((s, i) => (
          <span key={i} className="ticker-item">
            <span className="num">{String((i % SPORTS.length) + 1).padStart(2, '0')}</span>
            {s.name}
            <span className="sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── app ──────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d63b1f",
  "headline": "default",
  "fontPair": "classic",
  "dark": true,
  "sport": "cricket",
  "formLayout": "inline"
}/*EDITMODE-END*/;

function useFontLoader(pair) {
  React.useEffect(() => {
    const id = 'khelgaah-fonts-v3';
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = `https://fonts.googleapis.com/css2?${FONT_PAIRS[pair].google}&family=JetBrains+Mono:wght@400;500&display=swap`;
  }, [pair]);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useFontLoader(t.fontPair);
  const nowStr = useNowString();

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    const fp = FONT_PAIRS[t.fontPair];
    r.style.setProperty('--font-serif', `${fp.serif}, ui-serif, Georgia, serif`);
    r.style.setProperty('--font-sport', `${fp.sport}, "Archivo Black", Impact, sans-serif`);
    r.style.setProperty('--font-body', `${fp.body}, ui-sans-serif, system-ui, sans-serif`);
  }, [t.accent, t.fontPair]);

  React.useEffect(() => {
    // Dark by default — light mode toggles a .light class instead
    document.body.classList.toggle('light', !t.dark);
  }, [t.dark]);

  const headline = HEADLINES[t.headline] || HEADLINES.default;
  const active = SPORTS.find(s => s.id === t.sport) || SPORTS[0];

  return (
    <div className="page">

      {/* sticky scoreboard top */}
      <div className="scoreboard">
        <div className="col sb-inner">
          <div className="sb-brand">
            Khel<span className="sb-brand-mark">✱</span>gaah
          </div>
          <div className="sb-data">
            <span><strong>KHI</strong>26°C CLEAR</span>
            <span>{nowStr}</span>
            <span><strong>BUILD</strong>v0.4</span>
          </div>
          <div className="sb-status">
            <span className="dot"></span>
            <span className="sb-status-text">Waitlist open</span>
          </div>
        </div>
      </div>

      <div className="col">

        {/* hero — 2-col layout: copy left, athlete photo right */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="accent">[ 01 / 04 ]</span>
              <span>Pre-launch · Karachi · founding access open</span>
            </div>
            <HeroHeadline data={headline} />

            <div className="hero-body">
              <p>
                Right now, if you want to play <strong>{active.name.toLowerCase()}</strong> on a Friday evening,
                you call five venues, get three voicemails, two &ldquo;I&rsquo;ll call you back&rdquo;s,
                and maybe one slot. We&rsquo;re done with that.
              </p>
              <p>
                <strong>Khelgaah</strong> is one app for every turf, court, and club in Karachi.
                You see what&rsquo;s free, when, and for how much. <em>You book. You play.</em>
              </p>
            </div>

            {/* waitlist 1 */}
            <div className="wl-block">
              <div className="wl-label">Founding access · Lifetime perks</div>
              <WaitlistForm layout={t.formLayout} />
              <div className="wl-meta">
                No spam · One email when the beta opens · Unsubscribe anytime
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-court">
              <CourtDiagram sport={t.sport} accent={t.accent} />
            </div>
            <div className="hero-right-mark">{active.name.toUpperCase()} / KHI / REGULATION</div>
            <div className="hero-right-overlay">
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: 6 }}>Featured court</div>
                <div className="hero-right-stat">
                  {active.name}<span className="hero-right-stat-em">.</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--ink-3)', marginBottom: 6 }}>Status</div>
                <div className="hero-right-stat hero-right-stat-em">{active.tag.toLowerCase()}</div>
              </div>
            </div>
          </div>
        </section>

        {/* diamond strip 1 — sport keywords */}
        <DiamondStrip items={['Box cricket', 'Futsal', 'Padel', 'Badminton', 'Tennis', 'Squash', 'Snooker']} accent />

        {/* athletic counter band */}
        <div className="counter-band">
          <div className="counter-cell">
            <div className="counter-v">12<span className="plus">+</span></div>
            <div className="counter-k">Sports planned</div>
          </div>
          <div className="counter-cell">
            <div className="counter-v">001</div>
            <div className="counter-k">First city · Karachi</div>
          </div>
          <div className="counter-cell">
            <div className="counter-v">v0<span className="plus">.</span>4</div>
            <div className="counter-k">Build status</div>
          </div>
          <div className="counter-cell">
            <div className="counter-v" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>soon</div>
            <div className="counter-k">Closed beta</div>
          </div>
          <div className="counter-cell">
            <div className="counter-v">2026</div>
            <div className="counter-k">Launching</div>
          </div>
        </div>

        {/* fixtures (sports) */}
        <section className="section">
          <div className="section-head">
            <div className="section-num-huge">01</div>
            <div>
              <div className="section-meta">Fixtures · what you&rsquo;ll book</div>
              <h2 className="section-h">
                Every sport <span className="accent-italic">the city plays.</span>
              </h2>
              <p className="section-desc">
                From box cricket in DHA to glass-court padel in Clifton. We&rsquo;re onboarding
                independent vendors, academies, and clubs across Karachi &mdash; multi-vendor from day one.
              </p>
            </div>
          </div>
          <div className="fixtures">
            {SPORTS.map((s, i) => (
              <button key={s.id} className="fix-row"
                      data-active={t.sport === s.id}
                      onClick={() => setTweak('sport', s.id)}>
                <span className="fix-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="fix-name">{s.name}</span>
                <span className="fix-meta">{s.meta}</span>
                <span className="fix-tag">{s.tag}</span>
              </button>
            ))}
          </div>
        </section>

        {/* diamond strip 2 — how-it-works lead-in */}
        <DiamondStrip items={['Discover', 'Book', 'Play', 'Repeat']} />

        {/* how it works */}
        <section className="section">
          <div className="section-head">
            <div className="section-num-huge">02</div>
            <div>
              <div className="section-meta">Playbook · how it&rsquo;ll work</div>
              <h2 className="section-h">
                Three taps from idea <span className="accent-italic">to court.</span>
              </h2>
            </div>
          </div>
          <div className="steps">
            <div className="step-r">
              <div className="step-big-num">i.</div>
              <div>
                <h3 className="step-t">Discover</h3>
              </div>
              <p className="step-d">
                Every vendor in Karachi by sport, neighborhood, and price.
                Real photos, real reviews. No surprises, no group chats.
              </p>
            </div>
            <div className="step-r">
              <div className="step-big-num">ii.</div>
              <div>
                <h3 className="step-t">Book</h3>
              </div>
              <p className="step-d">
                Live availability across vendors. Pick your slot, pay in seconds, done.
                No phone calls, no haggling, no flaky promises.
              </p>
            </div>
            <div className="step-r">
              <div className="step-big-num">iii.</div>
              <div>
                <h3 className="step-t">Play</h3>
              </div>
              <p className="step-d">
                Show your booking code at the venue and walk straight in. Rate it so
                the next person knows what to expect.
              </p>
            </div>
          </div>
        </section>

        {/* diamond strip 3 — build log lead-in */}
        <DiamondStrip items={['v0.1', 'v0.2', 'v0.3', 'v0.4', 'beta', 'launch']} accent />

        {/* road to launch (build log) */}
        <section className="section">
          <div className="section-head">
            <div className="section-num-huge">03</div>
            <div>
              <div className="section-meta">Road to launch · build log</div>
              <h2 className="section-h">
                What we&rsquo;ve shipped, <span className="accent-italic">what&rsquo;s next.</span>
              </h2>
            </div>
          </div>
          <div className="road">
            <div className="road-row" data-state="done">
              <span className="road-st">✓</span>
              <span className="road-t">Vendor onboarding pipeline</span>
              <span className="road-d">Multi-vendor, self-serve</span>
              <span className="road-tag">Done</span>
            </div>
            <div className="road-row" data-state="done">
              <span className="road-st">✓</span>
              <span className="road-t">Booking &amp; payments engine</span>
              <span className="road-d">Live slots, instant pay</span>
              <span className="road-tag">Done</span>
            </div>
            <div className="road-row" data-state="active">
              <span className="road-st"><span className="live-dot"></span></span>
              <span className="road-t">Karachi venue partnerships</span>
              <span className="road-d">Signing across DHA, Clifton, Gulshan</span>
              <span className="road-tag">In progress</span>
            </div>
            <div className="road-row" data-state="next">
              <span className="road-st">·</span>
              <span className="road-t">Closed beta &middot; founding members</span>
              <span className="road-d">Invite-only, lifetime perks locked</span>
              <span className="road-tag">Next</span>
            </div>
            <div className="road-row" data-state="next">
              <span className="road-st">·</span>
              <span className="road-t">Public launch &middot; Karachi</span>
              <span className="road-d">Open to all, every sport</span>
              <span className="road-tag">Soon</span>
            </div>
          </div>
        </section>

        {/* UTAH-style join panel — huge brand statement */}
        <div className="join-panel">
          <div className="join-left">
            <div className="join-left-meta">04 · Join the founding cohort</div>
            <h2 className="join-left-h">
              Get in <span className="italic-em">before</span> v1 ships.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, color: 'rgba(255,255,255,0.85)' }}>
              Founding members get lifetime perks, early-bird booking,
              and a say in what we build next.
            </p>
            <WaitlistForm layout="stacked" cta="Claim founding spot" />
          </div>
          <div className="join-right">
            <div className="join-mega">
              KHEL<span className="mark">✱</span>GAAH
            </div>
          </div>
        </div>

        {/* signoff — short team note */}
        <section className="signoff">
          <p className="signoff-q">
            If you&rsquo;ve ever stood in your kit <em>waiting for a venue to pick up</em> &mdash; this is for you.
          </p>
          <div className="signoff-mark">
            &mdash; The Khelgaah team · Karachi
          </div>
        </section>

        {/* footer */}
        <footer className="foot">
          <div className="foot-brand">Khel<span style={{ color: 'var(--accent)' }}>✱</span>gaah</div>
          <div className="foot-links">
            <a href="mailto:hello@khelgaah.com">hello@khelgaah.com</a>
            <a href="#">For vendors</a>
            <a href="#">Twitter</a>
          </div>
          <div>© 2026 · Built in Karachi</div>
        </footer>

      </div>

      <TweaksPanel>
        <TweakSection label="Copy" />
        <TweakSelect
          label="Headline"
          value={t.headline}
          options={[
            { value: 'default', label: 'Ten phone calls (default)' },
            { value: 'simple',  label: 'A simpler way' },
            { value: 'direct',  label: 'Every court. One app.' },
            { value: 'builder', label: 'We\u2019re building' }
          ]}
          onChange={(v) => setTweak('headline', v)}
        />
        <TweakSelect
          label="Sport focus"
          value={t.sport}
          options={SPORTS.map(s => ({ value: s.id, label: s.name }))}
          onChange={(v) => setTweak('sport', v)}
        />

        <TweakSection label="Brand" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakRadio
          label="Font pair"
          value={t.fontPair}
          options={[
            { value: 'classic', label: 'Classic' },
            { value: 'modern',  label: 'Modern' },
            { value: 'loud',    label: 'Loud' }
          ]}
          onChange={(v) => setTweak('fontPair', v)}
        />
        <TweakToggle
          label="Dark mode"
          value={t.dark}
          onChange={(v) => setTweak('dark', v)}
        />

        <TweakSection label="Waitlist" />
        <TweakRadio
          label="Form layout"
          value={t.formLayout}
          options={[
            { value: 'inline',  label: 'Inline' },
            { value: 'stacked', label: 'Stacked' },
            { value: 'card',    label: 'Card' }
          ]}
          onChange={(v) => setTweak('formLayout', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
