// Khelgaah v4 — Dual-audience pre-launch landing
// PlayPro-inspired IA · multi-sport · players + providers

// ─── content ──────────────────────────────────────────────
const HEADLINES = {
  player: {
    parts: [
      { text: 'Every', s: 'serif' },
      { text: 'court', s: 'sport' },
      { text: 'in', s: 'serif' },
      { text: 'Karachi.', s: 'serif' },
      { text: 'One', s: 'serif-em' },
      { text: 'app.', s: 'sport' }
    ],
    sub: <>Cricket, padel, futsal, tennis, badminton — book any vetted venue in the city, see live availability, and pay in seconds. <em>No phone calls. No haggling.</em></>
  },
  provider: {
    parts: [
      { text: 'Fill your', s: 'serif' },
      { text: 'courts.', s: 'sport' },
      { text: 'Run your', s: 'serif-em' },
      { text: 'venue.', s: 'sport' }
    ],
    sub: <>Khelgaah is a free booking platform for sports venues across Pakistan. We bring you players, you run your business. <em>You set the prices.</em></>
  }
};

const PLAYER_FEATURES = [
  {
    num: '01',
    t: 'Book Any Court',
    d: 'From box cricket in DHA to glass-court padel in Clifton — one app, every vendor, vetted listings.'
  },
  {
    num: '02',
    t: 'Find Players',
    d: 'Match with players at your skill level. Open lobbies, private games, tournaments — your call.'
  },
  {
    num: '03',
    t: 'Multi-Sport',
    d: 'We don\u2019t do one sport. Cricket, futsal, padel, tennis, badminton, squash, basketball, snooker — all in.'
  },
  {
    num: '04',
    t: 'Live Slots',
    d: 'Real-time availability across vendors. No double-bookings, no surprises, no "I\u2019ll check and call back".'
  }
];

const PROVIDER_FEATURES = [
  {
    num: '01',
    t: 'New Bookings',
    d: 'Khelgaah brings players to your venue \u2014 not the other way around. We fill your off-peak hours.'
  },
  {
    num: '02',
    t: 'You Run It',
    d: 'Set your own prices, slots, and rules. We\u2019re a discovery layer, not a manager. Your venue, your terms.'
  },
  {
    num: '03',
    t: 'Smart Dashboard',
    d: 'Bookings, revenue, peak hours, player ratings \u2014 in one view. Built for one venue or a chain.'
  },
  {
    num: '04',
    t: 'Free To Join',
    d: 'No setup fees. No monthly fees. We earn only when you do. Founding partners lock in lifetime rates.'
  }
];

const PLAYER_BULLETS = [
  { t: 'See live slots', d: 'Across every venue you care about, all in one feed.' },
  { t: 'Match by skill', d: 'Find people at your level — casual or competitive.' },
  { t: 'Track your matches', d: 'Stats, history, favourite venues, friend leaderboards.' },
  { t: 'Pay in-app', d: 'JazzCash, Easypaisa, card. No cash at the gate.' }
];

const PROVIDER_BULLETS = [
  { t: 'Self-serve onboarding', d: 'List your venue in 10 minutes. Pictures, slots, pricing — done.' },
  { t: 'Vendor dashboard', d: 'Bookings, revenue, occupancy heatmap. Mobile and web.' },
  { t: 'Smart pricing nudges', d: 'We suggest when to discount and when demand is hot.' },
  { t: 'Talk to players', d: 'In-app messaging, ratings, reviews. Build a reputation.' }
];

const STEPS_PLAYER = [
  { n: '01', t: 'Discover', d: 'Browse every vendor in Karachi by sport, neighborhood, and price. Real photos, real reviews.' },
  { n: '02', t: 'Book', d: 'Pick a slot, pay in seconds. Live availability across vendors — no phone calls.' },
  { n: '03', t: 'Play', d: 'Show your code at the venue and walk straight in. Rate the experience for the next person.' }
];
const STEPS_PROVIDER = [
  { n: '01', t: 'List', d: 'Add your venue, courts, pricing, and slots. We onboard you ourselves if you prefer.' },
  { n: '02', t: 'Receive', d: 'Players discover and book in seconds. Bookings sync to your calendar and SMS.' },
  { n: '03', t: 'Grow', d: 'Track demand, ratings, and revenue. Spot quiet hours and fill them with smart pricing.' }
];

