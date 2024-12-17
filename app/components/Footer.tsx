import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              BioBiz
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-green-400 transition-colors duration-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-green-400 transition-colors duration-300" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-green-400 transition-colors duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-green-400 transition-colors duration-300" />
            </Link>
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 hover:text-green-400 transition-colors duration-300" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 BioBiz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

