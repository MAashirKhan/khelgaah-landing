import type { Metadata } from 'next'
import {
  Instrument_Serif,
  Big_Shoulders_Display,
  Inter_Tight,
  JetBrains_Mono,
} from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif-loaded',
  display: 'swap',
})

const bigShoulders = Big_Shoulders_Display({
  weight: ['700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-sport-loaded',
  display: 'swap',
})

const interTight = Inter_Tight({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body-loaded',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Khelgaah — Every court in Karachi. One app.',
  description:
    'The multi-sport booking platform for Pakistan. Book any court in Karachi — cricket, padel, futsal, tennis, badminton — in seconds. Founding access open.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${bigShoulders.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
