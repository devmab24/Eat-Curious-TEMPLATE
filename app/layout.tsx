// import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './components/Provider'
import Navbar from './components/Home/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eat Curious |',
  description: 'Your Special hub center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
