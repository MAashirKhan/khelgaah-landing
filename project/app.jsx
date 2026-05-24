// Khelgaah landing page — main app composition
// Premium minimal • Karachi multi-vendor sports booking

const SPORTS = [
  {
    id: 'cricket',
    name: 'Cricket',
    meta: 'Box, turf, nets',
    img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80&auto=format&fit=crop'
  },
  {
    id: 'futsal',
    name: 'Futsal',
    meta: '5-a-side · 7-a-side',
    img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80&auto=format&fit=crop'
  },
  {
    id: 'padel',
    name: 'Padel',
    meta: 'Glass courts',
    img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&q=80&auto=format&fit=crop'
  },
  {
    id: 'badminton',
    name: 'Badminton',
    meta: 'Wooden · synthetic',
    img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80&auto=format&fit=crop'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    meta: 'Clay · hard',
    img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=80&auto=format&fit=crop'
  },
  {
    id: 'squash',
    name: 'Squash',
    meta: 'Glass-back courts',
    img: 'placeholder:Squash'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    meta: 'Indoor · outdoor',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop'
  },
  {
    id: 'snooker',
    name: 'Snooker',
    meta: 'Club tables',
    img: 'placeholder:Snooker'
  }
];

// Subtle striped placeholder for sports we don't have real photography for yet.
// Returns a CSS `background:` shorthand value.
function placeholderBg(label) {
  const stripe = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'>
       <rect width='12' height='12' fill='#2b2620'/>
       <path d='M-2 14 L14 -2 M-2 6 L6 -2 M6 14 L14 6' stroke='#3a342c' stroke-width='1'/>
     </svg>`
  );
  return `url("data:image/svg+xml;utf8,${stripe}") repeat, #2b2620`;
}
function bgFor(img) {
  if (typeof img === 'string' && img.startsWith('placeholder:')) {
    return placeholderBg(img.slice('placeholder:'.length));
  }
  return `url(${img}) center/cover no-repeat`;
}
function isPlaceholder(img) {
  return typeof img === 'string' && img.startsWith('placeholder:');
}
function placeholderLabel(img) {
  return img.slice('placeholder:'.length);
}

// Renders either a real photo background or a subtle striped placeholder with a
// monospace label indicating what should go there.
function HeroImg({ img, className = 'hero-img' }) {
  if (isPlaceholder(img)) {
    const label = placeholderLabel(img);
    return (
      <div className={className} style={{ background: placeholderBg(label) }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'rgba(245, 241, 234, 0.55)',
          pointerEvents: 'none'
        }}>
          [ {label} action shot ]
        </div>
      </div>
    );
  }
  return <div className={className} style={{ backgroundImage: `url(${img})` }} />;
}

const ACCENTS = [
  '#c4451c', // terracotta (default)
  '#1f8a5b', // pitch green
  '#1a6ad9', // sport blue
  '#d4a017'  // saffron
];

const FONT_PAIRS = {
  grotesk: {
    label: 'Grotesk',
    display: '"Bricolage Grotesque"',
    body: '"DM Sans"',
    google: 'family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:wght@400;500;600;700'
  },
  editorial: {
    label: 'Editorial',
    display: '"Instrument Serif"',
    body: '"Geist"',
    google: 'family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600;700'
  },
  bold: {
    label: 'Bold',
    display: '"Archivo"',
    body: '"Manrope"',
    google: 'family=Archivo:wght@700;800;900&family=Manrope:wght@400;500;600;700'
  }
};

const HEADLINES = {
  default: {
    pre: 'Karachi\u2019s courts.',
    em: 'One app.',
    post: 'Coming soon.'
  },
  short: {
    pre: 'We\u2019re building',
    em: 'a home',
    post: 'for play.'
  },
  benefit: {
    pre: 'Skip the calls.',
    em: 'Skip the wait.',
    post: 'Just play.'
  },
  bold: {
    pre: 'Every court.',
    em: 'One app.',
    post: 'In progress.'
  }
};

// ─── nav ────────────────────────────────────────────────────
function Nav({ onJoin }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          Khelgaah<span className="brand-dot">.</span>
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#sports">Sports</a>
          <a href="#waitlist">Founding members</a>
        </nav>
        <button className="nav-cta" onClick={onJoin}>
          <span className="pulse"></span>
          Join waitlist
        </button>
      </div>
    </header>
  );
}