const FAQ = [
  {
    q: 'When is Khelgaah launching?',
    a: 'We\u2019re in active build, targeting closed beta in 2026 with Karachi as our first city. Founding members get the first invites and lifetime perks.'
  },
  {
    q: 'Which sports will be supported?',
    a: 'We\u2019re multi-sport from day one. Cricket, futsal, padel, tennis, badminton, squash, basketball, and snooker are all on the roadmap. Don\u2019t see your sport? Tell us — we\u2019ll add it.'
  },
  {
    q: 'I run a sports venue. How does Khelgaah work for me?',
    a: 'It\u2019s a free discovery and booking layer. You list your venue, set your own prices and slots, and we bring you players. We earn a small fee per booking — never on empty slots. Founding partners lock in the lowest rate forever.'
  },
  {
    q: 'How is this different from calling the venue directly?',
    a: 'Live availability. Verified pricing. Instant booking. Player matching. Ratings. No more group-chat coordination or "I\u2019ll call you back tomorrow" loops.'
  },
  {
    q: 'Will my booking be guaranteed?',
    a: 'Yes. Slots booked through Khelgaah are confirmed instantly with the venue. If the venue cancels, you get a full refund and we help you find an alternative.'
  },
  {
    q: 'What does the waitlist get me?',
    a: 'Founding members get: first access to the closed beta, lifetime lower platform fees, priority on peak-hour slots, and invites to Khelgaah-organised tournaments.'
  },
  {
    q: 'Are you launching outside Karachi?',
    a: 'Karachi first. Lahore, Islamabad, and Faisalabad are on the roadmap. Tell us your city on the waitlist and we\u2019ll prioritise.'
  }
];

// ─── small components ─────────────────────────────────────
function HeadlineMix({ data, isProvider }) {
  return (
    <h1 className={`hero-h1 ${isProvider ? 'is-provider' : ''}`}>
      {data.parts.map((p, i) => {
        const sep = i === 0 ? '' : ' ';
        if (p.s === 'sport') return <React.Fragment key={i}>{sep}<span className="sport-word">{p.text}</span></React.Fragment>;
        if (p.s === 'serif-em') return <React.Fragment key={i}>{sep}<em>{p.text}</em></React.Fragment>;
        return <React.Fragment key={i}>{sep}{p.text}</React.Fragment>;
      })}
    </h1>
  );
}

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 11.5L11.5 2.5M4 2.5h7.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WaitlistForm({ audience, cta }) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (!email.includes('@')) return; setDone(true); };
  if (done) {
    return (
      <div className="wl-success">
        <span className="wl-success-mark">✓</span>
        <span>You&rsquo;re on the list. We&rsquo;ll write to you the moment {audience === 'provider' ? 'partner onboarding opens' : 'the beta opens'}.</span>
      </div>
    );
  }
  return (
    <form className="wl-form" onSubmit={submit}>
      <input
        className="wl-input"
        type="email"
        required
        placeholder={audience === 'provider' ? 'your venue email' : 'you@email.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="wl-btn" type="submit">
        {cta} <Arrow />
      </button>
    </form>
  );
}

function AudienceToggle({ value, onChange }) {
  return (
    <div className="aud-toggle">
      <button data-audience="player" data-active={value === 'player'} onClick={() => onChange('player')}>
        <span className="dot"></span>I play
      </button>
      <button data-audience="provider" data-active={value === 'provider'} onClick={() => onChange('provider')}>
        <span className="dot"></span>I run a venue
      </button>
    </div>
  );
}

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="faq-item" data-open={isOpen}>
      <button className="faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="faq-q-mark">+</span>
      </button>
      <div className="faq-a">
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

