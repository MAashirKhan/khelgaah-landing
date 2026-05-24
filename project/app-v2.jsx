// Khelgaah landing v2 — Quiet, conversational, NOOR-inspired
// Single column · founder voice · minimal imagery

const SPORTS = [
  { id: 'cricket', name: 'Cricket' },
  { id: 'futsal', name: 'Futsal' },
  { id: 'padel', name: 'Padel' },
  { id: 'badminton', name: 'Badminton' },
  { id: 'tennis', name: 'Tennis' },
  { id: 'squash', name: 'Squash' },
  { id: 'basketball', name: 'Basketball' },
  { id: 'snooker', name: 'Snooker' }
];

const ACCENTS = ['#c4451c', '#1f8a5b', '#1a6ad9', '#d4a017'];

const FONT_PAIRS = {
  editorial: {
    label: 'Editorial',
    display: '"Instrument Serif"',
    body: '"Inter Tight"',
    google: 'family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700'
  },
  grotesk: {
    label: 'Grotesk',
    display: '"Bricolage Grotesque"',
    body: '"Inter Tight"',
    google: 'family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Inter+Tight:wght@400;500;600;700'
  },
  warm: {
    label: 'Warm',
    display: '"Fraunces"',
    body: '"Geist"',
    google: 'family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Geist:wght@400;500;600;700'
  }
};

const HEADLINES = {
  default: {
    pre: 'Booking a court in Karachi',
    em: 'shouldn\u2019t take',
    post: 'ten phone calls.'
  },
  short: {
    pre: 'A simpler way',
    em: 'to play',
    post: 'in Karachi.'
  },
  builder: {
    pre: 'We\u2019re building',
    em: 'Khelgaah.',
    post: 'Come build it with us.'
  },
  direct: {
    pre: 'Every court.',
    em: 'One app.',
    post: 'Karachi-first.'
  }
};

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
        <span>You&rsquo;re in. We&rsquo;ll write to you the moment the beta opens.</span>
      </div>
    );
  }
  return (
    <form className={`wl-form ${layout}`} onSubmit={submit}>
      {layout === 'card' && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
          <span>Founding access</span>
          <span>Free · Email only</span>
        </div>
      )}
      <input
        className="wl-input"
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
      <path d="M2.5 11.5L11.5 2.5M4 2.5h7.5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── live preview (a quiet booking strip) ─────────────────
function BookingPreview({ sport }) {
  const sportName = SPORTS.find(s => s.id === sport)?.name || 'Cricket';
  const rows = [
    { time: '6:00 PM', venue: 'DHA Box Arena', meta: `${sportName} · Pitch 2`, state: 'taken', label: 'Taken' },
    { time: '7:00 PM', venue: 'Karsaz Sports Hub', meta: `${sportName} · Court A`, state: 'open', label: 'Book' },
    { time: '8:00 PM', venue: 'Clifton Greens', meta: `${sportName} · Indoor`, state: 'open', label: 'Book' },
    { time: '9:30 PM', venue: 'Bahadurabad Turf', meta: `${sportName} · Pitch 1`, state: 'open', label: 'Book' }
  ];
  return (
    <div className="preview">
      <div className="preview-frame">
        <div className="preview-tag">Tonight · a preview of what we&rsquo;re building</div>
        <div className="preview-head">
          <span>Friday · Karachi</span>
          <span className="preview-head-dots"><span></span><span></span><span></span></span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="booking-row">
            <div className="booking-time">{r.time}</div>
            <div className="booking-venue">
              <div className="booking-venue-name">{r.venue}</div>
              <div className="booking-venue-meta">{r.meta}</div>
            </div>
            <div className="booking-state" data-state={r.state}>{r.label}</div>
          </div>
        ))}
        <div className="preview-caption">
          <span>4 of 12 venues shown</span>
          <span>Mock · not live yet</span>
        </div>
      </div>
    </div>
  );
}

// ─── app ──────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c4451c",
  "headline": "default",
  "fontPair": "editorial",
  "dark": false,
  "sport": "cricket",
  "formLayout": "inline"
}/*EDITMODE-END*/;

