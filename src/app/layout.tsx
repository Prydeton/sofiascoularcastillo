import type { Metadata } from 'next'
import '@/app/styles/globals.css'
import { bodyFont, headingFont } from '@/app/styles/fonts'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Sofia Scoular Castillo',
  description: '[TODO]',
  keywords: ['TODO'],
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
