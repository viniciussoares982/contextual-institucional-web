import type { Metadata } from 'next'
import './globals.css'

import { utopiaStd, spaceGrotesk } from '@/app/utils/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Contextual',
  description: 'Inovação e praticidade para psicólogos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${utopiaStd.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