// ─── waitlist form (3 layouts) ─────────────────────────────
function WaitlistForm({ layout = 'inline', onSubmit, accentBtn = false, dark = false }) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setDone(true);
    onSubmit && onSubmit(email);
  };
  if (done) {
    return (
      <div className="wl-success">
        <span className="wl-success-mark">✓</span>
        You’re on the list. We’ll be in touch soon.
      </div>
    );
  }
  const btnClass = `wl-btn ${accentBtn ? 'wl-btn-accent' : ''}`;
  if (layout === 'stacked') {
    return (
      <form className="wl wl-stacked" onSubmit={submit}>
        <input className="wl-input" type="email" required placeholder="you@email.com"
               value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={btnClass} type="submit">
          Claim founding spot
          <Arrow />
        </button>
      </form>
    );
  }
  if (layout === 'card') {
    return (
      <form className="wl wl-card" onSubmit={submit}>
        <div className="wl-card-header">
          <span>Founding membership</span>
          <span>Free · Email only</span>
        </div>
        <input className="wl-input" type="email" required placeholder="you@email.com"
               value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={btnClass} type="submit">
          Claim founding spot
          <Arrow />
        </button>
        <div className="wl-card-foot">
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}></span>
          236 of the first cohort
        </div>
      </form>
    );
  }
  // inline
  return (
    <form className="wl" onSubmit={submit}>
      <input className="wl-input" type="email" required placeholder="you@email.com"
             value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className={btnClass} type="submit">
        Claim spot <Arrow />
      </button>
    </form>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 11.5L11.5 2.5M4 2.5h7.5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── sport tabs ─────────────────────────────────────────────
function SportTabs({ value, onChange, sports }) {
  return (
    <div className="sport-tabs">
      {sports.map(s => (
        <button key={s.id} className="sport-tab"
                data-active={value === s.id}
                onClick={() => onChange(s.id)}>
          {s.name}
        </button>
      ))}
    </div>
  );
}

// ─── HERO variants ──────────────────────────────────────────
function HeroA({ headline, sub, sportImg, sport, setSport, formLayout, onJoin }) {
  return (
    <section className="hero-wrap">
      <div className="hero-a">
        <HeroImg img={sportImg} />
        <div className="hero-grad" />
        <div className="hero-a-body">
          <div>
            <span className="hero-tag">
              <span className="hero-tag-dot"></span>
              Karachi · Founding members open
            </span>
            <h1 className="hero-h1">
              {headline.pre}<br/>
              <em>{headline.em}</em><br/>
              {headline.post}
            </h1>
            <SportTabs value={sport} onChange={setSport} sports={SPORTS.slice(0, 5)} />
          </div>
          <div>
            <p className="hero-sub">{sub}</p>
            <WaitlistForm layout={formLayout} accentBtn onSubmit={onJoin} />
          </div>
        </div>
        <div className="hero-a-stats">
          <div className="hero-a-stat">
            <div className="hero-a-stat-k">Status</div>
            <div className="hero-a-stat-v">In build</div>
          </div>
          <div className="hero-a-stat">
            <div className="hero-a-stat-k">First city</div>
            <div className="hero-a-stat-v">Karachi</div>
          </div>
          <div className="hero-a-stat">
            <div className="hero-a-stat-k">Sports planned</div>
            <div className="hero-a-stat-v">12+</div>
          </div>
          <div className="hero-a-stat">
            <div className="hero-a-stat-k">Beta access</div>
            <div className="hero-a-stat-v">Waitlist open</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroB({ headline, sub, sportImg, sport, setSport, formLayout, onJoin }) {
  return (
    <section className="hero-wrap">
      <div className="hero-b">
        <div className="hero-b-left">
          <span className="eyebrow">Karachi · Founding members open</span>
          <h1 className="hero-b-h1">
            {headline.pre} <em>{headline.em}</em> {headline.post}
          </h1>
          <div>
            <p className="hero-b-sub">{sub}</p>
            <WaitlistForm layout={formLayout} accentBtn onSubmit={onJoin} />
            <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
              Currently in build · Founding spots are limited
            </div>
          </div>
          <SportTabs value={sport} onChange={setSport} sports={SPORTS.slice(0, 5)} />
        </div>
        <div className="hero-b-right">
          <HeroImg img={sportImg} />
          <div className="hero-grad" />
          <div className="hero-b-tag">
            <span className="hero-tag">
              <span className="hero-tag-dot"></span>
              Live availability
            </span>
          </div>
          <div className="hero-b-meta">
            <div>
              <div style={{ opacity: 0.7 }}>Currently in build</div>
              <span className="hero-b-stat-num">Karachi · v0.1</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ opacity: 0.7 }}>First slots</div>
              <span className="hero-b-stat-num">Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroC({ headline, sub, sportImg, sport, setSport, formLayout, onJoin }) {
  return (
    <section className="hero-wrap hero-c">
      <div className="hero-c-top">
        <div>
          <span className="eyebrow">Karachi · Founding members open</span>
          <h1 className="hero-c-h1">
            {headline.pre}<br/>
            <em>{headline.em}</em><br/>
            {headline.post}
          </h1>
        </div>
        <div className="hero-c-aside">
          <p>{sub}</p>
          <WaitlistForm layout={formLayout} accentBtn onSubmit={onJoin} />
          <SportTabs value={sport} onChange={setSport} sports={SPORTS.slice(0, 5)} />
        </div>
      </div>
      <div className="hero-c-strip">
        <HeroImg img={sportImg} />
        <div className="hero-grad" />
        <div className="hero-c-strip-overlay">
          <div>
            <span className="hero-tag">
              <span className="hero-tag-dot"></span>
              {SPORTS.find(s => s.id === sport)?.name || 'Multi-sport'} · launching with the first venues onboard
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.85 }}>
            12+ sports planned · Karachi-first · Building now
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── how it works ───────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'Discover',
      d: 'Browse every vendor in Karachi by sport, neighborhood, and price. Real photos, real reviews — no surprises, no group chats.',
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/><path d="M12 12l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
    },
    {
      n: '02',
      t: 'Book',
      d: 'See live availability across vendors. Pick your slot, pay in seconds, done. No phone calls, no haggling, no flaky promises.',
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v7l4 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/></svg>
    },
    {
      n: '03',
      t: 'Play',
      d: 'Show your booking code at the venue and walk straight in. Rate the experience so the next person knows what to expect.',
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.5 4.5h13v9h-13z" stroke="currentColor" strokeWidth="1.4"/><path d="M5 7.5h8M5 10.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
    }
  ];
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-num">[ 01 · How it works ]</span>
            <h2 className="section-title">Three taps from idea to court.</h2>
          </div>
          <p className="section-desc">
            Khelgaah will connect you with every turf, court, and club in Karachi from one place. Vendors run their own slots and pricing — you just play.
          </p>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <div className="step-icon">{s.icon}</div>
              <h3 className="step-h">{s.t}</h3>
              <p className="step-p">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── sports showcase ───────────────────────────────────────
function SportsShowcase({ activeSport, setSport }) {
  return (
    <section className="section" id="sports" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-num">[ 02 · Sports & venues ]</span>
            <h2 className="section-title">Every sport the city plays.</h2>
          </div>
          <p className="section-desc">
            From box cricket in DHA to glass-court padel in Clifton. We're onboarding independent vendors, academies, and clubs across the city — multi-vendor from day one.
          </p>
        </div>
        <div className="sports-grid">
          {SPORTS.map(s => (
            <div key={s.id} className="sport-card" onClick={() => setSport(s.id)}>
              <HeroImg img={s.img} className="sport-card-img" />
              <div className="sport-card-grad" />
              <div className="sport-card-body">
                <div>
                  <div className="sport-card-name">{s.name}</div>
                  <div className="sport-card-meta">{s.meta}</div>
                </div>
                <div className="sport-card-count">On the roadmap</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── perks / waitlist ──────────────────────────────────────
function PerksWaitlist({ formLayout, onJoin, formRef }) {
  const perks = [
    { t: 'First month free', d: 'Zero booking fees on every reservation in your first month.', tag: 'Month 1' },
    { t: '20% off lifetime', d: 'Permanent founding-member discount on Khelgaah platform fees.', tag: 'Forever' },
    { t: 'Priority peak slots', d: 'Founders get first dibs on Thursday–Sunday evening slots.', tag: 'Peak' },
    { t: 'Invite-only events', d: 'Khelgaah-organized tournaments and meetups across the city.', tag: 'Events' }
  ];
  return (
    <section className="perks-section" id="waitlist" ref={formRef}>
      <div className="perks-grid">
        <div>
          <span className="eyebrow" style={{ color: 'rgba(245,241,234,0.6)' }}>
            [ 03 · Founding members ]
          </span>
          <h2 className="perks-h">
            Get in before <em>v1</em> ships.
          </h2>
          <p className="perks-sub">
            We&rsquo;re building Khelgaah right now &mdash; vendor onboarding in motion, app in active development. Founding members shape what we ship, and lock in perks we&rsquo;ll never offer again.
          </p>
          <ul className="perks-list">
            {perks.map((p, i) => (
              <li key={i}>
                <span className="perks-li-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="perks-li-t">{p.t}</div>
                  <div className="perks-li-d">{p.d}</div>
                </div>
                <span className="perks-li-tag">{p.tag}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="perks-right">
          <div className="build-status">
            <div className="build-status-head">
              <span className="eyebrow" style={{ color: 'rgba(245,241,234,0.6)' }}>
                Build log
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--accent)' }}>
                v0.4 · LIVE
              </span>
            </div>
            <ul className="build-list">
              <li data-state="done">
                <span className="build-state">✓</span>
                <span className="build-t">Vendor onboarding pipeline</span>
                <span className="build-d">Done</span>
              </li>
              <li data-state="done">
                <span className="build-state">✓</span>
                <span className="build-t">Booking & payments engine</span>
                <span className="build-d">Done</span>
              </li>
              <li data-state="active">
                <span className="build-state"><span className="build-dot"></span></span>
                <span className="build-t">Karachi venue partnerships</span>
                <span className="build-d">In progress</span>
              </li>
              <li data-state="next">
                <span className="build-state">·</span>
                <span className="build-t">Closed beta · founding members</span>
                <span className="build-d">Next</span>
              </li>
              <li data-state="next">
                <span className="build-state">·</span>
                <span className="build-t">Public launch · Karachi</span>
                <span className="build-d">Soon</span>
              </li>
            </ul>
          </div>
          <WaitlistForm layout={formLayout} accentBtn onSubmit={onJoin} dark />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,241,234,0.4)' }}>
            No credit card · No spam · Unsubscribe anytime
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── footer ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <div className="brand">Khelgaah<span className="brand-dot">.</span></div>
          <small>Built in Karachi · In active development</small>
        </div>
        <div className="foot-links">
          <a href="#how">How it works</a>
          <a href="#sports">Sports</a>
          <a href="#waitlist">Founding members</a>
          <a href="#">For vendors</a>
          <a href="#">Contact</a>
        </div>
        <div className="foot-meta">© 2026 Khelgaah</div>
      </div>
    </footer>
  );
}

// ─── tweaks defaults (EDITMODE block) ───────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c4451c",
  "headline": "default",
  "fontPair": "grotesk",
  "dark": false,
  "sport": "cricket",
  "heroVariant": "A",
  "formLayout": "inline"
}/*EDITMODE-END*/;

// ─── load Google Fonts dynamically ──────────────────────────
function useFontLoader(pair) {
  React.useEffect(() => {
    const id = 'khelgaah-fonts';
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = `https://fonts.googleapis.com/css2?${FONT_PAIRS[pair].google}&display=swap`;
  }, [pair]);
}

// ─── App ────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const formRef = React.useRef(null);

  useFontLoader(t.fontPair);

  // apply CSS vars
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--font-display', `${FONT_PAIRS[t.fontPair].display}, ui-sans-serif, system-ui, sans-serif`);
    root.style.setProperty('--font-body', `${FONT_PAIRS[t.fontPair].body}, ui-sans-serif, system-ui, sans-serif`);
  }, [t.accent, t.fontPair]);

  // dark mode class
  React.useEffect(() => {
    document.body.classList.toggle('dark', t.dark);
  }, [t.dark]);

  const scrollToWaitlist = () => {
    if (formRef.current) {
      window.scrollTo({ top: formRef.current.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const headline = HEADLINES[t.headline] || HEADLINES.default;
  const sub = "Khelgaah is Karachi's multi-vendor home for every sport in one app. Real-time slots, fair prices, every vendor — from box cricket to glass-court padel.";

  const activeSport = SPORTS.find(s => s.id === t.sport) || SPORTS[0];
  const sportImg = activeSport.img;

  const heroProps = {
    headline,
    sub,
    sportImg,
    sport: t.sport,
    setSport: (id) => setTweak('sport', id),
    formLayout: t.formLayout,
    onJoin: () => {}
  };

  return (
    <div className="app-root" id="top">
      <Nav onJoin={scrollToWaitlist} />
      {t.heroVariant === 'A' && <HeroA {...heroProps} />}
      {t.heroVariant === 'B' && <HeroB {...heroProps} />}
      {t.heroVariant === 'C' && <HeroC {...heroProps} />}
      <HowItWorks />
      <SportsShowcase activeSport={t.sport} setSport={(id) => setTweak('sport', id)} />
      <PerksWaitlist formLayout={t.formLayout} onJoin={() => {}} formRef={formRef} />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Composition"
          value={t.heroVariant}
          options={['A', 'B', 'C']}
          onChange={(v) => setTweak('heroVariant', v)}
        />
        <TweakSelect
          label="Headline"
          value={t.headline}
          options={[
            { value: 'default', label: 'Best courts (default)' },
            { value: 'short', label: 'Home for play' },
            { value: 'benefit', label: 'Skip the calls' },
            { value: 'bold', label: 'Every court, one app' }
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
            { value: 'grotesk', label: 'Grotesk' },
            { value: 'editorial', label: 'Editorial' },
            { value: 'bold', label: 'Bold' }
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
            { value: 'inline', label: 'Inline' },
            { value: 'stacked', label: 'Stacked' },
            { value: 'card', label: 'Card' }
          ]}
          onChange={(v) => setTweak('formLayout', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
