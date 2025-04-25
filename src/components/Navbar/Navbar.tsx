'use client'

import { interFont } from '@/app/styles/fonts'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const MAIN_LINKS = ['About', 'Showcase', 'Contact'] as const
const GALLERY_LINKS = ['Graphics', 'Film', 'Multimedia', 'Photography', 'Sculptural', 'Fine Arts'] as const

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  return (
    <nav className="w-full p-4 sm:relative fixed top-0 left-0 bg-white z-40">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold w-full text-center">SOFIA SCOULAR CASTILLO</h1>
        <button
          type="button"
          className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center gap-4 mt-4">
        <div className="grid grid-cols-3 w-[400px] max-w-full">
          {MAIN_LINKS.map((link, i) => (
            <Link
              key={i}
              href={`/${link}`}
              className={`text-sm md:text-base block text-center py-1 hover:underline ${interFont.className}`}
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-6 w-[1000px] max-w-full">
          {GALLERY_LINKS.map((link, i) => (
            <Link
              key={i}
              href={`/gallery/${link.replace(' ', '-').toLowerCase()}`}
              className={`text-sm md:text-base block text-center py-1 hover:underline ${interFont.className}`}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`sm:hidden bg-white absolute left-0 w-full min-h-screen flex flex-col items-start py-4 text-lg transition-all duration-300 z-30 ${
          isMobileMenuOpen ? 'translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        {MAIN_LINKS.map((link, i) => (
          <Link key={i} href={`/${link}`} className={`block w-full px-2 py-1 text-xl ${interFont.className}`}>
            {link}
          </Link>
        ))}
        <div className="w-full my-2 border-t border-gray-200" /> {/* Divider */}
        {GALLERY_LINKS.map((link, i) => (
          <Link
            key={i}
            href={`/gallery/${link.replace(' ', '-').toLowerCase()}`}
            className={`block w-full px-2 py-1 text-xl ${interFont.className}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
