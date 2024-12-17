import './globals.css'
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'BioBiz - Transforming India\'s Biodiversity',
  description: 'Empowering stakeholders with market intelligence, data-driven insights, and professional opportunities in the bio-economy sector.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} font-sans`}>{children}</body>
    </html>
  )
}

