'use client'

import { interFont } from '@/app/styles/fonts'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type NavLink = {
  label: string
  href: string
}

const MAIN_LINKS: NavLink[] = ['About', 'Showcase', 'Contact'].map((link) => ({
  label: link,
  href: `/${link.toLowerCase()}`,
}))

const GALLERY_LINKS: NavLink[] = ['Graphics', 'Film', 'Multimedia', 'Photography', 'Sculptural', 'Fine Arts'].map(
  (link) => ({
    label: link,
    href: `/gallery/${link.toLowerCase().replace(' ', '-')}`,
  }),
)

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`w-full p-4 sm:relative fixed top-0 left-0 bg-white z-40 transition-shadow duration-300
      ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="flex justify-center items-center">
        <Link href="/" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
          <h1 className="text-2xl sm:text-xl md:text-4xl font-bold text-center hover:opacity-80 transition-opacity flex flex-col">
            <span>Sofia</span>
            <span>Scoular Castillo</span>
          </h1>
        </Link>
        <button
          type="button"
          className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-9 h-9">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}
              size={36}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              }`}
              size={36}
            />
          </div>
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center gap-4 mt-4">
        <div className="grid grid-cols-3 w-[400px] max-w-full">
          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm md:text-base block text-center py-1
    ${interFont.className}
    transition-all duration-300
    ${isActive(link.href) ? 'text-black font-medium' : 'text-gray-500 hover:text-black'}`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-6 w-[1000px] max-w-full">
          {GALLERY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm md:text-base block text-center py-1 relative
                ${interFont.className}
                ${isActive(link.href) ? 'underline' : 'no-underline'}
                after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black 
                after:left-0 after:bottom-0 after:transition-all after:duration-300
                hover:after:w-full`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
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
        {MAIN_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block w-full px-2 py-1 text-xl ${
              isActive(link.href) ? 'underline' : ''
            } ${interFont.className}`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
        <div className="w-full my-2 border-t border-gray-200" />
        {GALLERY_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block w-full px-2 py-1 text-xl ${
              isActive(link.href) ? 'underline' : ''
            } ${interFont.className}`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
