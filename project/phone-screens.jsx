// phone-screens.jsx
// Stylized "Khelgaah app" UI mockups that render inside .phone-screen frames.

function PhoneStatusBar({ time = '9:41', dark = true }) {
  const bg = dark ? '#07090f' : '#fff';
  const fg = dark ? '#eef2ff' : '#07090f';
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 20px 6px',
      background: bg,
      color: fg,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      paddingTop: 38
    }}>
      <span>{time}</span>
      <span style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 10 }}>
        <span>●●●●</span>
        <span style={{ marginLeft: 4 }}>5G</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <rect x="0.5" y="1" width="12" height="8" rx="1.5" stroke={fg} strokeOpacity="0.5"/>
          <rect x="2" y="2.5" width="9" height="5" rx="0.5" fill={fg}/>
          <rect x="13.5" y="3.5" width="1.5" height="3" rx="0.5" fill={fg} fillOpacity="0.5"/>
        </svg>
      </span>
    </div>
  );
}

// Screen 1: Discover — list of venues
function ScreenDiscover({ accent }) {
  const venues = [
    { name: 'DHA Box Arena', sport: 'Cricket', dist: '2.4 km', price: 'PKR 4,500' },
    { name: 'Karsaz Sports Hub', sport: 'Padel', dist: '3.1 km', price: 'PKR 6,000' },
    { name: 'Clifton Greens', sport: 'Futsal', dist: '4.8 km', price: 'PKR 3,200' },
    { name: 'Bahadurabad Turf', sport: 'Tennis', dist: '5.2 km', price: 'PKR 2,800' }
  ];
  return (
    <div style={{ height: '100%', background: '#0e1220', color: '#eef2ff', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      <PhoneStatusBar />
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c87a3', fontFamily: 'JetBrains Mono, monospace' }}>
          Karachi · Friday
        </div>
        <div style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 28, textTransform: 'uppercase', letterSpacing: '-0.005em', marginTop: 4, lineHeight: 1 }}>
          Tonight near you
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 14, marginBottom: 14, flexWrap: 'wrap' }}>
          {['All', 'Cricket', 'Padel', 'Futsal'].map((s, i) => (
            <div key={s} style={{
              padding: '5px 10px',
              borderRadius: 99,
              fontSize: 10,
              fontWeight: 600,
              background: i === 0 ? accent : 'rgba(238,242,255,0.08)',
              color: i === 0 ? '#fff' : '#b9c2dc',
              border: i === 0 ? 'none' : '1px solid rgba(238,242,255,0.12)'
            }}>{s}</div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {venues.map((v, i) => (
            <div key={i} style={{
              padding: 12,
              background: 'rgba(238,242,255,0.04)',
              border: '1px solid rgba(238,242,255,0.08)',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{v.name}</div>
                <div style={{ fontSize: 10, color: '#7c87a3', marginTop: 2 }}>{v.sport} · {v.dist}</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: accent }}>{v.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Screen 2: Booking slots
function ScreenBooking({ accent }) {
  const slots = ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00'];
  const taken = [0, 3];
  return (
    <div style={{ height: '100%', background: '#0e1220', color: '#eef2ff', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      <PhoneStatusBar />
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c87a3', fontFamily: 'JetBrains Mono, monospace' }}>
          ← Karsaz Sports Hub
        </div>
        <div style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 26, textTransform: 'uppercase', marginTop: 6, lineHeight: 1 }}>
          Pick a slot
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 16, marginBottom: 16 }}>
          {['MON 14', 'TUE 15', 'WED 16', 'THU 17', 'FRI 18'].map((d, i) => (
            <div key={d} style={{
              flex: 1,
              padding: '8px 4px',
              textAlign: 'center',
              fontSize: 9,
              letterSpacing: '0.06em',
              borderRadius: 6,
              background: i === 4 ? accent : 'rgba(238,242,255,0.04)',
              color: i === 4 ? '#fff' : '#b9c2dc',
              fontWeight: 600,
              border: i === 4 ? 'none' : '1px solid rgba(238,242,255,0.08)'
            }}>{d}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {slots.map((s, i) => {
            const isTaken = taken.includes(i);
            const isSelected = i === 2;
            return (
              <div key={s} style={{
                padding: '14px 12px',
                border: '1px solid ' + (isSelected ? accent : 'rgba(238,242,255,0.12)'),
                background: isSelected ? accent : (isTaken ? 'rgba(238,242,255,0.02)' : 'rgba(238,242,255,0.04)'),
                color: isTaken ? '#444e6a' : (isSelected ? '#fff' : '#eef2ff'),
                borderRadius: 8,
                textDecoration: isTaken ? 'line-through' : 'none',
                fontWeight: 600
              }}>
                <div style={{ fontSize: 13 }}>{s} PM</div>
                <div style={{ fontSize: 9, marginTop: 2, opacity: 0.7 }}>
                  {isTaken ? 'Taken' : isSelected ? 'Selected' : 'Open'}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: 18,
          padding: '12px 14px',
          background: accent,
          color: '#fff',
          fontFamily: 'Big Shoulders Display, Impact, sans-serif',
          fontWeight: 800,
          fontStretch: '75%',
          fontSize: 14,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          borderRadius: 4
        }}>
          Book Slot · PKR 6,000
        </div>
      </div>
    </div>
  );
}

// Screen 3: Vendor dashboard (the provider side)
function ScreenDashboard({ accent, provider }) {
  return (
    <div style={{ height: '100%', background: '#0e1220', color: '#eef2ff', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      <PhoneStatusBar />
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: provider, fontFamily: 'JetBrains Mono, monospace' }}>
          Vendor · DHA Arena
        </div>
        <div style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 22, textTransform: 'uppercase', marginTop: 4, lineHeight: 1 }}>
          Today's bookings
        </div>
        <div style={{
          marginTop: 14,
          padding: 14,
          border: '1px solid rgba(238,242,255,0.12)',
          borderRadius: 8,
          background: 'rgba(238,242,255,0.03)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 10, color: '#7c87a3' }}>REVENUE TODAY</span>
            <span style={{ fontSize: 10, color: provider }}>+18%</span>
          </div>
          <div style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 36, lineHeight: 1 }}>
            <span style={{ fontSize: 18, fontWeight: 400, color: '#7c87a3' }}>PKR </span>
            32,400
          </div>
          <div style={{
            marginTop: 12,
            display: 'flex',
            gap: 3,
            height: 32,
            alignItems: 'flex-end'
          }}>
            {[40, 65, 50, 80, 92, 70, 88, 55, 95, 78, 60, 85].map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: h + '%',
                background: i > 8 ? provider : 'rgba(238,242,255,0.15)',
                borderRadius: 1
              }}></div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
          {[
            { t: '4:00 - 5:00 PM', n: 'Hasan Ali', s: 'Cricket · Pitch 2', x: 4500 },
            { t: '5:00 - 6:00 PM', n: 'Bilal Khan', s: 'Cricket · Pitch 1', x: 4500 },
            { t: '6:00 - 7:00 PM', n: '+ Open', s: '—', x: 0, open: true }
          ].map((b, i) => (
            <div key={i} style={{
              padding: 10,
              background: 'rgba(238,242,255,0.04)',
              borderRadius: 6,
              border: '1px solid rgba(238,242,255,0.08)',
              borderLeft: '3px solid ' + (b.open ? '#444e6a' : provider),
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, opacity: b.open ? 0.5 : 1 }}>{b.n}</div>
                <div style={{ fontSize: 9, color: '#7c87a3', marginTop: 2 }}>{b.t}</div>
              </div>
              <div style={{ fontSize: 10, color: '#b9c2dc' }}>
                {b.open ? 'OPEN' : `+${b.x.toLocaleString()}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Screen 4: Match / leaderboard
function ScreenMatch({ accent }) {
  return (
    <div style={{ height: '100%', background: '#0e1220', color: '#eef2ff', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      <PhoneStatusBar />
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c87a3', fontFamily: 'JetBrains Mono, monospace' }}>
          Open Matches
        </div>
        <div style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 24, textTransform: 'uppercase', marginTop: 4, lineHeight: 1 }}>
          Find your <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400, color: accent, textTransform: 'none' }}>game.</span>
        </div>
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { sport: 'Padel', when: 'Tonight · 8 PM', need: '2/4 players', skill: 'Casual' },
            { sport: 'Cricket', when: 'Sat · 5 PM', need: '7/12 players', skill: 'Competitive' },
            { sport: 'Futsal', when: 'Sun · 7 PM', need: '5/10 players', skill: 'Mixed' }
          ].map((m, i) => (
            <div key={i} style={{
              padding: 14,
              background: 'rgba(238,242,255,0.04)',
              borderRadius: 10,
              border: '1px solid rgba(238,242,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 16, textTransform: 'uppercase' }}>{m.sport}</span>
                <span style={{ fontSize: 9, padding: '2px 6px', border: '1px solid rgba(238,242,255,0.2)', borderRadius: 4, color: '#b9c2dc' }}>{m.skill}</span>
              </div>
              <div style={{ fontSize: 10, color: '#7c87a3', marginBottom: 8 }}>{m.when} · {m.need}</div>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                color: accent,
                padding: '8px 0',
                borderTop: '1px solid rgba(238,242,255,0.08)',
                textAlign: 'center'
              }}>
                + Join match
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Screen 5: Calendar view (vendor)
function ScreenCalendar({ accent, provider }) {
  return (
    <div style={{ height: '100%', background: '#0e1220', color: '#eef2ff', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      <PhoneStatusBar />
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: provider, fontFamily: 'JetBrains Mono, monospace' }}>
          Vendor · Weekly view
        </div>
        <div style={{ fontFamily: 'Big Shoulders Display, Impact, sans-serif', fontWeight: 800, fontStretch: '75%', fontSize: 24, textTransform: 'uppercase', marginTop: 4, lineHeight: 1 }}>
          All courts, one view
        </div>
        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '32px repeat(5, 1fr)', fontSize: 9, gap: 2 }}>
          <div></div>
          {['M', 'T', 'W', 'T', 'F'].map(d => (
            <div key={d} style={{ textAlign: 'center', color: '#7c87a3', fontWeight: 600, padding: 4 }}>{d}</div>
          ))}
          {['9', '11', '1', '3', '5', '7', '9'].map((h, hi) => (
            <React.Fragment key={hi}>
              <div style={{ color: '#7c87a3', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, padding: '4px 0', textAlign: 'right' }}>{h}</div>
              {[0, 1, 2, 3, 4].map(di => {
                const filled = (hi * 7 + di * 3) % 5 < 2;
                const peak = hi >= 4 && hi <= 5;
                return (
                  <div key={di} style={{
                    height: 22,
                    background: filled ? (peak ? provider : accent) : 'rgba(238,242,255,0.06)',
                    borderRadius: 2,
                    opacity: filled ? (peak ? 1 : 0.8) : 1
                  }}></div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: 12, background: 'rgba(212,160,23,0.08)', borderLeft: '3px solid ' + provider, borderRadius: 4 }}>
          <div style={{ fontSize: 10, color: provider, marginBottom: 4, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Suggestion</div>
          <div style={{ fontSize: 11, color: '#eef2ff', lineHeight: 1.4 }}>
            Open Thursday 9–11 PM. Demand is high but you're closed.
          </div>
        </div>
      </div>
    </div>
  );
}

const SCREENS = {
  discover: ScreenDiscover,
  booking: ScreenBooking,
  match: ScreenMatch,
  dashboard: ScreenDashboard,
  calendar: ScreenCalendar
};

function PhoneScreen({ kind, accent, provider }) {
  const S = SCREENS[kind] || ScreenDiscover;
  return <S accent={accent} provider={provider} />;
}

Object.assign(window, { PhoneScreen, PhoneStatusBar });
