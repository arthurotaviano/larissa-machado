import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar/navbar'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='relative mx-auto max-w-640' id='app'>
      <Navbar />
      <main className='relative mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}
