"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import logo from "../public/WhatsApp Image 2025-09-18 at 23.40.23_65c59c7b.jpg"
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-200/50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
              <div className="w-12 h-12 flex items-center justify-center mb-1">
                <Image 
                  src={logo} 
                  alt="OpenMines Logo" 
                  className="w-12 h-12 object-cover"
                  width={64}
                  height={48}
                />
              </div>
              <span className="text-2xl font-bold text-slate-900">OpenMines</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-slate-700 hover:text-green-600 transition-colors font-bold ${merriweather.className}`}>
              Home
            </Link>
            <Link href="/features" className={`text-slate-700 hover:text-green-600 transition-colors font-bold ${merriweather.className}`}>
              Features
            </Link>
            <Link href="/history" className={`text-slate-700 hover:text-green-600 transition-colors font-bold ${merriweather.className}`}>
              History
            </Link>
            <Link href="/about" className={`text-slate-700 hover:text-green-600 transition-colors font-bold ${merriweather.className}`}>
              About Us
            </Link>
            <Button 
              size="sm" 
              className={`ml-2 mr-3 px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold border border-green-500 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 transform hover:scale-105 rounded-lg ${merriweather.className}`}
            >
              LOGIN
            </Button>
          </div>
        </nav>
      </div>
      {/* Gradient shadow overlay */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-b from-transparent to-slate-200/30 pointer-events-none"></div>
    </header>
  )
}