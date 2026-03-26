import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AfriShop - Commandez sur AliExpress, Shein, Amazon | Payez en FCFA',
  description:
    'Commandez vos produits internationaux depuis AliExpress, Shein et Amazon. Payez en FCFA via Mobile Money et recevez votre livraison partout au Cameroun.',
  keywords: ['e-commerce', 'Cameroun', 'FCFA', 'AliExpress', 'Shein', 'Amazon', 'Mobile Money', 'livraison locale'],
}

export const viewport: Viewport = {
  themeColor: '#92400E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
