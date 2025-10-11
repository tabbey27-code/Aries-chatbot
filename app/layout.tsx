import type { Metadata } from 'next'
import './globals.css'
import { CONFIG } from '@/config'

export const metadata: Metadata = {
  title: `${CONFIG.AI_NAME} - AI Chat`,
  description: `Chat with ${CONFIG.AI_NAME}, powered by Aries AI`,
  other: {
    'google-adsense-account': 'ca-pub-2110133957886313',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
