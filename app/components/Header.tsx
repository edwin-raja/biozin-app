'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 grid grid-cols-2 items-center">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="biobiz-logo.png"
              alt="BioBiz Logo"
              width={35}
              height={35}
              className="rounded-full"
            />
            <span className="text-3xl font-bold text-green-800">BioBiz</span>
          </Link>
        </div>
        <nav className="hidden md:flex justify-end items-center space-x-6">
          {['Home', 'About Us', 'Services', 'Our Mission', 'Contact Us'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-green-800 hover:text-green-600 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">
            Get in Touch
          </button>
        </nav>
        <div className="md:hidden flex justify-end">
          <button
            className="text-green-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4">
            {['Home', 'About Us', 'Services', 'Our Mission', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-green-800 hover:text-green-600 py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-600 transition-colors duration-300">
              Get in Touch
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