function useFontLoader(pair) {
  React.useEffect(() => {
    const id = 'khelgaah-fonts-v2';
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

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--font-display', `${FONT_PAIRS[t.fontPair].display}, ui-serif, Georgia, serif`);
    r.style.setProperty('--font-body', `${FONT_PAIRS[t.fontPair].body}, ui-sans-serif, system-ui, sans-serif`);
  }, [t.accent, t.fontPair]);

  React.useEffect(() => {
    document.body.classList.toggle('dark', t.dark);
  }, [t.dark]);

  const headline = HEADLINES[t.headline] || HEADLINES.default;
  const activeSportName = SPORTS.find(s => s.id === t.sport)?.name || 'Cricket';

  return (
    <div className="page">
      <div className="col">

        {/* top strip */}
        <div className="top">
          <div className="brand">khelgaah<span className="brand-dot">.</span></div>
          <span className="status-pill">
            <span className="status-dot"></span>
            v0.4 · Karachi · Pre-launch
          </span>
        </div>

        {/* hero */}
        <section className="hero">
          <div className="hero-eyebrow">A note from the team</div>
          <h1 className="hero-h1">
            {headline.pre} <em>{headline.em}</em> {headline.post}
          </h1>
          <div className="hero-body">
            <p>
              Right now, if you want to play <strong>{activeSportName.toLowerCase()}</strong> on Friday evening,
              you call five venues, get three voicemails, two &ldquo;I&rsquo;ll call you back&rdquo;s,
              and maybe one slot. We&rsquo;re done with that.
            </p>
            <p>
              <strong>Khelgaah</strong> is one app for every turf, court, and club in Karachi.
              You see what&rsquo;s free, when, and for how much. You book. You play.
            </p>
            <p>
              We&rsquo;re building it now. The first version won&rsquo;t have every venue on day one
              &mdash; but founding members get in early, lock in lifetime perks, and help us decide
              what to ship next.
            </p>
          </div>
        </section>

        {/* waitlist */}
        <section className="wl-block">
          <div className="wl-label">Founding access</div>
          <WaitlistForm layout={t.formLayout} />
          <div className="wl-meta-line">
            <span className="dot"></span>
            No spam &middot; One email when the beta opens &middot; Unsubscribe anytime
          </div>
        </section>

        {/* booking preview mock */}
        <BookingPreview sport={t.sport} />

        {/* sports */}
        <section className="section">
          <div className="section-num">01 · What you&rsquo;ll book</div>
          <h2 className="section-h">
            Every sport <em>the city plays.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '50ch' }}>
            From box cricket in DHA to glass-court padel in Clifton. We&rsquo;re onboarding
            independent vendors, academies, and clubs &mdash; multi-vendor from day one.
          </p>
          <div className="chips">
            {SPORTS.map(s => (
              <button key={s.id} className="chip"
                      data-active={t.sport === s.id}
                      onClick={() => setTweak('sport', s.id)}>
                <span className="chip-dot"></span>
                {s.name}
              </button>
            ))}
          </div>
          <div className="chips-foot">+ more on the way · tell us what you play</div>
        </section>

        {/* how it works */}
        <section className="section">
          <div className="section-num">02 · How it&rsquo;ll work</div>
          <h2 className="section-h">
            Three taps from idea <em>to court.</em>
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-n">01</div>
              <div>
                <h3 className="step-t">Discover</h3>
                <p className="step-d">
                  Every vendor in Karachi by sport, neighborhood, and price. Real photos,
                  real reviews. No surprises, no group chats.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">02</div>
              <div>
                <h3 className="step-t">Book</h3>
                <p className="step-d">
                  Live availability across vendors. Pick your slot, pay in seconds, done.
                  No phone calls, no haggling, no flaky promises.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">03</div>
              <div>
                <h3 className="step-t">Play</h3>
                <p className="step-d">
                  Show your booking code at the venue and walk straight in. Rate the
                  experience so the next person knows what to expect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* build log */}
        <section className="section">
          <div className="section-num">03 · Build log</div>
          <h2 className="section-h">
            What we&rsquo;ve shipped, <em>what&rsquo;s next.</em>
          </h2>
          <ul className="build">
            <li data-state="done">
              <span className="b-state">✓</span>
              <span className="b-t">Vendor onboarding pipeline</span>
              <span className="b-d">Done</span>
            </li>
            <li data-state="done">
              <span className="b-state">✓</span>
              <span className="b-t">Booking &amp; payments engine</span>
              <span className="b-d">Done</span>
            </li>
            <li data-state="active">
              <span className="b-state"><span className="live-dot"></span></span>
              <span className="b-t">Karachi venue partnerships</span>
              <span className="b-d">In progress</span>
            </li>
            <li data-state="next">
              <span className="b-state">·</span>
              <span className="b-t">Closed beta &middot; founding members</span>
              <span className="b-d">Next</span>
            </li>
            <li data-state="next">
              <span className="b-state">·</span>
              <span className="b-t">Public launch &middot; Karachi</span>
              <span className="b-d">Soon</span>
            </li>
          </ul>
        </section>

        {/* signoff */}
        <section className="signoff">
          <div className="signoff-line"></div>
          <p>
            If any of this resonates &mdash; if you&rsquo;ve ever stood in your kit
            waiting for a venue to pick up the phone &mdash; we&rsquo;d love to have
            you on board early.
          </p>
          <span className="signoff-mark">&mdash; The Khelgaah team, Karachi</span>
        </section>

        {/* second waitlist (closing CTA) */}
        <section className="wl-block">
          <div className="wl-label">Still here? Join us.</div>
          <WaitlistForm layout={t.formLayout} cta="Claim founding spot" />
        </section>

        {/* footer */}
        <footer className="foot">
          <div>© 2026 Khelgaah</div>
          <div className="foot-links">
            <a href="mailto:hello@khelgaah.com">hello@khelgaah.com</a>
            <a href="#">For vendors</a>
            <a href="#">Twitter</a>
          </div>
        </footer>

      </div>

      <TweaksPanel>
        <TweakSection label="Copy" />
        <TweakSelect
          label="Headline"
          value={t.headline}
          options={[
            { value: 'default', label: 'Ten phone calls (default)' },
            { value: 'short', label: 'A simpler way' },
            { value: 'builder', label: 'Come build with us' },
            { value: 'direct', label: 'Every court. One app.' }
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
            { value: 'editorial', label: 'Editorial' },
            { value: 'grotesk', label: 'Grotesk' },
            { value: 'warm', label: 'Warm' }
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
