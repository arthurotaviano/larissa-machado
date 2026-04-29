import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar/navbar'
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
  metadataBase: new URL('https://larissamachado.com.br'),
  title,
  description,
  openGraph: {
    title,
    description,
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
      <body>
        <div className='relative mx-auto max-w-640' id='app'>
          <Navbar />
          <main className='relative mx-auto'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
