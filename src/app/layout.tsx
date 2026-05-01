import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

const title = 'Larissa Machado'
const description = 'Designer Gráfico Senior'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')),
  title,
  description,
  openGraph: {
    locale: 'pt_BR',
    siteName: 'Larissa Machado',
    url: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={`${notoSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
