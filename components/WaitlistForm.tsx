'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  audience: 'player' | 'provider'
  cta: string
}

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 11.5L11.5 2.5M4 2.5h7.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function WaitlistForm({ audience, cta }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, audience }),
      })
    } catch {
      // graceful degradation — show success regardless
    }
    setLoading(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="wl-success">
        <span className="wl-success-mark">✓</span>
        <span>
          You&rsquo;re on the list. We&rsquo;ll write to you the moment{' '}
          {audience === 'provider' ? 'partner onboarding opens' : 'the beta opens'}.
        </span>
      </div>
    )
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
        disabled={loading}
      />
      <button className="wl-btn" type="submit" disabled={loading}>
        {loading ? 'Joining...' : cta} <Arrow />
      </button>
    </form>
  )
}