// ─── icons ────────────────────────────────────────────────
const Icons = {
  book: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="13" stroke="currentColor" strokeWidth="1.5"/><path d="M3 8h14M7 4v3M13 4v3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  players: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 17c0-3 2-5 5-5s5 2 5 5M12 17c0-2 1-4 3-4s3 1.5 3 4" stroke="currentColor" strokeWidth="1.5"/></svg>,
  multi: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/></svg>,
  live: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="3" fill="currentColor"/></svg>,
  cash: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="11" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  control: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 5v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  chart: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 16V8M8 16V4M13 16v-6M18 16V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  free: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
};

const PLAYER_ICONS = [Icons.book, Icons.players, Icons.multi, Icons.live];
const PROVIDER_ICONS = [Icons.cash, Icons.control, Icons.chart, Icons.free];

// ─── tweak defaults ───────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#4f8cff",
  "provider": "#f4c447",
  "audience": "player",
  "fontMode": "classic",
  "dark": true,
  "city": "Karachi"
}/*EDITMODE-END*/;

const ACCENTS = ['#4f8cff', '#38d6e5', '#7c5cff', '#2563eb'];
const PROVIDER_COLORS = ['#f4c447', '#22d3a3', '#ff8a4c', '#d4a017'];

const FONT_MODES = {
  classic: { serif: '"Instrument Serif"', sport: '"Big Shoulders Display"', body: '"Inter Tight"' },
  modern:  { serif: '"Fraunces"',         sport: '"Archivo"',               body: '"Inter Tight"' },
  loud:    { serif: '"Instrument Serif"', sport: '"Bebas Neue"',            body: '"DM Sans"' }
};

