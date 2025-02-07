"use client"

import Link from 'next/link'
import { Boxes, GitFork, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Boxes className="h-8 w-8 text-orange-500" />
            <span className="font-bold text-xl">UI Hub</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/components" 
              className="text-white hover:text-orange-500 ease-in-out transition-colors"
            >
              Components
            </Link>
            <Link 
              href="/contribute" 
              className="flex items-center space-x-1 text-white hover:text-orange-500 ease-in-out transition-colors"
            >
              <GitFork className="h-4 w-4 " />
              <span>Contribute</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/components" 
              className="block text-white hover:text-orange-500 ease-in-out transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link 
              href="/contribute" 
              className="flex items-center space-x-1 text-white hover:text-orange-500 ease-in-out transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <GitFork className="h-4 w-4" />
              <span>Contribute</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}