// ─── app ──────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--accent-glow', t.accent + '66');
    r.style.setProperty('--provider', t.provider);
    r.style.setProperty('--provider-glow', t.provider + '55');
    const fp = FONT_MODES[t.fontMode] || FONT_MODES.classic;
    r.style.setProperty('--font-serif', `${fp.serif}, ui-serif, Georgia, serif`);
    r.style.setProperty('--font-sport', `${fp.sport}, "Archivo Black", Impact, sans-serif`);
    r.style.setProperty('--font-body', `${fp.body}, ui-sans-serif, system-ui, sans-serif`);
  }, [t.accent, t.provider, t.fontMode]);

  React.useEffect(() => {
    document.body.classList.toggle('light', !t.dark);
  }, [t.dark]);

  const isProvider = t.audience === 'provider';
  const headline = isProvider ? HEADLINES.provider : HEADLINES.player;
  const features = isProvider ? PROVIDER_FEATURES : PLAYER_FEATURES;
  const featureIcons = isProvider ? PROVIDER_ICONS : PLAYER_ICONS;
  const audienceClass = isProvider ? 'is-provider' : '';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="page">

      {/* nav */}
      <nav className="nav">
        <div className="col nav-inner">
          <a className="brand" href="#top">KHEL<span className="brand-mark">✱</span>GAAH</a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#dual">For players · For venues</a>
            <a href="#faq">FAQ</a>
          </div>
          <AudienceToggle value={t.audience} onChange={(v) => setTweak('audience', v)} />
          <button className="nav-cta" onClick={() => scrollTo('closing')}>
            <span className="pulse"></span>
            Join waitlist
          </button>
        </div>
      </nav>

      {/* hero */}
      <section className={`col hero ${audienceClass}`} id="top">
        <div>
          <div className="eyebrow">
            <span className={isProvider ? 'provider' : 'accent'}>
              [ {isProvider ? 'For venues & clubs' : 'For players'} ]
            </span>
            <span>Pre-launch · {t.city} · {isProvider ? 'partner intake open' : 'founding access open'}</span>
          </div>
          <HeadlineMix data={headline} isProvider={isProvider} />
          <p className={`hero-sub ${audienceClass}`}>{headline.sub}</p>
          <div className={`wl-block ${audienceClass}`}>
            <div className="wl-label">
              {isProvider ? 'Become a founding partner' : 'Founding access · Lifetime perks'}
            </div>
            <WaitlistForm audience={t.audience} cta={isProvider ? 'List my venue' : 'Get founding access'} />
            <div className="wl-meta">
              <span className="wl-meta-dot"></span>
              {isProvider
                ? 'Free to list · No setup fee · 5-minute call to onboard'
                : 'No spam · One email when the beta opens · Unsubscribe anytime'}
            </div>
          </div>
        </div>

        <div className="hero-phones">
          <div className="phone left">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <PhoneScreen kind={isProvider ? 'dashboard' : 'discover'} accent={t.accent} provider={t.provider} />
            </div>
          </div>
          <div className="phone center">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <PhoneScreen kind={isProvider ? 'calendar' : 'booking'} accent={t.accent} provider={t.provider} />
            </div>
          </div>
          <div className="phone right">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <PhoneScreen kind={isProvider ? 'dashboard' : 'match'} accent={t.accent} provider={t.provider} />
            </div>
          </div>
        </div>
      </section>

      {/* stats band — pre-launch framing */}
      <div className="col">
        <div className="stats-band">
          <div className="stat">
            <div className="stat-v">12<span className="plus">+</span></div>
            <div className="stat-k">Sports planned</div>
          </div>
          <div className="stat">
            <div className="stat-v">001</div>
            <div className="stat-k">First city</div>
          </div>
          <div className="stat">
            <div className="stat-v">v0<span className="plus">.</span>4</div>
            <div className="stat-k">Build status</div>
          </div>
          <div className="stat">
            <div className="stat-v"><span className="em">soon</span></div>
            <div className="stat-k">Closed beta</div>
          </div>
          <div className="stat">
            <div className="stat-v">2026</div>
            <div className="stat-k">Launching</div>
          </div>
          <div className="stat">
            <div className="stat-v">∞<span className="plus">·</span></div>
            <div className="stat-k">Founding spots</div>
          </div>
        </div>
      </div>

      {/* features — what makes us different */}
      <section className="col section" id="features">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className={isProvider ? 'provider' : 'accent'}>01</span> Features</span>
            <h2 className="section-h">
              What makes Khelgaah <em>different.</em>
            </h2>
            <p className="section-desc">
              {isProvider
                ? 'Built from the ground up for Pakistan\u2019s sports venue owners — multi-sport, mobile-first, fair fees.'
                : 'Multi-sport. Multi-vendor. Real-time. Built for how people actually play in Karachi.'}
            </p>
          </div>
        </div>
        <div className="features">
          {features.map((f, i) => (
            <div className="feature" key={i}>
              <span className="feature-num">{f.num}</span>
              <span className="feature-icon">{featureIcons[i]}</span>
              <h3 className="feature-t">{f.t}</h3>
              <p className="feature-d">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* dual panel — players + providers side by side */}
      <section className="col section" id="dual">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="accent">02</span> Two sides</span>
            <h2 className="section-h">
              Built for the <em>whole game.</em>
            </h2>
            <p className="section-desc">
              Khelgaah only works if both sides win. Players get a single home for every sport. Venues get bookings, data, and a way to fill their courts.
            </p>
          </div>
        </div>
        <div className="dual-panel">
          <div className="dual-half players">
            <span className="dual-tag players">For players</span>
            <h3 className="dual-h players">
              Play <span className="em">more.</span> Coordinate <span className="em">less.</span>
            </h3>
            <p className="dual-d">
              Stop chasing group chats and venue phone lines. Find an open slot, match with players, and just show up.
            </p>
            <ul className="dual-list">
              {PLAYER_BULLETS.map((b, i) => (
                <li key={i}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="li-t">{b.t}</div>
                    <div className="li-d">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="dual-half providers">
            <span className="dual-tag providers">For venues</span>
            <h3 className="dual-h providers">
              Fill your <span className="em">courts.</span> Skip the <span className="em">admin.</span>
            </h3>
            <p className="dual-d">
              We bring you discovery, bookings, and demand data. You keep control of your pricing and slots — and your customer relationship.
            </p>
            <ul className="dual-list">
              {PROVIDER_BULLETS.map((b, i) => (
                <li key={i}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="li-t">{b.t}</div>
                    <div className="li-d">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="col section" id="how">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className={isProvider ? 'provider' : 'accent'}>03</span> How it works</span>
            <h2 className="section-h">
              Three steps from <em>{isProvider ? 'sign-up to revenue.' : 'idea to court.'}</em>
            </h2>
          </div>
        </div>
        <div className="steps">
          {(isProvider ? STEPS_PROVIDER : STEPS_PLAYER).map(s => (
            <div className="step-card" key={s.n}>
              <span className="step-num-big">{s.n}.</span>
              <h3 className="step-t">{s.t}</h3>
              <p className="step-d">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* interface preview strip */}
      <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="col">
          <div className="section-head">
            <div>
              <span className="eyebrow"><span className={isProvider ? 'provider' : 'accent'}>04</span> Interface preview</span>
              <h2 className="section-h">
                Built for <em>{isProvider ? 'vendors who run.' : 'players who play.'}</em>
              </h2>
              <p className="section-desc">
                Mobile-first, dark by default, fast by design. Here\u2019s a peek at what we\u2019re building.
              </p>
            </div>
          </div>
        </div>
        <div className="preview-strip">
          {[
            isProvider ? 'dashboard' : 'discover',
            isProvider ? 'calendar' : 'booking',
            isProvider ? 'dashboard' : 'match',
            isProvider ? 'calendar' : 'discover',
            isProvider ? 'dashboard' : 'booking'
          ].map((kind, i) => (
            <div key={i} className="preview-card">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <PhoneScreen kind={kind} accent={t.accent} provider={t.provider} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="col section" id="faq">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className={isProvider ? 'provider' : 'accent'}>05</span> Questions</span>
            <h2 className="section-h">
              Things you might be <em>wondering.</em>
            </h2>
          </div>
        </div>
        <div className="faq-list">
          {FAQ.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* closing CTA */}
      <div className="col" id="closing">
        <div className="closing">
          <div className={`closing-left ${audienceClass}`}>
            <div className="closing-meta">06 · Founding {isProvider ? 'partners' : 'access'}</div>
            <h2 className="closing-h">
              Get in <span className="em">before</span> v1 ships.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.9, margin: 0 }}>
              {isProvider
                ? 'Founding venue partners lock in the lowest platform fees forever, get priority discovery placement, and shape what we build.'
                : 'Founding members get the first invites to the closed beta, lifetime perks, and a say in what we ship next.'}
            </p>
            <WaitlistForm audience={t.audience} cta={isProvider ? 'Apply as partner' : 'Claim my spot'} />
          </div>
          <div className="closing-right">
            <div className="closing-mega">
              KHEL<span className="mark">✱</span>GAAH
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="col foot">
        <div className="foot-top">
          <div>
            <div className="foot-mega">KHEL<span className="mark">✱</span>GAAH</div>
            <p className="foot-tag">A multi-sport booking platform for Pakistan. Built in Karachi.</p>
          </div>
          <div className="foot-col">
            <div className="foot-col-t">Product</div>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-t">For venues</div>
            <ul>
              <li><a href="#dual">Why partner</a></li>
              <li><a href="#closing">Become a partner</a></li>
              <li><a href="mailto:partners@khelgaah.com">partners@khelgaah.com</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-t">Company</div>
            <ul>
              <li><a href="mailto:hello@khelgaah.com">hello@khelgaah.com</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Khelgaah · In active build · Karachi</div>
          <div className="foot-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

      {/* tweaks */}
      <TweaksPanel>
        <TweakSection label="Audience" />
        <TweakRadio
          label="View as"
          value={t.audience}
          options={[
            { value: 'player', label: 'Player' },
            { value: 'provider', label: 'Venue' }
          ]}
          onChange={(v) => setTweak('audience', v)}
        />
        <TweakText
          label="City"
          value={t.city}
          onChange={(v) => setTweak('city', v)}
        />

        <TweakSection label="Brand" />
        <TweakColor
          label="Player accent"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakColor
          label="Venue accent"
          value={t.provider}
          options={PROVIDER_COLORS}
          onChange={(v) => setTweak('provider', v)}
        />
        <TweakRadio
          label="Font mode"
          value={t.fontMode}
          options={[
            { value: 'classic', label: 'Classic' },
            { value: 'modern',  label: 'Modern' },
            { value: 'loud',    label: 'Loud' }
          ]}
          onChange={(v) => setTweak('fontMode', v)}
        />
        <TweakToggle
          label="Dark mode"
          value={t.dark}
          onChange={(v) => setTweak('dark', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
